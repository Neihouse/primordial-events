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
        { label: 'Wedding', value: 'wedding' },
        { label: 'Corporate Event', value: 'corporate' },
        { label: 'Birthday Party', value: 'birthday' },
        { label: 'School Event', value: 'school' },
        { label: 'Other Event', value: 'other' },
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
      required: false, // Allow creation without photos initially
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
