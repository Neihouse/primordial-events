import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'How to Choose the Perfect Wedding DJ for Your East Bay Wedding',
  description: 'Expert guide to selecting a wedding DJ in the East Bay. Learn what questions to ask, red flags to avoid, and why local DJs save you money on your special day.',
  keywords: 'how to choose wedding DJ, East Bay wedding DJ, wedding DJ checklist, Martinez wedding DJ, Concord wedding DJ, choose DJ for wedding',
  openGraph: {
    type: 'article',
    title: 'How to Choose the Perfect Wedding DJ for Your East Bay Wedding',
    description: 'Essential checklist and expert tips for finding the right wedding DJ.',
  },
}

const relatedPosts = [
  {
    title: 'Why Premium Equipment Makes Your Event Unforgettable',
    slug: '/blog/why-premium-equipment-matters',
    category: 'Equipment',
  },
  {
    title: 'Martinez Wedding Venues: Complete Guide for 2026',
    slug: '/blog/martinez-wedding-venues-guide',
    category: 'Wedding Tips',
  },
  {
    title: 'Corporate Event Entertainment Ideas That Actually Work',
    slug: '/blog/corporate-event-entertainment-ideas',
    category: 'Corporate Events',
  },
]

export default function HowToChooseWeddingDJPage() {
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
            <span>How to Choose the Perfect Wedding DJ</span>
          </nav>

          {/* Title & Meta */}
          <header className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge>Wedding Tips</Badge>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">10 min read</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              How to Choose the Perfect Wedding DJ for Your East Bay Wedding
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
                  <div className="mb-2 text-7xl">💍</div>
                  <p className="text-sm text-muted-foreground">
                    Featured Image: Wedding DJ Setup
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p className="lead text-xl text-muted-foreground">
              Choosing your wedding DJ is one of the most important decisions you&apos;ll make for
              your big day. They&apos;ll control the energy, keep your guests entertained, and
              create memories that last a lifetime. But with hundreds of DJs in the Bay Area, how
              do you find the right one?
            </p>

            <p>
              After performing at hundreds of East Bay weddings, I&apos;ve seen what separates
              great DJs from mediocre ones. This guide will help you ask the right questions, spot
              red flags, and make a confident choice for your wedding.
            </p>

            {/* Table of Contents */}
            <Card className="my-8 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">What You&apos;ll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Essential questions to ask potential DJs</li>
                  <li>Red flags that signal trouble</li>
                  <li>Why equipment quality matters</li>
                  <li>Experience vs. price considerations</li>
                  <li>Benefits of hiring local East Bay DJs</li>
                  <li>How to read reviews effectively</li>
                  <li>Meeting your DJ before booking</li>
                  <li>Contract essentials to protect yourself</li>
                  <li>Complete DJ selection checklist</li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              10 Essential Questions to Ask Every Wedding DJ
            </h2>

            <p>
              Before you book anyone, these questions will reveal whether a DJ is truly
              professional or just playing music as a side gig.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              1. How many weddings have you performed?
            </h3>

            <p>
              Experience matters. A DJ who&apos;s done 100+ weddings knows how to handle
              unexpected situations: late guests, timeline changes, awkward family dynamics, and
              technical issues.
            </p>

            <p>
              <strong>What to look for:</strong> At least 50 weddings for established DJs. Newer
              DJs (10-20 weddings) can be great if they have event production experience and
              premium equipment.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              2. What equipment do you use?
            </h3>

            <p>
              This is where many couples make mistakes. Your DJ should be able to explain their
              equipment in detail. If they can&apos;t name specific gear or say &quot;just some
              speakers and a controller,&quot; that&apos;s a red flag.
            </p>

            <Card className="my-6 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Professional Equipment Includes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  <strong>Audio:</strong> Pioneer CDJs or professional controllers, club-standard
                  mixers, powered PA speakers, professional subwoofers
                </p>
                <p className="text-sm">
                  <strong>Microphones:</strong> Wireless lavs for ceremony, handheld for toasts
                </p>
                <p className="text-sm">
                  <strong>Lighting:</strong> Intelligent moving heads, uplighting, dance floor
                  effects
                </p>
                <p className="text-sm">
                  <strong>Backup:</strong> Redundant systems for critical equipment
                </p>
              </CardContent>
            </Card>

            <p>
              Want to understand why equipment matters? Read our detailed breakdown:{' '}
              <Link href="/blog/why-premium-equipment-matters" className="text-primary hover:underline">
                Why Premium Equipment Makes Your Event Unforgettable
              </Link>
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              3. Do you have liability insurance?
            </h3>

            <p>
              Non-negotiable. Professional DJs carry $1-2 million in liability insurance. Many
              venues require it. If a DJ says &quot;I&apos;ve never needed it,&quot; walk away.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              4. Will you be the DJ at my wedding?
            </h3>

            <p>
              Some DJ companies send different DJs to different events. You should meet the actual
              person who will perform at your wedding. Chemistry matters - you need to feel
              comfortable with this person.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              5. What&apos;s your music library size?
            </h3>

            <p>
              Professional DJs should have 20,000+ tracks covering multiple decades and genres.
              They should also subscribe to music pools for new releases.
            </p>

            <p>
              <strong>Pro tip:</strong> Ask how they handle music requests. The best DJs prepare
              custom playlists before your event and can source any reasonable request within 24
              hours.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              6. How do you handle timeline changes or emergencies?
            </h3>

            <p>
              Weddings rarely go exactly as planned. Your photographer runs late. Grandma
              can&apos;t find the venue. The caterer needs an extra 15 minutes.
            </p>

            <p>
              Experienced DJs flow with these changes, keep guests entertained during delays, and
              work with your coordinator to adjust seamlessly.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              7. Do you charge travel fees?
            </h3>

            <p>
              Here&apos;s where being in the East Bay saves you money. San Francisco-based DJs
              often charge $200-500 in travel fees for Martinez, Concord, or Walnut Creek venues.
            </p>

            <p>
              Local East Bay DJs? No travel fees. You get premium service without the San
              Francisco premium.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              8. What&apos;s your backup plan if you&apos;re sick?
            </h3>

            <p>
              Professional DJs have a network of qualified replacements and backup equipment.
              They should be able to describe exactly what happens if they can&apos;t make it.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              9. Can I see a full contract before booking?
            </h3>

            <p>
              Legitimate DJs provide detailed contracts. If someone wants to &quot;keep it
              casual&quot; or asks for payment without a contract, run.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              10. What&apos;s included in your package?
            </h3>

            <p>
              Get specifics: ceremony sound, cocktail hour, reception, number of speakers,
              lighting, setup/breakdown time, planning meetings, and timeline assistance.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Red Flags That Should Make You Walk Away
            </h2>

            <p>
              Some warning signs are subtle. Others should send you running. Here&apos;s what
              to watch for:
            </p>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-xl">Immediate Dealbreakers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold text-red-600">No contract or insurance</p>
                  <p className="text-sm text-muted-foreground">
                    This means they&apos;re not a legitimate business. You have zero protection.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-red-600">Can&apos;t name their equipment</p>
                  <p className="text-sm text-muted-foreground">
                    If they don&apos;t know what gear they use, they&apos;re using consumer
                    equipment or don&apos;t understand audio quality.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-red-600">Requires full payment upfront</p>
                  <p className="text-sm text-muted-foreground">
                    Professionals take deposits (25-50%) with the balance due closer to the event.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-red-600">Won&apos;t meet in person or video call</p>
                  <p className="text-sm text-muted-foreground">
                    You need to meet your DJ. Chemistry and communication are crucial.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-red-600">Negative or defensive about questions</p>
                  <p className="text-sm text-muted-foreground">
                    Professional DJs welcome questions. Defensive responses suggest inexperience.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-red-600">No social media or online reviews</p>
                  <p className="text-sm text-muted-foreground">
                    Even new DJs should have some online presence. Zero reviews is suspicious.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Equipment Quality vs. Price: What Actually Matters
            </h2>

            <p>
              You&apos;ll find wedding DJs charging anywhere from $800 to $3,500+ in the Bay Area.
              What justifies the difference?
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              The Budget DJ ($800-1,200)
            </h3>

            <p>
              <strong>Typical setup:</strong> Consumer DJ controller, powered PA speakers, basic
              lighting.
            </p>

            <p>
              <strong>What you get:</strong> Music and announcements. Sound quality is okay at low
              volumes but distorts when turned up. Lighting is basic color changes.
            </p>

            <p>
              <strong>Risk factors:</strong> Equipment failures, limited experience with wedding
              flow, no backup gear.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              The Mid-Range DJ ($1,500-2,200)
            </h3>

            <p>
              <strong>Typical setup:</strong> Professional controller or entry-level CDJs, quality
              PA system, upgraded lighting.
            </p>

            <p>
              <strong>What you get:</strong> Good sound quality, reliable equipment, experienced
              with weddings, professional lighting.
            </p>

            <p>
              <strong>Sweet spot:</strong> This is where most couples should be looking. Good
              value, professional results.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              The Premium DJ ($2,500-3,500+)
            </h3>

            <p>
              <strong>Typical setup:</strong> Pioneer CDJ-3000s, club-standard mixers, BASSBOSS or
              equivalent subs, intelligent lighting, lasers.
            </p>

            <p>
              <strong>What you get:</strong> Nightclub-quality sound, bass you feel physically,
              stunning visual effects, extensive experience.
            </p>

            <p>
              <strong>Worth it if:</strong> Sound quality matters to you, you want a high-energy
              dance floor, or your venue is large (150+ guests).
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Why Local East Bay DJs Make Financial Sense
            </h2>

            <p>
              Getting married in Martinez, Concord, Walnut Creek, or anywhere in Contra Costa
              County? Hiring a local DJ can save you hundreds while getting better service.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              No Travel Fees
            </h3>

            <p>
              San Francisco DJs typically add $200-500 for East Bay events. That&apos;s pure
              overhead with zero benefit to your wedding. Local DJs build that into their base
              price or charge nothing extra.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Venue Knowledge
            </h3>

            <p>
              Local DJs have worked at your venue before. They know the acoustics, loading dock,
              power situation, and venue coordinator. This means smoother setup and better sound.
            </p>

            <p>
              We&apos;ve worked at virtually every wedding venue in Contra Costa County. That
              experience prevents problems before they happen.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Community Reputation
            </h3>

            <p>
              Local DJs live in the community. They can&apos;t afford bad reviews from neighbors.
              San Francisco DJs might never work in the East Bay again - less accountability.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              How to Actually Read DJ Reviews
            </h2>

            <p>
              Five-star reviews are great, but you need to read between the lines.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              What to Look For in Positive Reviews
            </h3>

            <ul className="my-4 space-y-2">
              <li>
                <strong>Specific details:</strong> &quot;DJ adapted when our photographer ran 20
                minutes late&quot; is more valuable than &quot;great DJ!&quot;
              </li>
              <li>
                <strong>Problem-solving mentions:</strong> How did the DJ handle unexpected
                issues?
              </li>
              <li>
                <strong>Guest reactions:</strong> &quot;Our guests are still talking about the
                dance floor&quot; means energy management
              </li>
              <li>
                <strong>Timeline coordination:</strong> Working well with other vendors is crucial
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Red Flags in Reviews
            </h3>

            <ul className="my-4 space-y-2">
              <li>Multiple mentions of equipment failures or sound issues</li>
              <li>Communication problems leading up to the event</li>
              <li>DJ playing their favorites instead of reading the crowd</li>
              <li>Showing up late or rushing setup</li>
              <li>Unprofessional appearance or behavior</li>
            </ul>

            <p>
              <strong>Pro tip:</strong> One or two negative reviews among dozens of positive ones
              is normal. Five negative reviews? Pattern.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Meeting Your DJ: What to Discuss
            </h2>

            <p>
              Once you&apos;ve narrowed down to 2-3 DJs, schedule meetings. Here&apos;s what to
              cover:
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Your Vision and Music Preferences
            </h3>

            <p>
              Be specific about the atmosphere you want. Elegant and sophisticated? High-energy
              dance party? Both at different times?
            </p>

            <p>
              Share must-play songs, do-not-play songs, and general genre preferences. Good DJs
              will ask follow-up questions to understand your taste.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Timeline and Coordination
            </h3>

            <p>
              Discuss your rough timeline. Experienced DJs will spot potential issues and make
              suggestions based on what works best for energy and flow.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Special Requests
            </h3>

            <p>
              Surprise performances? Coordinated grand entrance? Special lighting for cake
              cutting? Discuss anything non-standard.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Their Personality and Style
            </h3>

            <p>
              This is crucial: Does their energy match yours? If you want a laid-back vibe but the
              DJ is a hype-man who screams on the mic, it won&apos;t work.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Contract Essentials That Protect You
            </h2>

            <p>
              Your DJ contract should be detailed and protect both parties. Here&apos;s what must
              be included:
            </p>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-xl">Required Contract Elements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold">Date, time, and venue details</p>
                  <p className="text-sm text-muted-foreground">
                    Including setup and breakdown times, not just performance hours
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Exact services provided</p>
                  <p className="text-sm text-muted-foreground">
                    Ceremony sound, cocktail hour, reception, lighting, equipment list
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Payment schedule and amounts</p>
                  <p className="text-sm text-muted-foreground">
                    Deposit amount, balance due date, accepted payment methods
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Cancellation and refund policy</p>
                  <p className="text-sm text-muted-foreground">
                    What happens if you cancel? What if the DJ cancels?
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Backup DJ provision</p>
                  <p className="text-sm text-muted-foreground">
                    Written guarantee of a replacement if the primary DJ cannot perform
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Equipment specifications</p>
                  <p className="text-sm text-muted-foreground">
                    Specific gear being brought, including backup equipment
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Liability insurance confirmation</p>
                  <p className="text-sm text-muted-foreground">
                    Certificate of insurance attached or provided separately
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Your Complete DJ Selection Checklist
            </h2>

            <p>
              Print this checklist and use it when evaluating DJs:
            </p>

            <Card className="my-6 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Wedding DJ Selection Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 font-semibold">Initial Research</p>
                    <ul className="space-y-1 text-sm">
                      <li>☐ Check online reviews (Google, Yelp, WeddingWire, The Knot)</li>
                      <li>☐ Review social media presence and videos</li>
                      <li>☐ Verify they specialize in weddings, not just club/bar gigs</li>
                      <li>☐ Confirm they service your venue location</li>
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 font-semibold">First Contact</p>
                    <ul className="space-y-1 text-sm">
                      <li>☐ Available on your date</li>
                      <li>☐ Responds professionally within 24-48 hours</li>
                      <li>☐ Willing to meet before booking</li>
                      <li>☐ Pricing fits your budget</li>
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 font-semibold">Meeting/Interview</p>
                    <ul className="space-y-1 text-sm">
                      <li>☐ Chemistry and personality fit</li>
                      <li>☐ Understands your music preferences and vision</li>
                      <li>☐ Can describe their equipment in detail</li>
                      <li>☐ Has worked at your venue before (bonus)</li>
                      <li>☐ Asks thoughtful questions about your event</li>
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 font-semibold">Professional Credentials</p>
                    <ul className="space-y-1 text-sm">
                      <li>☐ Proof of liability insurance ($1M+ coverage)</li>
                      <li>☐ Written contract provided</li>
                      <li>☐ Business license (if applicable)</li>
                      <li>☐ References available</li>
                      <li>☐ Clear backup plan if unable to perform</li>
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 font-semibold">Contract Review</p>
                    <ul className="space-y-1 text-sm">
                      <li>☐ All services listed in detail</li>
                      <li>☐ Equipment specifications included</li>
                      <li>☐ Payment schedule clearly stated</li>
                      <li>☐ Cancellation policy is fair and clear</li>
                      <li>☐ Setup and breakdown times specified</li>
                      <li>☐ Overtime rates defined (if applicable)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 font-semibold">Final Decision Factors</p>
                    <ul className="space-y-1 text-sm">
                      <li>☐ You feel confident in their abilities</li>
                      <li>☐ Their style matches your vision</li>
                      <li>☐ Pricing is transparent with no hidden fees</li>
                      <li>☐ You&apos;d be comfortable with them entertaining your guests</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Common Mistakes Couples Make
            </h2>

            <p>
              After seeing hundreds of weddings, here are the mistakes I see couples make when
              choosing DJs:
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Booking Based Only on Price
            </h3>

            <p>
              The cheapest option is rarely the best value. A DJ who charges $900 with consumer
              gear and 10 weddings of experience isn&apos;t saving you money - they&apos;re risking
              your event.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Not Meeting Before Booking
            </h3>

            <p>
              Email and phone are fine for initial contact, but you need to meet your DJ. Video
              call at minimum. You&apos;re entrusting them with your wedding atmosphere - meet them
              first.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Ignoring Equipment Quality
            </h3>

            <p>
              Many couples don&apos;t realize equipment matters until they&apos;re at their
              reception and the sound is distorted. By then, it&apos;s too late.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Booking a &quot;Friend Who DJs&quot;
            </h3>

            <p>
              Your friend might DJ at house parties. Weddings are different - timeline
              coordination, reading diverse age groups, professional equipment, and handling
              pressure. Don&apos;t risk it unless they&apos;re truly experienced.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Specific Advice for East Bay Venues
            </h2>

            <p>
              Different venues have different needs. Here&apos;s what to ask your DJ about popular
              East Bay wedding venues:
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Martinez Waterfront Venues
            </h3>

            <p>
              Ask about outdoor sound considerations, weather backup plans, and experience with
              wind affecting speakers. Many Martinez venues have strict volume limits after 9 PM -
              ensure your DJ knows this.
            </p>

            <p>
              <strong>Pro tip:</strong> Check out our complete guide:{' '}
              <Link href="/blog/martinez-wedding-venues-guide" className="text-primary hover:underline">
                Martinez Wedding Venues: Complete Guide for 2026
              </Link>
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Winery Venues (Livermore, Brentwood)
            </h3>

            <p>
              Wineries often have acoustically challenging spaces - high ceilings, hard surfaces.
              Your DJ needs enough power to fill the space without echoing.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Historic Buildings (Downtown Concord, Walnut Creek)
            </h3>

            <p>
              Historic venues may have power limitations or noise restrictions. Your DJ should ask
              about electrical circuits and building rules before your event.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Questions to Ask Yourself
            </h2>

            <p>
              Before you start interviewing DJs, answer these questions to clarify what you need:
            </p>

            <ul className="my-4 space-y-2">
              <li>
                <strong>What&apos;s most important to us?</strong> Sound quality? Visual effects?
                Experience? Price?
              </li>
              <li>
                <strong>What atmosphere do we want?</strong> Elegant background music or energetic
                dance party?
              </li>
              <li>
                <strong>What&apos;s our realistic budget?</strong> Including all entertainment
                (ceremony, cocktail, reception)?
              </li>
              <li>
                <strong>Do we care about premium equipment?</strong> Will we notice the difference?
              </li>
              <li>
                <strong>Are there specific songs or genres we love/hate?</strong> Be prepared to
                share these.
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              The Bottom Line
            </h2>

            <p>
              Choosing the right wedding DJ isn&apos;t about finding the cheapest option or the
              most popular name. It&apos;s about finding someone who:
            </p>

            <ul className="my-4 space-y-2">
              <li>Understands your vision and can execute it professionally</li>
              <li>Has the experience to handle unexpected situations</li>
              <li>Uses equipment that delivers quality sound and reliability</li>
              <li>Fits your budget without cutting corners on what matters</li>
              <li>You feel comfortable trusting with your special day</li>
            </ul>

            <p>
              For East Bay couples, hiring a local DJ eliminates travel fees, provides venue
              knowledge, and ensures community accountability. You get better service at better
              value.
            </p>

            <p>
              <strong>Remember:</strong> Your DJ controls the energy and atmosphere for 5-6 hours
              of your wedding. That&apos;s more face time than any other vendor except your
              photographer. Choose someone who will make those hours unforgettable.
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
                  Founder of Primordial Events. After performing at hundreds of East Bay weddings,
                  I&apos;ve learned what makes the difference between a good DJ and an
                  unforgettable one. Happy to share what I&apos;ve learned to help couples make the
                  right choice.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-lg bg-primary/5 p-8 text-center">
            <h3 className="mb-2 text-2xl font-bold">Ready to Meet?</h3>
            <p className="mb-6 text-muted-foreground">
              Let&apos;s discuss your wedding vision, your venue, and how we can create an
              unforgettable experience for you and your guests.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/booking">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/weddings">View Wedding Services</Link>
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
