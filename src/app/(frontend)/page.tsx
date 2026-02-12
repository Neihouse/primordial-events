import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'

import config from '@/payload.config'
import { Hero } from '@/components/Hero'
import { ServiceCard } from '@/components/ServiceCard'
import { EquipmentCard } from '@/components/EquipmentCard'
import { Button } from '@/components/ui/button'
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
        heading="Unforgettable Events Start Here"
        subheading="Professional DJ services, cutting-edge equipment rental, and full event production for the San Francisco Bay Area"
        primaryCTA={{
          text: 'Book Your Event',
          href: '/booking',
        }}
        secondaryCTA={{
          text: 'Browse Equipment',
          href: '/equipment',
        }}
      />

      {/* Featured Services */}
      {services.length > 0 && (
        <section className="container py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From DJ services to full event production, we bring the energy and expertise to make your event unforgettable
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </section>
      )}

      {/* Featured Equipment */}
      {equipment.length > 0 && (
        <section className="bg-muted/40 py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Featured Equipment
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Premium DJ gear, PA systems, lighting, and lasers available for rent
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {equipment.map((item) => (
                <EquipmentCard key={item.id} equipment={item} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/equipment">View Full Catalog</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container py-20">
        <div className="rounded-lg bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Make Your Event Amazing?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Let's discuss your vision and create an unforgettable experience
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90">
              <Link href="/booking">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
