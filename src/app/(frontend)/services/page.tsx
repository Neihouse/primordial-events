import { getPayload } from 'payload'
import type { Metadata } from 'next'
import Link from 'next/link'

import config from '@/payload.config'
import { ServiceCard } from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Service } from '@/payload-types'

export const metadata: Metadata = {
  title: 'Event Production Services & Packages | Primordial Events',
  description: 'Professional DJ services, trivia hosting, karaoke, lighting design, and full event production in the San Francisco Bay Area. Wedding packages from $2,200. No SF travel fees.',
}

const weddingPackages = [
  {
    name: 'Essential',
    price: '$2,200',
    duration: '4 hours',
    description: 'Professional DJ service with premium equipment',
    features: [
      'Professional DJ & MC',
      'Pioneer CDJ-3000 setup',
      'BASSBOSS or RCF sound system',
      'Wireless microphone',
      'Music consultation & planning',
      'No SF travel fees',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '$3,200',
    duration: '6 hours',
    description: 'Complete entertainment with lighting',
    features: [
      'Everything in Essential, plus:',
      '6 hours of service (vs 4)',
      'Intelligent lighting package',
      'Wireless LED uplighting (4 units)',
      'Professional DJ booth facade',
      'Extended music planning session',
      'Ceremony sound included',
    ],
    popular: true,
  },
  {
    name: 'Ultimate',
    price: '$4,500',
    duration: '8 hours',
    description: 'Full nightclub experience',
    features: [
      'Everything in Premium, plus:',
      '8 hours of service (vs 6)',
      'Unity laser light show',
      'Moving head intelligent lights',
      'Dance floor totem lighting',
      'Premium fog/haze effects',
      'Unlimited music requests',
      'Post-event playlist delivery',
    ],
    popular: false,
  },
]

const corporatePackages = [
  {
    name: 'Team Builder',
    price: '$1,500',
    description: 'Interactive entertainment for team events',
    features: [
      'Trivia hosting (2 hours)',
      'Professional sound system',
      'Custom trivia content',
      'Wireless microphones',
      'Team scoring & prizes coordination',
    ],
  },
  {
    name: 'Full Production',
    price: '$3,500 - $5,000',
    description: 'Complete event production',
    features: [
      'DJ & MC services',
      'Complete sound system',
      'Intelligent lighting package',
      'Laser effects',
      'Presentation audio support',
      'Event coordination',
      'Custom music curation',
    ],
  },
]

const schoolPackages = [
  {
    name: 'Dance Package',
    price: '$800',
    duration: '4 hours',
    features: [
      'Professional DJ',
      'Premium sound system',
      'Age-appropriate music curation',
      'Interactive games & contests',
      'Basic lighting effects',
    ],
  },
  {
    name: 'Prom Package',
    price: '$1,200',
    duration: '6 hours',
    features: [
      'Everything in Dance Package, plus:',
      'Intelligent lighting show',
      'Laser effects',
      'Premium DJ booth setup',
      'Photo-worthy production',
      'Extended service time',
    ],
  },
]

const specialtyServices = [
  {
    name: 'Trivia Hosting',
    price: '$600/month',
    description: 'Weekly trivia nights for bars & restaurants',
    features: [
      '4 weekly trivia nights',
      'Professional host',
      'Sound system included',
      'Custom trivia content',
      'Audience engagement',
    ],
  },
  {
    name: 'Karaoke Hosting',
    price: '$500/month',
    description: 'Weekly karaoke entertainment',
    features: [
      '4 weekly karaoke nights',
      'Professional karaoke system',
      'Song library (10,000+ songs)',
      'Host & technical support',
      'Wireless microphones',
    ],
  },
  {
    name: 'Equipment Rental Only',
    price: '$400 - $1,200',
    description: 'Premium gear without DJ services',
    features: [
      'CDJ-3000 DJ package: $400',
      'Premium sound system: $600',
      'Full production gear: $1,200',
      'Professional setup assistance',
      'Technical support available',
    ],
  },
]

export default async function ServicesPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const result = await payload.find({
    collection: 'services',
    limit: 100,
    sort: 'sortOrder',
  })

  const services = result.docs as Service[]

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
          <Badge variant="outline">Premium Equipment • No SF Travel Fees</Badge>
          <Badge variant="secondary">Fully Insured</Badge>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Services & Packages
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Professional event entertainment for the East Bay. Wedding packages from $2,200,
          corporate events from $1,500, premium school events from $800.
        </p>
      </div>

      {/* Wedding Packages */}
      <section className="mb-20">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Wedding Packages</h2>
          <p className="text-muted-foreground">
            Premium equipment at accessible pricing - no San Francisco travel fees
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {weddingPackages.map((pkg, index) => (
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
                  <span className="ml-2 text-sm text-muted-foreground">({pkg.duration})</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                  <Link href="/booking">Request Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Corporate Events */}
      <section className="mb-20">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Corporate Events</h2>
          <p className="text-muted-foreground">
            Team building, conferences, and company celebrations
          </p>
          <div className="mt-4">
            <Badge variant="secondary" className="gap-1.5">
              <span className="text-green-600">✓</span>
              Certificate of Insurance available upon request
            </Badge>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {corporatePackages.map((pkg, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/booking">Get Proposal</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Premium School Events */}
      <section className="mb-20">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Premium School Events</h2>
          <p className="text-muted-foreground">
            Proms, homecoming, graduations - your students deserve nightclub-quality sound
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {schoolPackages.map((pkg, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                  <span className="ml-2 text-sm text-muted-foreground">({pkg.duration})</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/booking">Request Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Specialty Services */}
      <section className="mb-20">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Specialty Services</h2>
          <p className="text-muted-foreground">
            Recurring entertainment, equipment rentals, and custom packages
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {specialtyServices.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-xl font-bold text-primary">{service.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/booking">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CMS-Driven Services (if any exist) */}
      {services.length > 0 && (
        <section className="mb-20">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight">Additional Services</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="mt-20">
        <div className="rounded-lg bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Not Sure Which Package Is Right?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            We&apos;ll help you choose the perfect package for your event and budget.
            All packages include our premium Pioneer CDJ-3000s and BASSBOSS speakers.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90">
              <Link href="/booking">Request Custom Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contact">Ask a Question</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
