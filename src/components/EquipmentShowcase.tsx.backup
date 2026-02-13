import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface EquipmentItem {
  name: string
  model: string
  category: string
  price: string
  specs: string[]
  imageUrl: string
  featured?: boolean
}

const equipmentData: EquipmentItem[] = [
  {
    name: 'Pioneer CDJ-3000',
    model: 'Professional Media Player',
    category: 'DJ Equipment',
    price: '$2,299 each',
    specs: [
      '9-inch HD touchscreen',
      '32-bit audio processing',
      '96kHz/32-bit sound card',
      'Club-standard professional media player',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    name: 'Pioneer DJM-A9',
    model: '4-Channel Professional DJ Mixer',
    category: 'DJ Equipment',
    price: '$3,500',
    specs: [
      '4-channel professional mixer',
      'Built-in effects',
      '96kHz/32-bit sound processing',
      'Magvel Fader Pro crossfader',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    name: 'BASSBOSS BB15-MK3',
    model: 'Powered Subwoofer',
    category: 'Sound System',
    price: 'Premium',
    specs: [
      'Extends down to 21Hz',
      'Concert-quality bass response',
      '4000W peak power',
      'Nightclub-grade subwoofer',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    name: 'BASSBOSS SV9-MK3',
    model: 'Powered Top Speaker',
    category: 'Sound System',
    price: 'Premium',
    specs: [
      'Crystal-clear highs and mids',
      'Concert-quality sound',
      'Pairs with BB15-MK3 subwoofer',
      'Professional PA system',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=600&fit=crop',
  },
  {
    name: 'Chauvet Spot 360X',
    model: 'Moving Head Intelligent Light',
    category: 'Lighting',
    price: 'Premium',
    specs: [
      '200W LED moving head',
      '360° pan and 270° tilt',
      'Gobo patterns and prisms',
      'Professional stage lighting',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    name: 'Unity ELITE PRO FB4',
    model: 'Professional Laser System',
    category: 'Lasers',
    price: 'Premium',
    specs: [
      'Professional laser effects',
      'FB4 controller integration',
      'Custom pattern programming',
      'Safe, FDA-compliant operation',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    name: 'Chauvet Freedom Par H9',
    model: 'Wireless LED Uplight',
    category: 'Lighting',
    price: 'Premium',
    specs: [
      'Wireless battery-powered',
      'RGB+Amber+White+UV color mixing',
      '6+ hours battery life',
      'Venue transformation lighting',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556652202-db22f5325878?w=800&h=600&fit=crop',
  },
  {
    name: 'RCF ART-915A',
    model: 'Active Two-Way Speaker',
    category: 'Sound System',
    price: 'Premium',
    specs: [
      '1400W peak power',
      '15-inch woofer + 1.4-inch driver',
      'Professional PA speaker',
      'Versatile sound reinforcement',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1545484281-4f0f9046e1c0?w=800&h=600&fit=crop',
  },
]

export function EquipmentShowcase() {
  const featuredEquipment = equipmentData.filter((item) => item.featured)
  const allEquipment = equipmentData

  return (
    <div className="space-y-16">
      {/* Featured Equipment Section */}
      <section>
        <div className="mb-8 text-center">
          <Badge className="mb-4" variant="default">
            Flagship Equipment
          </Badge>
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            Our Premium Equipment
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Professional nightclub-grade equipment that delivers superior sound quality and visual impact.
            This is the same gear used in top San Francisco clubs and music festivals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredEquipment.map((item, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                  loading={index < 3 ? undefined : 'lazy'}
                />
                <div className="absolute right-3 top-3">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                    {item.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <CardDescription className="text-sm">{item.model}</CardDescription>
                <div className="mt-2">
                  <span className="text-sm font-semibold text-primary">{item.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5">
                  {item.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 text-primary">✓</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Complete Equipment List */}
      <section>
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Complete Equipment Inventory</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Over $50,000 in professional DJ, lighting, laser, and audio equipment
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allEquipment.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-base">{item.name}</CardTitle>
                <CardDescription className="text-xs">{item.model}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="rounded-lg bg-primary/5 p-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">Why Our Equipment Matters</h2>
          <div className="space-y-4 text-left text-muted-foreground">
            <p>
              <strong className="text-foreground">32-bit Audio Processing:</strong> Our Pioneer CDJ-3000s
              use professional 32-bit audio processing versus typical consumer 16-bit systems. The result?
              Crystal-clear sound with no distortion, even at high volumes.
            </p>
            <p>
              <strong className="text-foreground">Concert-Quality Bass:</strong> BASSBOSS speakers extend
              down to 21Hz (most DJ speakers only reach 40Hz). Your guests will feel the bass in their chest,
              not just hear it. This is nightclub-quality sound.
            </p>
            <p>
              <strong className="text-foreground">Professional Lighting:</strong> Moving head intelligent
              lights and professional laser systems create stunning visual experiences. Your event will look
              photo-worthy, not like a high school dance.
            </p>
            <p>
              <strong className="text-foreground">Reliability:</strong> Club-standard equipment is built
              for nightly use in professional venues. We bring backup equipment to every event because we
              prepare for every scenario.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section>
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Equipment Comparison</h2>
          <p className="text-muted-foreground">See the difference between typical DJ gear and our setup</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left font-semibold">Category</th>
                <th className="p-4 text-left font-semibold">Typical DJ</th>
                <th className="p-4 text-left font-semibold text-primary">Primordial Events</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">DJ Equipment</td>
                <td className="p-4 text-sm text-muted-foreground">
                  Consumer DJ controller<br />
                  16-bit audio processing
                </td>
                <td className="p-4 text-sm">
                  Pioneer CDJ-3000 (x2)<br />
                  32-bit professional media players<br />
                  $2,299 each
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Sound System</td>
                <td className="p-4 text-sm text-muted-foreground">
                  Generic powered speakers<br />
                  40Hz bass response
                </td>
                <td className="p-4 text-sm">
                  BASSBOSS BB15-MK3 + SV9-MK3<br />
                  21Hz bass response<br />
                  Concert-quality sound
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Lighting</td>
                <td className="p-4 text-sm text-muted-foreground">
                  Basic LED uplights<br />
                  Static colors
                </td>
                <td className="p-4 text-sm">
                  Chauvet Spot 360X moving heads<br />
                  Wireless Freedom Par H9 uplights<br />
                  Dynamic intelligent lighting
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Special Effects</td>
                <td className="p-4 text-sm text-muted-foreground">
                  Disco lights or none
                </td>
                <td className="p-4 text-sm">
                  Unity ELITE PRO FB4 laser systems (x2)<br />
                  Professional fog/haze effects<br />
                  Custom programmed shows
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Total Investment</td>
                <td className="p-4 text-sm text-muted-foreground">
                  $3,000-$8,000
                </td>
                <td className="p-4 text-sm font-semibold text-primary">
                  $50,000+
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
