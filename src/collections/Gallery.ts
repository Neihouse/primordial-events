import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  access: {
    read: () => true, // Public can view gallery
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'eventType',
      type: 'select',
      options: [
        { label: 'DJ Night', value: 'dj-night' },
        { label: 'Trivia', value: 'trivia' },
        { label: 'Karaoke', value: 'karaoke' },
        { label: 'Production', value: 'production' },
        { label: 'Private Event', value: 'private-event' },
        { label: 'Rental Showcase', value: 'rental-showcase' },
      ],
    },
    {
      name: 'date',
      type: 'date',
    },
    {
      name: 'venue',
      type: 'text',
    },
    {
      name: 'photos',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: true,
    },
    {
      name: 'videoUrl',
      type: 'text',
      admin: {
        description: 'YouTube or Vimeo embed URL',
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show on homepage',
      },
    },
  ],
}
