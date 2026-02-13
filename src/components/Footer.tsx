import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { ShieldCheck } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Primordial Events</h3>
            <p className="text-sm text-muted-foreground">
              Professional DJ, lighting, and equipment rental services for unforgettable events.
            </p>
            <Link href="/insurance-info" className="inline-block">
              <Badge variant="secondary" className="gap-1.5">
                <ShieldCheck className="h-3 w-3" />
                Fully Insured
              </Badge>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/equipment"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Equipment Rental
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance-info"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Insurance Info
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Martinez, CA</li>
              <li>
                <a
                  href="mailto:info@primordial.events"
                  className="transition-colors hover:text-foreground"
                >
                  info@primordial.events
                </a>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Service Area</h4>
            <p className="text-sm text-muted-foreground">
              Serving the greater San Francisco Bay Area including Martinez, Concord, Walnut Creek, and surrounding communities.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {currentYear} Primordial Events. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
