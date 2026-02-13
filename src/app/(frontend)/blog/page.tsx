import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Event Production Blog & Resources | Primordial Events',
  description: 'Expert insights on event production, DJ equipment, wedding entertainment, and audio technology. Learn why premium equipment matters for your East Bay event.',
  keywords: 'event production blog, DJ equipment guide, wedding entertainment tips, audio quality, event planning resources',
}

// Blog posts data - will move to PayloadCMS later
const blogPosts = [
  {
    slug: 'why-premium-equipment-matters',
    title: 'Why Premium Equipment Makes Your Event Unforgettable',
    excerpt:
      'Discover the difference between professional-grade and consumer DJ equipment, and why it matters for your wedding or event. From 32-bit audio processing to bass you can feel, we break down what makes our setup special.',
    category: 'Equipment',
    readTime: '8 min read',
    publishDate: 'February 12, 2026',
    author: 'Chance Neihouse',
    featured: true,
  },
  // Future posts will go here
]

const categories = ['All Posts', 'Equipment', 'Wedding Tips', 'Corporate Events', 'Behind the Scenes']

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="outline">
              Blog & Resources
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Event Production Insights
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert advice on equipment, planning, and creating unforgettable events in the East Bay
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-muted/20 py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === 'All Posts' ? 'default' : 'secondary'}
                className="cursor-pointer px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-16">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Featured Post</h2>
            </div>
            <Card className="overflow-hidden border-primary shadow-lg lg:flex">
              <div className="lg:w-1/2">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                  {/* Placeholder for featured image */}
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mb-2 text-6xl">🎚️</div>
                      <p className="text-sm text-muted-foreground">Featured Image</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between lg:w-1/2">
                <CardHeader>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge>{featuredPost.category}</Badge>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-base">{featuredPost.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <time>{featuredPost.publishDate}</time>
                  </div>
                  <Button asChild size="lg">
                    <Link href={`/blog/${featuredPost.slug}`}>Read Article</Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </section>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Latest Posts</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50">
                    {/* Placeholder for post image */}
                    <div className="flex h-full items-center justify-center">
                      <div className="text-4xl">📝</div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="line-clamp-2 text-xl">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="mb-4 text-sm text-muted-foreground">
                      <time>{post.publishDate}</time>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Empty State (if no regular posts) */}
        {regularPosts.length === 0 && blogPosts.length === 1 && (
          <section className="py-16 text-center">
            <div className="mx-auto max-w-md">
              <div className="mb-4 text-5xl">✍️</div>
              <h3 className="mb-2 text-xl font-semibold">More Posts Coming Soon</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                We&apos;re working on more helpful content about event production, equipment
                selection, and planning tips.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">Subscribe for Updates</Link>
              </Button>
            </div>
          </section>
        )}
      </div>

      {/* CTA Section */}
      <section className="border-t bg-muted/40 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to Experience the Difference?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Now that you understand what makes premium equipment special, let&apos;s discuss your
              event.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/booking">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/our-equipment">View Our Equipment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
