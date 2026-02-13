import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Why Premium Equipment Makes Your Event Unforgettable | Primordial Events',
  description: 'Learn the difference between professional DJ equipment and consumer gear. Discover why 32-bit audio processing, 21Hz bass response, and club-standard mixers create unforgettable event experiences.',
  keywords: 'Pioneer CDJ-3000, BASSBOSS speakers, professional DJ equipment, wedding DJ equipment, event production quality, audio quality comparison',
  openGraph: {
    type: 'article',
    title: 'Why Premium Equipment Makes Your Event Unforgettable',
    description: 'The difference between professional-grade and consumer DJ equipment, explained.',
  },
}

const relatedPosts = [
  {
    title: 'How to Choose the Right DJ for Your Wedding',
    slug: '#',
    category: 'Wedding Tips',
  },
  {
    title: 'East Bay Wedding Venue Guide',
    slug: '#',
    category: 'Wedding Tips',
  },
  {
    title: 'What to Look for in Corporate Event Entertainment',
    slug: '#',
    category: 'Corporate Events',
  },
]

export default function WhyPremiumEquipmentMattersPage() {
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
            <span>Why Premium Equipment Matters</span>
          </nav>

          {/* Title & Meta */}
          <header className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge>Equipment</Badge>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">8 min read</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Why Premium Equipment Makes Your Event Unforgettable
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
                  <div className="mb-2 text-7xl">🎚️</div>
                  <p className="text-sm text-muted-foreground">
                    Featured Image: Premium DJ Equipment Setup
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p className="lead text-xl text-muted-foreground">
              You&apos;ve probably seen DJ setups that look impressive - flashing lights, big
              speakers, lots of gear. But here&apos;s the truth: not all equipment is created equal.
              The difference between consumer-grade and professional equipment can make or break
              your event experience.
            </p>

            <p>
              After working hundreds of events across the Bay Area, I&apos;ve learned that premium
              equipment isn&apos;t about being flashy - it&apos;s about creating an experience your
              guests will remember. Let me break down exactly what makes our setup different.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">The Pioneer CDJ-3000: Why It Matters</h2>

            <p>
              At the heart of our DJ setup are Pioneer CDJ-3000s. At $2,299 each (and we bring
              two), they&apos;re a significant investment. But here&apos;s what that investment
              means for your event:
            </p>

            <Card className="my-6 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">32-Bit Audio Processing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  <strong>CDJ-3000:</strong> 32-bit audio processing = crystal-clear sound even at
                  high volume
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Typical DJ Controller:</strong> 16-bit processing = distortion and audio
                  degradation at party volumes
                </p>
              </CardContent>
            </Card>

            <p>
              What does this mean in real terms? Your guests won&apos;t experience that harsh,
              distorted sound that happens when consumer equipment is pushed to party levels. The
              audio stays clean, clear, and professional from the first song to the last dance.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Club-Standard Reliability
            </h3>

            <p>
              CDJ-3000s are the industry standard in professional nightclubs and festivals
              worldwide. They&apos;re built to run for 8+ hours straight, night after night. Your
              wedding or corporate event won&apos;t stress them - they&apos;re designed for far more
              demanding environments.
            </p>

            <p>
              Compare that to consumer controllers that can overheat, crash, or malfunction during
              your event. We&apos;ve never had a CDJ-3000 fail mid-event. Not once.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              BASSBOSS Speakers: Bass You Can Feel
            </h2>

            <p>
              Here&apos;s where the difference becomes physical. Our BASSBOSS BB15-MK3 subwoofers
              have a frequency response down to 21Hz. Most people can&apos;t even hear frequencies
              that low - but you absolutely feel them.
            </p>

            <Card className="my-6 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl">Frequency Response Comparison</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  <strong>BASSBOSS Subwoofers:</strong> 21Hz - 200Hz = You feel the bass in your
                  chest
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Typical PA System:</strong> 40Hz - 200Hz = You hear bass, but
                  don&apos;t feel the impact
                </p>
              </CardContent>
            </Card>

            <p>
              That difference between 21Hz and 40Hz is the difference between your guests saying
              &quot;the music was good&quot; and &quot;the dance floor was incredible.&quot;
              It&apos;s the physical sensation that makes people want to dance.
            </p>

            <h3 className="mb-3 mt-6 text-2xl font-semibold">
              Clean Power Without Distortion
            </h3>

            <p>
              Premium speakers aren&apos;t just about being loud - they&apos;re about being clean at
              any volume. Our BASSBOSS and RCF tops deliver powerful, distortion-free sound whether
              we&apos;re playing background music during dinner or pumping energy on the dance
              floor.
            </p>

            <p>
              Consumer speakers? They might sound okay at low volumes, but push them to party levels
              and you get distortion, rattling, and that harsh &quot;blown speaker&quot; sound that
              ruins the atmosphere.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Professional Mixers: The Unsung Heroes
            </h2>

            <p>
              Our Pioneer DJM-A9 ($3,500) and DJM-V10LF ($2,500) mixers might not be as visible as
              speakers or turntables, but they&apos;re crucial to sound quality.
            </p>

            <p>
              <strong>What they do:</strong>
            </p>

            <ul className="my-4 space-y-2">
              <li>
                <strong>Precision EQ control</strong> - We can fine-tune the sound for your
                specific venue acoustics
              </li>
              <li>
                <strong>Professional-grade crossfaders</strong> - Seamless transitions between
                songs
              </li>
              <li>
                <strong>Multiple input channels</strong> - Live microphones, backup systems, and
                ceremony audio all managed perfectly
              </li>
              <li>
                <strong>Built-in effects</strong> - Professional delay, reverb, and filtering (used
                sparingly for impact)
              </li>
            </ul>

            <p>
              A consumer mixer might get you from song A to song B. A professional mixer creates an
              audio experience that flows naturally throughout your entire event.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Unity ELITE Lasers: Safe, Legal, Stunning
            </h2>

            <p>
              Not all laser systems are created equal - and many consumer lasers are actually
              illegal to use in public venues.
            </p>

            <p>
              Our Unity ELITE PRO FB4 lasers are:
            </p>

            <ul className="my-4 space-y-2">
              <li>
                <strong>FDA compliant</strong> - Legal and safe for all venue types
              </li>
              <li>
                <strong>Audience scanning approved</strong> - Can safely create effects over the
                dance floor
              </li>
              <li>
                <strong>Full RGB color</strong> - Not just red/green like cheap lasers
              </li>
              <li>
                <strong>Fully programmable</strong> - Synchronized to music for maximum impact
              </li>
            </ul>

            <p>
              The difference? Our lasers transform your venue into an experience. Cheap lasers just
              point colored dots at the ceiling.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              Intelligent Lighting: More Than Just Colors
            </h2>

            <p>
              Our Chauvet Spot 360X moving heads aren&apos;t just &quot;pretty lights&quot; -
              they&apos;re programmable intelligent fixtures that react to the music, create
              atmosphere, and highlight key moments.
            </p>

            <p>
              <strong>What makes them &quot;intelligent&quot;:</strong>
            </p>

            <ul className="my-4 space-y-2">
              <li>Pan and tilt movement synchronized to music beats</li>
              <li>Gobo patterns (shapes and textures projected on walls/ceiling)</li>
              <li>Color mixing for mood and atmosphere</li>
              <li>Strobe and dimming effects for impact moments</li>
            </ul>

            <p>
              Compare that to static colored uplighting or basic LED pars - they change colors, but
              they don&apos;t create movement, energy, or visual storytelling.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              The Real-World Difference
            </h2>

            <p>
              Here&apos;s what premium equipment means for your event:
            </p>

            <Card className="my-6">
              <CardHeader>
                <CardTitle className="text-xl">Guest Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold">Crystal-clear vocals during toasts</p>
                  <p className="text-sm text-muted-foreground">
                    Professional microphones + pristine audio processing = every word is heard
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Bass you feel in your chest</p>
                  <p className="text-sm text-muted-foreground">
                    21Hz subwoofers create physical energy that gets people dancing
                  </p>
                </div>
                <div>
                  <p className="font-semibold">No harsh, distorted sound</p>
                  <p className="text-sm text-muted-foreground">
                    32-bit processing stays clean even at maximum party volume
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Visual wow moments</p>
                  <p className="text-sm text-muted-foreground">
                    Professional lasers + intelligent lighting create unforgettable atmosphere
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-4 mt-8 text-3xl font-bold">
              &quot;But My Friend Has DJ Equipment...&quot;
            </h2>

            <p>
              We hear this sometimes: &quot;My friend has a DJ controller and some speakers -
              can&apos;t we just use that?&quot;
            </p>

            <p>Absolutely - if you&apos;re okay with:</p>

            <ul className="my-4 space-y-2">
              <li>Audio that sounds great until you turn it up, then gets harsh and distorted</li>
              <li>Bass you hear but don&apos;t feel</li>
              <li>Equipment that might overheat or malfunction during your event</li>
              <li>Limited lighting options (if any)</li>
              <li>No professional backup equipment on-site</li>
            </ul>

            <p>
              For a casual backyard party? Consumer gear is fine. For your wedding, corporate
              event, or once-in-a-lifetime celebration? You deserve better.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">The Investment vs. The Alternative</h2>

            <p>
              Our professional equipment represents over $35,000 in hardware. We maintain it,
              transport it, set it up, and guarantee it works flawlessly.
            </p>

            <p>
              The price difference between us and a DJ with consumer gear might be a few hundred
              dollars. But the experience difference? That&apos;s priceless.
            </p>

            <p>
              <strong>Premium equipment delivers:</strong>
            </p>

            <ul className="my-4 space-y-2">
              <li>Audio quality that matches your venue and guest count</li>
              <li>Reliability - no mid-event failures or technical issues</li>
              <li>Visual impact that transforms your space</li>
              <li>Professional sound that impresses even the pickiest audiophiles</li>
              <li>
                Bass and energy that creates an unforgettable dance floor experience
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-3xl font-bold">Why We&apos;re Different</h2>

            <p>
              Most DJs in the Bay Area use consumer or prosumer equipment - controllers, powered
              speakers, and basic lighting. They might charge $200-500 less than us.
            </p>

            <p>
              We invested in the same equipment used in San Francisco&apos;s top nightclubs. And
              because we&apos;re based in the East Bay, we don&apos;t charge San Francisco travel
              fees. You get premium equipment at accessible pricing.
            </p>

            <p>
              <strong>The bottom line:</strong> Your event deserves more than &quot;good
              enough.&quot; It deserves the same experience people pay $20+ cover charges for at SF
              nightclubs - delivered to your Martinez, Concord, or Walnut Creek venue.
            </p>

            <h2 className="mb-4 mt-8 text-3xl font-bold">See (and Hear) For Yourself</h2>

            <p>
              Want to experience the difference? We&apos;re happy to:
            </p>

            <ul className="my-4 space-y-2">
              <li>Show you our equipment in person</li>
              <li>Explain exactly what we&apos;ll bring to your venue</li>
              <li>Discuss how our setup adapts to your specific space and needs</li>
              <li>Provide references from past clients</li>
            </ul>

            <p>
              Because at the end of the day, this isn&apos;t about having the most expensive gear.
              It&apos;s about creating an experience your guests will talk about for years.
            </p>

            <p>
              And that&apos;s what premium equipment delivers - every single time.
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
                  Founder of Primordial Events. 10+ years of experience in event production, music
                  technology, and creating unforgettable experiences throughout the East Bay.
                  Passionate about premium audio and making nightclub-quality sound accessible for
                  all events.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-lg bg-primary/5 p-8 text-center">
            <h3 className="mb-2 text-2xl font-bold">Ready to Experience Premium Equipment?</h3>
            <p className="mb-6 text-muted-foreground">
              Let&apos;s discuss your event and how our professional setup can create an
              unforgettable experience.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/booking">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/our-equipment">See Our Full Equipment List</Link>
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
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Coming soon</p>
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
