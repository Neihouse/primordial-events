import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

import config from '@/payload.config'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import type { Equipment } from '@/payload-types'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

const categoryLabels: Record<string, string> = {
  audio: 'Audio / PA',
  dj: 'DJ Hardware',
  lighting: 'Lighting',
  laser: 'Laser',
  atmospherics: 'Atmospherics',
  video: 'Video',
  structure: 'Structure / Truss',
  cases: 'Cases',
  accessories: 'Accessories',
}

const statusConfig: Record<
  string,
  { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }
> = {
  available: { label: 'Available', variant: 'default' },
  rented: { label: 'Rented Out', variant: 'destructive' },
  reserved: { label: 'Reserved', variant: 'secondary' },
  maintenance: { label: 'In Maintenance', variant: 'outline' },
  retired: { label: 'Retired', variant: 'outline' },
}

async function getEquipment(id: string): Promise<Equipment | null> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const equipment = await payload.findByID({
      collection: 'equipment',
      id,
    })
    return equipment as Equipment
  } catch {
    return null
  }
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const equipment = await getEquipment(params.id)

  if (!equipment) {
    return {
      title: 'Equipment Not Found | Primordial Events',
    }
  }

  return {
    title: `${equipment.name} - Equipment Rental | Primordial Events`,
    description: `Rent ${equipment.name} for your next event. ${categoryLabels[equipment.category || '']} equipment available in the San Francisco Bay Area.`,
  }
}

export default async function EquipmentDetailPage(props: PageProps) {
  const params = await props.params
  const equipment = await getEquipment(params.id)

  if (!equipment) {
    notFound()
  }

  const photos = Array.isArray(equipment.photos) ? equipment.photos : []
  const primaryPhoto = photos.length > 0 && typeof photos[0] === 'object' && photos[0] !== null
    ? (photos[0].url || '/placeholder-equipment.jpg')
    : '/placeholder-equipment.jpg'

  const status = statusConfig[equipment.status || 'available']
  const categoryLabel = categoryLabels[equipment.category || ''] || equipment.category
  const specs = Array.isArray(equipment.specs) ? equipment.specs : []

  return (
    <div className="container py-12">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/equipment" className="hover:text-foreground">
          Equipment
        </Link>
        {' / '}
        <span className="text-foreground">{equipment.name}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
            <Image
              src={primaryPhoto}
              alt={equipment.name || 'Equipment'}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Additional Photos */}
          {photos.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {photos.slice(1, 5).map((photo, index) => {
                const photoUrl = typeof photo === 'object' && photo !== null
                  ? (photo.url || '/placeholder-equipment.jpg')
                  : '/placeholder-equipment.jpg'

                return (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-md bg-muted"
                  >
                    <Image
                      src={photoUrl}
                      alt={`${equipment.name} ${index + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 25vw, 12.5vw"
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="outline">{categoryLabel}</Badge>
              <Badge variant={status.variant}>{status.label}</Badge>
            </div>
            <h1 className="mb-2 text-4xl font-bold tracking-tight">
              {equipment.name}
            </h1>
            <p className="text-muted-foreground">Asset ID: {equipment.assetId}</p>
          </div>

          <Separator />

          {/* Pricing */}
          <Card>
            <CardHeader>
              <CardTitle>Rental Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">Daily Rate</span>
                <span className="text-2xl font-bold text-primary">
                  ${equipment.pricing?.dailyRate}
                </span>
              </div>
              {equipment.pricing?.weekendRate && (
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted-foreground">Weekend Rate (Fri-Sun)</span>
                  <span className="text-lg font-semibold">
                    ${equipment.pricing.weekendRate}
                  </span>
                </div>
              )}
              {equipment.pricing?.weeklyRate && (
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted-foreground">Weekly Rate</span>
                  <span className="text-lg font-semibold">
                    ${equipment.pricing.weeklyRate}
                  </span>
                </div>
              )}
              {equipment.pricing?.depositRequired && (
                <div className="flex items-baseline justify-between border-t pt-3">
                  <span className="text-sm text-muted-foreground">Security Deposit</span>
                  <span className="text-sm font-medium">
                    ${equipment.pricing.depositRequired}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="flex-1" disabled={equipment.status !== 'available'}>
              <Link href={`/booking?equipment=${equipment.id}`}>
                Request Rental
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <Link href="/contact">
                Ask a Question
              </Link>
            </Button>
          </div>

          {equipment.status !== 'available' && (
            <p className="text-sm text-muted-foreground">
              This equipment is currently {status.label.toLowerCase()}. Contact us for availability.
            </p>
          )}
        </div>
      </div>

      {/* Specifications */}
      {specs.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Specifications</h2>
          <Card>
            <CardContent className="p-6">
              <dl className="grid gap-4 sm:grid-cols-2">
                {specs.map((spec, index) => {
                  const label = typeof spec === 'object' && spec !== null ? spec.label : ''
                  const value = typeof spec === 'object' && spec !== null ? spec.value : ''

                  return (
                    <div key={index} className="flex flex-col gap-1">
                      <dt className="text-sm font-medium text-muted-foreground">{label}</dt>
                      <dd className="text-sm">{value}</dd>
                    </div>
                  )
                })}
              </dl>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Description */}
      {equipment.description && (
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">About This Equipment</h2>
          <Card>
            <CardContent className="prose prose-sm max-w-none p-6 dark:prose-invert">
              <div
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(equipment.description),
                }}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {/* Related Equipment */}
      <div className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">More {categoryLabel}</h2>
          <Button asChild variant="outline">
            <Link href={`/equipment?category=${equipment.category}`}>
              View All
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
