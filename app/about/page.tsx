import Image from "next/image"
import Link from "next/link"
import { Dumbbell, Facebook, Instagram, Twitter, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us - FitForge",
  description: "Learn about FitForge's history, mission, and meet our expert trainers.",
}

const trainers = [
  {
    name: "Alex Rivera",
    role: "Head Trainer",
    bio: "Alex has over 10 years of experience in fitness training and specializes in strength and conditioning. Certified in CrossFit and personal training.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Jessica Chen",
    role: "Yoga Instructor",
    bio: "Jessica is a certified yoga instructor with 8 years of experience. She specializes in vinyasa flow and restorative yoga practices.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Marcus Johnson",
    role: "Nutrition Coach",
    bio: "Marcus holds a degree in nutrition and helps members develop personalized meal plans to complement their fitness goals.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Sophia Williams",
    role: "HIIT Specialist",
    bio: "Sophia specializes in high-intensity interval training and has helped hundreds of clients achieve rapid results through her energetic classes.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },
]

const achievements = [
  {
    title: "Best Gym in the City",
    year: "2023",
    organization: "City Fitness Awards",
  },
  {
    title: "Excellence in Customer Service",
    year: "2022",
    organization: "Fitness Industry Association",
  },
  {
    title: "Top 10 Fitness Centers",
    year: "2021",
    organization: "National Fitness Magazine",
  },
  {
    title: "Innovation in Fitness Programs",
    year: "2020",
    organization: "Fitness Technology Summit",
  },
]

const certifications = [
  "National Academy of Sports Medicine (NASM)",
  "American Council on Exercise (ACE)",
  "International Sports Sciences Association (ISSA)",
  "National Strength and Conditioning Association (NSCA)",
  "American College of Sports Medicine (ACSM)",
  "Yoga Alliance Certification",
]

export default function AboutPage() {
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
        <section className="relative py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Our Story</h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  Founded in 2010, FitForge began with a simple mission: to create a fitness community where everyone
                  feels welcome and empowered to achieve their health goals.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  What started as a small studio with just a few pieces of equipment has grown into a comprehensive
                  fitness center with state-of-the-art facilities, expert trainers, and a thriving community of members.
                </p>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="FitForge gym interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="mt-6 text-xl text-muted-foreground">
                At FitForge, we believe fitness is for everyone. Our mission is to provide an inclusive, supportive
                environment where people of all fitness levels can work towards their goals, build strength, and
                transform their lives.
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Community</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Building a supportive fitness family where everyone belongs.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Excellence</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Providing top-quality equipment, trainers, and programs.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
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
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="m9 15 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Results</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Helping members achieve real, sustainable fitness outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trainers Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Meet Our Trainers</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our certified fitness professionals are dedicated to helping you achieve your goals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trainers.map((trainer) => (
                <div key={trainer.name} className="bg-background rounded-lg overflow-hidden border shadow-sm">
                  <div className="relative aspect-square">
                    <Image src={trainer.image || "/placeholder.svg"} alt={trainer.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{trainer.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{trainer.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{trainer.bio}</p>
                    <div className="flex gap-4">
                      <a
                        href={trainer.socials.twitter}
                        aria-label={`${trainer.name}'s Twitter`}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href={trainer.socials.instagram}
                        aria-label={`${trainer.name}'s Instagram`}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href={trainer.socials.facebook}
                        aria-label={`${trainer.name}'s Facebook`}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Achievements</h2>
                <div className="space-y-6">
                  {achievements.map((achievement) => (
                    <div key={achievement.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.year} • {achievement.organization}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Certifications</h2>
                <div className="space-y-3">
                  {certifications.map((certification) => (
                    <div key={certification} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>{certification}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to Join Our Community?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
              Experience the FitForge difference with our expert trainers and supportive community.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/membership">Explore Membership Options</Link>
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
    </div>
  )
}
