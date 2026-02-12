import { getPayload } from 'payload'
import type { Metadata } from 'next'

import config from '@/payload.config'
import { ServiceCard } from '@/components/ServiceCard'
import type { Service } from '@/payload-types'

export const metadata: Metadata = {
  title: 'Event Production Services | Primordial Events',
  description: 'Professional DJ services, trivia hosting, karaoke, lighting design, and full event production in the San Francisco Bay Area. Create unforgettable experiences for weddings, corporate events, and private parties.',
}

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
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Event Production Services
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          From DJ services to full event production, we bring the energy and expertise
          to make your event unforgettable. Serving the San Francisco Bay Area.
        </p>
      </div>

      {services.length === 0 ? (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <h3 className="mb-2 text-lg font-semibold">No services available</h3>
            <p className="text-sm text-muted-foreground">
              Check back soon for our service offerings
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}
