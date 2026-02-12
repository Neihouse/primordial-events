import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface HeroProps {
  heading: string
  subheading?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export function Hero({
  heading,
  subheading,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative flex min-h-[60vh] items-center justify-center bg-primary text-primary-foreground"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(26, 26, 46, 0.7), rgba(26, 26, 46, 0.7)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="container px-4 py-20 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {heading}
        </h1>

        {subheading && (
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80 sm:text-xl">
            {subheading}
          </p>
        )}

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primaryCTA && (
            <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90">
              <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
            </Button>
          )}

          {secondaryCTA && (
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
