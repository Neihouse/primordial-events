import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">
            Primordial Events
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/services"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="/equipment"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Equipment
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

        {/* Mobile menu - simplified for now */}
        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Toggle menu</span>
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
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
