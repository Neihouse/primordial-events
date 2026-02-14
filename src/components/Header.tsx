'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center space-x-2 transition-all hover:scale-105">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-bold text-transparent transition-all group-hover:from-accent group-hover:to-primary">
            Primordial Events
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          <Link
            href="/services"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="/our-equipment"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Our Equipment
          </Link>
          <Link
            href="/equipment-rental"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Rentals
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Button asChild>
            <Link href="/booking">Book Now</Link>
          </Button>
        </nav>

        {/* Mobile menu with Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" aria-describedby="mobile-menu-description">
            <SheetHeader>
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription id="mobile-menu-description">
                Navigate to different sections of Primordial Events
              </SheetDescription>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-4" aria-label="Mobile navigation">
              <Link
                href="/services"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/our-equipment"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Our Equipment
              </Link>
              <Link
                href="/equipment-rental"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Rentals
              </Link>
              <Link
                href="/gallery"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="mt-4">
                <Link href="/booking" onClick={() => setOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
