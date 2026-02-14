import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface HeroProps {
  heading: string
  subheading?: string
  pricingLine?: string
  showSocialProof?: boolean
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
  pricingLine,
  showSocialProof = false,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-[500px] w-[500px] animate-pulse rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute right-[10%] top-[40%] h-[400px] w-[400px] animate-pulse rounded-full bg-accent/20 blur-[100px] [animation-delay:1s]" />
        <div className="absolute bottom-[10%] left-[40%] h-[450px] w-[450px] animate-pulse rounded-full bg-primary/20 blur-[110px] [animation-delay:2s]" />
      </div>

      {/* Optional background image overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative flex min-h-[85vh] items-center justify-center">
        <div className="container px-4 py-20 text-center">
          {/* Main heading with gradient text */}
          <h1 className="mb-6 animate-fade-in text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {heading.split(' ').map((word, index) => {
              // Make last 2 words gradient
              const words = heading.split(' ')
              const isGradient = index >= words.length - 2
              return (
                <span key={index} className={isGradient ? 'gradient-text' : ''}>
                  {word}{' '}
                </span>
              )
            })}
          </h1>

          {subheading && (
            <p className="mx-auto mb-4 max-w-3xl animate-fade-in text-lg text-white/80 sm:text-xl [animation-delay:0.1s]">
              {subheading}
            </p>
          )}

          {pricingLine && (
            <p className="mx-auto mb-8 max-w-2xl animate-fade-in text-xl font-semibold text-accent sm:text-2xl [animation-delay:0.2s]">
              {pricingLine}
            </p>
          )}

          {showSocialProof && (
            <div className="mx-auto mb-10 flex animate-fade-in flex-wrap items-center justify-center gap-3 sm:gap-6 [animation-delay:0.3s]">
              <Badge variant="secondary" className="glass border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md hover:bg-white/20">
                ⭐ 4.9/5.0 on Google
              </Badge>
              <span className="hidden text-white/40 sm:inline">•</span>
              <Badge variant="secondary" className="glass border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md hover:bg-white/20">
                200+ Events in 2025
              </Badge>
              <span className="hidden text-white/40 sm:inline">•</span>
              <Badge variant="secondary" className="glass border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md hover:bg-white/20">
                Fully Insured
              </Badge>
              <span className="hidden text-white/40 sm:inline">•</span>
              <Badge variant="secondary" className="glass border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md hover:bg-white/20">
                $50K+ Pro Equipment
              </Badge>
            </div>
          )}

          <div className="flex animate-fade-in flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:0.4s]">
            {primaryCTA && (
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-primary px-8 py-6 text-lg font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-glow"
              >
                <Link href={primaryCTA.href}>
                  <span className="relative z-10">{primaryCTA.text}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent/50 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Button>
            )}

            {secondaryCTA && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass border-2 border-white/30 bg-white/5 px-8 py-6 text-lg font-semibold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10"
              >
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
