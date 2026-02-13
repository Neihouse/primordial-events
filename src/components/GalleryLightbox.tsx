'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface GalleryLightboxProps {
  images: Array<{ url: string; alt?: string }>
  initialIndex?: number
}

/**
 * Lightbox component for viewing gallery images in fullscreen
 *
 * Note: This component is prepared for future use. To enable it:
 * 1. Make gallery cards clickable with onClick handlers
 * 2. Pass gallery images to this component
 * 3. Manage open/close state in parent component
 */
export function GalleryLightbox({ images, initialIndex = 0 }: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isOpen, setIsOpen] = useState(false)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'Escape') setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="max-w-[95vw] max-h-[95vh] p-0"
        onKeyDown={handleKeyDown}
        aria-label="Gallery lightbox"
      >
        <div className="relative h-[80vh] w-full bg-black">
          <Image
            src={images[currentIndex]?.url || '/placeholder-gallery.jpg'}
            alt={images[currentIndex]?.alt || `Gallery image ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="95vw"
            priority
          />

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                onClick={goToNext}
                aria-label="Next image"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm text-white backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
