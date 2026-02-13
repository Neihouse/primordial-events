import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Luxury Walnut Creek DJ Services | Premium Wedding & Event Entertainment',
  description: 'Elite DJ and event entertainment for discerning Walnut Creek clients. Professional-grade Pioneer CDJ-3000s, BASSBOSS speakers, Unity lasers. Luxury weddings, upscale corporate events. Serving Walnut Creek, Lafayette, Danville.',
  keywords: 'Walnut Creek DJ, luxury wedding DJ Walnut Creek, Walnut Creek wedding DJ, premium DJ services Walnut Creek, upscale event entertainment Walnut Creek, Lafayette wedding DJ, Danville luxury DJ, Boundary Oak DJ',
}

const localVenues = [
  'Boundary Oak Golf Course',
  'Lafayette Park Hotel & Spa',
  'Walnut Creek Yacht Club',
  'Gardens at Heather Farm',
  'Danville Golf Club',
  'Casa Bella Event Center',
  'The Club at Crow Canyon',
  'Shadelands Arts Center',
  'Walnut Creek Marriott',
]

const serviceAreas = [
  'Walnut Creek',
  'Lafayette',
  'Danville',
  'Alamo',
  'Pleasant Hill',
  'Concord',
  'Martinez',
  'San Ramon',
]

const equipmentHighlights = [
  {
    name: 'Pioneer CDJ-3000',
    description: 'Club-standard players with 32-bit audio processing - Professional media players',
  },
  {
    name: 'BASSBOSS Speakers',
    description: '21Hz bass response - Feel the music, not just hear it',
  },
  {
    name: 'Unity ELITE Lasers',
    description: 'Professional laser light show - Create unforgettable moments',
  },
  {
    name: 'Chauvet Moving Heads',
    description: 'Intelligent lighting - Dynamic, professional atmosphere',
  },
]

export default function WalnutCreekDJServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="outline">
              Walnut Creek • Lafayette • Danville
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Walnut Creek DJ Services
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Luxury wedding and event entertainment for Walnut Creek&apos;s most discerning clients.
              Professional-grade Pioneer CDJ-3000s, BASSBOSS speakers, and Unity lasers deliver an
              unparalleled audio-visual experience. Premium quality without San Francisco travel fees.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/booking">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Equipment Showcase */}
      <section className="container py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Professional Equipment That Defines Luxury
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Every detail matters when creating an exceptional event. Our professional-grade equipment
            is the same setup used in San Francisco&apos;s premier nightclubs and luxury venues -
            delivering crystal-clear audio and stunning visual effects that your guests will remember.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {equipmentHighlights.map((item) => (
            <Card key={item.name}>
              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-muted/40 p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Premium vs. Standard Equipment</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>
                    <strong>32-bit audio processing</strong> (CDJ-3000) vs standard 16-bit -
                    crystal-clear sound even at high volume
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>
                    <strong>21Hz bass response</strong> (BASSBOSS) vs typical 40Hz -
                    you&apos;ll feel the bass in your chest
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>
                    <strong>Professional lasers</strong> (Unity ELITE) vs consumer light shows -
                    safe, legal, stunning effects
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Why This Matters for Your Event</h3>
              <p className="text-sm text-muted-foreground">
                Your guests won&apos;t analyze the equipment specs, but they&apos;ll absolutely notice
                the difference. Crystal-clear highs, deep bass you can feel, and lighting that
                transforms your venue. That&apos;s the difference between a good event and an
                unforgettable one.
              </p>
              <Button asChild className="mt-6">
                <Link href="/our-equipment">See Full Equipment List</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Packages */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Walnut Creek Wedding Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Three tiers to fit your budget and vision
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Badge variant="outline" className="mb-2 w-fit">Essential</Badge>
                <CardTitle className="text-2xl">$2,200</CardTitle>
                <CardDescription>4 hours of professional DJ service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><span className="text-primary">✓</span> Professional DJ & MC</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Pioneer CDJ-3000 setup</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> BASSBOSS or RCF sound system</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Wireless microphone</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Music consultation</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> No travel fees</li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/booking">Book Essential</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg">
              <div className="flex justify-center">
                <Badge className="absolute -top-3">Most Popular</Badge>
              </div>
              <CardHeader>
                <Badge variant="outline" className="mb-2 w-fit">Premium</Badge>
                <CardTitle className="text-2xl">$3,200</CardTitle>
                <CardDescription>6 hours with lighting package</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><span className="text-primary">✓</span> Everything in Essential, plus:</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> 6 hours of service (vs 4)</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Intelligent lighting package</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Wireless LED uplighting (4 units)</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> DJ booth facade</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Ceremony sound</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/booking">Book Premium</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="outline" className="mb-2 w-fit">Ultimate</Badge>
                <CardTitle className="text-2xl">$4,500</CardTitle>
                <CardDescription>8 hours with laser light show</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><span className="text-primary">✓</span> Everything in Premium, plus:</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> 8 hours of service (vs 6)</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Unity laser light show</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Moving head intelligent lights</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Dance floor totem lighting</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Premium fog/haze effects</li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/booking">Book Ultimate</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            All packages include music consultation, professional setup, and no hidden fees
          </p>
        </div>
      </section>

      {/* Local Venues */}
      <section className="container py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Trusted at Walnut Creek&apos;s Most Prestigious Venues
            </h2>
            <p className="text-lg text-muted-foreground">
              From intimate garden ceremonies to grand ballroom receptions, we bring extensive
              experience to Walnut Creek&apos;s finest venues. Our expertise ensures flawless
              execution at every location.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {localVenues.map((venue) => (
              <Badge key={venue} variant="secondary" className="px-4 py-2">
                {venue}
              </Badge>
            ))}
          </div>

          <div className="mt-12 rounded-lg border bg-card p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Your venue not listed? We welcome the opportunity to bring our premium service to any
              Walnut Creek, Lafayette, or Danville location. Whether it&apos;s a private estate,
              country club, or boutique venue,{' '}
              <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
                let&apos;s discuss your vision
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
              Why Discerning Walnut Creek Couples Choose Primordial Events
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  💎
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Premium Quality, Local Convenience</h3>
                  <p className="text-sm text-muted-foreground">
                    Experience San Francisco-level sophistication without the typical $300-500
                    travel surcharges. We&apos;re your local luxury entertainment partner, providing
                    white-glove service right here in Walnut Creek.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  🎚️
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Professional-Grade Audio Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Pioneer CDJ-3000s with pristine 32-bit audio processing,
                    BASSBOSS subwoofers delivering room-filling 21Hz bass, Unity ELITE laser systems.
                    The equipment choice of luxury venues and elite events worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  🎯
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Intimate Venue Knowledge</h3>
                  <p className="text-sm text-muted-foreground">
                    From Boundary Oak Golf Course to Lafayette Park Hotel & Spa, we have established
                    relationships with Walnut Creek&apos;s premier venues. Our deep understanding of
                    each space&apos;s unique acoustics and logistics ensures seamless execution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  ✨
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Comprehensive Event Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Beyond music - we orchestrate complete sensory experiences. Precision-programmed
                    intelligent lighting, safe FDA-compliant laser displays, atmospheric effects, and
                    refined MC services transform your venue into an unforgettable celebration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  🤝
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">White-Glove Service with Transparent Pricing</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium service shouldn&apos;t mean hidden costs. Our all-inclusive pricing
                    includes setup, breakdown, travel, and consultation. No surprise charges, no
                    mandatory gratuities - just exceptional service you can trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="container py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Serving Walnut Creek & Surrounding Cities
            </h2>
            <p className="text-lg text-muted-foreground">
              No travel fees to any of these locations
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
            {serviceAreas.map((city) => (
              <Card key={city} className="text-center">
                <CardContent className="pt-6">
                  <p className="font-medium">{city}</p>
                  <p className="text-xs text-green-600">$0 travel fee</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              More Than Just Weddings
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete event production for any occasion
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Private Parties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Birthdays, anniversaries, graduations - nightclub-quality entertainment
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Corporate Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Company parties, conferences, team building with professional production
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">School Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Proms, homecoming, graduations - premium packages from $800
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Equipment Rental</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Rent our professional gear without DJ services - from $400
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="rounded-lg bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Create an Unforgettable Experience?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Begin with a complimentary consultation. We&apos;ll provide a customized proposal within
            24 hours and expert guidance to ensure your event exceeds expectations. Refined service,
            transparent pricing, exceptional results.
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
            Serving Walnut Creek, Lafayette, Danville, Pleasant Hill, Concord, Martinez, and all of Contra Costa County
          </p>
        </div>
      </section>
    </div>
  )
}
