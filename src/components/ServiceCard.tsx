import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { Service } from '@/payload-types'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const heroImage = typeof service.heroImage === 'object' && service.heroImage !== null
    ? (service.heroImage.url || '/placeholder-service.jpg')
    : '/placeholder-service.jpg'

  const features = Array.isArray(service.features)
    ? service.features.slice(0, 4).map(f => typeof f === 'object' ? f.feature : '')
    : []

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border-2 border-border/50 bg-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-card-hover">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={heroImage}
          alt={service.name || 'Service'}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold transition-colors group-hover:text-primary">
          {service.name}
        </CardTitle>
        {service.tagline && (
          <CardDescription className="line-clamp-2 text-base">
            {service.tagline}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="relative z-10 flex-1">
        {features.length > 0 && (
          <ul className="space-y-2.5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  ✓
                </span>
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="relative z-10 flex flex-col items-start gap-3 border-t border-border/50 pt-4">
        {service.startingPrice && (
          <p className="text-2xl font-bold text-primary">
            <span className="text-sm font-normal text-muted-foreground">Starting at</span> ${service.startingPrice}
          </p>
        )}
        <Button
          asChild
          variant="default"
          className="w-full bg-primary font-semibold transition-all hover:bg-primary/90 group-hover:shadow-glow"
        >
          <Link href={`/services/${service.slug}`}>
            Learn More →
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
