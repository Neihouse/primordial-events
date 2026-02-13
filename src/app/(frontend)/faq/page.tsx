import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  HelpCircle,
  Calendar,
  DollarSign,
  Zap,
  Music,
  ShieldCheck,
  Heart,
  Briefcase,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ - DJ & Event Production Questions | Primordial Events',
  description:
    'Common questions about our DJ services, equipment, pricing, and booking process. Pioneer CDJ-3000s, BASSBOSS speakers, serving Martinez, Concord, Walnut Creek.',
  openGraph: {
    title: 'Frequently Asked Questions | Primordial Events',
    description:
      'Everything you need to know about booking professional DJ and event production services in the East Bay.',
  },
}

const categories = [
  { id: 'booking', label: 'Booking & Availability', icon: Calendar },
  { id: 'pricing', label: 'Pricing & Packages', icon: DollarSign },
  { id: 'equipment', label: 'Equipment & Technical', icon: Zap },
  { id: 'services', label: 'Services & Add-Ons', icon: Music },
  { id: 'insurance', label: 'Insurance & Professionalism', icon: ShieldCheck },
  { id: 'wedding', label: 'Wedding-Specific', icon: Heart },
  { id: 'corporate', label: 'Corporate & School Events', icon: Briefcase },
  { id: 'rental', label: 'Equipment Rental', icon: Zap },
]

export default function FAQPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <Badge className="mb-4" variant="secondary">
          <HelpCircle className="mr-1.5 h-4 w-4" />
          Get Your Questions Answered
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Everything you need to know about booking Primordial Events for your wedding, corporate
          event, or party. Can't find your answer? Contact us anytime.
        </p>
      </div>

      {/* Quick Navigation */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Jump to Category</CardTitle>
            <CardDescription>Quick links to find what you're looking for</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="flex items-center gap-2 rounded-lg border p-3 transition-colors hover:bg-accent"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{category.label}</span>
                  </a>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Sections */}
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Booking & Availability */}
        <section id="booking">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Booking & Availability</h2>
            </div>
            <p className="text-muted-foreground">
              Questions about scheduling, deposits, and booking your event
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How far in advance should I book?</AccordionTrigger>
              <AccordionContent>
                For weddings, we recommend booking 6-12 months in advance, especially for peak
                season (May-October). Corporate events typically book 2-6 months out. School events
                can often be scheduled 1-3 months ahead. However, we've accommodated last-minute
                requests with as little as 2 weeks notice depending on availability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What's your cancellation policy?</AccordionTrigger>
              <AccordionContent>
                Your deposit is non-refundable once your date is confirmed, as we turn away other
                bookings to reserve that date for you. If you need to reschedule, we'll work with
                you to find a new date within the same calendar year at no additional charge
                (subject to availability). Cancellations within 60 days of the event forfeit the
                full payment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you have backup equipment?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We bring backup equipment to every event, including spare CDJs,
                mixers, microphones, and cables. Our equipment trailer is equipped with redundant
                systems so we can handle any technical issue without interrupting your event. This
                is standard practice for all our bookings at no extra charge.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What if my DJ gets sick on the day of the event?</AccordionTrigger>
              <AccordionContent>
                We have a network of professional backup DJs who are familiar with our equipment
                and processes. If an emergency prevents us from performing, we'll provide a
                qualified replacement DJ at no additional cost. This has never happened in our
                history, but we have contingency plans in place to protect your event.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How do I check your availability?</AccordionTrigger>
              <AccordionContent>
                The fastest way is to visit our{' '}
                <Link href="/booking" className="text-primary hover:underline">
                  booking page
                </Link>{' '}
                and submit a request with your event date. We typically respond within 2 hours
                (9am-9pm daily) to confirm availability. You can also email us at
                info@primordial.events or call during business hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What's included in your deposit?</AccordionTrigger>
              <AccordionContent>
                Our deposit is typically 25-50% of the total booking cost and reserves your date
                exclusively. The deposit includes preliminary planning, equipment allocation, and
                coordination calls. Once we receive your deposit and signed contract, your date is
                locked in and we turn away all other inquiries for that day.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Do you offer payment plans?</AccordionTrigger>
              <AccordionContent>
                Yes! For bookings over $2,000, we can arrange payment plans. Typically this is 50%
                deposit at booking, 25% at 60 days before the event, and 25% final payment 14 days
                before. Corporate clients can request NET 30 terms with approved credit. Contact us
                to discuss options that work for your budget.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Can I see you perform before booking?</AccordionTrigger>
              <AccordionContent>
                We occasionally host public events where you can see our setup and performance
                style. Check our{' '}
                <Link href="/gallery" className="text-primary hover:underline">
                  gallery
                </Link>{' '}
                for videos and photos from recent events. We're also happy to schedule a video call
                to show you our equipment and discuss your music preferences in detail.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Do you travel outside the East Bay?</AccordionTrigger>
              <AccordionContent>
                Our primary service area is Martinez, Concord, Walnut Creek, and the East Bay. We
                do travel to San Francisco, Sacramento, Napa, and surrounding areas for an
                additional travel fee (typically $100-300 depending on distance). Contact us with
                your venue location for a specific quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>What happens after I submit a booking request?</AccordionTrigger>
              <AccordionContent>
                You'll receive a confirmation email immediately, followed by a personalized
                response from us within 2 hours confirming availability and discussing your needs.
                If we're available, we'll send you a detailed quote and contract. Once you return
                the signed contract with your deposit, your date is officially reserved.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Pricing & Packages */}
        <section id="pricing">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Pricing & Packages</h2>
            </div>
            <p className="text-muted-foreground">
              Transparent pricing information for all our services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What's included in the basic package?</AccordionTrigger>
              <AccordionContent>
                Our basic DJ package includes professional DJ services with Pioneer CDJ-3000s and
                DJM-900NXS2 mixer, BASSBOSS sound system (scaled to your guest count), wireless
                microphones, basic lighting, music consultation, and timeline coordination. Setup
                and breakdown are included, along with backup equipment and liability insurance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How much do you charge for weddings?</AccordionTrigger>
              <AccordionContent>
                Wedding packages range from $2,200-$4,500 depending on the duration, guest count,
                and services required. A typical 5-hour wedding reception with ceremony sound and
                uplighting runs around $3,200. Custom packages with lasers, extra lighting, or
                photo booth services are available. Every wedding quote is customized to your
                specific needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you charge travel fees?</AccordionTrigger>
              <AccordionContent>
                Events within Martinez, Concord, Walnut Creek, and the immediate East Bay have no
                travel fees. Events outside this area may include a travel fee of $100-300
                depending on distance and load-in complexity. We'll always disclose any travel fees
                upfront in your quote. There are no hidden charges.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What are your overtime rates?</AccordionTrigger>
              <AccordionContent>
                If your event runs longer than the contracted time, overtime is available at
                $150-200 per hour depending on the package. We always confirm overtime rates in
                your contract so there are no surprises. Many clients pre-book an extra hour "just
                in case" at a discounted rate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer discounts?</AccordionTrigger>
              <AccordionContent>
                We offer discounts for weekday events (Sunday-Thursday), off-season bookings
                (November-March), non-profit organizations, and school events. Multiple event
                bookings (like rehearsal dinner + wedding) also receive package pricing. Contact us
                to discuss available discounts for your specific situation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What forms of payment do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept credit cards (Visa, Mastercard, Amex), debit cards, bank transfers, Zelle,
                and checks. For corporate clients, we can invoice with NET 30 terms. Payment plans
                are available for larger bookings. Credit card processing includes a small convenience
                fee (typically 3%).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>When is final payment due?</AccordionTrigger>
              <AccordionContent>
                Final payment is due 14 days before your event date. This allows us to finalize all
                details and ensure everything is prepared. For payment plan clients, we'll send
                automated reminders before each payment is due. Corporate NET 30 clients receive an
                invoice the week of the event.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Are there any hidden fees?</AccordionTrigger>
              <AccordionContent>
                No hidden fees, ever. Your quote includes everything discussed: equipment, labor,
                travel (if applicable), insurance, and setup/breakdown. The only additional charges
                would be optional add-ons you request after booking (like extra uplighting) or
                overtime if your event runs long. All costs are transparently outlined in your
                contract.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Equipment & Technical */}
        <section id="equipment">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Equipment & Technical</h2>
            </div>
            <p className="text-muted-foreground">
              Technical details about our professional gear and setup
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What equipment do you use?</AccordionTrigger>
              <AccordionContent>
                We use professional-grade equipment exclusively: Pioneer CDJ-3000s (industry-standard
                club players), DJM-900NXS2 mixer, BASSBOSS VS21 and MK3 speakers (same system used
                by touring DJs), Unity RAW MICRO Scan lasers, Chauvet DJ moving heads and LED par
                lights. See our{' '}
                <Link href="/our-equipment" className="text-primary hover:underline">
                  equipment page
                </Link>{' '}
                for full specifications.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Why does equipment matter?</AccordionTrigger>
              <AccordionContent>
                Quality equipment means better sound, more reliable performance, and a more
                professional experience. Our BASSBOSS speakers deliver clear, powerful audio without
                distortion even at high volumes. Pioneer CDJ-3000s provide seamless mixing and
                access to streaming services. Professional gear also looks impressive and shows your
                guests you've hired a serious operation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you bring backup equipment?</AccordionTrigger>
              <AccordionContent>
                Yes, we bring backup equipment to every single event at no extra charge. This
                includes spare CDJs, mixer, microphones, cables, and even backup speakers for
                smaller events. Our equipment trailer is essentially a mobile nightclub with
                redundant systems. We've never had to cancel or interrupt an event due to equipment
                failure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can you handle outdoor events?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We have weather-protected equipment covers and can adapt to outdoor
                conditions. Our speakers and lighting are designed for outdoor use. We do require
                covered power sources (generator or building power) and some weather protection for
                the DJ booth (tent or canopy). We'll discuss outdoor-specific requirements during
                planning.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What if the venue has sound restrictions?</AccordionTrigger>
              <AccordionContent>
                We work with noise-restricted venues frequently. Our system includes sound limiters
                and decibel meters to ensure we stay within venue requirements while still
                delivering great sound quality. We'll coordinate with your venue in advance to
                understand their restrictions and configure our setup accordingly. No event is too
                quiet for us to work with.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Do you need specific power requirements?</AccordionTrigger>
              <AccordionContent>
                We typically need 2-3 dedicated 20-amp circuits (standard wall outlets) depending on
                the system size. For larger events with full lighting and lasers, we may need up to
                4 circuits. We'll review your venue's power situation during planning and can work
                with generators if needed. Most venues have adequate power for our standard
                packages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>How long does setup take?</AccordionTrigger>
              <AccordionContent>
                Standard DJ setup takes 60-90 minutes. Adding uplighting adds another 30 minutes.
                Full production with lasers and extensive lighting takes 2-3 hours. We arrive early
                enough to complete setup, test everything, and be ready well before your guests
                arrive. Breakdown typically takes 45-60 minutes after your event ends.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>
                What happens if equipment breaks during the event?
              </AccordionTrigger>
              <AccordionContent>
                This is why we bring backup equipment. If a primary component fails, we can swap it
                out in under 60 seconds without your guests even noticing. We've had equipment
                failures before (a microphone battery died, a cable went bad) and handled them
                seamlessly. Your event will not be interrupted - we guarantee it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Do you bring your own tables and equipment stands?</AccordionTrigger>
              <AccordionContent>
                Yes, we provide all necessary tables, equipment stands, speaker poles, and cable
                management. You don't need to supply any technical gear or furniture for our setup.
                We can also work with existing stages, bandstands, or DJ booths if your venue has
                them. Everything is included in your package price.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Can your lasers be used indoors?</AccordionTrigger>
              <AccordionContent>
                Yes! Our Unity RAW MICRO Scan lasers are safe for both indoor and outdoor use. They
                create stunning beam effects and are fully compliant with FDA laser safety
                regulations. We can scale the intensity based on your venue size and guest count.
                Some venues restrict lasers, so we'll confirm permissions during venue coordination.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Services & Add-Ons */}
        <section id="services">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Music className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Services & Add-Ons</h2>
            </div>
            <p className="text-muted-foreground">
              Additional services and entertainment options available
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you offer ceremony sound?</AccordionTrigger>
              <AccordionContent>
                Yes! Wedding ceremony sound is a popular add-on ($200-400). We provide wireless
                microphones for officiant and readings, speakers for processional/recessional music,
                and an operator to manage everything smoothly. We arrive early to set up ceremony
                sound, then transition to reception setup during cocktail hour.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can you provide uplighting?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Uplighting transforms your venue with customizable colored lighting
                around the perimeter. We typically use 8-16 wireless LED uplights depending on room
                size ($300-600 add-on). Colors can match your wedding theme or change throughout the
                evening. This is one of our most popular add-ons for the dramatic visual impact it
                creates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you have lasers?</AccordionTrigger>
              <AccordionContent>
                Yes! We have Unity RAW MICRO Scan lasers that create stunning aerial beam effects.
                These are the same lasers used in nightclubs and concerts. Perfect for creating a
                high-energy atmosphere during dancing. Laser add-on is typically $400-600 depending
                on the package. We'll confirm your venue allows lasers during planning.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can you do trivia or karaoke?</AccordionTrigger>
              <AccordionContent>
                Yes to both! We offer professional trivia hosting for corporate events, fundraisers,
                and parties ($800-1,500). Karaoke packages include songbooks, screens, and hosting
                ($300-500 add-on). Both services use our professional sound system for excellent
                audio quality. These are especially popular for corporate team-building and birthday
                parties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Do you take song requests?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We encourage song requests and read the crowd throughout the evening.
                You can provide a "must-play" list before the event, and guests can make requests
                during your event. We have access to essentially any commercially released song
                through our streaming integration and extensive digital library. If it exists, we can
                play it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Can you MC/make announcements?</AccordionTrigger>
              <AccordionContent>
                Yes, MC services are included in all our DJ packages at no extra charge. We'll
                handle introductions, announcements, timeline coordination, and keeping your event
                flowing smoothly. For weddings, this includes introducing the wedding party, first
                dance, cake cutting, bouquet toss, and any special moments. We coordinate with your
                other vendors to ensure perfect timing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Do you provide wireless microphones?</AccordionTrigger>
              <AccordionContent>
                Yes, wireless microphones are included in all packages. We typically bring 2-4
                wireless microphones depending on your needs - perfect for toasts, speeches,
                announcements, or ceremony officiants. Our Shure wireless systems provide clear,
                reliable audio without the hassle of cables. Additional microphones are available if
                you have a large wedding party giving toasts.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Can you provide a photo booth?</AccordionTrigger>
              <AccordionContent>
                We partner with local photo booth providers and can coordinate this add-on for you.
                Photo booths typically run $400-800 for 3-4 hours and include props, prints, and
                digital copies. While we don't operate the photo booth ourselves, we can include it
                in your package quote and coordinate setup/breakdown with our timeline.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Insurance & Professionalism */}
        <section id="insurance">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Insurance & Professionalism</h2>
            </div>
            <p className="text-muted-foreground">
              Professional credentials and business practices
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Are you insured?</AccordionTrigger>
              <AccordionContent>
                Yes, we carry $2M+ general liability insurance and $50K+ equipment insurance. This
                protects you, your venue, and our equipment in case of accidents or damage. We're
                also properly licensed as a business in California. Professional insurance is
                non-negotiable for us - it's part of operating a legitimate, professional business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can you provide a certificate of insurance?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We can provide a Certificate of Insurance within 1-2 business days at no
                additional charge. We can also add your venue as an additional insured on our policy
                (also free). Many upscale venues and corporate clients require this. Just let us
                know your venue name, address, and event date. See our{' '}
                <Link href="/insurance-info" className="text-primary hover:underline">
                  insurance page
                </Link>{' '}
                for details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you have contracts?</AccordionTrigger>
              <AccordionContent>
                Yes, we use detailed contracts for every booking. The contract outlines all services,
                equipment, pricing, timeline, cancellation policy, and responsibilities for both
                parties. This protects you and ensures we're on the same page about every detail.
                You'll receive your contract via email after we finalize your quote, and we can
                discuss any questions before signing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Are you background checked? (for schools)</AccordionTrigger>
              <AccordionContent>
                Yes, we're happy to provide background checks for school events. We understand that
                schools have strict vendor requirements for anyone working with students. We can
                provide TB test results, fingerprinting, and background checks as required by your
                district. We've worked with numerous school districts and understand their protocols.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What's your experience level?</AccordionTrigger>
              <AccordionContent>
                We've provided DJ and production services for hundreds of events including weddings,
                corporate galas, school dances, private parties, and club nights. Our experience
                spans multiple genres, venue types, and client needs. We've worked with venues
                throughout the East Bay and have relationships with event planners, caterers, and
                photographers. Check our{' '}
                <Link href="/gallery" className="text-primary hover:underline">
                  gallery
                </Link>{' '}
                for photos and videos from recent events.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Do you have references?</AccordionTrigger>
              <AccordionContent>
                Yes! We can provide references from recent clients including wedding couples,
                corporate event planners, and school administrators. We also have reviews and
                testimonials available. During your consultation, we're happy to connect you with
                past clients who can speak to their experience working with us. Most of our bookings
                come from referrals and repeat clients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>What's your dress code?</AccordionTrigger>
              <AccordionContent>
                We dress to match your event's formality. For weddings, we typically wear all black
                (dress pants, button-up shirt, or suit if requested). For corporate events, business
                professional attire. For casual parties or school events, we can dress down
                appropriately. Let us know your preference and we'll match your event's style.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Wedding-Specific */}
        <section id="wedding">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Wedding-Specific</h2>
            </div>
            <p className="text-muted-foreground">
              Questions specific to wedding receptions and ceremonies
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you offer ceremony music?</AccordionTrigger>
              <AccordionContent>
                Yes! Ceremony sound is a $200-400 add-on that includes wireless microphones for your
                officiant and readers, speakers for processional/recessional music, and an operator
                to ensure everything runs smoothly. We'll create a ceremony playlist based on your
                preferences and coordinate timing with your wedding planner or coordinator.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can you coordinate with other vendors?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We coordinate with your photographer, videographer, caterer, and wedding
                planner to ensure perfect timing throughout the evening. We'll communicate about
                key moments (grand entrance, first dance, cake cutting, etc.) so everyone is ready.
                This coordination is included in all our wedding packages and is crucial for a
                smoothly flowing reception.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you help with timeline planning?</AccordionTrigger>
              <AccordionContent>
                Yes! We'll work with you to create a detailed reception timeline including
                cocktail hour, grand entrance, dinner service, toasts, first dance, parent dances,
                cake cutting, bouquet toss, last dance, and everything in between. We've done this
                hundreds of times and can advise on realistic timing. We'll also adjust the
                timeline on the fly if needed during your event.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What's your music library like?</AccordionTrigger>
              <AccordionContent>
                We have access to millions of songs through streaming services (Spotify, Tidal) and
                our extensive digital library. This includes current hits, 80s/90s classics, Motown,
                disco, country, hip-hop, Latin music, and everything in between. We can handle any
                musical preference or genre. If you want specific versions or remixes, just let us
                know in advance and we'll have them ready.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can we provide a "do not play" list?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Many couples have songs they want to avoid (overplayed wedding songs,
                certain artists, explicit content, etc.). Send us your "do not play" list and we'll
                ensure those songs never get played. We'll also check with you before playing any
                potentially controversial songs during your event. Your preferences are our
                priority.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Do you dress formally?</AccordionTrigger>
              <AccordionContent>
                Yes, for weddings we typically wear all black professional attire (dress pants,
                button-up shirt). If your wedding is black-tie, we can wear a suit or tuxedo. If
                it's more casual, we can dress down appropriately. We believe your DJ should look
                professional and blend in with your event, not stand out. Let us know your dress
                code and we'll match it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>How do you handle requests at the event?</AccordionTrigger>
              <AccordionContent>
                We encourage guest requests and read the crowd throughout the night. We'll play
                requests that fit the vibe and keep the dance floor active, while avoiding songs
                that might clear the floor or conflict with your "do not play" list. We balance
                guest requests with your preferences and what's working for the crowd. You always
                have final say - we can announce that all requests should be approved by you first.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Can you play music during dinner?</AccordionTrigger>
              <AccordionContent>
                Yes! Dinner music is included in all packages. We'll create background music that
                sets the mood while allowing conversation (typically jazz, acoustic covers, or your
                preferred style). Volume is kept low enough for table conversation but present
                enough to fill awkward silences. We can also make announcements during dinner for
                toasts, presentations, or slideshow introductions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Corporate & School Events */}
        <section id="corporate">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Corporate & School Events</h2>
            </div>
            <p className="text-muted-foreground">
              Information for business and educational events
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you have experience with corporate events?</AccordionTrigger>
              <AccordionContent>
                Yes! We've provided services for corporate holiday parties, product launches,
                conferences, team-building events, and awards galas. We understand professional
                environments and can adapt our services to corporate needs including branded
                presentations, specific audio requirements, and coordination with AV teams. We're
                comfortable working with event planners and corporate stakeholders.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can you invoice with NET 30 terms?</AccordionTrigger>
              <AccordionContent>
                Yes, for established corporate clients with approved credit, we offer NET 30
                invoicing terms. We'll send the invoice the week of your event, due 30 days later.
                First-time corporate clients typically pay 50% deposit to reserve the date, then
                NET 30 for the balance. Contact us to discuss invoicing options that work with your
                company's accounts payable process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Are you comfortable with school-age children?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We've provided DJ services for middle school dances, high school proms,
                elementary school events, and college functions. We know how to engage younger
                crowds, keep energy high, and maintain appropriate content. We're happy to provide
                background checks and follow all district requirements. We understand school culture
                and work within administrative guidelines.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Do you have appropriate music for school events?</AccordionTrigger>
              <AccordionContent>
                Yes! We maintain clean, age-appropriate playlists for school events with no explicit
                content, profanity, or inappropriate themes. We're familiar with current music that
                students love but in clean versions. We also take requests from students but filter
                them through appropriateness standards. We've never had a complaint from school
                administrators about music content.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can you provide audio for presentations or speakers?</AccordionTrigger>
              <AccordionContent>
                Yes! Our systems can support presentations, keynote speakers, panel discussions,
                and awards ceremonies. We can integrate with laptops for slideshow audio, provide
                multiple microphones for panels, and adjust audio levels for different speakers.
                For corporate events, we coordinate with in-house AV teams or provide complete audio
                support as needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Do you handle corporate branding or custom content?</AccordionTrigger>
              <AccordionContent>
                We can incorporate corporate branding, custom announcements, and specific audio
                content into your event. This might include company jingles, branded intro music,
                or specific messaging. While we don't provide video production services, we can
                coordinate with your marketing team to integrate audio elements that support your
                brand and message.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Equipment Rental */}
        <section id="rental">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Equipment Rental</h2>
            </div>
            <p className="text-muted-foreground">
              Questions about renting equipment without DJ services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I rent equipment without a DJ?</AccordionTrigger>
              <AccordionContent>
                Yes! We offer equipment rental packages for DIY customers who want professional
                gear without hiring a DJ. This is popular for corporate presentations, school
                events with student DJs, and house parties. Rental packages include speakers, CDJs
                or mixers, microphones, and basic lighting. See our{' '}
                <Link href="/equipment-rental" className="text-primary hover:underline">
                  equipment rental page
                </Link>{' '}
                for available packages and pricing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What's included in equipment rental?</AccordionTrigger>
              <AccordionContent>
                Equipment rental packages typically include speakers, CDJs or mixer, microphones,
                cables, stands, and basic setup instructions. We can deliver and set up the
                equipment for an additional fee, or you can pick it up from our location. We also
                provide a brief tutorial on operating the equipment. Insurance and damage deposits
                are required for all rentals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How does delivery work?</AccordionTrigger>
              <AccordionContent>
                We offer delivery, setup, and pickup for equipment rentals within the East Bay
                ($100-300 depending on distance and package size). We'll arrive a few hours before
                your event to set everything up, provide a quick tutorial, and ensure it's working
                properly. After your event, we return to break everything down. Self-pickup is also
                available at a discounted rate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What if I damage rented equipment?</AccordionTrigger>
              <AccordionContent>
                We require a damage deposit (typically $200-500) for all equipment rentals, which
                is fully refundable if equipment is returned in good condition. Normal wear and tear
                is expected, but damage beyond this (broken components, missing cables, liquid
                spills) will be deducted from your deposit. We'll inspect the equipment together
                during pickup so there are no surprises. We also offer rental insurance for an
                additional fee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I rent just speakers or just lighting?</AccordionTrigger>
              <AccordionContent>
                Yes! We offer à la carte equipment rental as well as packages. You can rent just
                speakers, just lighting, just microphones, or any combination you need. Pricing
                depends on the specific equipment and rental duration. Contact us with your specific
                needs and we'll create a custom rental quote. Multi-day rentals receive discounted
                rates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Do you provide technical support during equipment rental?</AccordionTrigger>
              <AccordionContent>
                We provide setup instructions and a brief tutorial when delivering equipment. For
                an additional fee, we can provide on-call technical support during your event or
                even station a technician on-site (this essentially becomes a technical support
                package rather than pure rental). For most DIY customers, our equipment is
                intuitive enough that support isn't needed, but the option is available if you want
                peace of mind.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>

      {/* Call-to-Action Section */}
      <section className="mt-16">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl sm:text-3xl">Still Have Questions?</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              We're here to help. Contact us anytime for personalized answers.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90">
                <Link href="/booking">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            <p className="text-center text-sm text-primary-foreground/80">
              We typically respond within 2 hours (9am-9pm daily)
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Additional Quick Links */}
      <section className="mt-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg bg-muted p-6 text-center">
            <p className="mb-3 font-semibold">Looking for more information?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="outline" size="sm">
                <Link href="/our-equipment">View Our Equipment</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/insurance-info">Insurance Details</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/gallery">Photo Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
