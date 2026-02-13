import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Equipment Rental - Professional DJ & Sound System | Martinez, Concord, Walnut Creek',
  description: 'Rent professional DJ equipment, BASSBOSS speakers, Unity lasers. Pioneer CDJ-3000s, premium sound systems. Delivery available. $400-$1,200.',
  keywords: 'equipment rental East Bay, DJ equipment rental Martinez, sound system rental Concord, CDJ-3000 rental, BASSBOSS rental, laser rental, wedding equipment rental',
}

const rentalPackages = [
  {
    name: 'Basic DJ Rental',
    price: '$400',
    duration: '24 hours',
    description: 'Professional DJ setup for practice or small events',
    features: [
      '2x Pioneer CDJ-3000s ($4,600 value)',
      '1x DJM-A9 or DJM-V10LF mixer',
      'Basic speakers (RCF ART-915A)',
      'All cables included',
      'Setup instructions provided',
      'Technical support via phone',
    ],
    perfectFor: [
      'House parties',
      'Small events (50-100 guests)',
      'DJ practice sessions',
      'Other DJs needing backup gear',
    ],
    popular: false,
  },
  {
    name: 'Premium Sound System',
    price: '$600',
    duration: '24 hours',
    description: 'Nightclub-quality sound with deep bass',
    features: [
      'BASSBOSS BB15-MK3 subwoofer (21Hz bass)',
      '2x BASSBOSS SV9-MK3 tops',
      'Allen & Heath mixer',
      '2x Shure BLX288 wireless microphones',
      'All cables and stands',
      'Power distribution included',
    ],
    perfectFor: [
      'DIY weddings (100-200 guests)',
      'Outdoor events',
      'Live bands',
      'Corporate presentations',
    ],
    popular: true,
  },
  {
    name: 'Full Production Package',
    price: '$1,200',
    duration: '24 hours',
    description: 'Complete nightclub experience',
    features: [
      'Everything from Basic DJ package',
      'Everything from Premium Sound package',
      '2x Unity ELITE PRO FB4 lasers',
      '4x Chauvet Spot 360X moving heads',
      '4x Freedom Par H9 wireless uplights',
      'Complete lighting control system',
      'ProX DJ booth facade',
      'Professional cable management',
    ],
    perfectFor: [
      'Full weddings (200+ guests)',
      'Large corporate events',
      'Professional productions',
      'Venues needing complete setup',
    ],
    popular: false,
  },
]

const rentalTerms = [
  {
    title: 'Rental Periods',
    items: [
      'Daily: 24 hours from pickup/delivery',
      'Weekend: Friday pickup to Sunday return',
      'Weekly: 7 days (10% discount)',
      'Pickup time: 9am-7pm daily',
    ],
  },
  {
    title: 'Deposits & Insurance',
    items: [
      'Security deposit: $500 (refundable)',
      'Certificate of insurance required for venue rentals',
      'Renter responsible for equipment during rental period',
      'Full replacement value charged for lost/damaged items',
    ],
  },
  {
    title: 'Delivery & Setup',
    items: [
      'Self-pickup: Free (Martinez location)',
      'Delivery + Setup: $150 flat fee',
      'No travel fees to Martinez, Concord, Walnut Creek',
      'Setup instructions included with all rentals',
    ],
  },
  {
    title: 'Cancellation Policy',
    items: [
      '7+ days notice: Full refund',
      '3-6 days notice: 50% refund',
      'Less than 3 days: No refund',
      'Weather cancellations: Rescheduling available',
    ],
  },
]

const whyRentFromUs = [
  {
    title: 'Professional-Grade Equipment',
    description: 'Over $50,000 in premium gear. Pioneer CDJ-3000s, BASSBOSS speakers, Unity lasers - the same equipment used in San Francisco\'s top nightclubs.',
  },
  {
    title: 'No Travel Fees',
    description: 'Free delivery setup to Martinez, Concord, and Walnut Creek. Save $300-500 compared to SF-based rental companies.',
  },
  {
    title: 'Technical Support Included',
    description: 'Phone support during your event. Setup instructions provided. Optional on-site technical support available.',
  },
  {
    title: 'Fully Insured',
    description: 'All equipment is insured and professionally maintained. We provide certificates of insurance for venue requirements.',
  },
  {
    title: 'Flexible Packages',
    description: 'Rent just what you need or upgrade to a complete production package. Mix and match equipment for your specific event.',
  },
  {
    title: 'Professional Maintenance',
    description: 'All gear is cleaned, tested, and ready before every rental. Backup equipment available if technical issues arise.',
  },
]

const targetCustomers = [
  {
    title: 'DIY Wedding Couples',
    description: 'Save thousands by renting professional equipment. Our Premium Sound System package is perfect for 100-200 guest weddings.',
    ctaText: 'Plan Your Wedding',
  },
  {
    title: 'Professional DJs',
    description: 'Need backup gear or want to upgrade for a special event? Rent our CDJ-3000s and BASSBOSS system.',
    ctaText: 'DJ Rental Info',
  },
  {
    title: 'Event Planners',
    description: 'Reliable equipment rental with delivery and setup. Certificate of insurance provided for venue requirements.',
    ctaText: 'Event Solutions',
  },
  {
    title: 'Small Venues',
    description: 'Upgrade your sound system for special events. Weekly and monthly rental rates available.',
    ctaText: 'Venue Packages',
  },
]

export default function EquipmentRentalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="outline">
              Professional Equipment • East Bay
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Professional Equipment Rental
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Nightclub-quality gear for your event. Pioneer CDJ-3000s, BASSBOSS speakers,
              Unity lasers. Perfect for DIY weddings, other DJs, and professional events.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/booking?type=rental">Check Availability</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/our-equipment">Browse Equipment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Packages */}
      <section className="container py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Rental Packages</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            All packages include 24-hour rental period. Weekend and weekly rates available.
            Delivery and setup available for $150.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {rentalPackages.map((pkg, index) => (
            <Card key={index} className={pkg.popular ? 'border-primary shadow-lg' : ''}>
              {pkg.popular && (
                <div className="flex justify-center">
                  <Badge className="absolute -top-3">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="ml-2 text-sm text-muted-foreground">{pkg.duration}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="mb-3 text-sm font-semibold">What&apos;s Included:</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-1 text-primary">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-sm font-semibold">Perfect For:</p>
                  <ul className="space-y-2">
                    {pkg.perfectFor.map((use, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1">•</span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                  <Link href="/booking?type=rental">Book This Package</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Need custom equipment configuration?{' '}
            <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
              Contact us for custom quote
            </Link>
          </p>
        </div>
      </section>

      {/* Why Rent From Us */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Why Rent From Primordial Events?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Professional equipment, professional service, no travel fees
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyRentFromUs.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl text-primary-foreground">
                  ✓
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="container py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Who Rents From Us?
          </h2>
          <p className="text-lg text-muted-foreground">
            Equipment rentals for every type of event and customer
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {targetCustomers.map((customer, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{customer.title}</CardTitle>
                <CardDescription>{customer.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/booking?type=rental">{customer.ctaText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Rental Terms */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Rental Terms</h2>
            <p className="text-lg text-muted-foreground">
              Clear, straightforward terms for all equipment rentals
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              {rentalTerms.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1 text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Card className="border-primary/50 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">
                      Important
                    </Badge>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium">Damage & Loss Policy:</p>
                      <p className="text-muted-foreground">
                        Renter is responsible for all equipment during rental period. Any damage or
                        loss will be charged at full replacement value. Pioneer CDJ-3000: $2,299 each,
                        BASSBOSS BB15-MK3: $1,899, Unity ELITE PRO FB4: $1,999.
                      </p>
                      <p className="text-muted-foreground">
                        Minor wear and tear is expected and not charged. We recommend purchasing event
                        insurance or checking with your homeowner&apos;s/renter&apos;s insurance for coverage.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="container py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Browse Our Equipment</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See detailed specs and photos of all available rental equipment
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>DJ Equipment</CardTitle>
              <CardDescription>
                Pioneer CDJ-3000s, professional mixers, turntables
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/our-equipment#dj">View DJ Gear</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sound Systems</CardTitle>
              <CardDescription>
                BASSBOSS speakers, RCF systems, wireless microphones
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/our-equipment#sound">View Sound Systems</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lighting & Lasers</CardTitle>
              <CardDescription>
                Unity lasers, moving heads, LED uplights, DJ booths
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/our-equipment#lighting">View Lighting</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Check Availability
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Tell us about your event and we&apos;ll confirm availability and provide a detailed quote.
              Response within 2 hours during business hours.
            </p>
            <Button asChild size="lg">
              <Link href="/booking?type=rental">Request Equipment Rental Quote</Link>
            </Button>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Badge variant="secondary" className="gap-1.5">
                <span className="text-green-600">✓</span>
                No travel fees to East Bay
              </Badge>
              <Badge variant="secondary" className="gap-1.5">
                <span className="text-green-600">✓</span>
                Technical support included
              </Badge>
              <Badge variant="secondary" className="gap-1.5">
                <span className="text-green-600">✓</span>
                Fully insured equipment
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container py-20">
        <div className="rounded-lg bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Questions About Equipment Rental?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            We&apos;re happy to help you choose the right equipment for your event. Not sure what you
            need? We can provide recommendations based on your venue, guest count, and event type.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90">
              <Link href="/booking?type=rental">Get Custom Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contact">Call or Text Us</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/60">
            Serving Martinez, Concord, Walnut Creek, and the entire East Bay
          </p>
        </div>
      </section>
    </div>
  )
}
