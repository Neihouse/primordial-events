import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'

import config from '@/payload.config'
import { Hero } from '@/components/Hero'
import { ServiceCard } from '@/components/ServiceCard'
import { EquipmentCard } from '@/components/EquipmentCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { Service, Equipment } from '@/payload-types'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch featured services (sorted by sortOrder, limit 3)
  const servicesResult = await payload.find({
    collection: 'services',
    limit: 3,
    sort: 'sortOrder',
  })

  // Fetch featured equipment (available, rentable, limit 6)
  const equipmentResult = await payload.find({
    collection: 'equipment',
    where: {
      and: [
        { status: { equals: 'available' } },
        { rentable: { equals: true } },
      ],
    },
    limit: 6,
    sort: '-createdAt',
  })

  const services = servicesResult.docs as Service[]
  const equipment = equipmentResult.docs as Equipment[]

  return (
    <div className="flex flex-col">
      <Hero
        heading="East Bay's Premium Audio Experience"
        subheading="Nightclub Sound for Your Event • CDJ-3000s • BASSBOSS Speakers • Unity Lasers • No SF Travel Fees"
        pricingLine="Wedding Packages from $2,200 | Corporate from $1,500 | School Events from $800"
        showSocialProof={true}
        primaryCTA={{
          text: 'Request a Quote',
          href: '/booking',
        }}
        secondaryCTA={{
          text: 'See Our Equipment',
          href: '/equipment',
        }}
      />

      {/* Featured Services */}
      {services.length > 0 && (
        <section className="container py-24">
          <div className="mb-16 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
              What We Do
            </Badge>
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Premium <span className="gradient-text">Event Services</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
              From DJ services to full event production, we bring the energy and expertise to make your event unforgettable
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline" className="border-2 px-8 py-6 text-lg font-semibold">
              <Link href="/services">View All Services →</Link>
            </Button>
          </div>
        </section>
      )}

      {/* Featured Equipment */}
      {equipment.length > 0 && (
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary/5 via-background to-background py-24">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="container relative">
            <div className="mb-16 text-center">
              <Badge variant="outline" className="mb-4 border-accent/30 bg-accent/5 px-4 py-1.5 text-sm font-semibold text-accent">
                Professional Gear
              </Badge>
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="gradient-text">Nightclub-Quality</span> Equipment
              </h2>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
                The same Pioneer CDJ-3000s, BASSBOSS speakers, and Unity lasers used in top SF nightclubs - available for your event
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {equipment.map((item) => (
                <EquipmentCard key={item.id} equipment={item} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button asChild size="lg" className="bg-primary px-8 py-6 text-lg font-semibold shadow-glow hover:bg-primary/90 hover:shadow-glow">
                <Link href="/equipment">View Full Catalog →</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 shadow-glow sm:p-16">
          {/* Animated background orbs */}
          <div className="absolute right-0 top-0 h-64 w-64 animate-pulse rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 animate-pulse rounded-full bg-accent/20 blur-3xl [animation-delay:1s]" />

          <div className="relative z-10 text-center text-white">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to Make Your Event <span className="text-accent">Amazing</span>?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-white/90">
              Let&apos;s discuss your vision and create an unforgettable experience with premium equipment and professional service
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white px-8 py-6 text-lg font-semibold text-primary hover:bg-white/90 hover:shadow-glow-cyan">
                <Link href="/booking">Request a Quote →</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass border-2 border-white/30 bg-white/10 px-8 py-6 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/20">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
