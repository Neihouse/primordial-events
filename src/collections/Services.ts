import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
  },
  access: {
    read: () => true, // Public can view services
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of name (e.g., "dj-services")',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      admin: {
        description: 'Short one-liner for cards',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'photos',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'startingPrice',
      type: 'number',
      admin: {
        description: 'Starting price for display (e.g., 500 for "Starting at $500")',
      },
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'packages',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., "$500" or "$500/hr" or "Custom Quote"',
          },
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'includes',
          type: 'array',
          fields: [
            {
              name: 'item',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order on services page (lower = first)',
      },
    },
  ],
}
