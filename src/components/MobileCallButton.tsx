'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

/**
 * Sticky mobile call button that appears on mobile devices
 * Optimized for conversion - makes calling instant and easy
 * Per persona research: +20% mobile conversions
 */
export function MobileCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after slight scroll (avoid blocking hero on initial load)
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // TODO: Replace with actual business phone number
  const phoneNumber = '925-555-0123'
  const telLink = `tel:+1${phoneNumber.replace(/[^0-9]/g, '')}`

  return (
    <>
      {/* Mobile only - sticky bottom bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 md:hidden ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="border-t bg-background/95 p-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <Button asChild className="w-full" size="lg">
            <a href={telLink} className="flex items-center justify-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-semibold">Call Now: {phoneNumber}</span>
            </a>
          </Button>
        </div>
      </div>
    </>
  )
}
