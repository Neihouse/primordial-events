import { getPayload } from 'payload'
import Image from 'next/image'
import type { Metadata } from 'next'

import config from '@/payload.config'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { GalleryFilter } from '@/components/GalleryFilter'
// import { GalleryLightbox } from '@/components/GalleryLightbox' // Prepared for future use
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

  // Get featured item (most recent or first item)
  const featuredItem = galleryItems[0]

  return (
    <>
      {galleryItems.length === 0 ? (
        <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/5">
          <div className="text-center">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="mb-2 text-lg font-semibold">No gallery items found</h3>
            <p className="text-sm text-muted-foreground">
              Check back soon for photos and videos from our events
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Featured Hero Item */}
          {featuredItem && (
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted">
                <Image
                  src={
                    Array.isArray(featuredItem.photos) &&
                    featuredItem.photos.length > 0 &&
                    typeof featuredItem.photos[0] === 'object' &&
                    featuredItem.photos[0] !== null
                      ? (featuredItem.photos[0].url || '/placeholder-gallery.jpg')
                      : '/placeholder-gallery.jpg'
                  }
                  alt={featuredItem.title || 'Featured event'}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-105"
                  sizes="100vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <div className="max-w-3xl space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                        Featured
                      </Badge>
                      <Badge variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur-sm">
                        {featuredItem.eventType
                          ? eventTypeLabels[featuredItem.eventType] || featuredItem.eventType
                          : 'Event'}
                      </Badge>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                      {featuredItem.title}
                    </h2>
                    {featuredItem.description && (
                      <p className="line-clamp-2 text-lg text-white/90 md:text-xl">
                        {featuredItem.description}
                      </p>
                    )}
                    {featuredItem.date && (
                      <p className="text-sm text-white/70">
                        {new Date(featuredItem.date).toLocaleDateString(undefined, {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Masonry Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {galleryItems.slice(featuredItem ? 1 : 0).map((item, index) => {
              const photos = Array.isArray(item.photos) ? item.photos : []
              const firstPhoto =
                photos.length > 0 && typeof photos[0] === 'object' && photos[0] !== null
                  ? (photos[0].url || '/placeholder-gallery.jpg')
                  : '/placeholder-gallery.jpg'

              const eventTypeLabel = item.eventType
                ? eventTypeLabels[item.eventType] || item.eventType
                : 'Event'

              // Create varied heights for masonry effect on larger items
              const isLargeItem = index % 7 === 0
              const aspectClass = isLargeItem ? 'aspect-[4/5]' : 'aspect-square'

              return (
                <Card
                  key={item.id}
                  className="group relative overflow-hidden border-0 shadow-lg transition-shadow duration-300 ease-out motion-reduce:transition-none hover:shadow-2xl hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${item.title || 'gallery image'}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      // TODO: Open lightbox or navigate to detail view
                      console.log('Gallery item clicked:', item.id)
                    }
                  }}
                  onClick={() => {
                    // TODO: Open lightbox or navigate to detail view
                    console.log('Gallery item clicked:', item.id)
                  }}
                >
                  <div className={`relative w-full overflow-hidden bg-muted ${aspectClass}`}>
                    <Image
                      src={firstPhoto}
                      alt={item.title || 'Gallery image'}
                      fill
                      className="object-cover transition-[transform,filter] duration-500 ease-out motion-reduce:transition-none group-hover:scale-110 group-hover:brightness-75"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />

                    {/* Photo Count Badge */}
                    {photos.length > 1 && (
                      <div className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none group-hover:opacity-100 md:opacity-0">
                        <svg
                          className="mr-1 inline-block h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {photos.length} photos
                      </div>
                    )}

                    {/* Hover Overlay with Content */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 transition-opacity duration-300 motion-reduce:transition-none group-hover:opacity-100">
                      <div className="translate-y-4 space-y-2 transition-transform duration-300 motion-reduce:transform-none group-hover:translate-y-0">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {eventTypeLabel}
                          </Badge>
                        </div>
                        <h3 className="line-clamp-1 font-semibold text-white">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="line-clamp-2 text-sm text-white/90">
                            {item.description}
                          </p>
                        )}
                        {item.date && (
                          <p className="text-xs text-white/70">
                            {new Date(item.date).toLocaleDateString(undefined, {
                              month: 'short',
                              year: 'numeric',
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default async function GalleryPage(props: PageProps) {
  const params = await props.searchParams

  return (
    <div className="container space-y-12 py-12">
      {/* Header Section */}
      <div className="space-y-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Our Portfolio
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Event Gallery
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Browse photos and videos from our past events. From intimate weddings to
            high-energy corporate parties, see how we transform venues with
            professional sound, lighting, and production.
          </p>
        </div>
      </div>

      {/* Filter Component */}
      <GalleryFilter
        currentType={params.type}
        eventTypeLabels={eventTypeLabels}
      />

      {/* Gallery Grid */}
      <GalleryGrid searchParams={props.searchParams} />
    </div>
  )
}
