import type { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Contact Us | Primordial Events',
  description: 'Get in touch with Primordial Events for equipment rentals, DJ services, and event production in the San Francisco Bay Area. Serving Martinez, Concord, Walnut Creek, and surrounding areas.',
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Ready to make your event unforgettable? We're here to help with equipment
            rentals, DJ services, and full event production.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-1 text-sm font-medium">Email</h3>
                  <a
                    href="mailto:info@primordial.events"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    info@primordial.events
                  </a>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-1 text-sm font-medium">Phone</h3>
                  <a
                    href="tel:+15551234567"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    (555) 123-4567
                  </a>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-1 text-sm font-medium">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Martinez, CA
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-1 text-sm font-medium">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours during business days
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Area</CardTitle>
                <CardDescription>
                  Where we work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  We proudly serve the greater San Francisco Bay Area, including:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Martinez</li>
                  <li>• Concord</li>
                  <li>• Walnut Creek</li>
                  <li>• Pleasant Hill</li>
                  <li>• Clayton</li>
                  <li>• And surrounding communities</li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Travel outside our service area? Contact us to discuss options.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Start</CardTitle>
                <CardDescription>
                  Get your event started today
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full" size="lg">
                  <Link href="/booking">
                    Request a Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full" size="lg">
                  <Link href="/equipment">
                    Browse Equipment
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full" size="lg">
                  <Link href="/services">
                    View Services
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
                <CardDescription>
                  When we're available
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">By Appointment</span>
                </div>
                <Separator className="my-3" />
                <p className="text-xs text-muted-foreground">
                  Events serviced 7 days a week. Office hours for planning and pickups.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FAQ</CardTitle>
                <CardDescription>
                  Common questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="mb-1 font-medium">How far in advance should I book?</h4>
                  <p className="text-muted-foreground">
                    We recommend booking 4-6 weeks in advance, especially for weekends.
                    Rush bookings may be available - contact us!
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="mb-1 font-medium">Do you offer delivery and setup?</h4>
                  <p className="text-muted-foreground">
                    Yes! We offer delivery, setup, and teardown services. Contact us for
                    pricing based on your location.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="mb-1 font-medium">What's your cancellation policy?</h4>
                  <p className="text-muted-foreground">
                    Cancellations made 14+ days before the event receive a full refund.
                    See our terms for details.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-lg bg-primary p-8 text-center text-primary-foreground">
          <h2 className="mb-4 text-2xl font-bold">
            Still Have Questions?
          </h2>
          <p className="mb-6 text-primary-foreground/80">
            We're here to help! Send us a message and we'll get back to you as soon as possible.
          </p>
          <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90">
            <Link href="/booking">
              Send Us a Message
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
