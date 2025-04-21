import Link from "next/link"
import Image from "next/image"
import { Dumbbell, Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Blog - FitForge",
  description: "Fitness tips, nutrition advice, success stories, and more from the FitForge team.",
}

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Exercises for Building Core Strength",
    excerpt:
      "Discover the most effective exercises to build a strong core and improve your overall fitness and stability.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 15, 2023",
    author: "Alex Rivera",
    category: "Workouts",
    slug: "core-strength-exercises",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Protein: How Much Do You Really Need?",
    excerpt:
      "Learn about protein requirements for different fitness goals and how to ensure you're getting enough in your diet.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 28, 2023",
    author: "Marcus Johnson",
    category: "Nutrition",
    slug: "protein-guide",
  },
  {
    id: 3,
    title: "From Couch to 5K: A Beginner's Journey",
    excerpt:
      "Follow Sarah's inspiring journey from being sedentary to completing her first 5K race with our training program.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 10, 2023",
    author: "Jessica Chen",
    category: "Success Stories",
    slug: "couch-to-5k",
  },
  {
    id: 4,
    title: "The Science Behind HIIT: Why It Works So Well",
    excerpt:
      "Explore the science and benefits of High-Intensity Interval Training and why it's so effective for fat loss and fitness.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 22, 2023",
    author: "Sophia Williams",
    category: "Fitness Science",
    slug: "hiit-science",
  },
  {
    id: 5,
    title: "5 Common Workout Mistakes and How to Fix Them",
    excerpt:
      "Avoid these common exercise mistakes that could be hindering your progress and learn how to correct them.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 15, 2023",
    author: "Alex Rivera",
    category: "Workouts",
    slug: "workout-mistakes",
  },
  {
    id: 6,
    title: "Mindfulness and Exercise: The Perfect Combination",
    excerpt:
      "Discover how combining mindfulness practices with your workout routine can enhance results and reduce stress.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 30, 2023",
    author: "Jessica Chen",
    category: "Wellness",
    slug: "mindfulness-exercise",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6" />
            <span className="text-xl font-bold">FitForge</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/membership" className="text-sm font-medium hover:underline underline-offset-4">
              Membership
            </Link>
            <Link href="/classes" className="text-sm font-medium hover:underline underline-offset-4">
              Classes
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="/membership">Join Now</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">FitForge Blog</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Fitness tips, nutrition advice, success stories, and more from our expert trainers and community.
              </p>
              <div className="mt-8 max-w-md mx-auto">
                <div className="relative">
                  <Input type="search" placeholder="Search articles..." className="pr-10" />
                  <Button size="sm" variant="ghost" className="absolute right-0 top-0 h-full px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Featured blog post"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Badge className="mb-4">Featured</Badge>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  How to Stay Motivated on Your Fitness Journey
                </h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>April 21, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Sophia Williams</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Staying motivated on your fitness journey can be challenging, especially when progress seems slow or
                  life gets busy. In this comprehensive guide, we share proven strategies from our trainers and
                  successful members to help you stay on track and achieve your fitness goals.
                </p>
                <Button asChild>
                  <Link href="/blog/stay-motivated">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  All
                </Button>
                <Button variant="ghost" size="sm">
                  Workouts
                </Button>
                <Button variant="ghost" size="sm">
                  Nutrition
                </Button>
                <Button variant="ghost" size="sm">
                  Wellness
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-background rounded-lg overflow-hidden border shadow-sm">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <Badge className="absolute top-2 right-2">{post.category}</Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary font-medium inline-flex items-center hover:underline"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get the latest fitness tips, workout ideas, and exclusive content delivered straight to your inbox.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline underline-offset-2">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="h-6 w-6" />
                <span className="text-xl font-bold">FitForge</span>
              </div>
              <p className="text-sm text-muted-foreground">Transforming lives through fitness since 2010.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="text-muted-foreground hover:text-foreground">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="/classes" className="text-muted-foreground hover:text-foreground">
                    Classes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <address className="not-italic text-sm text-muted-foreground">
                <p>123 Fitness Street</p>
                <p>New York, NY 10001</p>
                <p className="mt-2">info@fitforge.com</p>
                <p>(123) 456-7890</p>
              </address>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hours</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  <span className="font-medium">Mon-Fri:</span> 5am - 10pm
                </li>
                <li>
                  <span className="font-medium">Sat:</span> 7am - 8pm
                </li>
                <li>
                  <span className="font-medium">Sun:</span> 8am - 6pm
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} FitForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
