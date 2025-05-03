import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

// Import Comic Neue as a web font (closest to Comic Sans that's available as a Google Font)
import { Comic_Neue } from "next/font/google"

const comicNeue = Comic_Neue({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comic",
})

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Southwestern Ontario Cyber Talent Showcase",
  description:
    "Connect, learn, and grow in the cybersecurity industry at the Southwestern Ontario Cyber Talent Showcase.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${comicNeue.variable}`}>
      <head>
        {/* Preload the font to avoid FOUT (Flash of Unstyled Text) */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap"
          as="style"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
