export type SheetTeamMember = {
  name: string
  position: string
  bio: string
  link?: string
  featured?: string
  displayGroup?: string
  photo?: string
  email?: string
  expertise?: string[]
}

export type SheetPublication = {
  year: string
  title: string
  authors: string
  journal: string
  volume?: string
  pages?: string
  doi?: string
  type?: string
  featured?: string
}

export type SheetPoster = {
  title: string
  authors: string
  event: string
  year: string
  type: string
  abstract: string
  pdf: string
  featured?: string
}

export type SheetNewsItem = {
  title: string
  date: string
  type: string
  summary: string
  description?: string
  image?: string
  link?: string
  featured?: string
}

type CSVRow = Record<string, string>

const REVALIDATE_SECONDS = 180

function clean(value: unknown) {
  return String(value ?? "").trim()
}

function normalizeHeader(header: string) {
  return header
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/\?/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function getValue(row: CSVRow, possibleNames: string[]) {
  const normalizedPossibleNames = possibleNames.map(normalizeHeader)

  for (const [key, value] of Object.entries(row)) {
    const normalizedKey = normalizeHeader(key)

    if (normalizedPossibleNames.includes(normalizedKey)) {
      return clean(value)
    }
  }

  for (const [key, value] of Object.entries(row)) {
    const normalizedKey = normalizeHeader(key)

    for (const possibleName of normalizedPossibleNames) {
      if (possibleName.length >= 6 && normalizedKey.startsWith(possibleName)) {
        return clean(value)
      }
    }
  }

  return ""
}

function splitKeywords(value: string) {
  return value
    .split(/[,;|]/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function getGoogleDriveFileId(url: string) {
  const value = url.trim()

  const filePathMatch = value.match(/\/file\/d\/([^/]+)/)
  if (filePathMatch?.[1]) return filePathMatch[1]

  const directPathMatch = value.match(/\/d\/([^/]+)/)
  if (directPathMatch?.[1]) return directPathMatch[1]

  try {
    const parsedUrl = new URL(value)
    const id = parsedUrl.searchParams.get("id")
    if (id) return id
  } catch {
    return ""
  }

  return ""
}

function normalizeImageUrl(url: string) {
  const value = clean(url)

  if (!value) return ""

  if (value.includes("drive.google.com")) {
    const fileId = getGoogleDriveFileId(value)

    if (fileId) {
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
    }
  }

  return value
}

function parseCSV(csvText: string): CSVRow[] {
  const records: string[][] = []
  let record: string[] = []
  let field = ""
  let insideQuotes = false

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i]
    const nextChar = csvText[i + 1]

    if (char === '"' && insideQuotes && nextChar === '"') {
      field += '"'
      i++
    } else if (char === '"') {
      insideQuotes = !insideQuotes
    } else if (char === "," && !insideQuotes) {
      record.push(field.trim())
      field = ""
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && nextChar === "\n") {
        i++
      }

      record.push(field.trim())

      if (record.some((cell) => cell !== "")) {
        records.push(record)
      }

      record = []
      field = ""
    } else {
      field += char
    }
  }

  record.push(field.trim())

  if (record.some((cell) => cell !== "")) {
    records.push(record)
  }

  if (records.length < 2) return []

  const headers = records[0]

  return records.slice(1).map((values) => {
    const row: CSVRow = {}

    headers.forEach((header, index) => {
      row[header] = values[index] ?? ""
    })

    return row
  })
}

function isApproved(row: CSVRow) {
  const approved = getValue(row, [
    "Approved",
    "Confirm",
    "Confirm?",
    "9. Confirm",
    "9. Confirm?",
  ])

  return approved ? approved.toLowerCase() === "yes" : true
}

async function fetchRows(csvUrl?: string): Promise<CSVRow[]> {
  if (!csvUrl) return []

  try {
    const response = await fetch(csvUrl, {
      next: { revalidate: REVALIDATE_SECONDS },
    })

    if (!response.ok) return []

    const csvText = await response.text()

    if (csvText.includes("<html") || csvText.includes("<!DOCTYPE html")) {
      return []
    }

    return parseCSV(csvText)
  } catch {
    return []
  }
}

export async function getApprovedTeamMembers(): Promise<SheetTeamMember[]> {
  const rows = await fetchRows(
    process.env.DAWL_TEAM_CSV_URL || process.env.DAWL_UPDATES_CSV_URL
  )

  return rows
    .filter((row) => {
      const submissionType = getValue(row, [
        "Submission Type",
        "1. Submission Type",
      ])

      const hasSubmissionType = Boolean(submissionType)

      const isTeamMember =
        !hasSubmissionType || submissionType.toLowerCase().includes("team")

      return isTeamMember && isApproved(row)
    })
    .map((row) => {
      const researchFocus = getValue(row, [
        "Research Focus / Project",
        "Project",
        "Research Focus",
      ])

      const shortBio = getValue(row, [
        "Short Bio",
        "Description / Bio / Abstract",
        "6. Description / Bio / Abstract",
        "Bio",
        "Description",
      ])

      const expertise = getValue(row, [
        "Expertise Keywords",
        "Expertise",
        "Keywords",
      ])

      const rawPhoto = getValue(row, [
        "Photo Link",
        "Photo",
        "Image",
        "Image Link",
      ])

      return {
        name: getValue(row, ["Full Name", "Title / Name", "Name"]),
        displayGroup: getValue(row, [
          "Team Display Group",
          "Display Group",
          "Website Display Group",
        ]),
        position: getValue(row, [
          "Position",
          "Category / Position / Event / Journal",
        ]),
        bio: researchFocus || shortBio,
        link: getValue(row, ["Profile Link", "Link", "Google Scholar", "ORCID"]),
        photo: normalizeImageUrl(rawPhoto),
        email: getValue(row, ["Email", "Email Address"]),
        featured: getValue(row, ["Featured on Homepage", "Featured"]),
        expertise: splitKeywords(expertise),
      }
    })
    .filter((person) => person.name)
}

export async function getApprovedPublications(): Promise<SheetPublication[]> {
  const rows = await fetchRows(process.env.DAWL_PUBLICATIONS_CSV_URL)

  return rows
    .filter(isApproved)
    .map((row) => ({
      title: getValue(row, ["Publication Title", "Title", "Title / Name"]),
      authors: getValue(row, ["Authors", "Authors / Person Name"]),
      year: getValue(row, ["Year", "Year / Date"]),
      journal: getValue(row, ["Journal / Conference", "Journal", "Conference"]),
      volume: getValue(row, ["Volume"]),
      pages: getValue(row, ["Pages", "Article Number"]),
      doi: getValue(row, ["DOI / Link", "DOI", "Link", "URL"]),
      type: getValue(row, ["Publication Type", "Type"]),
      featured: getValue(row, ["Featured on Homepage", "Featured"]),
    }))
    .filter((publication) => publication.title)
}

export async function getApprovedPosters(): Promise<SheetPoster[]> {
  const rows = await fetchRows(process.env.DAWL_POSTERS_CSV_URL)

  return rows
    .filter(isApproved)
    .map((row) => ({
      title: getValue(row, ["Poster / Abstract Title", "Title", "Poster Title"]),
      authors: getValue(row, ["Authors", "Authors / Person Name"]),
      event: getValue(row, ["Event", "Conference", "Meeting"]),
      year: getValue(row, ["Year", "Year / Date"]),
      type: getValue(row, ["Type", "Poster Type"]) || "Poster",
      abstract: getValue(row, ["Short Abstract", "Abstract", "Description"]),
      pdf: getValue(row, ["PDF Link", "Poster PDF Link", "Link", "URL"]),
      featured: getValue(row, ["Featured on Homepage", "Featured"]),
    }))
    .filter((poster) => poster.title && poster.pdf)
}

const builtInNewsItems: SheetNewsItem[] = [
  {
    title: "Can farmers grow more while spraying less?",
    date: "August 25, 2026",
    type: "Media Feature",
    summary: "UM Today featured Dr. Dilshan Benaragama and student researchers from DAWL in a story on precision agriculture, UAV-based field sensing, and technologies designed to reduce agricultural inputs while maintaining productivity.",
    link: "https://umtoday.ca/stories/can-farmers-grow-more-while-spraying-less",
    featured: "Yes",
  },
]

export async function getApprovedNewsItems(): Promise<SheetNewsItem[]> {
  const rows = await fetchRows(process.env.DAWL_NEWS_CSV_URL)
  const sheetItems = rows
    .filter(isApproved)
    .map((row) => ({
      title: getValue(row, ["Title", "News Title"]),
      date: getValue(row, ["Date", "Year / Date"]),
      type: getValue(row, ["News/Event Type", "Type", "Category"]),
      summary: getValue(row, ["Short Summary", "Summary"]),
      description: getValue(row, ["Full Description", "Description"]),
      image: normalizeImageUrl(getValue(row, ["Image Link", "Image", "Photo Link"])),
      link: getValue(row, ["External Link", "Link", "URL"]),
      featured: getValue(row, ["Featured on Homepage", "Featured"]),
    }))
    .filter((item) => item.title)

  const sheetTitles = new Set(sheetItems.map((item) => item.title.toLowerCase()))
  return [
    ...builtInNewsItems.filter((item) => !sheetTitles.has(item.title.toLowerCase())),
    ...sheetItems,
  ]
}
