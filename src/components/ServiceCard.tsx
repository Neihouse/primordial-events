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
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={heroImage}
          alt={service.name || 'Service'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      <CardHeader>
        <CardTitle>{service.name}</CardTitle>
        {service.tagline && (
          <CardDescription className="line-clamp-2">
            {service.tagline}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex-1">
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-accent">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-2">
        {service.startingPrice && (
          <p className="text-lg font-semibold text-primary">
            Starting at ${service.startingPrice}
          </p>
        )}
        <Button asChild variant={service.startingPrice ? 'outline' : 'default'} className="ml-auto">
          <Link href={`/services/${service.slug}`}>
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
