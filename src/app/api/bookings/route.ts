import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Create booking in PayloadCMS
    const booking = await payload.create({
      collection: 'bookings',
      data: {
        clientName: body.clientName,
        clientEmail: body.clientEmail,
        clientPhone: body.clientPhone,
        eventType: body.eventType,
        eventDate: body.eventDate,
        eventLocation: body.eventLocation,
        guestCount: body.guestCount ? parseInt(body.guestCount, 10) : undefined,
        startTime: body.startTime,
        endTime: body.endTime,
        type: body.type,
        inquiryMessage: body.inquiryMessage,
        status: 'inquiry',
        // Include equipment and services if provided
        equipment: body.equipment || [],
        services: body.services || [],
      },
    })

    // TODO: Send email notification (using Resend MCP later)
    // TODO: Send Slack notification (if configured)

    return NextResponse.json({
      success: true,
      booking: {
        id: booking.id,
      },
    })
  } catch (error) {
    console.error('Booking creation error:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create booking',
      },
      { status: 500 }
    )
  }
}
