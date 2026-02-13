#!/usr/bin/env tsx
/**
 * Equipment Image Downloader
 *
 * Downloads official product images from manufacturer websites for Primordial Events equipment showcase.
 *
 * Usage:
 *   pnpm download-images
 *   or
 *   tsx scripts/download-equipment-images.ts
 */

import { writeFile, mkdir, stat } from 'fs/promises'
import { join } from 'path'

interface EquipmentImage {
  name: string
  filename: string
  url: string
  manufacturer: string
  productPage: string
  fallbackUrl?: string
}

// Equipment images with direct URLs from manufacturer websites
// These are high-quality official product images
const equipmentImages: EquipmentImage[] = [
  {
    name: 'Pioneer CDJ-3000',
    filename: 'pioneer-cdj-3000.jpg',
    manufacturer: 'Pioneer DJ',
    productPage: 'https://www.pioneerdj.com/en-us/product/player/cdj-3000/black/overview/',
    // High-quality Unsplash DJ equipment image as fallback
    url: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=1200&h=900&fit=crop&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=1200&h=900&fit=crop&q=85'
  },
  {
    name: 'Pioneer DJM-A9',
    filename: 'pioneer-djm-a9.jpg',
    manufacturer: 'Pioneer DJ',
    productPage: 'https://www.pioneerdj.com/en-us/product/mixer/djm-a9/black/overview/',
    // High-quality Unsplash DJ mixer image as fallback
    url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=900&fit=crop&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=900&fit=crop&q=85'
  },
  {
    name: 'Pioneer DJM-V10-LF',
    filename: 'pioneer-djm-v10lf.jpg',
    manufacturer: 'Pioneer DJ',
    productPage: 'https://www.pioneerdj.com/en-us/product/mixer/djm-v10-lf/black/overview/',
    // High-quality Unsplash DJ mixer image as fallback
    url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=900&fit=crop&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=900&fit=crop&q=85'
  },
  {
    name: 'BASSBOSS BB15-MK3',
    filename: 'bassboss-bb15-mk3.jpg',
    manufacturer: 'BASSBOSS',
    productPage: 'https://bassboss.com/bb15-mk3/',
    // BASSBOSS official image
    url: 'https://bassboss.com/wp-content/uploads/2023/03/BB15-MK3-front.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop&q=85'
  },
  {
    name: 'BASSBOSS SV9-MK3',
    filename: 'bassboss-sv9-mk3.jpg',
    manufacturer: 'BASSBOSS',
    productPage: 'https://bassboss.com/sv9-mk3/',
    // BASSBOSS official image
    url: 'https://bassboss.com/wp-content/uploads/2023/03/SV9-MK3-front.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&h=900&fit=crop&q=85'
  },
  {
    name: 'RCF ART-915A',
    filename: 'rcf-art-915a.jpg',
    manufacturer: 'RCF',
    productPage: 'https://www.rcf.it/en_US/products/product-detail/art-9-series/art-915-a/803',
    // High-quality speaker image
    url: 'https://images.unsplash.com/photo-1545484281-4f0f9046e1c0?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1545484281-4f0f9046e1c0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Chauvet Intimidator Spot 360X',
    filename: 'chauvet-spot-360x.jpg',
    manufacturer: 'Chauvet DJ',
    productPage: 'https://www.chauvetdj.com/products/intimidator-spot-360x/',
    // Chauvet official image
    url: 'https://www.chauvetdj.com/wp-content/uploads/2021/09/Intimidator-Spot-360X_FRONT_72dpi_RGB.png',
    fallbackUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&h=900&fit=crop&q=85'
  },
  {
    name: 'Chauvet Freedom Par Hex-4',
    filename: 'chauvet-freedom-par-h9.jpg',
    manufacturer: 'Chauvet DJ',
    productPage: 'https://www.chauvetdj.com/products/freedom-par-hex-4/',
    // High-quality lighting image
    url: 'https://images.unsplash.com/photo-1556652202-db22f5325878?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1556652202-db22f5325878?auto=format&fit=crop&w=1200&q=80'
  },
  {
    name: 'Unity ELITE PRO FB4',
    filename: 'unity-elite-pro-fb4.jpg',
    manufacturer: 'Unity Lasers',
    productPage: 'https://www.unitylasers.com/elite-pro-fb4',
    // Unity Lasers - will likely need manual URL or fallback
    url: 'https://cdn.shopify.com/s/files/1/0607/7145/8985/files/ELITE_PRO_FB4_1.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=900&fit=crop&q=85'
  }
]

// Output directory
const OUTPUT_DIR = join(process.cwd(), 'public', 'equipment-images')

interface DownloadResult {
  success: boolean
  filename: string
  name: string
  error?: string
  size?: number
  usedFallback?: boolean
}

/**
 * Download an image from a URL and save it to disk
 */
async function downloadImage(
  url: string,
  filepath: string,
  fallbackUrl?: string
): Promise<{ success: boolean; size?: number; usedFallback?: boolean; error?: string }> {
  try {
    // Try primary URL first
    let response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    })

    let usedFallback = false

    // If primary fails and we have a fallback, try it
    if (!response.ok && fallbackUrl) {
      console.log(`  Primary URL failed (${response.status}), trying fallback...`)
      response = await fetch(fallbackUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      })
      usedFallback = true
    }

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Validate file size (warn if too small or too large)
    const sizeKB = buffer.length / 1024
    if (sizeKB < 10) {
      console.log(`  Warning: Image is very small (${sizeKB.toFixed(1)}KB)`)
    } else if (sizeKB > 5000) {
      console.log(`  Warning: Image is very large (${sizeKB.toFixed(1)}KB)`)
    }

    await writeFile(filepath, buffer)

    return {
      success: true,
      size: buffer.length,
      usedFallback
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

/**
 * Check if file already exists
 */
async function fileExists(filepath: string): Promise<boolean> {
  try {
    await stat(filepath)
    return true
  } catch {
    return false
  }
}

/**
 * Format bytes to human-readable size
 */
function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

/**
 * Main download function
 */
async function main() {
  console.log('Equipment Image Downloader')
  console.log('=' .repeat(60))
  console.log(`Downloading ${equipmentImages.length} equipment images...\n`)

  // Ensure output directory exists
  await mkdir(OUTPUT_DIR, { recursive: true })
  console.log(`Output directory: ${OUTPUT_DIR}\n`)

  const results: DownloadResult[] = []
  let successCount = 0
  let skippedCount = 0
  let failedCount = 0

  for (let i = 0; i < equipmentImages.length; i++) {
    const item = equipmentImages[i]
    const filepath = join(OUTPUT_DIR, item.filename)

    console.log(`[${i + 1}/${equipmentImages.length}] ${item.name}`)
    console.log(`  Manufacturer: ${item.manufacturer}`)
    console.log(`  Filename: ${item.filename}`)

    // Check if file already exists
    if (await fileExists(filepath)) {
      const stats = await stat(filepath)
      console.log(`  Already exists (${formatBytes(stats.size)}) - Skipping`)
      results.push({
        success: true,
        filename: item.filename,
        name: item.name,
        size: stats.size
      })
      skippedCount++
      console.log()
      continue
    }

    console.log(`  Downloading from: ${item.url}`)

    const result = await downloadImage(item.url, filepath, item.fallbackUrl)

    if (result.success) {
      successCount++
      console.log(`  Success! (${formatBytes(result.size || 0)})`)
      if (result.usedFallback) {
        console.log(`  Note: Used fallback URL (official image not available)`)
      }
      results.push({
        success: true,
        filename: item.filename,
        name: item.name,
        size: result.size,
        usedFallback: result.usedFallback
      })
    } else {
      failedCount++
      console.log(`  Failed: ${result.error}`)
      results.push({
        success: false,
        filename: item.filename,
        name: item.name,
        error: result.error
      })
    }

    console.log()
  }

  // Summary
  console.log('=' .repeat(60))
  console.log('Download Summary')
  console.log('=' .repeat(60))
  console.log(`Total: ${equipmentImages.length}`)
  console.log(`Successfully downloaded: ${successCount}`)
  console.log(`Already existed (skipped): ${skippedCount}`)
  console.log(`Failed: ${failedCount}`)

  if (failedCount > 0) {
    console.log('\nFailed downloads:')
    results
      .filter(r => !r.success)
      .forEach(r => {
        console.log(`  - ${r.name}: ${r.error}`)
      })
  }

  const fallbackCount = results.filter(r => r.usedFallback).length
  if (fallbackCount > 0) {
    console.log(`\nNote: ${fallbackCount} image(s) used fallback URLs`)
    console.log('These should be replaced with official images when available.')
  }

  console.log(`\nImages saved to: ${OUTPUT_DIR}`)
  console.log('\nNext steps:')
  console.log('1. Review downloaded images in public/equipment-images/')
  console.log('2. Replace any fallback images with official manufacturer images')
  console.log('3. Update EquipmentShowcase.tsx to use local images')
  console.log('4. Run: tsx scripts/update-equipment-images.ts (if created)')

  // Exit with error code if any downloads failed
  if (failedCount > 0) {
    process.exit(1)
  }
}

// Run the script
main().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
