import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'About Our Equipment | Primordial Events',
  description: 'Learn why we invested in premium Pioneer CDJ-3000s, BASSBOSS 21Hz speakers, Unity lasers, and professional lighting. Understand the difference between nightclub-quality gear and typical DJ equipment.',
}

export default function AboutOurEquipmentPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <Badge className="mb-4" variant="default">
          Equipment Education
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Why We Invested in Premium Equipment
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Understanding the difference between nightclub-quality gear and typical DJ equipment.
          Learn about our professional-grade equipment and what it means for your event.
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-16">
        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed">
          <p>
            When we started Primordial Events, we made a decision: invest in the same equipment used in top San Francisco nightclubs and music festivals, not the typical consumer gear most DJs use. This wasn't about showing off—it was about delivering an experience your guests will remember.
          </p>
          <p>
            Below, we'll break down each category of our equipment, explain what makes it special, and most importantly, help you understand what it means for your event. No boring technical jargon—just honest explanations of why this gear matters.
          </p>
        </div>
      </section>

      {/* DJ Equipment Section */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">DJ Equipment</h2>
          <p className="text-lg text-muted-foreground">
            The foundation of great sound starts here
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Pioneer CDJ-3000 */}
          <Card className="overflow-hidden">
            <div className="relative h-64 w-full overflow-hidden bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=600&fit=crop"
                alt="Pioneer CDJ-3000 Professional Media Player"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Pioneer CDJ-3000</CardTitle>
              <CardDescription>Professional Media Player - Club Standard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2 font-semibold">What It Is:</h4>
                <p className="text-muted-foreground">
                  The CDJ-3000 is the industry standard media player used in every major nightclub and festival worldwide. Think of it as the difference between a smartphone and a professional camera—both take photos, but one is built for professional use.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">32-bit vs 16-bit Audio Processing:</h4>
                <p className="text-muted-foreground">
                  Most consumer DJ controllers use 16-bit audio processing. The CDJ-3000 uses 32-bit. What does that mean? Imagine audio detail like pixels in a photo. 16-bit gives you 65,000 levels of audio detail. 32-bit gives you over 4 billion. The result is crystal-clear sound with zero distortion, even when pushed to high volumes.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Why This Matters for Your Event:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Your music sounds exactly as the artist intended—no compression, no artifacts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Seamless transitions and beatmatching that sounds professional, not choppy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Built for 8-hour+ continuous use—these don't fail during your event</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Pioneer DJM-A9 */}
          <Card className="overflow-hidden">
            <div className="relative h-64 w-full overflow-hidden bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop"
                alt="Pioneer DJM-A9 Professional DJ Mixer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Pioneer DJM-A9</CardTitle>
              <CardDescription>4-Channel Professional DJ Mixer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2 font-semibold">What It Is:</h4>
                <p className="text-muted-foreground">
                  The DJM-A9 is Pioneer's flagship mixer, combining traditional DJ mixing with modern digital effects. It's the same mixer you'll find in clubs like 1015 Folsom and The Midway in San Francisco.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">96kHz/32-bit Sound Processing:</h4>
                <p className="text-muted-foreground">
                  CDs sample at 44.1kHz. The A9 processes at 96kHz—more than double the sampling rate. Combined with 32-bit processing, this preserves every nuance of the original recording. When we mix tracks together, blend in effects, or adjust EQ, the sound quality never degrades.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Why This Matters for Your Event:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Creative mixing and effects that sound polished, not gimmicky</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Multiple input channels for microphones, laptops, or special audio needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Professional-grade reliability and build quality</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Audio System Section */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Audio System</h2>
          <p className="text-lg text-muted-foreground">
            Feel the bass in your chest, not just hear it
          </p>
        </div>

        <div className="space-y-8">
          {/* BASSBOSS Explanation */}
          <Card className="overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative h-80 w-full overflow-hidden bg-muted lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                  alt="BASSBOSS Subwoofer System"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <CardTitle className="mb-4 text-2xl">BASSBOSS BB15-MK3 Subwoofers</CardTitle>
                <CardDescription className="mb-6">21Hz Bass Response - Nightclub-Grade Power</CardDescription>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold">What Does "21Hz" Actually Mean?</h4>
                    <p className="text-muted-foreground">
                      Human hearing ranges from 20Hz (deepest bass) to 20,000Hz (highest treble). Most DJ speakers bottom out around 40Hz. BASSBOSS speakers reach 21Hz—nearly the limit of human hearing. This is the bass you feel in your chest at a concert or nightclub, the kind that moves air and energy through the room.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">The Technical Specs:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-primary">✓</span>
                        <span>4000W peak power per subwoofer (we typically bring 2-4 depending on venue size)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-primary">✓</span>
                        <span>Dual 15-inch high-excursion drivers designed specifically for deep bass</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-primary">✓</span>
                        <span>Used in professional nightclubs, not house parties</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Why This Matters for Your Event:</h4>
                    <p className="text-muted-foreground">
                      Bass isn't just about volume—it's about feel and energy. When the bass drop hits on your first dance, your guests will feel it. The difference between 40Hz and 21Hz is the difference between "hearing" bass and "experiencing" it. This is what separates a memorable event from one people forget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* BASSBOSS Tops */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">BASSBOSS SV9-MK3 Top Speakers</CardTitle>
              <CardDescription>Crystal-Clear Highs and Mids to Match the Bass</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                While everyone notices the bass, the top speakers are equally important. The SV9-MK3 tops pair with the BB15 subwoofers to create a balanced, full-range sound system. These aren't generic PA speakers—they're designed specifically to match the power and clarity of BASSBOSS subwoofers.
              </p>
              <div>
                <h4 className="mb-2 font-semibold">Why This Matters:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Vocals and lyrics remain clear even when the bass is pounding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>No distortion at high volumes—important for speeches and announcements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Even coverage throughout your venue—no dead spots or hot spots</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lighting Section */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Lighting</h2>
          <p className="text-lg text-muted-foreground">
            The difference between intelligent and static lighting
          </p>
        </div>

        <div className="mb-8 space-y-6">
          <Card className="overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative h-80 w-full overflow-hidden bg-muted lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop"
                  alt="Chauvet Intelligent Moving Head Lights"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <CardTitle className="mb-4 text-2xl">Chauvet Spot 360X Moving Heads</CardTitle>
                <CardDescription className="mb-6">Intelligent Lighting vs Static Uplights</CardDescription>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold">What Are "Intelligent" Lights?</h4>
                    <p className="text-muted-foreground">
                      Static lights (LED uplights, LED bars) stay in one place and change colors. Intelligent lights move, change color, project patterns (gobos), zoom, and create dynamic effects. They're called "intelligent" because they're computer-controlled and respond to music.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">The Chauvet Spot 360X Specifications:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-primary">✓</span>
                        <span>200W LED moving head with 360° pan and 270° tilt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-primary">✓</span>
                        <span>Gobo patterns (projected shapes) and rotating prisms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-primary">✓</span>
                        <span>Motorized zoom and focus—beam or spot mode</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-primary">✓</span>
                        <span>DMX-controlled for synchronized lighting shows</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Why This Matters for Your Event:</h4>
                    <p className="text-muted-foreground">
                      Your venue is transformed from "a room with colored lights" to "a visual experience." Photos look professional, not like a high school dance. Lighting moves with the music, creating energy and excitement. This is the difference between adequate and memorable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Chauvet Freedom Par H9 Wireless Uplights</CardTitle>
              <CardDescription>Wireless, Battery-Powered Venue Transformation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                While the moving heads create dynamic effects, uplights transform your venue. These wireless, battery-powered lights can be placed anywhere without worrying about cables or power outlets. They feature RGB+Amber+White+UV color mixing—far more sophisticated than basic RGB uplights.
              </p>
              <div>
                <h4 className="mb-2 font-semibold">Why This Matters:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>6+ hours battery life—no cables running across your venue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Match your wedding colors precisely with extended color mixing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>UV mode makes white decorations and flowers glow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">✓</span>
                    <span>Wireless control—change colors and effects throughout the night</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Laser Section */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Professional Laser Systems</h2>
          <p className="text-lg text-muted-foreground">
            Safety, power, and visual impact
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative h-80 w-full overflow-hidden bg-muted lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop"
                alt="Unity ELITE PRO Laser System"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <CardTitle className="mb-4 text-2xl">Unity ELITE PRO FB4 Laser Systems</CardTitle>
              <CardDescription className="mb-6">Professional, Safe, FDA-Compliant</CardDescription>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold">Why Professional Lasers Matter:</h4>
                  <p className="text-muted-foreground">
                    Lasers aren't toys. Cheap lasers can permanently damage vision in milliseconds. Professional lasers like the Unity ELITE PRO include safety features: automatic shutdown if the scanner fails, power limiting, FDA-compliant classification, and insurance approval.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">The FB4 Controller Advantage:</h4>
                  <p className="text-muted-foreground">
                    The FB4 controller is the industry standard for professional laser shows. It allows us to create custom patterns, animations, and effects programmed specifically for your event. This isn't generic laser effects—this is custom visual art.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Why This Matters for Your Event:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Safe for your guests—professional safety systems prevent eye exposure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Fully insured and FDA-compliant—venues and insurance companies approve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Custom programming—your names, dates, or logos projected in laser beams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">✓</span>
                      <span>Visual impact that guests remember and photograph</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Comparison Table */}
      <section className="mb-20">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Equipment Comparison</h2>
          <p className="text-lg text-muted-foreground">
            Our equipment vs typical DJ gear—an honest breakdown
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr className="border-b">
                <th className="p-4 text-left font-semibold">Category</th>
                <th className="p-4 text-left font-semibold">Typical DJ Setup</th>
                <th className="p-4 text-left font-semibold text-primary">Primordial Events</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-muted/50">
                <td className="p-4 font-medium">DJ Equipment</td>
                <td className="p-4 text-sm text-muted-foreground">
                  Consumer DJ controller<br />
                  <span className="text-xs">16-bit audio processing</span><br />
                  <span className="text-xs">Built-in sound card</span><br />
                  <span className="text-xs mt-1 block">Basic consumer-grade setup</span>
                </td>
                <td className="p-4 text-sm">
                  Pioneer CDJ-3000 (x2) + DJM-A9<br />
                  <span className="text-xs text-muted-foreground">32-bit/96kHz processing</span><br />
                  <span className="text-xs text-muted-foreground">Club-standard media players</span><br />
                  <span className="text-xs mt-1 block font-semibold text-primary">Professional-grade setup</span>
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/50">
                <td className="p-4 font-medium">Bass Response</td>
                <td className="p-4 text-sm text-muted-foreground">
                  Generic powered subwoofers<br />
                  <span className="text-xs">40-50Hz bass response</span><br />
                  <span className="text-xs">"You can hear the bass"</span><br />
                  <span className="text-xs mt-1 block">Standard consumer speakers</span>
                </td>
                <td className="p-4 text-sm">
                  BASSBOSS BB15-MK3 (x2-4)<br />
                  <span className="text-xs text-muted-foreground">21Hz bass response</span><br />
                  <span className="text-xs text-muted-foreground">"You feel the bass in your chest"</span><br />
                  <span className="text-xs mt-1 block font-semibold text-primary">Concert-quality system</span>
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/50">
                <td className="p-4 font-medium">Top Speakers</td>
                <td className="p-4 text-sm text-muted-foreground">
                  Standard PA speakers<br />
                  <span className="text-xs">1000W peak power</span><br />
                  <span className="text-xs">Basic 2-way design</span><br />
                  <span className="text-xs mt-1 block">Consumer-grade audio</span>
                </td>
                <td className="p-4 text-sm">
                  BASSBOSS SV9-MK3 + RCF ART-915A<br />
                  <span className="text-xs text-muted-foreground">Concert-quality clarity</span><br />
                  <span className="text-xs text-muted-foreground">Matched to subwoofers</span><br />
                  <span className="text-xs mt-1 block font-semibold text-primary">Professional sound system</span>
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/50">
                <td className="p-4 font-medium">Lighting</td>
                <td className="p-4 text-sm text-muted-foreground">
                  LED uplights or LED bars<br />
                  <span className="text-xs">Static colors, maybe sound-activated</span><br />
                  <span className="text-xs">Basic RGB color mixing</span><br />
                  <span className="text-xs mt-1 block">Basic lighting effects</span>
                </td>
                <td className="p-4 text-sm">
                  Chauvet Spot 360X moving heads<br />
                  <span className="text-xs text-muted-foreground">Freedom Par H9 wireless uplights</span><br />
                  <span className="text-xs text-muted-foreground">DMX-controlled intelligent effects</span><br />
                  <span className="text-xs mt-1 block font-semibold text-primary">Intelligent lighting system</span>
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/50">
                <td className="p-4 font-medium">Special Effects</td>
                <td className="p-4 text-sm text-muted-foreground">
                  Maybe some disco lights<br />
                  <span className="text-xs">Basic LED effects</span><br />
                  <span className="text-xs">Fog machine if you're lucky</span><br />
                  <span className="text-xs mt-1 block">Limited effects</span>
                </td>
                <td className="p-4 text-sm">
                  Unity ELITE PRO FB4 lasers (x2)<br />
                  <span className="text-xs text-muted-foreground">Professional fog/haze machines</span><br />
                  <span className="text-xs text-muted-foreground">Custom programmed laser shows</span><br />
                  <span className="text-xs mt-1 block font-semibold text-primary">Professional laser system</span>
                </td>
              </tr>
              <tr className="border-b hover:bg-muted/50">
                <td className="p-4 font-medium">Backup Equipment</td>
                <td className="p-4 text-sm text-muted-foreground">
                  Maybe a spare cable or two<br />
                  <span className="text-xs">"Hope nothing breaks"</span>
                </td>
                <td className="p-4 text-sm">
                  Full backup DJ controller<br />
                  <span className="text-xs text-muted-foreground">Spare microphones and cables</span><br />
                  <span className="text-xs text-muted-foreground">Redundant systems for critical gear</span><br />
                  <span className="text-xs mt-1 block font-semibold text-primary">Complete backup system</span>
                </td>
              </tr>
              <tr className="bg-muted/30">
                <td className="p-4 font-bold">Equipment Quality</td>
                <td className="p-4 text-sm font-semibold text-muted-foreground">
                  Consumer-grade setup
                </td>
                <td className="p-4 text-sm font-bold text-primary">
                  Professional nightclub-quality
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-lg bg-muted/50 p-6">
          <h3 className="mb-3 text-xl font-semibold">What This Really Means</h3>
          <p className="text-muted-foreground">
            We're not saying typical DJ equipment is bad—it works for many events. But there's a significant difference between consumer gear and professional nightclub equipment. Our professional-grade setup directly translates to better sound quality, more reliable performance, and a more memorable experience for your guests. When you hire us, you're getting equipment normally reserved for San Francisco's top venues.
          </p>
        </div>
      </section>

      {/* Why This Matters - Final Section */}
      <section className="mb-16">
        <div className="rounded-lg bg-primary/5 p-8 lg:p-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tight">
              Why This All Matters for Your Event
            </h2>
            <div className="space-y-6 text-lg">
              <div>
                <h3 className="mb-2 text-xl font-semibold">Sound Quality People Remember</h3>
                <p className="text-muted-foreground">
                  Your guests won't know the difference between 32-bit and 16-bit audio processing. But they will remember how good the music sounded. They'll remember feeling the bass in their chest during your first dance. They'll remember crystal-clear speeches without distortion. That's what premium equipment delivers.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Photo-Worthy Lighting</h3>
                <p className="text-muted-foreground">
                  Your event photos will look like they came from a professional venue, not a rented hall. Moving head lights create dramatic moments. Lasers add that "wow" factor. Wireless uplights transform ordinary walls into colorful backdrops. This is the difference between "nice photos" and "incredible photos."
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Reliability and Professionalism</h3>
                <p className="text-muted-foreground">
                  Professional equipment doesn't fail during your event. We bring backup gear because we prepare for everything. Club-standard equipment is built for 8+ hour continuous use, night after night. When you hire us, you're not just getting a DJ with good equipment—you're getting the same gear used in professional venues, operated by someone who knows how to use it.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Value Without Compromise</h3>
                <p className="text-muted-foreground">
                  We invested in professional nightclub-quality equipment so you don't have to. Many venues charge premium rates just for basic DJ services. We bring club-standard gear to your event at competitive prices. You get professional equipment, experienced operation, and reliable service—without the nightclub price tag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mb-8">
        <div className="rounded-lg bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Ready to Experience the Difference?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
            Book Primordial Events and get nightclub-quality equipment, professional service, and an unforgettable experience for your guests. Let's make your event memorable.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              <Link href="/booking">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/our-equipment">See Our Equipment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="text-center">
        <p className="text-sm text-muted-foreground">
          Want more details or have questions about our equipment?{' '}
          <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
            Contact us
          </Link>{' '}
          or check out our{' '}
          <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
            service packages
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
