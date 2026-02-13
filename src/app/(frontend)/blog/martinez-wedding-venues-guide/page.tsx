import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Martinez Wedding Venues: Complete 2026 Guide | Primordial Events',
  description: 'Comprehensive guide to Martinez wedding venues including waterfront locations, wineries, and community centers. Compare capacities, pricing, and music restrictions for your perfect day.',
  keywords: 'Martinez wedding venues, Martinez wedding, where to get married Martinez, Martinez waterfront wedding, East Bay wedding venues, Martinez CA weddings',
  openGraph: {
    type: 'article',
    title: 'Martinez Wedding Venues: Complete Guide for 2026',
    description: 'Expert guide to choosing the perfect wedding venue in Martinez, CA.',
  },
}

const relatedPosts = [
  {
    title: 'How to Choose the Perfect Wedding DJ for Your East Bay Wedding',
    slug: '/blog/how-to-choose-wedding-dj',
    category: 'Wedding Tips',
  },
  {
    title: 'Why Premium Equipment Makes Your Event Unforgettable',
    slug: '/blog/why-premium-equipment-matters',
    category: 'Equipment',
  },
  {
    title: 'Corporate Event Entertainment Ideas That Actually Work',
    slug: '/blog/corporate-event-entertainment-ideas',
    category: 'Corporate Events',
  },
]

export default function MartinezWeddingVenuesGuidePage() {
  return (
    <div className="flex flex-col">
      {/* Article Header */}
      <article className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span>Martinez Wedding Venues Guide</span>
          </nav>

          {/* Title & Meta */}
          <header className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge>Wedding Tips</Badge>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">9 min read</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Martinez Wedding Venues: Complete Guide for 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By Chance Neihouse</span>
              <span>•</span>
              <time>February 12, 2026</time>
            </div>
          </header>

          {/* Featured Image Placeholder */}
          <div className="mb-12 overflow-hidden rounded-lg">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mb-2 text-7xl">🏛️</div>
                  <p className="text-sm text-muted-foreground">
                    Featured Image: Martinez Waterfront Venue
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p className="lead text-xl text-muted-foreground">
              Martinez offers some of the East Bay&apos;s most charming wedding venues - from
              waterfront locations with bay views to historic buildings with character. But with
              dozens of options, how do you choose the right one for your special day?
            </p>

            <p>
              As a local DJ who&apos;s performed at virtually every Martinez wedding venue, I know
              the quirks, strengths, and considerations for each location. This guide will help you
              make an informed decision based on your budget, guest count, and vision.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Why Choose Martinez for Your Wedding?
            </h2>

            <p>
              Before we dive into specific venues, here&apos;s why Martinez is such a popular
              wedding destination:
            </p>

            <ul className="my-4 space-y-2">
              <li>
                <strong>Waterfront beauty:</strong> Multiple venues with stunning bay and marina
                views
              </li>
              <li>
                <strong>Historic charm:</strong> Downtown Martinez features beautiful historic
                architecture
              </li>
              <li>
                <strong>Accessible location:</strong> Easy drive from Oakland, Walnut Creek,
                Concord, and beyond
              </li>
              <li>
                <strong>Lower costs:</strong> Compared to San Francisco or Napa, Martinez venues
                offer excellent value
              </li>
              <li>
                <strong>Local vendors:</strong> No travel fees from East Bay-based DJs,
                photographers, and caterers
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Martinez Wedding Venue Categories
            </h2>

            <p>
              Martinez venues fall into several categories, each with distinct characteristics:
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Waterfront & Marina Venues
            </h3>

            <p>
              These venues offer stunning water views and outdoor ceremony spaces. Perfect for
              couples who want that California coastal vibe without San Francisco pricing.
            </p>

            <p>
              <strong>Considerations:</strong> Wind can affect outdoor sound systems, and most have
              strict noise curfews (usually 9 or 10 PM). Weather backup plans are essential.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Historic Buildings
            </h3>

            <p>
              Martinez&apos;s downtown historic district features beautiful architecture from the
              early 1900s. These venues provide character and charm with built-in photo
              opportunities.
            </p>

            <p>
              <strong>Considerations:</strong> Some historic buildings have power limitations or
              require careful equipment setup due to age and layout.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Community Centers & Halls
            </h3>

            <p>
              Budget-friendly options with flexible spaces. You&apos;ll handle more of the setup
              and coordination, but you save significantly on venue costs.
            </p>

            <p>
              <strong>Considerations:</strong> Typically blank-slate spaces that require more
              decoration and vendor coordination. Great if you&apos;re DIY-inclined.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Restaurants & Private Dining
            </h3>

            <p>
              Several Martinez restaurants offer private dining spaces or full buyouts for intimate
              weddings. Food is handled in-house, simplifying planning.
            </p>

            <p>
              <strong>Considerations:</strong> Limited capacity (usually 50-100 guests max) and
              minimal dance floor space. Perfect for dinner-focused celebrations.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Top 10 Martinez Wedding Venues
            </h2>

            <p>
              Here are Martinez&apos;s most popular wedding venues, based on our experience and
              client feedback:
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              1. Muir Lodge - Waterfront Marina
            </h3>

            <p>
              <strong>Capacity:</strong> 150-200 guests
              <br />
              <strong>Price Range:</strong> $3,500-6,000
              <br />
              <strong>Type:</strong> Waterfront event space
            </p>

            <p>
              Stunning marina views with indoor and outdoor spaces. The covered patio works for
              ceremonies, while the main hall provides a beautiful reception space with water views.
            </p>

            <p>
              <strong>Music/DJ notes:</strong> Sound carries over water, so volume restrictions
              apply after 9 PM on weekends. Great acoustics indoors. We&apos;ve worked here dozens
              of times with excellent results.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              2. Rankin Park Community Center
            </h3>

            <p>
              <strong>Capacity:</strong> 100-150 guests
              <br />
              <strong>Price Range:</strong> $800-1,500
              <br />
              <strong>Type:</strong> Community center with park access
            </p>

            <p>
              Budget-friendly option with park setting. The outdoor ceremony space is beautiful,
              and the indoor hall provides a blank canvas for your reception vision.
            </p>

            <p>
              <strong>Music/DJ notes:</strong> Flexible sound rules. Large space accommodates full
              production setups. Power access is excellent throughout the building.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              3. Martinez Yacht Club
            </h3>

            <p>
              <strong>Capacity:</strong> 120-180 guests
              <br />
              <strong>Price Range:</strong> $2,500-4,500
              <br />
              <strong>Type:</strong> Private yacht club with water views
            </p>

            <p>
              Classic yacht club elegance with panoramic bay views. Members get priority booking
              and discounted rates, but it&apos;s available to non-members with higher fees.
            </p>

            <p>
              <strong>Music/DJ notes:</strong> Noise restrictions apply after 10 PM. The main hall
              has great acoustics, but outdoor setups need wind protection for equipment.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              4. Alhambra Valley Hall
            </h3>

            <p>
              <strong>Capacity:</strong> 80-120 guests
              <br />
              <strong>Price Range:</strong> $600-1,200
              <br />
              <strong>Type:</strong> Rustic community hall
            </p>

            <p>
              Charming rustic venue with a local, intimate feel. Perfect for couples wanting a
              relaxed, community-focused celebration.
            </p>

            <p>
              <strong>Music/DJ notes:</strong> Smaller space works well with compact sound systems.
              No major restrictions on volume or time. Great for acoustic-focused weddings.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              5. Waterfront Hotel and Marina
            </h3>

            <p>
              <strong>Capacity:</strong> 150-250 guests
              <br />
              <strong>Price Range:</strong> $4,000-7,500
              <br />
              <strong>Type:</strong> Hotel ballroom with marina views
            </p>

            <p>
              Full-service hotel venue with on-site catering, accommodations for guests, and
              professional event coordination. Everything you need under one roof.
            </p>

            <p>
              <strong>Music/DJ notes:</strong> Professional event space with excellent power and
              setup areas. Hotel coordinator is experienced working with DJs and entertainment.
              Volume limits after 10 PM.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              6. Hidden Lakes Golf Course
            </h3>

            <p>
              <strong>Capacity:</strong> 100-180 guests
              <br />
              <strong>Price Range:</strong> $2,000-4,000
              <br />
              <strong>Type:</strong> Golf course clubhouse
            </p>

            <p>
              Rolling hills, lake views, and manicured grounds. The clubhouse provides indoor space
              while the grounds offer beautiful ceremony locations.
            </p>

            <p>
              <strong>Music/DJ notes:</strong> Flexible on sound within reason. Indoor acoustics
              are good. Outdoor ceremonies need wireless microphones due to distance from the
              reception space.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              7. Veterans Memorial Hall
            </h3>

            <p>
              <strong>Capacity:</strong> 100-200 guests
              <br />
              <strong>Price Range:</strong> $700-1,400
              <br />
              <strong>Type:</strong> Historic community hall
            </p>

            <p>
              Affordable option with downtown Martinez character. The hall is a blank slate,
              allowing complete customization of decor and layout.
            </p>

            <p>
              <strong>Music/DJ notes:</strong> High ceilings require adequate power for sound
              projection. We recommend professional PA systems over consumer gear. No significant
              restrictions.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              8. Grace Presbyterian Church
            </h3>

            <p>
              <strong>Capacity:</strong> 150-250 guests (ceremony), 100-150 (reception hall)
              <br />
              <strong>Price Range:</strong> $1,500-3,000
              <br />
              <strong>Type:</strong> Historic church with reception hall
            </p>

            <p>
              Beautiful historic church for ceremonies, with a separate reception hall on the
              property. Popular for couples wanting a traditional church wedding without traveling
              between locations.
            </p>

            <p>
              <strong>Music/DJ notes:</strong> Church ceremony has strict guidelines (discuss with
              coordinator). Reception hall is flexible. Separate setups required for ceremony and
              reception.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              9. Ristorante Amoroma
            </h3>

            <p>
              <strong>Capacity:</strong> 60-100 guests
              <br />
              <strong>Price Range:</strong> $2,500-4,500 (includes food)
              <br />
              <strong>Type:</strong> Italian restaurant with private dining
            </p>

            <p>
              Intimate downtown restaurant with excellent Italian cuisine. Perfect for smaller
              weddings focused on food and conversation over dancing.
            </p>

            <p>
              <strong>Music/DJ notes:</strong> Limited space for DJ setup. Background music and
              speeches work well, but not ideal for dance-focused receptions. Great for acoustic
              musicians.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              10. Martinez Regional Shoreline Park
            </h3>

            <p>
              <strong>Capacity:</strong> Up to 300 guests (outdoor)
              <br />
              <strong>Price Range:</strong> $200-800 (permit fees)
              <br />
              <strong>Type:</strong> Public park with waterfront areas
            </p>

            <p>
              DIY-friendly option for couples who want an outdoor celebration. You&apos;ll need to
              bring everything, but the natural beauty is unmatched at this price point.
            </p>

            <p>
              <strong>Music/DJ notes:</strong> Requires generator for power. Wind protection
              essential for equipment. Noise ordinances apply. Best for daytime/early evening
              events.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Venue Comparison Table
            </h2>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-xl">Quick Comparison Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Venue</th>
                        <th className="p-2 text-left">Capacity</th>
                        <th className="p-2 text-left">Price Range</th>
                        <th className="p-2 text-left">Best For</th>
                        <th className="p-2 text-left">Noise Limit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-2 font-medium">Muir Lodge</td>
                        <td className="p-2">150-200</td>
                        <td className="p-2">$3.5k-6k</td>
                        <td className="p-2">Waterfront elegance</td>
                        <td className="p-2">9 PM</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Rankin Park CC</td>
                        <td className="p-2">100-150</td>
                        <td className="p-2">$800-1.5k</td>
                        <td className="p-2">Budget-conscious</td>
                        <td className="p-2">Flexible</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Martinez Yacht Club</td>
                        <td className="p-2">120-180</td>
                        <td className="p-2">$2.5k-4.5k</td>
                        <td className="p-2">Classic elegance</td>
                        <td className="p-2">10 PM</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Alhambra Valley</td>
                        <td className="p-2">80-120</td>
                        <td className="p-2">$600-1.2k</td>
                        <td className="p-2">Intimate/rustic</td>
                        <td className="p-2">None</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Waterfront Hotel</td>
                        <td className="p-2">150-250</td>
                        <td className="p-2">$4k-7.5k</td>
                        <td className="p-2">Full service</td>
                        <td className="p-2">10 PM</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Hidden Lakes GC</td>
                        <td className="p-2">100-180</td>
                        <td className="p-2">$2k-4k</td>
                        <td className="p-2">Outdoor lovers</td>
                        <td className="p-2">Flexible</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Veterans Hall</td>
                        <td className="p-2">100-200</td>
                        <td className="p-2">$700-1.4k</td>
                        <td className="p-2">DIY decorators</td>
                        <td className="p-2">None</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Grace Presbyterian</td>
                        <td className="p-2">100-250</td>
                        <td className="p-2">$1.5k-3k</td>
                        <td className="p-2">Traditional church</td>
                        <td className="p-2">Flexible</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Ristorante Amoroma</td>
                        <td className="p-2">60-100</td>
                        <td className="p-2">$2.5k-4.5k</td>
                        <td className="p-2">Intimate dining</td>
                        <td className="p-2">Low volume</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Shoreline Park</td>
                        <td className="p-2">Up to 300</td>
                        <td className="p-2">$200-800</td>
                        <td className="p-2">Outdoor/DIY</td>
                        <td className="p-2">City ordinance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              What to Ask Venues Before Booking
            </h2>

            <p>
              Every venue visit should include these questions:
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Sound and Music Restrictions
            </h3>

            <ul className="my-4 space-y-2">
              <li>What are the noise/volume limits and time restrictions?</li>
              <li>Have previous events had noise complaints?</li>
              <li>Are there restrictions on bass/subwoofers?</li>
              <li>Where can the DJ set up? Is there a dedicated area?</li>
            </ul>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Power and Technical Requirements
            </h3>

            <ul className="my-4 space-y-2">
              <li>How many electrical circuits are available for DJ/entertainment?</li>
              <li>What&apos;s the power capacity? (Professional systems need 15-20 amps minimum)</li>
              <li>Where are outlets located relative to the dance floor?</li>
              <li>Is a generator required or permitted if needed?</li>
            </ul>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Setup and Timeline
            </h3>

            <ul className="my-4 space-y-2">
              <li>When can vendors start setup?</li>
              <li>Is there load-in access for heavy equipment?</li>
              <li>What time must all vendors be cleared out?</li>
              <li>Are there other events before or after yours?</li>
            </ul>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Vendor Requirements
            </h3>

            <ul className="my-4 space-y-2">
              <li>Do you have a preferred vendor list? Is it required or recommended?</li>
              <li>What insurance do vendors need to provide?</li>
              <li>Are there any vendors who are not allowed?</li>
            </ul>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              The Local DJ Advantage in Martinez
            </h2>

            <p>
              When you choose a Martinez or East Bay venue, hiring a local DJ makes financial and
              practical sense:
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              No Travel Fees
            </h3>

            <p>
              San Francisco DJs typically charge $200-500 to travel to Martinez. That&apos;s money
              you could spend on upgrades, better lighting, or other priorities.
            </p>

            <p>
              We&apos;re based in the East Bay. Martinez is our backyard. No travel fees, ever.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              We Know Your Venue
            </h3>

            <p>
              We&apos;ve worked at every major Martinez venue multiple times. We know where to set
              up, what the acoustics are like, which electrical outlets work, and how to work with
              each venue&apos;s coordinators.
            </p>

            <p>
              This experience means smoother setup, better sound, and fewer surprises on your
              wedding day.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Community Reputation
            </h3>

            <p>
              Local DJs can&apos;t afford bad reviews in their own community. We see couples at
              Trader Joe&apos;s, downtown Martinez events, and around the East Bay. Our reputation
              depends on your satisfaction.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Choosing the Right Venue for Your Vision
            </h2>

            <p>
              With so many options, how do you choose? Consider these factors:
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Guest Count
            </h3>

            <p>
              Be realistic about your guest list. A venue that holds 150 feels cramped with 140
              guests but perfect with 100. Leave room for movement, dancing, and mingling.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Budget Beyond the Venue
            </h3>

            <p>
              A $1,000 venue that needs extensive decoration, catering, rentals, and coordination
              might cost more than a $4,000 all-inclusive package. Consider total costs, not just
              venue fees.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Dance Floor Priority
            </h3>

            <p>
              If dancing is crucial to your vision, choose venues with dedicated dance floor space
              and flexible sound rules. Restaurants and small halls might not accommodate an
              energetic dance party.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Weather Backup Plans
            </h3>

            <p>
              Outdoor Martinez venues are beautiful but unpredictable. Make sure there&apos;s an
              indoor backup option or tent rental is permitted.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Beyond Martinez: Nearby Venue Options
            </h2>

            <p>
              If Martinez venues don&apos;t quite fit, consider these nearby East Bay locations
              (all within 15 minutes):
            </p>

            <ul className="my-4 space-y-2">
              <li>
                <strong>Concord:</strong> Todos Santos Plaza venues, Rose Garden, Concord Pavilion
              </li>
              <li>
                <strong>Walnut Creek:</strong> Shadelands Arts Center, Boundary Oak Golf Course
              </li>
              <li>
                <strong>Pleasant Hill:</strong> Pleasant Hill Community Center, Diablo Creek Golf
                Course
              </li>
            </ul>

            <p>
              All still qualify for no-travel-fee service from East Bay DJs.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Our Experience at Martinez Venues
            </h2>

            <p>
              Over the years, we&apos;ve performed at Martinez weddings ranging from intimate
              50-person gatherings to 250-guest celebrations. Here&apos;s what we&apos;ve learned:
            </p>

            <Card className="my-6 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Local DJ Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold">Waterfront venues</p>
                  <p className="text-sm text-muted-foreground">
                    Wind protection for equipment is essential. We bring weighted speaker stands and
                    protective covers. Sound carries over water, so bass management is crucial for
                    noise compliance.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Historic buildings</p>
                  <p className="text-sm text-muted-foreground">
                    Often have unique acoustics due to high ceilings and hard surfaces. Requires
                    professional sound systems with proper EQ adjustments.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Community centers</p>
                  <p className="text-sm text-muted-foreground">
                    Blank-slate spaces allow for creative setups. We often recommend enhanced
                    lighting packages to transform these spaces visually.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Outdoor spaces</p>
                  <p className="text-sm text-muted-foreground">
                    Require more powerful sound systems since sound doesn&apos;t reflect off walls.
                    Weather contingencies are non-negotiable.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Final Recommendations
            </h2>

            <p>
              Choosing your Martinez wedding venue is about more than price and capacity. Consider:
            </p>

            <ul className="my-4 space-y-2">
              <li>
                <strong>Visit in person:</strong> Photos don&apos;t capture acoustics, lighting, or
                flow
              </li>
              <li>
                <strong>Talk to local vendors:</strong> Get insights from DJs, photographers, and
                coordinators who work there regularly
              </li>
              <li>
                <strong>Read the fine print:</strong> Understand restrictions before falling in
                love with a venue
              </li>
              <li>
                <strong>Consider guest experience:</strong> Parking, accessibility, and comfort
                matter
              </li>
              <li>
                <strong>Trust your instinct:</strong> If a venue feels right, it probably is
              </li>
            </ul>

            <p>
              Martinez offers incredible wedding venue diversity at accessible prices. With the
              right venue choice and local vendors, you&apos;ll create an unforgettable East Bay
              celebration.
            </p>

            <p>
              Need help coordinating entertainment for your Martinez venue? We&apos;d love to
              discuss how our experience can help make your day perfect.
            </p>
          </div>

          {/* Author Bio */}
          <div className="mt-12 border-t pt-8">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground">
                CN
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Chance Neihouse</h3>
                <p className="text-sm text-muted-foreground">
                  Founder of Primordial Events, Martinez resident, and East Bay wedding DJ.
                  I&apos;ve performed at virtually every wedding venue in Martinez and love helping
                  couples navigate the venue selection process.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-lg bg-primary/5 p-8 text-center">
            <h3 className="mb-2 text-2xl font-bold">Planning a Martinez Wedding?</h3>
            <p className="mb-6 text-muted-foreground">
              Let&apos;s discuss your venue and how we can create the perfect entertainment
              experience. No travel fees for East Bay locations.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/booking">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/locations/martinez">Martinez DJ Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="border-t bg-muted/40 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((post, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Badge variant="secondary" className="mb-2 w-fit">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg">
                      <Link href={post.slug} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={post.slug}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
