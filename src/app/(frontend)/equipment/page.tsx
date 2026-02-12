import { getPayload } from 'payload'
import { Suspense } from 'react'
import type { Metadata } from 'next'

import config from '@/payload.config'
import { EquipmentCard } from '@/components/EquipmentCard'
import { EquipmentFilter } from '@/components/EquipmentFilter'
import { Skeleton } from '@/components/ui/skeleton'
import type { Equipment } from '@/payload-types'

export const metadata: Metadata = {
  title: 'Equipment Rental | Primordial Events',
  description: 'Professional DJ equipment, PA systems, lighting, and lasers available for rent in the San Francisco Bay Area. Pioneer CDJs, BASSBOSS sound systems, Chauvet lighting, and more.',
}

interface PageProps {
  searchParams: Promise<{
    category?: string
    status?: string
    search?: string
  }>
}

async function EquipmentGrid({ searchParams }: PageProps) {
  const params = await searchParams
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Build query conditions
  const conditions: any[] = [
    { rentable: { equals: true } }, // Only show rentable equipment
  ]

  // Category filter
  if (params.category && params.category !== 'all') {
    conditions.push({ category: { equals: params.category } })
  }

  // Status filter
  if (params.status && params.status !== 'all') {
    conditions.push({ status: { equals: params.status } })
  } else {
    // By default, only show available and reserved equipment (not rented, maintenance, or retired)
    conditions.push({
      status: {
        in: ['available', 'reserved'],
      },
    })
  }

  // Search filter
  if (params.search) {
    conditions.push({
      or: [
        { name: { contains: params.search } },
        { assetId: { contains: params.search } },
      ],
    })
  }

  const result = await payload.find({
    collection: 'equipment',
    where: {
      and: conditions,
    },
    limit: 100,
    sort: '-createdAt',
  })

  const equipment = result.docs as Equipment[]

  return (
    <>
      <EquipmentFilter totalCount={equipment.length} />

      {equipment.length === 0 ? (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <h3 className="mb-2 text-lg font-semibold">No equipment found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your filters or search terms
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {equipment.map((item) => (
            <EquipmentCard key={item.id} equipment={item} />
          ))}
        </div>
      )}
    </>
  )
}

function EquipmentGridSkeleton() {
  return (
    <>
      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 flex-col gap-4 sm:flex-row">
            <Skeleton className="h-10 w-full sm:max-w-xs" />
            <Skeleton className="h-10 w-full sm:w-[200px]" />
            <Skeleton className="h-10 w-full sm:w-[200px]" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="aspect-square w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </>
  )
}

export default async function EquipmentPage(props: PageProps) {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Equipment Rental
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Browse our extensive inventory of professional DJ equipment, PA systems, lighting, and lasers.
          All equipment is professionally maintained and ready for your next event.
        </p>
      </div>

      <div className="space-y-8">
        <Suspense fallback={<EquipmentGridSkeleton />}>
          <EquipmentGrid searchParams={props.searchParams} />
        </Suspense>
      </div>
    </div>
  )
}
