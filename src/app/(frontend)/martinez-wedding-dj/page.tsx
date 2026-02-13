import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Martinez Wedding DJ & Event Production | Premium Equipment, No Travel Fees',
  description: 'Professional wedding DJ and event production in Martinez, CA. Pioneer CDJ-3000s, BASSBOSS speakers, Unity lasers. Serving Martinez, Concord, Pleasant Hill. No SF travel fees. Packages from $2,200.',
  keywords: 'Martinez wedding DJ, Martinez event DJ, Martinez party DJ, event production Martinez CA, wedding entertainment Martinez, DJ services Martinez',
}

const localVenues = [
  'Veterans Memorial Hall',
  'Martinez Waterfront Park',
  'Martinez Marina',
  'The Vineyard at Martinez',
  'Martinez Community Center',
  'Armando&apos;s Restaurant',
  'Hidden Valley Ranch',
]

const serviceAreas = [
  'Martinez',
  'Concord',
  'Pleasant Hill',
  'Clayton',
  'Pacheco',
  'Vine Hill',
  'Clyde',
]

export default function MartinezWeddingDJPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="outline">
              Martinez • No SF Travel Fees
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Martinez Wedding DJ & Event Production
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Nightclub-quality sound for your Martinez wedding or event. Pioneer CDJ-3000s,
              BASSBOSS speakers, and Unity lasers - the same gear used in SF&apos;s top venues,
              right here in Martinez.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/booking">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/our-equipment">See Our Equipment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Local Focus */}
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              Why Martinez Chooses Primordial Events
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We&apos;re based in the East Bay and specialize in Martinez-area weddings and events.
                No San Francisco travel fees. No unnecessary costs. Just premium equipment and
                professional service at prices that make sense for local events.
              </p>
              <p>
                Our Pioneer CDJ-3000s and BASSBOSS speakers are the same gear used
                in SF&apos;s top nightclubs. You get that premium experience at competitive
                East Bay pricing.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold">No Travel Fees</h3>
                  <p className="text-sm text-muted-foreground">
                    Save $300-500 compared to SF-based DJs who charge travel fees to Martinez
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold">Professional Equipment</h3>
                  <p className="text-sm text-muted-foreground">
                    Pioneer CDJ-3000s, BASSBOSS speakers, Unity lasers, Chauvet moving heads
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold">Local Venue Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    We know Martinez venues inside and out - setup times, acoustics, power requirements
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Martinez Wedding Package</CardTitle>
                <CardDescription>
                  Our most popular package for Martinez weddings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="mb-2 text-3xl font-bold text-primary">$3,200</div>
                  <div className="text-sm text-muted-foreground">6 hours of service</div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span className="text-sm">Professional DJ & MC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span className="text-sm">Pioneer CDJ-3000 setup (club-standard)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span className="text-sm">BASSBOSS or RCF premium speakers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span className="text-sm">Intelligent lighting package</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span className="text-sm">Wireless LED uplighting (4 units)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span className="text-sm">Ceremony sound included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span className="text-sm font-semibold">No travel fees to Martinez</span>
                  </li>
                </ul>

                <Button asChild className="w-full" size="lg">
                  <Link href="/booking">Book This Package</Link>
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Also offering Essential ($2,200) and Ultimate ($4,500) packages
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Martinez Venues */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              We Know Your Martinez Venue
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              We&apos;ve worked at Martinez&apos;s best venues and understand the unique requirements
              of each location. No surprises on your event day.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {localVenues.map((venue) => (
                <Badge key={venue} variant="secondary" className="px-4 py-2 text-sm">
                  {venue}
                </Badge>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Your venue not listed? We&apos;re happy to work at any Martinez location -{' '}
              <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
                tell us about your venue
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="container py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Serving Martinez & Surrounding Areas
            </h2>
            <p className="text-lg text-muted-foreground">
              No travel fees to these East Bay cities
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
            {serviceAreas.map((city) => (
              <Card key={city} className="text-center">
                <CardContent className="pt-6">
                  <p className="font-medium">{city}</p>
                  <p className="text-xs text-muted-foreground">No travel fees</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Also serving Walnut Creek, Lafayette, and other East Bay locations.{' '}
            <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
              Contact us
            </Link>{' '}
            to confirm your location.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Full-Service Event Production
            </h2>
            <p className="text-lg text-muted-foreground">
              More than just a DJ - complete entertainment solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Wedding DJ Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Complete ceremony and reception entertainment with premium Pioneer equipment,
                  professional lighting, and experienced MC services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Corporate Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Team building trivia nights, company parties, and conferences with professional
                  sound and lighting production.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Private Parties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Birthdays, anniversaries, graduations - nightclub-quality sound and lighting
                  for any celebration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>School Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Proms, homecoming, graduations - premium equipment packages from $800,
                  including age-appropriate entertainment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Equipment Rental</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Need just the gear? Rent our professional CDJ-3000s, BASSBOSS speakers,
                  and lighting without DJ services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Mix and match services - DJ + Trivia, DJ + Karaoke, or create a completely
                  custom entertainment experience.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/services">View All Packages & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="rounded-lg bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Book Your Martinez Event?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Let&apos;s discuss your vision. Free consultation, custom quote within 24 hours,
            and no pressure - just honest advice about what will make your event amazing.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90">
              <Link href="/booking">Request Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contact">Call or Text Us</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/60">
            Serving Martinez, Concord, Pleasant Hill, Clayton, and all of Contra Costa County
          </p>
        </div>
      </section>
    </div>
  )
}
