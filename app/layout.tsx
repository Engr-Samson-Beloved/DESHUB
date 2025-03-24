import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CreativeBackground } from "@/components/creative-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Design Hub - Creative Templates for Designers",
  description: "Discover thousands of professional design templates to elevate your projects.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CreativeBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'