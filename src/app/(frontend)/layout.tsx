import React from 'react'
import '../globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  description: 'Professional event production services and equipment rental in the East Bay, CA. Featuring top-tier DJ equipment, PA systems, lighting, and lasers for weddings, corporate events, and parties.',
  title: 'Primordial Events - Event Production & Equipment Rental | East Bay CA',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
