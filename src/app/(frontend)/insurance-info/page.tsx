import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ShieldCheck, FileCheck, Building2, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Insurance Information | Primordial Events',
  description: 'Comprehensive insurance coverage for your peace of mind. $2M+ liability coverage, $50K+ equipment insurance. Certificate of Insurance available upon request for corporate clients.',
}

export default function InsuranceInfoPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <Badge className="mb-4" variant="secondary">
          <ShieldCheck className="mr-1.5 h-4 w-4" />
          Fully Insured & Protected
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Insurance Information
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Your peace of mind is our priority. We carry comprehensive insurance coverage to protect
          your event, venue, and investment.
        </p>
      </div>

      {/* Coverage Overview */}
      <section className="mb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <ShieldCheck className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>General Liability</CardTitle>
              <CardDescription>Comprehensive protection</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">$2M+ Coverage</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Covers bodily injury, property damage, and personal injury claims that may arise during your event.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileCheck className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>Equipment Insurance</CardTitle>
              <CardDescription>Premium gear protected</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">$50K+ Coverage</p>
              <p className="mt-2 text-sm text-muted-foreground">
                All equipment including CDJ-3000s, BASSBOSS speakers, Unity lasers, and lighting systems fully insured.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Building2 className="mb-2 h-10 w-10 text-primary" />
              <CardTitle>Venue Protection</CardTitle>
              <CardDescription>Your location covered</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">Venue Requirements Met</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We can add your venue as an additional insured on our policy at no extra charge.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Why Insurance Matters</h2>
          <p className="text-muted-foreground">
            Professional coverage protects everyone involved in your event
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>For Corporate Clients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Most corporate venues and event spaces require proof of insurance before allowing vendors on-site.
                Our comprehensive coverage ensures:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>No delays in booking or event approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Your company is protected from liability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Venue requirements are automatically met</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Professional vendor standards maintained</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Wedding & Private Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Premium venues expect premium vendors. Our insurance coverage demonstrates:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Professional business practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Protection for your investment in the event</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Coverage for high-value equipment on-site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Peace of mind for you and your guests</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Schools & Educational Institutions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                School districts have strict vendor requirements. Our coverage ensures:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>District-approved vendor status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Student and faculty safety protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Compliance with educational institution policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Risk management for school administrators</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Request COI */}
      <section className="mb-16">
        <div className="mx-auto max-w-3xl">
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-6 w-6 text-primary" />
                How to Request a Certificate of Insurance (COI)
              </CardTitle>
              <CardDescription>
                We can provide a COI typically within 1-2 business days
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">What We Need From You:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">1.</span>
                    <span>Venue name and complete address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">2.</span>
                    <span>Event date and type (wedding, corporate, school event, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">3.</span>
                    <span>Any specific insurance requirements from your venue (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">4.</span>
                    <span>Email address where the COI should be sent</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">What You'll Receive:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Official Certificate of Insurance from our carrier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Venue listed as Additional Insured (if requested)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Coverage details and policy limits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Ready to submit to your venue or company</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-lg bg-muted p-4">
                <p className="text-sm font-semibold">No Additional Charges</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Certificate of Insurance requests and adding your venue as an additional insured
                  are included at no extra cost. This is standard practice for all our events.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-3xl">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Request Your Certificate of Insurance</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Get your COI quickly so you can focus on planning your event
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:info@primordial.events?subject=Certificate of Insurance Request"
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    info@primordial.events
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Include in Your Booking Request</p>
                  <p className="text-sm text-primary-foreground/80">
                    Mention you need a COI when requesting a quote
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="default"
                  className="flex-1 bg-accent hover:bg-accent/90"
                >
                  <Link href="/booking">Request Quote & COI</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/contact">Ask Questions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Indicators */}
      <section>
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-6 text-2xl font-bold">Professional Standards, Always</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-muted p-4">
              <p className="font-semibold">Licensed</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Properly licensed business operations
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="font-semibold">Insured</p>
              <p className="mt-1 text-sm text-muted-foreground">
                $2M+ liability coverage
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="font-semibold">Experienced</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Years of professional event production
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
