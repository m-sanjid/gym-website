"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Dumbbell, Filter, Clock, User, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ClassesPage() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const classes = [
    {
      id: 1,
      name: "Power Yoga",
      description: "A dynamic, fitness-based approach to vinyasa-style yoga that builds strength and flexibility.",
      image: "/placeholder.svg?height=400&width=600",
      category: "yoga",
      duration: 60,
      intensity: "Medium",
      trainer: "Jessica Chen",
      schedule: [
        { day: "Monday", time: "6:00 AM" },
        { day: "Wednesday", time: "6:00 AM" },
        { day: "Friday", time: "6:00 AM" },
      ],
    },
    {
      id: 2,
      name: "HIIT Circuit",
      description:
        "High-intensity interval training that alternates between intense bursts of activity and fixed periods of less-intense activity or rest.",
      image: "/placeholder.svg?height=400&width=600",
      category: "hiit",
      duration: 45,
      intensity: "High",
      trainer: "Sophia Williams",
      schedule: [
        { day: "Tuesday", time: "5:30 PM" },
        { day: "Thursday", time: "5:30 PM" },
        { day: "Saturday", time: "9:00 AM" },
      ],
    },
    {
      id: 3,
      name: "Spin Class",
      description:
        "Indoor cycling workout that combines cardio and strength training using stationary bikes and motivating music.",
      image: "/placeholder.svg?height=400&width=600",
      category: "cardio",
      duration: 50,
      intensity: "High",
      trainer: "Marcus Johnson",
      schedule: [
        { day: "Monday", time: "7:00 PM" },
        { day: "Wednesday", time: "7:00 PM" },
        { day: "Saturday", time: "10:30 AM" },
      ],
    },
    {
      id: 4,
      name: "Strength Training",
      description:
        "Focus on building muscle and strength using free weights, weight machines, and bodyweight exercises.",
      image: "/placeholder.svg?height=400&width=600",
      category: "strength",
      duration: 60,
      intensity: "Medium",
      trainer: "Alex Rivera",
      schedule: [
        { day: "Tuesday", time: "6:00 AM" },
        { day: "Thursday", time: "6:00 AM" },
        { day: "Saturday", time: "8:00 AM" },
      ],
    },
    {
      id: 5,
      name: "Pilates",
      description:
        "Low-impact exercise that aims to strengthen muscles while improving postural alignment and flexibility.",
      image: "/placeholder.svg?height=400&width=600",
      category: "yoga",
      duration: 55,
      intensity: "Low",
      trainer: "Jessica Chen",
      schedule: [
        { day: "Monday", time: "9:00 AM" },
        { day: "Wednesday", time: "9:00 AM" },
        { day: "Friday", time: "9:00 AM" },
      ],
    },
    {
      id: 6,
      name: "Boxing Fundamentals",
      description:
        "Learn boxing techniques while getting a full-body workout that improves cardiovascular health and strength.",
      image: "/placeholder.svg?height=400&width=600",
      category: "cardio",
      duration: 60,
      intensity: "High",
      trainer: "Alex Rivera",
      schedule: [
        { day: "Tuesday", time: "7:00 PM" },
        { day: "Thursday", time: "7:00 PM" },
      ],
    },
    {
      id: 7,
      name: "Zumba",
      description:
        "Dance fitness program that combines Latin and international music with dance moves for a fun cardio workout.",
      image: "/placeholder.svg?height=400&width=600",
      category: "cardio",
      duration: 60,
      intensity: "Medium",
      trainer: "Sophia Williams",
      schedule: [
        { day: "Monday", time: "5:30 PM" },
        { day: "Wednesday", time: "5:30 PM" },
        { day: "Friday", time: "5:30 PM" },
      ],
    },
    {
      id: 8,
      name: "CrossFit",
      description:
        "High-intensity functional movements that combine elements from different sports and types of exercise.",
      image: "/placeholder.svg?height=400&width=600",
      category: "hiit",
      duration: 60,
      intensity: "Very High",
      trainer: "Marcus Johnson",
      schedule: [
        { day: "Tuesday", time: "6:00 PM" },
        { day: "Thursday", time: "6:00 PM" },
        { day: "Saturday", time: "9:00 AM" },
      ],
    },
  ]

  const filteredClasses = classes.filter((cls) => {
    // Filter by category
    if (filter !== "all" && cls.category !== filter) {
      return false
    }

    // Filter by search query
    if (
      searchQuery &&
      !cls.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !cls.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    return true
  })

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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Gym class in session"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Our Classes</h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
              Discover a variety of classes designed to help you achieve your fitness goals, led by our expert trainers.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Filter by:</span>
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Classes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Classes</SelectItem>
                    <SelectItem value="yoga">Yoga</SelectItem>
                    <SelectItem value="hiit">HIIT</SelectItem>
                    <SelectItem value="cardio">Cardio</SelectItem>
                    <SelectItem value="strength">Strength</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-auto">
                <Input
                  type="search"
                  placeholder="Search classes..."
                  className="md:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Classes Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            {filteredClasses.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No classes found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredClasses.map((cls) => (
                  <Card key={cls.id} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image src={cls.image || "/placeholder.svg"} alt={cls.name} fill className="object-cover" />
                      <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                        {cls.category.charAt(0).toUpperCase() + cls.category.slice(1)}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle>{cls.name}</CardTitle>
                      <CardDescription>{cls.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{cls.duration} min</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{cls.intensity}</span>
                        </div>
                        <div className="flex items-center gap-2 col-span-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{cls.trainer}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Schedule:</h4>
                        <ul className="space-y-1">
                          {cls.schedule.map((slot, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              {slot.day}: {slot.time}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/contact">Book Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Class Schedule */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Weekly Schedule</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Plan your week with our comprehensive class schedule.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-4 bg-background">Time</th>
                    <th className="border p-4 bg-background">Monday</th>
                    <th className="border p-4 bg-background">Tuesday</th>
                    <th className="border p-4 bg-background">Wednesday</th>
                    <th className="border p-4 bg-background">Thursday</th>
                    <th className="border p-4 bg-background">Friday</th>
                    <th className="border p-4 bg-background">Saturday</th>
                    <th className="border p-4 bg-background">Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 bg-background font-medium">6:00 AM</td>
                    <td className="border p-4 bg-background">Power Yoga</td>
                    <td className="border p-4 bg-background">Strength Training</td>
                    <td className="border p-4 bg-background">Power Yoga</td>
                    <td className="border p-4 bg-background">Strength Training</td>
                    <td className="border p-4 bg-background">Power Yoga</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">-</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background font-medium">9:00 AM</td>
                    <td className="border p-4 bg-background">Pilates</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">Pilates</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">Pilates</td>
                    <td className="border p-4 bg-background">Strength Training</td>
                    <td className="border p-4 bg-background">-</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background font-medium">10:30 AM</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">Spin Class</td>
                    <td className="border p-4 bg-background">Yoga Flow</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background font-medium">5:30 PM</td>
                    <td className="border p-4 bg-background">Zumba</td>
                    <td className="border p-4 bg-background">HIIT Circuit</td>
                    <td className="border p-4 bg-background">Zumba</td>
                    <td className="border p-4 bg-background">HIIT Circuit</td>
                    <td className="border p-4 bg-background">Zumba</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">-</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background font-medium">6:00 PM</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">CrossFit</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">CrossFit</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">-</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background font-medium">7:00 PM</td>
                    <td className="border p-4 bg-background">Spin Class</td>
                    <td className="border p-4 bg-background">Boxing Fundamentals</td>
                    <td className="border p-4 bg-background">Spin Class</td>
                    <td className="border p-4 bg-background">Boxing Fundamentals</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">-</td>
                    <td className="border p-4 bg-background">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to Join a Class?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
              Book your first class today and start your fitness journey with our expert trainers.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Book a Class</Link>
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
