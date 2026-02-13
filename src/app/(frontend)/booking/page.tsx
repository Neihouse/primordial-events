'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const bookingSchema = z.object({
  // Client Information
  clientName: z.string().min(2, 'Name must be at least 2 characters'),
  clientEmail: z.string().email('Invalid email address'),
  clientPhone: z.string().min(10, 'Phone number must be at least 10 digits'),

  // Event Details
  eventType: z.enum(['wedding', 'corporate', 'birthday', 'school', 'private', 'other']),
  eventDate: z.string().min(1, 'Event date is required'),
  eventLocation: z.string().min(3, 'Location is required'),
  guestCount: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),

  // Booking Type
  type: z.enum(['rental', 'dj', 'trivia', 'karaoke', 'lighting', 'production', 'other']),

  // Additional Information
  inquiryMessage: z.string().min(10, 'Please provide more details about your event (at least 10 characters)'),
})

type BookingFormData = z.infer<typeof bookingSchema>

const eventTypes = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'birthday', label: 'Birthday Party' },
  { value: 'school', label: 'School Event' },
  { value: 'private', label: 'Private Party' },
  { value: 'other', label: 'Other' },
]

const bookingTypes = [
  { value: 'rental', label: 'Equipment Rental Only' },
  { value: 'dj', label: 'DJ Services' },
  { value: 'trivia', label: 'Trivia Hosting' },
  { value: 'karaoke', label: 'Karaoke Hosting' },
  { value: 'lighting', label: 'Lighting Design' },
  { value: 'production', label: 'Full Event Production' },
  { value: 'other', label: 'Other / Custom Package' },
]

function BookingFormContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Pre-fill from URL params (e.g., /booking?equipment=123 or /booking?service=456)
  const prefilledEquipment = searchParams.get('equipment')
  const prefilledService = searchParams.get('service')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      type: prefilledService ? 'dj' : prefilledEquipment ? 'rental' : undefined,
    },
  })

  const selectedType = watch('type')

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Submit to PayloadCMS API
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          status: 'inquiry',
          // Add prefilled equipment/service if available
          ...(prefilledEquipment && { equipment: [prefilledEquipment] }),
          ...(prefilledService && { services: [prefilledService] }),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit booking request')
      }

      setSubmitSuccess(true)

      // Redirect to success page or show success message
      setTimeout(() => {
        router.push('/?booking=success')
      }, 2000)
    } catch (error) {
      console.error('Booking submission error:', error)
      setSubmitError('Failed to submit your booking request. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center py-12">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-accent">Request Received!</CardTitle>
            <CardDescription>
              Thank you for your booking inquiry. We'll review your request and get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              We've sent a confirmation email to your provided address.
            </p>
            <Button asChild className="w-full">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Request a Booking
          </h1>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and we'll get back to you with a customized quote within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Client Information */}
          <Card>
            <CardHeader>
              <CardTitle>Your Information</CardTitle>
              <CardDescription>
                Let us know how to reach you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="clientName">Full Name *</Label>
                <Input
                  id="clientName"
                  {...register('clientName')}
                  placeholder="John Smith"
                  autoComplete="name"
                  aria-invalid={errors.clientName ? 'true' : 'false'}
                  aria-describedby={errors.clientName ? 'clientName-error' : undefined}
                />
                {errors.clientName && (
                  <p id="clientName-error" className="text-sm text-destructive" role="alert">
                    {errors.clientName.message}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="clientEmail">Email Address *</Label>
                  <Input
                    id="clientEmail"
                    type="email"
                    {...register('clientEmail')}
                    placeholder="john@example.com"
                    autoComplete="email"
                    aria-invalid={errors.clientEmail ? 'true' : 'false'}
                    aria-describedby={errors.clientEmail ? 'clientEmail-error' : undefined}
                  />
                  {errors.clientEmail && (
                    <p id="clientEmail-error" className="text-sm text-destructive" role="alert">
                      {errors.clientEmail.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clientPhone">Phone Number *</Label>
                  <Input
                    id="clientPhone"
                    type="tel"
                    {...register('clientPhone')}
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                    aria-invalid={errors.clientPhone ? 'true' : 'false'}
                    aria-describedby={errors.clientPhone ? 'clientPhone-error' : undefined}
                  />
                  {errors.clientPhone && (
                    <p id="clientPhone-error" className="text-sm text-destructive" role="alert">
                      {errors.clientPhone.message}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Event Details */}
          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>
                Tell us about your event
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type *</Label>
                  <Select
                    onValueChange={(value) => setValue('eventType', value as any)}
                  >
                    <SelectTrigger
                      id="eventType"
                      aria-invalid={errors.eventType ? 'true' : 'false'}
                      aria-describedby={errors.eventType ? 'eventType-error' : undefined}
                    >
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.eventType && (
                    <p id="eventType-error" className="text-sm text-destructive" role="alert">
                      {errors.eventType.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDate">Event Date *</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    {...register('eventDate')}
                    min={new Date().toISOString().split('T')[0]}
                    aria-invalid={errors.eventDate ? 'true' : 'false'}
                    aria-describedby={errors.eventDate ? 'eventDate-error' : undefined}
                  />
                  {errors.eventDate && (
                    <p id="eventDate-error" className="text-sm text-destructive" role="alert">
                      {errors.eventDate.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventLocation">Event Location *</Label>
                <Input
                  id="eventLocation"
                  {...register('eventLocation')}
                  placeholder="Venue name or address"
                  aria-invalid={errors.eventLocation ? 'true' : 'false'}
                  aria-describedby={errors.eventLocation ? 'eventLocation-error' : undefined}
                />
                {errors.eventLocation && (
                  <p id="eventLocation-error" className="text-sm text-destructive" role="alert">
                    {errors.eventLocation.message}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="guestCount">Guest Count</Label>
                  <Input
                    id="guestCount"
                    type="number"
                    {...register('guestCount')}
                    placeholder="100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startTime">Start Time</Label>
                  <Input
                    id="startTime"
                    type="time"
                    {...register('startTime')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endTime">End Time</Label>
                  <Input
                    id="endTime"
                    type="time"
                    {...register('endTime')}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Selection */}
          <Card>
            <CardHeader>
              <CardTitle>What Do You Need?</CardTitle>
              <CardDescription>
                Select the type of service or rental you're interested in
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="type">Booking Type *</Label>
                <Select
                  defaultValue={selectedType}
                  onValueChange={(value) => setValue('type', value as any)}
                >
                  <SelectTrigger
                    id="type"
                    aria-invalid={errors.type ? 'true' : 'false'}
                    aria-describedby={errors.type ? 'type-error' : undefined}
                  >
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {bookingTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.type && (
                  <p id="type-error" className="text-sm text-destructive" role="alert">
                    {errors.type.message}
                  </p>
                )}
              </div>

              {selectedType === 'rental' && (
                <div className="rounded-lg bg-muted p-4">
                  <p className="mb-2 text-sm font-medium">Equipment Selection</p>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Browse our equipment catalog to see what's available
                  </p>
                  <Button type="button" variant="outline" asChild>
                    <Link href="/equipment" target="_blank">
                      Browse Equipment Catalog
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Additional Details */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
              <CardDescription>
                Tell us more about your vision for the event
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="inquiryMessage">Message *</Label>
                <Textarea
                  id="inquiryMessage"
                  {...register('inquiryMessage')}
                  placeholder="Please describe your event, specific equipment needs, setup requirements, or any questions you have..."
                  rows={6}
                  aria-invalid={errors.inquiryMessage ? 'true' : 'false'}
                  aria-describedby={errors.inquiryMessage ? 'inquiryMessage-error inquiryMessage-help' : 'inquiryMessage-help'}
                />
                {errors.inquiryMessage && (
                  <p id="inquiryMessage-error" className="text-sm text-destructive" role="alert">
                    {errors.inquiryMessage.message}
                  </p>
                )}
                <p id="inquiryMessage-help" className="text-sm text-muted-foreground">
                  The more details you provide, the more accurate our quote will be.
                </p>
              </div>
            </CardContent>
          </Card>

          {submitError && (
            <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
              {submitError}
            </div>
          )}

          <Separator />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                * Required fields
              </p>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-center dark:bg-green-950/30">
              <svg
                className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-sm font-medium text-green-800 dark:text-green-300">
                We respond within 2 hours (9am-9pm daily)
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="container flex min-h-[60vh] items-center justify-center py-12">
        <div className="text-center">
          <div className="mb-4 text-lg font-semibold">Loading booking form...</div>
        </div>
      </div>
    }>
      <BookingFormContent />
    </Suspense>
  )
}
