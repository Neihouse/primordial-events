# Equipment Image Management Scripts

This directory contains scripts for managing equipment images for the Primordial Events website.

## Scripts

### 1. download-equipment-images.ts

Downloads official product images from manufacturer websites (or high-quality fallback images) and saves them to `public/equipment-images/`.

**Usage:**
```bash
pnpm download-images
```

**Features:**
- Downloads 9 equipment images
- Handles both official manufacturer URLs and fallback URLs
- Skips already downloaded images
- Provides detailed progress logging
- Validates file sizes
- Graceful error handling

**Output Directory:**
```
public/equipment-images/
├── pioneer-cdj-3000.jpg
├── pioneer-djm-a9.jpg
├── pioneer-djm-v10lf.jpg
├── bassboss-bb15-mk3.jpg
├── bassboss-sv9-mk3.jpg
├── rcf-art-915a.jpg
├── chauvet-spot-360x.jpg
├── chauvet-freedom-par-h9.jpg
└── unity-elite-pro-fb4.jpg
```

### 2. update-equipment-images.ts

Updates the `EquipmentShowcase.tsx` component to use locally downloaded images instead of Unsplash URLs.

**Usage:**
```bash
pnpm update-equipment-images
```

**Features:**
- Creates a backup of the original component (`.backup` file)
- Updates all equipment `imageUrl` properties
- Reports number of successful updates
- Provides clear next steps

**What it does:**
- Changes: `imageUrl: 'https://images.unsplash.com/...'`
- To: `imageUrl: '/equipment-images/pioneer-cdj-3000.jpg'`

## Workflow

### Initial Setup (First Time)

1. **Download all equipment images:**
   ```bash
   pnpm download-images
   ```

2. **Update the component to use local images:**
   ```bash
   pnpm update-equipment-images
   ```

3. **Review the changes:**
   ```bash
   # Check the updated component
   git diff src/components/EquipmentShowcase.tsx

   # View downloaded images
   ls -lh public/equipment-images/
   ```

4. **Test in browser:**
   ```bash
   pnpm dev
   # Navigate to /equipment page
   ```

5. **Commit if everything looks good:**
   ```bash
   git add public/equipment-images/ src/components/EquipmentShowcase.tsx
   git commit -m "Add local equipment images"
   ```

### Re-downloading Images

If you need to re-download images (e.g., to get updated versions):

```bash
# Delete old images
rm -rf public/equipment-images/

# Download fresh copies
pnpm download-images
```

## Updating Equipment List

To add new equipment or update image URLs:

1. **Edit `scripts/download-equipment-images.ts`:**
   ```typescript
   const equipmentImages: EquipmentImage[] = [
     // Add new equipment here
     {
       name: 'New Equipment Name',
       filename: 'new-equipment.jpg',
       manufacturer: 'Manufacturer Name',
       productPage: 'https://...',
       url: 'https://direct-image-url.jpg',
       fallbackUrl: 'https://fallback-url.jpg'
     },
     // ...
   ]
   ```

2. **Edit `scripts/update-equipment-images.ts`:**
   ```typescript
   const imageMapping: Record<string, string> = {
     'New Equipment Name': '/equipment-images/new-equipment.jpg',
     // ...
   }
   ```

3. **Run the download script:**
   ```bash
   pnpm download-images
   ```

4. **Update the component:**
   ```bash
   pnpm update-equipment-images
   ```

## Finding Official Image URLs

### Pioneer DJ
- Visit product page (e.g., https://www.pioneerdj.com/en-us/product/player/cdj-3000/black/overview/)
- Right-click on product image > "Open image in new tab"
- Copy the URL (usually on cdn.pioneerdj.com)

### BASSBOSS
- Visit product page (e.g., https://bassboss.com/bb15-mk3/)
- Right-click on product image > "Open image in new tab"
- Look for URLs like: `https://bassboss.com/wp-content/uploads/...`

### Chauvet DJ
- Visit product page (e.g., https://www.chauvetdj.com/products/intimidator-spot-360x/)
- Right-click on product image > "Open image in new tab"
- Look for URLs like: `https://www.chauvetdj.com/wp-content/uploads/...`

### RCF
- Visit product page (e.g., https://www.rcf.it/en_US/products/product-detail/art-9-series/art-915-a/803)
- Right-click on product image > "Open image in new tab"
- Look for URLs like: `https://www.rcf.it/media/...`

### Unity Lasers
- Visit product page (e.g., https://www.unitylasers.com/elite-pro-fb4)
- Right-click on product image > "Open image in new tab"
- Look for Shopify CDN URLs: `https://cdn.shopify.com/...`

## Troubleshooting

### Download fails with "fetch failed" or 403/404 errors

**Cause:** Manufacturer website blocks automated downloads or URL is incorrect.

**Solutions:**
1. Try updating the User-Agent header in the script
2. Manually download the image from the product page:
   ```bash
   # Save image to public/equipment-images/ with correct filename
   curl -L "https://manufacturer-url.jpg" -o public/equipment-images/equipment-name.jpg
   ```
3. Use fallback URLs (high-quality stock images)

### Update script doesn't find equipment

**Cause:** Equipment name in component doesn't match the name in `imageMapping`.

**Solution:**
1. Check the exact name in `EquipmentShowcase.tsx`
2. Update `imageMapping` in `update-equipment-images.ts` to match exactly

### Images don't appear in browser

**Possible causes:**
1. Next.js cache issue - Restart dev server (`pnpm dev`)
2. Images not in public directory - Check `public/equipment-images/`
3. Wrong path in component - Should be `/equipment-images/` not `equipment-images/`

## Image Specifications

### Recommended Specs
- Format: JPEG or PNG
- Dimensions: At least 1200x900px (or 800x600px minimum)
- File size: 100-500KB (optimized for web)
- Aspect ratio: 4:3 or 3:2 preferred
- Quality: 80-85% JPEG quality

### Current Images
All images are currently sourced from:
- Official manufacturer websites (preferred)
- High-quality stock photos (fallback)

## Notes

- The `download-equipment-images.ts` script will skip already downloaded images
- A backup of `EquipmentShowcase.tsx` is created before updating (`.backup` file)
- The scripts use `tsx` for TypeScript execution
- Both scripts include comprehensive error handling and logging
- Images are stored in `public/equipment-images/` for direct web access

## Future Enhancements

Possible improvements for these scripts:

1. **Image optimization:**
   - Automatically resize images to optimal web dimensions
   - Convert to WebP format for better compression
   - Generate multiple sizes for responsive images

2. **Web scraping:**
   - Use Playwright/Puppeteer to automatically find image URLs
   - Navigate manufacturer sites to locate product images
   - Handle dynamic JavaScript-rendered content

3. **Validation:**
   - Check image dimensions and warn if too small
   - Verify aspect ratios are appropriate
   - Detect if images are stock photos vs. real products

4. **Automation:**
   - Scheduled script to check for updated product images
   - Notify when manufacturer updates product photos
   - Auto-replace outdated images
