import { getPayload } from 'payload'
import Image from 'next/image'
import type { Metadata } from 'next'

import config from '@/payload.config'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { Gallery as GalleryType } from '@/payload-types'

export const metadata: Metadata = {
  title: 'Event Gallery | Primordial Events',
  description: 'Browse our portfolio of weddings, corporate events, and private parties. See our professional DJ, lighting, and event production work in action across the San Francisco Bay Area.',
}

interface PageProps {
  searchParams: Promise<{
    type?: string
  }>
}

const eventTypeLabels: Record<string, string> = {
  wedding: 'Weddings',
  corporate: 'Corporate Events',
  birthday: 'Birthday Parties',
  school: 'School Events',
  other: 'Other Events',
}

async function GalleryGrid({ searchParams }: PageProps) {
  const params = await searchParams
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Build query
  const conditions: any[] = []

  if (params.type && params.type !== 'all') {
    conditions.push({ eventType: { equals: params.type } })
  }

  const result = await payload.find({
    collection: 'gallery',
    where: conditions.length > 0 ? { and: conditions } : {},
    limit: 100,
    sort: '-date',
  })

  const galleryItems = result.docs as GalleryType[]

  return (
    <>
      {galleryItems.length === 0 ? (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <h3 className="mb-2 text-lg font-semibold">No gallery items found</h3>
            <p className="text-sm text-muted-foreground">
              Check back soon for photos and videos from our events
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => {
            const media = Array.isArray(item.media) ? item.media : []
            const firstMedia = media.length > 0 && typeof media[0] === 'object' && media[0] !== null
              ? (media[0].url || '/placeholder-gallery.jpg')
              : '/placeholder-gallery.jpg'

            const eventTypeLabel = item.eventType
              ? eventTypeLabels[item.eventType] || item.eventType
              : 'Event'

            return (
              <Card key={item.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative aspect-square w-full overflow-hidden bg-muted">
                  <Image
                    src={firstMedia}
                    alt={item.title || 'Gallery image'}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {media.length > 1 && (
                    <div className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
                      +{media.length - 1} more
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{eventTypeLabel}</Badge>
                  </div>
                  {item.description && (
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                  {item.date && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </>
  )
}

export default async function GalleryPage(props: PageProps) {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Event Gallery
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Browse photos and videos from our past events. See our professional DJ services,
          lighting design, and event production in action.
        </p>
      </div>

      {/* Filter - This would need to be a client component for full functionality */}
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium">Filter by Event Type:</p>
        <div className="flex flex-wrap gap-2">
          <a href="/gallery" className="text-sm text-muted-foreground hover:text-foreground">
            All Events
          </a>
          {Object.entries(eventTypeLabels).map(([value, label]) => (
            <a
              key={value}
              href={`/gallery?type=${value}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <GalleryGrid searchParams={props.searchParams} />
    </div>
  )
}
