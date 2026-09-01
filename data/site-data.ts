// ============================================
// SITE DATA - Edit this file to customize your lab website
// ============================================
//
// Image workflow:
// 1. Add images to /public/images/
// 2. Reference them like "/images/team/name.jpg"
// 3. For gallery photos, add them to /public/images/gallery/
// 4. For posters, add PDFs to /public/posters/

export const siteConfig = {
  labName: "Digital Agronomy & Weeds Lab",
  labAcronym: "DAWL",
  university: "University of Manitoba",
  department: "Department of Plant Science",
  tagline:
    "Advancing sustainable agriculture through precision technology and data-driven research",

  social: {
    twitter: "https://twitter.com/digitalweedslab",
    googleScholar: "https://scholar.google.com/citations?hl=en&user=zGFfSUAAAAAJ",
    researchGate: "",
    linkedin: "",
  },

  contact: {
    email: "dilshan.benaragama@umanitoba.ca",
    phone: "(204) 474-6257",
    address:
      "222 Agriculture Building, 66 Dafoe Road, Winnipeg, MB R3T 2N2, Canada",
    officeHours: "Monday - Friday, 9:00 AM - 5:00 PM",
  },
}

// ============================================
// PRINCIPAL INVESTIGATOR
// ============================================
export const principalInvestigator = {
  name: "Dr. Dilshan Benaragama",
  title: "Assistant Professor",
  image: "/images/team/dilshan.jpg",
  credentials: [
    "Ph.D. in Plant Science",
    "Precision Agriculture",
    "UAV Remote Sensing",
  ],
  bio: "Dr. Benaragama leads the Digital Agronomy and Weeds Lab at the University of Manitoba. His research focuses on developing innovative approaches to weed management and crop production using digital agriculture, UAV-based sensing, remote sensing, and data-driven decision support tools.",
  email: "dilshan.benaragama@umanitoba.ca",
  googleScholar: "https://scholar.google.com/citations?hl=en&user=zGFfSUAAAAAJ",
}

// ============================================
// TEAM MEMBERS
// ============================================
// Team photo workflow:
// 1. Add photo to public/images/team/
// 2. Use image: "/images/team/person-name.jpg"
// 3. File names are case-sensitive on Vercel
export const teamMembers = {
  staff: [
    {
      name: "Dr. Mujahid Hussain",
      role: "Postdoctoral Fellow",
      image: "/images/team/hussain.jpg",
      bio: "Postdoctoral Fellow at the University of Manitoba focusing on precision agriculture, UAV-based technologies, and data-driven weed management.",
      expertise: [
        "UAV spraying",
        "Precision agriculture",
        "Remote sensing",
        "Weed management",
        "Machine learning",
      ],
      email: "mujahid.hussain@umanitoba.ca",
    },
    {
      name: "Dr. Kenneth Anku",
      role: "Postdoctoral Fellow",
      image: "/images/team/anku.jpg",
      bio: "Postdoctoral Fellow at the University of Manitoba focusing on remote sensing, plant physiology, and data-driven approaches for precision agriculture and crop productivity.",
      expertise: [
        "Remote sensing",
        "Plant physiology",
        "Crop phenotyping",
        "Machine learning",
        "Precision agriculture",
      ],
      email: "kenneth.anku@umanitoba.ca",
    },
    {
      name: "Mike Runzika",
      role: "Research Technician",
      image: "/images/team/mike.jpg",
      bio: "Research Technician at the University of Manitoba with expertise in field experimentation, data collection, and agricultural research operations.",
      expertise: [
        "Field trials",
        "Data collection",
        "Crop research",
        "Experimental design",
        "Agronomy",
      ],
      email: "runzika@umanitoba.ca",
    },
  ],

  gradStudents: [
  {
    name: "Uthpala Ekanayake",
    degree: "M.Sc. Student",
    image: "/images/team/Uthpala.jpg",
    project: "Integrated crop management",
  },
  {
    name: "Shirmith Nirmal",
    degree: "M.Sc. Student",
    image: "/images/team/Shirmith.jpg",
    project: "Machine learning for weed detection",
  },
  {
    name: "Pantha Azad",
    degree: "M.Sc. Student",
    image: "/images/team/Pantho.jpg",
    project: "UAV-based crop monitoring",
  },
  {
    name: "Shamima Sultana",
    degree: "M.Sc. Student",
    image: "/images/team/Soma.jpg",
    project: "Kochia seedbank management",
  },
  {
    name: "Matt Fallis",
    degree: "M.Sc. Student",
    image: "/images/team/Matt.jpg",
    project: "Remote sensing in soybean",
  },
  {
    name: "Kosar Eivani",
    degree: "M.Sc. Student",
    image: "/images/team/Kosar.jpg",
    project: "Remote sensing for weed management",
  },
  {
    name: "Indeera Hetti Arachchige",
    degree: "Ph.D. Student",
    image: "/images/team/Indeera.jpg",
    project: "Precision weed management",
  },
  {
    name: "Sarangie Athuda",
    degree: "M.Sc. Student",
    image: "/images/team/Sarangie.jpg",
    project: "Crop-weed interactions",
  },
  {
    name: "Lakmini Rathnayaka Pathiranage",
    degree: "Ph.D. Student",
    image: "/images/team/Lakmini.jpg",
    project: "Weed adaptation and stress memory",
  },
  {
    name: "Navroop Kaur",
    degree: "M.Sc. Student",
    image: "/images/team/Navroop.jpg",
    project: "Weed-crop interactions in maize",
  },
],
}

// This keeps compatibility with any page/component that imports gradStudents directly
export const gradStudents = teamMembers.gradStudents

// ============================================
// RESEARCH AREAS
// ============================================
export const researchAreas = [
  {
    title: "Precision Agriculture",
    description:
      "Developing site-specific management strategies using advanced sensing technologies, GPS mapping, UAV platforms, and variable-rate systems to optimize crop inputs and improve field-scale decision-making.",
    image: "/images/research/precision-ag.jpg",
    tags: ["Remote Sensing", "GPS Mapping", "Variable Rate Technology"],
  },
  {
    title: "Weed Science & Management",
    description:
      "Investigating integrated weed management approaches that combine cultural, mechanical, chemical, and digital strategies to support sustainable and effective weed control.",
    image: "/images/research/weed-science.jpg",
    tags: ["Integrated Management", "Herbicide Resistance", "Cover Crops"],
  },
  {
    title: "Digital Agriculture & AI",
    description:
      "Leveraging machine learning, computer vision, high-resolution imagery, LiDAR, and data analytics to develop decision-support tools for modern agricultural systems.",
    image: "/images/research/digital-ag.jpg",
    tags: ["Machine Learning", "Computer Vision", "Data Analytics"],
  },
]

// ============================================
// PUBLICATIONS
// ============================================
export const publications = [
  {
    year: "2025",
    title:
      "CWRepViT-Net: An encoder-decoder deep learning framework with RepViT blocks for crop weed semantic segmentation in soybean fields through their life journey",
    authors:
      "Masoomeh Gomroki, Dilshan Benaragama, Christopher James Henry, Nasem Badreldin, Robert Gulden",
    journal: "Smart Agricultural Technology",
    volume: "12",
    pages: "101472",
    doi: "https://doi.org/10.1016/j.atech.2025.101472",
  },
  {
    year: "2024",
    title:
      "The impact of herbicide-resistant canola systems on the weed community dynamics in the Canadian Prairies",
    authors:
      "Theodore Chastko, Dilshan I. Benaragama, Julia L. Leeson, Christian J. Willenborg",
    journal: "Canadian Journal of Plant Science",
    volume: "104(5)",
    pages: "514",
    doi: "https://doi.org/10.1139/cjps-2023-0158",
  },
  {
    year: "2024",
    title:
      "Revisiting cropping systems research: An ecological framework towards long-term weed management",
    authors:
      "Dilshan I. Benaragama, Christian J. Willenborg, Steve J. Shirtliffe, Rob H. Gulden",
    journal: "Agricultural Systems",
    volume: "213",
    pages: "103811",
    doi: "https://doi.org/10.1016/j.agsy.2023.103811",
  },
  {
    year: "2023",
    title:
      "Weed dynamics under diverse nutrient management and crop rotation practices in the dry zone of Sri Lanka",
    authors: "D. Wickramasinghe, D. I. Benaragama, and co-authors",
    journal: "Frontiers in Agronomy",
    volume: "5",
    pages: "1211755",
    doi: "https://doi.org/10.3389/fagro.2023.1211755",
  },
  {
    year: "2023",
    title: "Optimizing Agronomy for High-Yielding Flax in Western Canada",
    authors: "Dilshan I. Benaragama and co-authors",
    journal: "Crop, Forage & Turfgrass Management",
    volume: "",
    pages: "",
    doi: "https://doi.org/10.1002/crso.20255",
  },
  {
    year: "2022",
    title:
      "Recruitment biology of cleavers (Galium spp.) populations in western Canada",
    authors: "A. De Roo, P. Eckstein, Dilshan Benaragama, and co-authors",
    journal: "Weed Science",
    volume: "70(6)",
    pages: "",
    doi: "https://doi.org/10.1017/wsc.2022.52",
  },
  {
    year: "2022",
    title: "High-Resolution Flowering Index for Canola Yield Modelling",
    authors:
      "Hansanee Fernando, Thuan Ha, Hema Duddu, Anjika Attanayake, and co-authors",
    journal: "Remote Sensing",
    volume: "14(18)",
    pages: "4464",
    doi: "https://doi.org/10.3390/rs14184464",
  },
  {
    year: "2022",
    title:
      "Integrated agronomy for high yield and stable flax production in Canada",
    authors:
      "Dilshan I. Benaragama, Eric N. Johnson, Robert H. Gulden, Christian J. Willenborg",
    journal: "Agronomy Journal",
    volume: "114",
    pages: "2230–2242",
    doi: "https://doi.org/10.1002/agj2.21078",
  },
  {
    year: "2022",
    title:
      "Functionally diverse flax-based rotations improve wild oat (Avena fatua) and cleavers (Galium spurium) management",
    authors:
      "Dilshan I. Benaragama, William E. May, Robert H. Gulden, Christian J. Willenborg",
    journal: "Weed Science",
    volume: "70(2)",
    pages: "220–234",
    doi: "https://doi.org/10.1017/wsc.2021.79",
  },
  {
    year: "2022",
    title:
      "Carabid activity-density and community composition, and their impact on seed predation in pulse crops",
    authors:
      "Stefanie E. De Heij, Dilshan Benaragama, Christian J. Willenborg",
    journal: "Agriculture, Ecosystems & Environment",
    volume: "326",
    pages: "107807",
    doi: "https://doi.org/10.1016/j.agee.2021.107807",
  },
  {
    year: "2022",
    title:
      "Canola Yield Simulation through Digitalized Flower Number Using High-Resolution UAV-RGB Imagery",
    authors:
      "Hansanee Fernando, Thuan Ha, Hema Duddu, Anjika Attanayake, K.-O. Olakorede, Steve Shirtliffe",
    journal: "Earth and Space Science Open Archive",
    volume: "",
    pages: "",
    doi: "https://doi.org/10.1002/essoar.10508314.3",
  },
  {
    year: "2020",
    title:
      "Weed competition in organic and no-till conventional soils under nonlimiting nutrient conditions",
    authors: "Dilshan Benaragama, Steven J. Shirtliffe",
    journal: "Weed Science",
    volume: "68(6)",
    pages: "654–663",
    doi: "",
  },
  {
    year: "2019",
    title:
      "Understanding the Long-Term Weed Community Dynamics in Organic and Conventional Crop Rotations Using the Principal Response Curve Method",
    authors: "Dilshan Benaragama, Julia L. Leeson, Steven J. Shirtliffe",
    journal: "Weed Science",
    volume: "67(2)",
    pages: "195–204",
    doi: "https://doi.org/10.1017/wsc.2018.64",
  },
  {
    year: "2019",
    title:
      "Evaluation of Galium species and populations using morphological characters and molecular markers",
    authors:
      "A. C. Deroo, Peter Eckstein, Dilshan I. Benaragama, Aaron D. Beattie, Christian J. Willenborg",
    journal: "Weed Research",
    volume: "59(1)",
    pages: "28–38",
    doi: "https://doi.org/10.1111/wre.12336",
  },
  {
    year: "2018",
    title: "Field Pea and Lentil Tolerance to Interrow Cultivation",
    authors:
      "Katherine A. Stanley, Steven J. Shirtliffe, Dilshan Benaragama, Lena D. Syrovy, Hema S. N. Duddu",
    journal: "Weed Technology",
    volume: "32(2)",
    pages: "205–210",
    doi: "https://doi.org/10.1017/wet.2017.90",
  },
  {
    year: "2017",
    title:
      "Developing an Integrated Weed Management System for Herbicide-Resistant Weeds Using Lentil (Lens culinaris) as a Model Crop",
    authors:
      "C. Redlick, L. D. Syrovy, H. S. N. Duddu, D. Benaragama, E. N. Johnson, C. J. Willenborg, S. J. Shirtliffe",
    journal: "Weed Science",
    volume: "65(6)",
    pages: "778–786",
    doi: "https://doi.org/10.1017/wsc.2017.47",
  },
  {
    year: "2016",
    title:
      "Long-term weed dynamics and crop yields under diverse crop rotations in organic and conventional cropping systems in the Canadian prairies",
    authors:
      "Dilshan Benaragama, Steven J. Shirtliffe, Bruce D. Gossen, Stu A. Brandt, Reynold Lemke, Eric N. Johnson, Robert P. Zentner, Owen Olfert, Julia Leeson, Allen Moulin, Craig Stevenson",
    journal: "Field Crops Research",
    volume: "196",
    pages: "357–367",
    doi: "",
  },
  {
    year: "2016",
    title:
      "Does yield loss due to weed competition differ between organic and conventional cropping systems?",
    authors:
      "Dilshan Benaragama, Steven J. Shirtliffe, Eric N. Johnson, Hema S. N. Duddu, Lena D. Syrovy",
    journal: "Weed Research",
    volume: "56(4)",
    pages: "274–283",
    doi: "https://doi.org/10.1111/wre.12213",
  },
  {
    year: "2015",
    title:
      "Effects of pollination timing and distance on seed production in a dioecious weed Silene latifolia",
    authors:
      "Jay F. Anderson, Hema S. N. Duddu, Steven J. Shirtliffe, Dilshan Benaragama, Lena D. Syrovy, Katherine A. Stanley, Teketel A. Haile",
    journal: "Acta Oecologica",
    volume: "69",
    pages: "153–160",
    doi: "https://doi.org/10.1016/j.actao.2015.10.011",
  },
  {
    year: "2014",
    title: "Breeding for Competitive and High-Yielding Crop Cultivars",
    authors: "Dilshan Benaragama, Brian G. Rossnagel, Steven J. Shirtliffe",
    journal: "Crop Science",
    volume: "54(3)",
    pages: "1015–1025",
    doi: "https://doi.org/10.2135/cropsci2013.04.0223",
  },
  {
    year: "2014",
    title:
      "Sometimes You Need a Big Hammer: Evaluating and Appraising Selected Nonherbicidal Weed Control Methods in an Integrated Weed Management System",
    authors: "Steven J. Shirtliffe, Dilshan Benaragama",
    journal: "Managing Energy, Nutrients, and Pests in Organic Field Crops",
    volume: "",
    pages: "149–174",
    doi: "",
  },
  {
    year: "2013",
    title:
      "Integrating Cultural and Mechanical Methods for Additive Weed Control in Organic Systems",
    authors: "Dilshan I. Benaragama, Steven J. Shirtliffe",
    journal: "Agronomy Journal",
    volume: "105(6)",
    pages: "1728–1734",
    doi: "https://doi.org/10.2134/agronj2013.0007",
  },
  {
    year: "2013",
    title:
      "Crop–Weed Interactions under Diverse Cropping Systems in the Canadian Prairies",
    authors: "Dilshan Benaragama, Steven J. Shirtliffe",
    journal: "Conference paper / University of Saskatchewan repository",
    volume: "",
    pages: "",
    doi: "",
  },
  {
    year: "2011",
    title:
      "Integration of Cultural and Mechanical Weed Control Strategies Enhance Weed Control in Organic Cropping Systems",
    authors: "Dilshan Benaragama",
    journal: "Conference paper / University of Saskatchewan repository",
    volume: "",
    pages: "",
    doi: "",
  },
  {
    year: "2011",
    title:
      "Integration of cultural weed control enhances weed control in organic cropping systems",
    authors: "Dilshan Benaragama",
    journal: "Conference paper / University of Saskatchewan repository",
    volume: "",
    pages: "",
    doi: "",
  },
  {
    year: "",
    title:
      "Enhancing the competitive ability of oat (Avena sativa L.) cropping systems",
    authors: "Dilshan Benaragama",
    journal: "Thesis / University of Saskatchewan repository",
    volume: "",
    pages: "",
    doi: "",
  },
]

// ============================================
// POSTERS & ABSTRACTS
// ============================================
// Poster workflow:
// 1. Add PDF to public/posters/
// 2. Add one object below
// 3. The homepage and /posters page update automatically
export const posters = [
  {
    title:
      "Determining the Critical Period of Weed Control in Corn using UAV-based Remote Sensing",
    authors: "Anku Kenneth, Loveleen Dhillon, Rob Gulden, and Dilshan Benaragama",
    event: "CPWC 2026",
    year: "2026",
    type: "Research Poster",
    abstract:
      "This study uses UAV RGB and multispectral imagery to estimate crop and weed cover, relate weed ground cover to yield loss, and identify the critical period for weed control in corn.",
    pdf: "/posters/Kenneth_CPWC_2026_Critical_Weed_Control.pdf",
  },
  {
    title:
      "Using LiDAR to Track Soybean Canopy Development under Weed Competition",
    authors: "Matt Fallis, Kristen MacMillan, and Dilshan Benaragama",
    event: "Digital Agriculture Poster",
    year: "2026",
    type: "Research Poster",
    abstract:
      "This poster evaluates UAV-LiDAR for tracking soybean canopy height, ground cover, and management responses under weed competition across seeding-rate and row-spacing treatments.",
    pdf: "/posters/Matt_Fallis_Digital_Ag_Soybean_LiDAR.pdf",
  },
  {
    title:
      "Temporal Dynamics of UAV-Based Vegetation Indices for Estimating Dry Beans Harvest Readiness",
    authors:
      "Mujahid Hussain, Pantha Azad, Kenneth Anku, Kristen Macmillan, and Dilshan Benaragama",
    event: "DAWL Research Poster",
    year: "2026",
    type: "Research Poster",
    abstract:
      "This study evaluates temporal changes in UAV-derived vegetation indices, including NDVI, SAVI, VARI, and CI_RE, and their relationships with grain moisture during dry bean maturation and dry-down.",
    pdf: "/posters/Mujahid_Hussain_Dry_Bean_Harvest_Readiness.pdf",
  },
  {
    title:
      "Quantification of Soybean Canopy Development and Weed Competition Using LiDAR-Based UAV Imaging",
    authors: "Matt Fallis, Kristen MacMillan, and Dilshan Benaragama",
    event: "Manitoba Agronomists Conference (MAC)",
    year: "2025",
    type: "Research Poster",
    abstract:
      "This poster examines how multispectral and LiDAR-derived measurements can quantify soybean canopy development and weed competition under different seeding rates, row spacings, and weed conditions.",
    pdf: "/posters/Matt_Fallis_MAC_2025_Soybean_LiDAR.pdf",
  },
  {
    title:
      "Managing Kochia Seed Production by Using Alternative Wheat Seeding Systems",
    authors: "Shamima Sultana, Dilshan Benaragama, and Charles M. Geddes",
    event: "DAWL Research Poster",
    year: "2024",
    type: "Research Poster",
    abstract:
      "This study evaluates alternative wheat seeding systems and planting times as non-chemical strategies for reducing kochia seed production and extending the management window for weed seed control.",
    pdf: "/posters/Shamima_Sultana_Kochia_Seed_Production.pdf",
  },
  {
    title:
      "Drone Imaging Workflow for Field Research and Agricultural Decision-Making",
    authors: "Digital Agronomy & Weeds Lab",
    event: "Drone Workflow Poster",
    year: "2026",
    type: "Extension Poster",
    abstract:
      "This poster presents a visual workflow for UAV-based field imaging, including flight planning, drone data collection, image capture, image processing, map generation, and interpretation of crop and field variability for research and agronomic decision-making.",
    pdf: "/posters/CDS_Drone_Workflow.pdf",
  },
  {
    title:
      "Development of Remote Sensing Tools to Evaluate In-Field Results of Best Management Practices (BMPs) for Peas",
    authors:
      "MD Pantha Azad Sabbyashachi, Kristen P. MacMillan, Claudia Quilesfogel-Esparza, Brodie Erb, and Dilshan Benaragama",
    event: "MAC Poster",
    year: "2025",
    type: "Research Poster",
    abstract:
      "This poster presents UAV-LiDAR approaches for evaluating best management practices in field pea. The study demonstrates how LiDAR-derived crop height, canopy volume, and structural measurements can help distinguish management responses and support data-driven recommendations for seeding rates and sowing times.",
    pdf: "/posters/Pantha_MAC_Poster.pdf",
  },
]

// ============================================
// OPPORTUNITIES
// ============================================
export const opportunitiesConfig = {
  intro:
    "We are always interested in motivated students and researchers to join our lab. Opportunities may be available for graduate students, postdoctoral researchers, and research assistants.",
  graduateProgramsLink:
    "https://umanitoba.ca/agricultural-food-sciences/plant-science#graduate-programs",
}

export const opportunities = [
  {
    title: "Graduate Students (MSc / PhD)",
    type: "Graduate",
    description:
      "We welcome applications from highly motivated students interested in weed science, precision agriculture, and UAV-based technologies.",
    requirements: [
      "Background in plant science, agronomy, data science, or related fields",
      "Interest in field research and digital agriculture",
      "Strong communication and analytical skills",
    ],
    deadline: "Open",
  },
  {
    title: "Postdoctoral Researchers",
    type: "Postdoc",
    description:
      "Opportunities may be available for postdoctoral researchers with strong backgrounds in agronomy, remote sensing, weed science, or data-driven agriculture.",
    requirements: [
      "Ph.D. in a relevant discipline",
      "Experience with field research, remote sensing, or statistical modelling",
      "Strong publication and collaboration record",
    ],
    deadline: "Open",
  },
]

export const howToApply = {
  title: "How to Apply",
  description:
    "Interested applicants are encouraged to contact Dr. Dilshan Benaragama with a CV, statement of research interests, and academic transcripts.",
}

// ============================================
// HERO SECTION FEATURES
// ============================================
export const heroFeatures = [
  {
    title: "Remote Sensing",
    description: "UAV & satellite imagery analysis",
    icon: "satellite",
  },
  {
    title: "Data-Driven",
    description: "Machine learning & AI applications",
    icon: "database",
  },
  {
    title: "Sustainable Agriculture",
    description: "Environmentally conscious solutions",
    icon: "leaf",
  },
]

// ============================================
// HERO BACKGROUND IMAGE
// ============================================
export const heroConfig = {
  backgroundImage: "/images/hero-bg.jpg",
  useBackgroundImage: true,
}

// ============================================
// GALLERY / LAB PHOTOS
// ============================================
// Gallery workflow:
// 1. Upload photos into public/images/gallery/
// 2. Add one object below with title, category, year, image, and description.
// 3. The /gallery page automatically places it into the correct filter group.
export const galleryImages = [
  {
    title: "Field research site overview",
    category: "Field Work",
    year: "2025",
    image: "/images/gallery/field-research-site.jpg",
    description:
      "Field plots and research site activities supporting DAWL crop and weed management studies.",
  },
  {
    title: "UAV field monitoring",
    category: "Drone & Remote Sensing",
    year: "2025",
    image: "/images/gallery/uav-field-overview.jpg",
    description:
      "UAV-based imaging and remote sensing workflows for crop and weed monitoring.",
  },
  {
    title: "Drone spraying research",
    category: "Drone & Remote Sensing",
    year: "2025",
    image: "/images/gallery/drone-spraying-research.jpg",
    description:
      "Research activities focused on precision application and UAV-based agricultural technologies.",
  },
  {
    title: "Remote sensing analysis",
    category: "Lab Activities",
    year: "2025",
    image: "/images/gallery/remote-sensing-analysis.jpg",
    description:
      "Data processing and analysis for digital agriculture and crop monitoring projects.",
  },
  {
    title: "Field trials and data collection",
    category: "Field Work",
    year: "2025",
    image: "/images/gallery/field-trials-team.jpg",
    description:
      "Field experimentation, crop measurements, and data collection for agronomic research.",
  },
  {
    title: "Team and research activities",
    category: "Team & Fun Time",
    year: "2025",
    image: "/images/gallery/team-dilshan-field.jpg",
    description:
      "People and moments from DAWL research and lab activities.",
  },
  {
    title: "Conference and poster presentation",
    category: "Conferences & Posters",
    year: "2025",
    image: "/images/gallery/conference-poster.jpg",
    description:
      "DAWL research communication through poster presentations, meetings, and conferences.",
  },
  {
    title: "Outreach and field day activities",
    category: "Outreach / Field Days",
    year: "2025",
    image: "/images/gallery/outreach-field-day.jpg",
    description:
      "Knowledge exchange activities with growers, researchers, and agricultural stakeholders.",
  },
]