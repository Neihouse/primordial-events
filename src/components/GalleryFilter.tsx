'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

interface GalleryFilterProps {
  currentType?: string
  eventTypeLabels: Record<string, string>
}

export function GalleryFilter({ currentType, eventTypeLabels }: GalleryFilterProps) {
  const pathname = usePathname()
  const activeType = currentType || 'all'

  const filterItems = [
    { value: 'all', label: 'All Events' },
    ...Object.entries(eventTypeLabels).map(([value, label]) => ({
      value,
      label,
    })),
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-muted-foreground">Filter by Event Type</h2>
        {activeType !== 'all' && (
          <Link href={pathname} className="text-sm text-primary hover:underline">
            Clear filter
          </Link>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {filterItems.map((item) => {
          const isActive = activeType === item.value
          const href = item.value === 'all' ? pathname : `${pathname}?type=${item.value}`

          return (
            <Button
              key={item.value}
              variant={isActive ? 'default' : 'outline'}
              size="sm"
              asChild
              className="transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Link
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className="touch-manipulation"
              >
                {item.label}
              </Link>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
