import type { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'createdAt', 'responded'],
    group: 'Operations',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Book a Service', value: 'service' },
        { label: 'Rent Equipment', value: 'rental' },
        { label: 'General Question', value: 'general' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'preferredDate',
      type: 'date',
    },
    {
      name: 'responded',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'responseNotes',
      type: 'textarea',
      admin: {
        description: 'Internal notes about how you responded',
      },
    },
  ],
  // TODO: Add email notification hook
  // hooks: {
  //   afterChange: [
  //     async ({ doc, operation }) => {
  //       if (operation === 'create') {
  //         // Send email notification
  //       }
  //     },
  //   ],
  // },
}
