import type { Metadata } from 'next'
import Link from 'next/link'
import { EquipmentShowcase } from '@/components/EquipmentShowcase'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Professional Equipment | Primordial Events',
  description: 'Nightclub-quality DJ equipment, sound systems, lighting, and lasers. Pioneer CDJ-3000s, BASSBOSS speakers, Unity lasers, and professional intelligent lighting. Premium professional gear for unforgettable events.',
}

export default function OurEquipmentPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Nightclub-Quality Equipment
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Professional Pioneer CDJ-3000s, BASSBOSS speakers, Unity lasers, and intelligent lighting.
          This is the same equipment used in top San Francisco nightclubs and music festivals.
          Premium professional gear to make your event unforgettable.
        </p>
      </div>

      {/* Equipment Showcase Component */}
      <EquipmentShowcase />

      {/* Bottom CTA */}
      <section className="mt-20">
        <div className="rounded-lg bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Experience the Difference
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Premium equipment delivers superior sound quality, reliability, and visual impact.
            Your guests will notice the difference. Ready to elevate your event?
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90">
              <Link href="/booking">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/services">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Rental CTA */}
      <section className="mt-12">
        <div className="rounded-lg border bg-card p-8 text-center">
          <h3 className="mb-3 text-2xl font-bold">Need Equipment Without DJ Services?</h3>
          <p className="mb-6 text-muted-foreground">
            We also rent our professional equipment for DIY events, other DJs, and production companies.
            CDJ-3000 packages from $400/day, premium sound systems from $600/day.
          </p>
          <Button asChild variant="outline">
            <Link href="/equipment">View Equipment Rentals</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
