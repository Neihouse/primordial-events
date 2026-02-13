import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Equipment } from '@/payload-types'

interface EquipmentCardProps {
  equipment: Equipment
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
  rented: { label: 'Rented', variant: 'destructive' },
  reserved: { label: 'Reserved', variant: 'secondary' },
  maintenance: { label: 'Maintenance', variant: 'outline' },
  retired: { label: 'Retired', variant: 'outline' },
}

export function EquipmentCard({ equipment }: EquipmentCardProps) {
  const primaryPhoto = Array.isArray(equipment.photos) && equipment.photos.length > 0
    ? equipment.photos[0]
    : null

  const photoUrl = typeof primaryPhoto === 'object' && primaryPhoto !== null
    ? (primaryPhoto.url || '/placeholder-equipment.jpg')
    : '/placeholder-equipment.jpg'

  const status = statusConfig[equipment.status || 'available']
  const categoryLabel = categoryLabels[equipment.category || ''] || equipment.category

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <Image
          src={photoUrl}
          alt={equipment.name || 'Equipment'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute right-2 top-2">
          <Badge variant={status.variant}>{status.label}</Badge>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-1">{equipment.name}</CardTitle>
          <Badge variant="outline" className="shrink-0">
            {categoryLabel}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          {equipment.assetId}
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-1">
          <p className="text-2xl font-bold text-primary">
            ${equipment.pricing?.dailyRate}/day
          </p>
          {equipment.pricing?.weekendRate && (
            <p className="text-sm text-muted-foreground">
              ${equipment.pricing.weekendRate} weekend
            </p>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button asChild className="w-full">
          <Link href={`/equipment/${equipment.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
