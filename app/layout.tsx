import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digitalweedslab.ca"),

  title: {
    default: "Digital Agronomy & Weeds Lab | University of Manitoba",
    template: "%s | Digital Agronomy & Weeds Lab",
  },

  description:
    "The Digital Agronomy & Weeds Lab at the University of Manitoba advances sustainable agriculture through precision technology, UAV remote sensing, and data-driven weed management research.",

  applicationName: "Digital Agronomy & Weeds Lab",

  icons: {
    icon: "/images/brand/dawl-logo.png",
    shortcut: "/images/brand/dawl-logo.png",
    apple: "/images/brand/dawl-logo.png",
  },

  openGraph: {
    title: "Digital Agronomy & Weeds Lab",
    description:
      "Research in precision agriculture, UAV remote sensing, digital agronomy, and data-driven weed management at the University of Manitoba.",
    url: "https://www.digitalweedslab.ca",
    siteName: "Digital Agronomy & Weeds Lab",
    images: [
      {
        url: "/images/brand/dawl-logo.png",
        width: 1200,
        height: 630,
        alt: "Digital Agronomy & Weeds Lab logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Agronomy & Weeds Lab",
    description:
      "Precision agriculture, UAV remote sensing, digital agronomy, and weed management research at the University of Manitoba.",
    images: ["/images/brand/dawl-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}