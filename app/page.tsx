"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Dumbbell, Users, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import ImageGallery from "@/components/image-gallery"
import PricingPreview from "@/components/pricing-preview"
import { ModeToggle } from "@/components/mode-toggle"

export default function HomePage() {
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
            <ModeToggle />
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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Gym background"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 lg:py-40 text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Transform Your Body,
              <br />
              Transform Your Life
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
              Join FitForge and start your fitness journey today. State-of-the-art equipment, expert trainers, and a
              supportive community.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/membership">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 hover:bg-background/30 border-white text-white"
              >
                <Link href="/classes">View Classes</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose FitForge?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide everything you need to achieve your fitness goals in one place.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Dumbbell className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Equipment</h3>
                <p className="text-muted-foreground">
                  State-of-the-art machines and free weights for every type of workout.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
                <p className="text-muted-foreground">
                  Certified professionals to guide you through your fitness journey.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Diverse Classes</h3>
                <p className="text-muted-foreground">
                  From yoga to HIIT, we offer classes for all fitness levels and interests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Members Say</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Real stories from real people who have transformed their lives with FitForge.
              </p>
            </div>
            <TestimonialsCarousel />
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Gym</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Take a look at our facilities and community in action.
              </p>
            </div>
            <ImageGallery />
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Membership Plans</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Flexible plans to fit your lifestyle and budget.
              </p>
            </div>
            <PricingPreview />
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/membership">View All Plans</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
              Join FitForge today and take the first step towards a healthier, stronger you.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/membership">
                  Join Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
      <button
        className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
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
          className="h-5 w-5"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  )
}
