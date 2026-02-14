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
  { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline'; className: string }
> = {
  available: { label: 'Available', variant: 'default', className: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' },
  rented: { label: 'Rented', variant: 'destructive', className: 'bg-red-500/10 text-red-600 border-red-500/20' },
  reserved: { label: 'Reserved', variant: 'secondary', className: 'bg-amber-500/10 text-amber-600 border-amber-500/20' },
  maintenance: { label: 'Maintenance', variant: 'outline', className: 'bg-slate-500/10 text-slate-600 border-slate-500/20' },
  retired: { label: 'Retired', variant: 'outline', className: 'bg-slate-500/10 text-slate-600 border-slate-500/20' },
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
    <Card className="group relative flex h-full flex-col overflow-hidden border-2 border-border/50 bg-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-card-hover">
      {/* Gradient accent line on top */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary/20">
        <Image
          src={photoUrl}
          alt={equipment.name || 'Equipment'}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        {/* Status badge with backdrop blur */}
        <div className="absolute right-3 top-3">
          <Badge className={`glass border backdrop-blur-md ${status.className}`}>
            {status.label}
          </Badge>
        </div>
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <CardHeader className="relative pb-3">
        <div className="mb-2 flex items-center justify-between gap-2">
          <Badge variant="outline" className="border-primary/30 bg-primary/5 text-xs font-semibold text-primary">
            {categoryLabel}
          </Badge>
          <span className="text-xs font-mono text-muted-foreground">
            {equipment.assetId}
          </span>
        </div>
        <CardTitle className="line-clamp-2 text-lg font-bold leading-tight transition-colors group-hover:text-primary">
          {equipment.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold text-primary">
            ${equipment.pricing?.dailyRate}
          </p>
          <span className="text-sm font-medium text-muted-foreground">/day</span>
        </div>
        {equipment.pricing?.weekendRate && (
          <p className="mt-1 text-sm text-muted-foreground">
            ${equipment.pricing.weekendRate} weekend · ${equipment.pricing.weeklyRate || 'N/A'} weekly
          </p>
        )}
      </CardContent>

      <CardFooter className="border-t border-border/50 pt-4">
        <Button
          asChild
          className="w-full bg-secondary font-semibold text-white transition-all hover:bg-primary hover:shadow-glow"
        >
          <Link href={`/equipment/${equipment.id}`}>
            View Details →
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
