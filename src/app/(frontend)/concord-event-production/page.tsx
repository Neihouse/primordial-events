import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Concord Event Production & DJ Services | Corporate, Weddings, School Events',
  description: 'Professional event production in Concord, CA. DJ services, trivia hosting, lighting design, and full production. Pioneer CDJ-3000s, BASSBOSS speakers. No SF travel fees. Serving Concord, Pleasant Hill, Walnut Creek.',
  keywords: 'Concord event production, Concord DJ, Concord wedding DJ, corporate events Concord, trivia night Concord, event entertainment Concord CA',
}

const localVenues = [
  'Concord Pavilion',
  'Todos Santos Plaza',
  'Diablo Creek Golf Course',
  'Veranda Clubhouse',
  'Concord Community Center',
  'Crowne Plaza Concord',
  'Pleasant Hill Community Center',
]

const serviceAreas = [
  'Concord',
  'Pleasant Hill',
  'Martinez',
  'Walnut Creek',
  'Clayton',
  'Pacheco',
  'Bay Point',
  'Pittsburg',
]

const corporateServices = [
  {
    title: 'Trivia Nights',
    price: '$600/month',
    description: 'Weekly trivia hosting for bars, restaurants, and corporate team building',
  },
  {
    title: 'Corporate Parties',
    price: '$1,500+',
    description: 'Full event production for holiday parties, team celebrations, conferences',
  },
  {
    title: 'Team Building',
    price: '$1,500+',
    description: 'Interactive entertainment with professional sound and engaging hosts',
  },
]

export default function ConcordEventProductionPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="outline">
              Concord • Pleasant Hill • Walnut Creek
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Concord Event Production & DJ Services
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Complete event production for Concord weddings, corporate events, and private parties.
              Premium Pioneer CDJ-3000s, BASSBOSS speakers, Unity lasers - no San Francisco travel fees.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/booking">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/our-equipment">View Equipment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Focus */}
      <section className="container py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Corporate Event Production in Concord
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From weekly trivia nights to full-scale corporate conferences, we bring professional
            production expertise to Concord&apos;s business community.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {corporateServices.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-lg font-semibold text-primary">
                  {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <Button asChild className="mt-6 w-full" variant="outline">
                  <Link href="/booking">Get Proposal</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-muted/40 p-8">
          <h3 className="mb-4 text-xl font-semibold">
            Looking for recurring entertainment?
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-medium">Trivia Nights - $600/month</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 4 weekly trivia nights</li>
                <li>• Professional host & sound system</li>
                <li>• Custom trivia content</li>
                <li>• Perfect for Concord bars & restaurants</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-medium">Karaoke Nights - $500/month</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 4 weekly karaoke nights</li>
                <li>• Professional karaoke system (10,000+ songs)</li>
                <li>• Experienced host</li>
                <li>• Build your regular crowd</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Services */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Concord Wedding Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Premium equipment at accessible pricing - no San Francisco markups
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Essential</CardTitle>
                <CardDescription>Professional DJ with premium gear</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">$2,200</span>
                  <span className="ml-2 text-sm text-muted-foreground">(4 hours)</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><span className="text-primary">✓</span> Professional DJ & MC</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Pioneer CDJ-3000 setup</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> BASSBOSS or RCF speakers</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Wireless microphone</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Music consultation</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> No SF travel fees</li>
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/booking">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-lg">
              <div className="flex justify-center">
                <Badge className="absolute -top-3">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Complete entertainment with lighting</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">$3,200</span>
                  <span className="ml-2 text-sm text-muted-foreground">(6 hours)</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><span className="text-primary">✓</span> Everything in Essential, plus:</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> 6 hours of service (vs 4)</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Intelligent lighting package</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Wireless LED uplighting (4 units)</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Professional DJ booth facade</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Ceremony sound included</li>
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/booking">Book Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ultimate</CardTitle>
                <CardDescription>Full nightclub experience</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">$4,500</span>
                  <span className="ml-2 text-sm text-muted-foreground">(8 hours)</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><span className="text-primary">✓</span> Everything in Premium, plus:</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> 8 hours of service (vs 6)</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Unity laser light show</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Moving head intelligent lights</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Dance floor totem lighting</li>
                  <li className="flex gap-2"><span className="text-primary">✓</span> Premium fog/haze effects</li>
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/booking">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Concord Venues */}
      <section className="container py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Experienced at Concord&apos;s Best Venues
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            We know the ins and outs of Concord&apos;s event venues - setup logistics, acoustics,
            and power requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {localVenues.map((venue) => (
              <Badge key={venue} variant="secondary" className="px-4 py-2 text-sm">
                {venue}
              </Badge>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Working at a different venue?{' '}
            <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
              We&apos;ll make it work perfectly
            </Link>
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
              Why Concord Businesses Choose Us
            </h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">No San Francisco Travel Fees</h3>
                    <p className="text-sm text-muted-foreground">
                      Save $300-500 compared to SF-based production companies. We&apos;re local to
                      Concord - your event location is our backyard.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Professional-Grade Equipment</h3>
                    <p className="text-sm text-muted-foreground">
                      Pioneer CDJ-3000s (club-standard media players), BASSBOSS speakers with 21Hz bass response,
                      Unity ELITE lasers, Chauvet moving heads. The same gear used in SF&apos;s top nightclubs.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Flexible Service Options</h3>
                    <p className="text-sm text-muted-foreground">
                      DJ services, trivia hosting, karaoke, equipment rental, or full production.
                      One-time events or monthly contracts for recurring entertainment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground">
                    4
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Local Venue Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      We&apos;ve worked at Concord Pavilion, Todos Santos Plaza events, Diablo Creek
                      Golf Course, and dozens of other Concord venues. We know what works.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="container py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Serving Concord & East Bay
            </h2>
            <p className="text-lg text-muted-foreground">
              No travel fees to these cities
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
            {serviceAreas.map((city) => (
              <Card key={city} className="text-center">
                <CardContent className="pt-6">
                  <p className="font-medium">{city}</p>
                  <p className="text-xs text-muted-foreground">$0 travel fee</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Elevate Your Concord Event?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Free consultation, custom quote within 24 hours. Let&apos;s discuss your vision and
              create an unforgettable experience.
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
              Weddings • Corporate Events • Private Parties • School Events • Equipment Rental
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
