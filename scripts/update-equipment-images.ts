#!/usr/bin/env tsx
/**
 * Update Equipment Showcase to use local images
 *
 * This script updates the EquipmentShowcase.tsx component to use locally downloaded
 * equipment images instead of Unsplash stock photos.
 *
 * Usage:
 *   pnpm update-equipment-images
 *   or
 *   tsx scripts/update-equipment-images.ts
 */

import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'

// Mapping of equipment names to local image filenames
const imageMapping: Record<string, string> = {
  'Pioneer CDJ-3000': '/equipment-images/pioneer-cdj-3000.jpg',
  'Pioneer DJM-A9': '/equipment-images/pioneer-djm-a9.jpg',
  'Pioneer DJM-V10-LF': '/equipment-images/pioneer-djm-v10lf.jpg',
  'BASSBOSS BB15-MK3': '/equipment-images/bassboss-bb15-mk3.jpg',
  'BASSBOSS SV9-MK3': '/equipment-images/bassboss-sv9-mk3.jpg',
  'RCF ART-915A': '/equipment-images/rcf-art-915a.jpg',
  'Chauvet Spot 360X': '/equipment-images/chauvet-spot-360x.jpg',
  'Chauvet Freedom Par H9': '/equipment-images/chauvet-freedom-par-h9.jpg',
  'Unity ELITE PRO FB4': '/equipment-images/unity-elite-pro-fb4.jpg'
}

const COMPONENT_PATH = join(
  process.cwd(),
  'src',
  'components',
  'EquipmentShowcase.tsx'
)

async function main() {
  console.log('Equipment Image Updater')
  console.log('=' .repeat(60))
  console.log('Updating EquipmentShowcase.tsx to use local images...\n')

  // Read the component file
  let content = await readFile(COMPONENT_PATH, 'utf-8')
  let updatedCount = 0

  // Create backup
  const backupPath = COMPONENT_PATH + '.backup'
  await writeFile(backupPath, content)
  console.log(`Created backup: ${backupPath}\n`)

  // Replace each equipment's imageUrl
  for (const [equipmentName, localPath] of Object.entries(imageMapping)) {
    // Find the equipment object in the array
    const namePattern = new RegExp(
      `(name:\\s*['"]${equipmentName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"],\\s*[\\s\\S]*?imageUrl:\\s*)['"][^'"]*['"]`,
      'g'
    )

    const originalContent = content
    content = content.replace(namePattern, `$1'${localPath}'`)

    if (content !== originalContent) {
      console.log(`Updated: ${equipmentName} -> ${localPath}`)
      updatedCount++
    }
  }

  if (updatedCount === 0) {
    console.log('\nNo images were updated. Check if equipment names match.')
    console.log('Restoring from backup...')
    await writeFile(COMPONENT_PATH, await readFile(backupPath, 'utf-8'))
    return
  }

  // Write the updated content
  await writeFile(COMPONENT_PATH, content)

  console.log('\n' + '='.repeat(60))
  console.log('Update Summary')
  console.log('=' .repeat(60))
  console.log(`Updated ${updatedCount} equipment image URLs`)
  console.log(`Component file: ${COMPONENT_PATH}`)
  console.log(`Backup file: ${backupPath}`)
  console.log('\nNext steps:')
  console.log('1. Review the changes in EquipmentShowcase.tsx')
  console.log('2. Test the component in your browser')
  console.log('3. Delete the backup file if everything looks good')
  console.log('4. Commit the changes to git')
}

main().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
