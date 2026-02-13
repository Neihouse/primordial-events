import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

import config from '@/payload.config'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import type { Service } from '@/payload-types'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

async function getService(slug: string): Promise<Service | null> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const result = await payload.find({
      collection: 'services',
      where: {
        slug: { equals: slug },
      },
      limit: 1,
    })

    return result.docs.length > 0 ? (result.docs[0] as Service) : null
  } catch {
    return null
  }
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const service = await getService(params.slug)

  if (!service) {
    return {
      title: 'Service Not Found | Primordial Events',
    }
  }

  return {
    title: `${service.name} | Primordial Events`,
    description: service.tagline || `Professional ${service.name.toLowerCase()} services for your next event in the San Francisco Bay Area.`,
  }
}

export default async function ServiceDetailPage(props: PageProps) {
  const params = await props.params
  const service = await getService(params.slug)

  if (!service) {
    notFound()
  }

  const heroImage = typeof service.heroImage === 'object' && service.heroImage !== null
    ? (service.heroImage.url || '/placeholder-service.jpg')
    : '/placeholder-service.jpg'

  const features = Array.isArray(service.features)
    ? service.features.map(f => typeof f === 'object' ? f.feature : '')
    : []

  const packages = Array.isArray(service.packages) ? service.packages : []

  return (
    <div className="container py-12">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/services" className="hover:text-foreground">
          Services
        </Link>
        {' / '}
        <span className="text-foreground">{service.name}</span>
      </div>

      {/* Hero Section */}
      <div className="mb-12 grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted lg:aspect-square">
          <Image
            src={heroImage}
            alt={service.name || 'Service'}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {service.name}
            </h1>
            {service.tagline && (
              <p className="text-xl text-muted-foreground">{service.tagline}</p>
            )}
          </div>

          {service.startingPrice && (
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">Starting at</p>
              <p className="text-3xl font-bold text-primary">
                ${service.startingPrice}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="flex-1">
              <Link href={`/booking?service=${service.id}`}>
                Request Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      {features.length > 0 && (
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">What&apos;s Included</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-accent">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Packages */}
      {packages.length > 0 && (
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Packages & Pricing</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, index) => {
              const packageName = typeof pkg === 'object' && pkg !== null ? pkg.name : ''
              const packagePrice = typeof pkg === 'object' && pkg !== null ? pkg.price : ''
              const packageDescription = typeof pkg === 'object' && pkg !== null ? pkg.description : ''
              const packageIncludes = typeof pkg === 'object' && pkg !== null && Array.isArray(pkg.includes)
                ? pkg.includes.map(item => typeof item === 'object' && item !== null ? item.item : '')
                : []

              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-baseline justify-between">
                      <span>{packageName}</span>
                      <span className="text-lg font-semibold text-primary">
                        {packagePrice}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {packageDescription && (
                      <p className="mb-4 text-sm text-muted-foreground">
                        {packageDescription}
                      </p>
                    )}
                    {packageIncludes.length > 0 && (
                      <>
                        <Separator className="mb-4" />
                        <ul className="space-y-2 text-sm">
                          {packageIncludes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Description */}
      {service.description && (
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">About This Service</h2>
          <Card>
            <CardContent className="prose prose-sm max-w-none p-6 dark:prose-invert">
              <div
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(service.description),
                }}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {/* CTA Section */}
      <div className="rounded-lg bg-muted p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">
          Ready to Book {service.name}?
        </h2>
        <p className="mb-6 text-muted-foreground">
          Let&apos;s discuss your event details and create an unforgettable experience
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href={`/booking?service=${service.id}`}>
              Request a Quote
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
