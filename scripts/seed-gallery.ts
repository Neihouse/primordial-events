import { getPayload } from 'payload'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Load environment variables from .env file BEFORE importing config
try {
  const envFile = readFileSync(resolve(process.cwd(), '.env'), 'utf-8')
  envFile.split('\n').forEach((line) => {
    // Skip comments and empty lines
    if (line.trim().startsWith('#') || !line.trim()) return

    const match = line.match(/^([^=:#]+)=(.*)/)
    if (match) {
      const key = match[1].trim()
      let value = match[2].trim()

      // Remove surrounding quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }

      if (!process.env[key]) {
        process.env[key] = value
      }
    }
  })
  console.log('✓ Loaded environment variables from .env\n')
} catch (error) {
  console.warn('⚠️  Could not load .env file, using existing environment variables\n')
}

async function seedGallery() {
  // Dynamically import config after env vars are set
  const { default: config } = await import('../src/payload.config.js')
  // Ensure environment variables are loaded
  if (!process.env.PAYLOAD_SECRET) {
    console.error('❌ Error: PAYLOAD_SECRET environment variable is not set')
    console.log('Please ensure your .env file contains PAYLOAD_SECRET')
    process.exit(1)
  }
  if (!process.env.POSTGRES_URL) {
    console.error('❌ Error: POSTGRES_URL environment variable is not set')
    console.log('Please ensure your .env file contains POSTGRES_URL')
    process.exit(1)
  }

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('🎉 Seeding gallery items...\n')

  // First, create placeholder media items using Unsplash
  const placeholderImages = [
    { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200', alt: 'Wedding venue with elegant lighting' },
    { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200', alt: 'DJ equipment setup' },
    { url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200', alt: 'Corporate event venue' },
    { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200', alt: 'Party lighting effects' },
    { url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200', alt: 'Concert lighting' },
    { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200', alt: 'Event production setup' },
    { url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200', alt: 'Dance floor with lighting' },
    { url: 'https://images.unsplash.com/photo-1465488105127-781ab135e353?w=1200', alt: 'Elegant venue lighting' },
  ]

  console.log('📸 Creating placeholder media items...')
  const mediaIds: number[] = []

  for (const [index, image] of placeholderImages.entries()) {
    try {
      const media = await payload.create({
        collection: 'media',
        data: {
          alt: image.alt,
          url: image.url,
          filename: `placeholder-${index + 1}.jpg`,
          mimeType: 'image/jpeg',
          filesize: 0,
          width: 1200,
          height: 800,
        } as any,
      })
      mediaIds.push(media.id)
      console.log(`  ✓ Created placeholder ${index + 1}`)
    } catch (error: any) {
      console.error(`  ✗ Failed to create placeholder ${index + 1}:`, error.message)
    }
  }

  console.log(`\n🎨 Creating gallery items...\n`)

  // Sample gallery data
  const galleryItems = [
    {
      title: 'Elegant Vineyard Wedding',
      eventType: 'wedding',
      date: '2025-09-15',
      venue: 'Napa Valley Estate, CA',
      description:
        'Complete production featuring CDJ-3000 setup, BASSBOSS sound system, and Unity laser light show. The couple requested high-energy dance music transitioning from classic hits to modern EDM.',
      featured: true,
    },
    {
      title: 'Tech Company Year-End Celebration',
      eventType: 'corporate',
      date: '2025-12-20',
      venue: 'Oakland Convention Center',
      description:
        'Full production for 500+ attendees with intelligent lighting, fog effects, and presentation audio support. Featured both networking background music and high-energy dance sets.',
      featured: false,
    },
    {
      title: 'Sweet 16 Birthday Bash',
      eventType: 'birthday',
      date: '2025-08-10',
      venue: 'Private Residence, Walnut Creek',
      description:
        'Premium DJ package with dance floor lighting, wireless LED uplighting, and custom music curation. Created an unforgettable night for 80 guests.',
      featured: false,
    },
    {
      title: 'High School Prom Night',
      eventType: 'school',
      date: '2025-05-05',
      venue: 'Martinez Community Center',
      description:
        'Nightclub-quality sound and lighting for 300 students. Featured intelligent moving head lights, laser effects, and age-appropriate music mixing.',
      featured: false,
    },
    {
      title: 'Downtown Club Night Residency',
      eventType: 'other',
      date: '2025-11-02',
      venue: 'The Midway SF',
      description:
        'Weekly residency featuring Pioneer CDJ-3000s and DJM-A9 mixer. House, techno, and underground electronic music for late-night crowds.',
      featured: false,
    },
    {
      title: 'Private Anniversary Party',
      eventType: 'other',
      date: '2025-07-22',
      venue: 'Clayton Valley Country Club',
      description:
        'Intimate 50-person celebration with elegant lighting design and curated playlist spanning 40 years of the couple\'s favorite music.',
      featured: false,
    },
    {
      title: 'University Alumni Gala',
      eventType: 'corporate',
      date: '2025-10-12',
      venue: 'UC Berkeley Memorial Stadium',
      description:
        'Large-scale production with multiple zones: cocktail hour jazz, dinner background music, and high-energy dance party. Full lighting design and multiple sound systems.',
      featured: false,
    },
    {
      title: 'Summer Wedding at the Waterfront',
      eventType: 'wedding',
      date: '2025-06-28',
      venue: 'Rosewood Sand Hill, Menlo Park',
      description:
        'Outdoor ceremony and indoor reception. Ceremony sound system, cocktail hour background music, and full reception production with lasers and intelligent lighting.',
      featured: false,
    },
  ]

  // Create gallery items with placeholder photos
  for (const [index, item] of galleryItems.entries()) {
    try {
      // Assign 2-4 random photos to each gallery item
      const numPhotos = Math.floor(Math.random() * 3) + 2 // 2-4 photos
      const photoIds = []
      for (let i = 0; i < numPhotos; i++) {
        const randomIndex = Math.floor(Math.random() * mediaIds.length)
        if (mediaIds[randomIndex]) {
          photoIds.push(mediaIds[randomIndex])
        }
      }

      const result = await payload.create({
        collection: 'gallery',
        data: {
          ...item,
          photos: photoIds,
        } as any,
      })
      console.log(`  ✓ Created: ${item.title} (${photoIds.length} photos)`)
    } catch (error: any) {
      console.error(`  ✗ Failed to create ${item.title}:`, error.message)
    }
  }

  console.log('\n✅ Gallery seeding complete!\n')
  console.log('🚀 Next steps:')
  console.log('   1. Start the dev server: npm run dev')
  console.log('   2. Visit http://localhost:3000/gallery')
  console.log('   3. See the transformed gallery design in action!')
  console.log('\n💡 Optional:')
  console.log('   - Visit http://localhost:3000/admin to manage gallery items')
  console.log('   - Replace placeholder images with your real event photos')
  console.log('   - Update descriptions and details\n')

  process.exit(0)
}

// Run the seed
seedGallery().catch((error) => {
  console.error('Seed failed:', error)
  process.exit(1)
})
