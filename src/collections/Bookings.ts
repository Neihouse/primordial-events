import type { CollectionConfig } from 'payload'

export const Bookings: CollectionConfig = {
  slug: 'bookings',
  admin: {
    useAsTitle: 'clientName',
    defaultColumns: ['clientName', 'type', 'eventDate', 'status'],
    group: 'Operations',
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
      admin: {
        description: 'Client or company name',
      },
    },
    {
      name: 'clientEmail',
      type: 'email',
      required: true,
    },
    {
      name: 'clientPhone',
      type: 'text',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      admin: {
        description: 'Company name (if different from client name)',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Equipment Rental', value: 'rental' },
        { label: 'DJ Service', value: 'dj' },
        { label: 'Trivia Night', value: 'trivia' },
        { label: 'Karaoke Night', value: 'karaoke' },
        { label: 'Full Production', value: 'production' },
        { label: 'Lighting Only', value: 'lighting' },
        { label: 'Audio Only', value: 'audio' },
        { label: 'Custom Package', value: 'custom' },
      ],
    },
    {
      name: 'eventDate',
      type: 'date',
      required: true,
    },
    {
      name: 'eventEndDate',
      type: 'date',
    },
    {
      name: 'returnDate',
      type: 'date',
      admin: {
        condition: (data) => data?.type === 'rental',
      },
    },
    {
      name: 'venue',
      type: 'text',
    },
    {
      name: 'venueAddress',
      type: 'textarea',
    },
    {
      name: 'eventDescription',
      type: 'textarea',
    },
    {
      name: 'expectedAttendance',
      type: 'number',
    },
    {
      name: 'equipment',
      type: 'relationship',
      relationTo: 'equipment',
      hasMany: true,
      admin: {
        description: 'Select equipment items for this booking',
      },
    },
    {
      name: 'totalPrice',
      type: 'number',
      required: true,
    },
    {
      name: 'depositAmount',
      type: 'number',
    },
    {
      name: 'depositPaid',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'damageWaiverPaid',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'paymentMethod',
      type: 'select',
      options: [
        { label: 'Cash', value: 'cash' },
        { label: 'Venmo', value: 'venmo' },
        { label: 'Zelle', value: 'zelle' },
        { label: 'Card', value: 'card' },
        { label: 'Invoice', value: 'invoice' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'inquiry',
      required: true,
      options: [
        { label: 'Inquiry', value: 'inquiry' },
        { label: 'Quoted', value: 'quoted' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Deposit Paid', value: 'deposit-paid' },
        { label: 'Active', value: 'active' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },
    {
      name: 'internalNotes',
      type: 'richText',
    },
  ],
  // TODO: Add hooks to update equipment status when booking changes
  // hooks: {
  //   afterChange: [
  //     async ({ doc, operation, req }) => {
  //       // When booking status changes to 'active', update equipment status to 'rented'
  //       // When booking status changes to 'completed', update equipment status to 'available'
  //     },
  //   ],
  // },
}
