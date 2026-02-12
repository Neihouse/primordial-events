import React from 'react'
import '../globals.css'

export const metadata = {
  description: 'Professional event production services and equipment rental in the East Bay, CA',
  title: 'Primordial Events - Event Production & Equipment Rental | East Bay CA',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
