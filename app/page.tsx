"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Dumbbell, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import ImageGallery from "@/components/image-gallery"
import PricingPreview from "@/components/pricing-preview"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/gym_hero.jpg"
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
              <Button size="lg" asChild className="group">
                <Link href="/membership">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-all duration-300" />
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
