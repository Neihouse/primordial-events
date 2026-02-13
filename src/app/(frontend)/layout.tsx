import React from 'react'
import '../globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MobileCallButton } from '@/components/MobileCallButton'

export const metadata = {
  description: 'Professional event production services and equipment rental in the East Bay, CA. Featuring top-tier DJ equipment, PA systems, lighting, and lasers for weddings, corporate events, and parties.',
  title: 'Primordial Events - Event Production & Equipment Rental | East Bay CA',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  )
}
