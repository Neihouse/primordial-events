import type { CollectionConfig } from 'payload'

export const Equipment: CollectionConfig = {
  slug: 'equipment',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'status', 'pricing.dailyRate'],
    group: 'Inventory',
  },
  access: {
    read: () => true, // Public can view equipment catalog
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'assetId',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Format: PE-AUD-001, PE-DJ-002, etc.',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Audio / PA', value: 'audio' },
        { label: 'DJ Hardware', value: 'dj' },
        { label: 'Lighting', value: 'lighting' },
        { label: 'Laser', value: 'laser' },
        { label: 'Atmospherics', value: 'atmospherics' },
        { label: 'Video', value: 'video' },
        { label: 'Structure / Truss', value: 'structure' },
        { label: 'Cases', value: 'cases' },
        { label: 'Accessories', value: 'accessories' },
      ],
    },
    {
      name: 'photos',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'specs',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'pricing',
      type: 'group',
      fields: [
        {
          name: 'replacementValue',
          type: 'number',
          required: true,
          admin: {
            description: 'Current market replacement cost',
          },
        },
        {
          name: 'dailyRate',
          type: 'number',
          required: true,
        },
        {
          name: 'weekendRate',
          type: 'number',
          required: true,
          admin: {
            description: 'Fri-Sun rate',
          },
        },
        {
          name: 'weeklyRate',
          type: 'number',
        },
        {
          name: 'depositRequired',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      name: 'serialNumber',
      type: 'text',
      admin: {
        condition: (data) => data?.category !== 'cases',
      },
    },
    {
      name: 'condition',
      type: 'select',
      defaultValue: 'excellent',
      options: [
        { label: 'Excellent', value: 'excellent' },
        { label: 'Good', value: 'good' },
        { label: 'Fair', value: 'fair' },
        { label: 'Needs Repair', value: 'repair' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'available',
      required: true,
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Rented Out', value: 'rented' },
        { label: 'Reserved', value: 'reserved' },
        { label: 'In Maintenance', value: 'maintenance' },
        { label: 'Retired', value: 'retired' },
      ],
    },
    {
      name: 'currentRenter',
      type: 'text',
      admin: {
        condition: (data) => data?.status === 'rented',
      },
    },
    {
      name: 'dateOut',
      type: 'date',
      admin: {
        condition: (data) => data?.status === 'rented',
      },
    },
    {
      name: 'dateDueBack',
      type: 'date',
      admin: {
        condition: (data) => data?.status === 'rented',
      },
    },
    {
      name: 'purchaseDate',
      type: 'date',
    },
    {
      name: 'notes',
      type: 'textarea',
    },
    {
      name: 'rentable',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show in public rental catalog',
      },
    },
  ],
}
