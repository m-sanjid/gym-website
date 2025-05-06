"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Dumbbell, Filter, Clock, User, BarChart3, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const classes = [
  {
    id: 1,
    name: "Power Yoga",
    description: "A dynamic and challenging yoga class that builds strength, flexibility, and endurance.",
    category: "yoga",
    duration: 60,
    intensity: "Medium",
    trainer: "Sarah Johnson",
    image: "/placeholder.svg",
    schedule: [
      { day: "Monday", time: "6:00 AM" },
      { day: "Wednesday", time: "6:00 AM" },
      { day: "Friday", time: "6:00 AM" }
    ]
  },
  {
    id: 2,
    name: "HIIT Circuit",
    description: "High-intensity interval training combining cardio and strength exercises for maximum results.",
    category: "hiit",
    duration: 45,
    intensity: "High",
    trainer: "Mike Thompson",
    image: "/placeholder.svg",
    schedule: [
      { day: "Tuesday", time: "5:30 PM" },
      { day: "Thursday", time: "5:30 PM" }
    ]
  },
  {
    id: 3,
    name: "Spin Class",
    description: "Indoor cycling class with high-energy music and motivating instructors.",
    category: "cardio",
    duration: 45,
    intensity: "High",
    trainer: "Lisa Chen",
    image: "/placeholder.svg",
    schedule: [
      { day: "Monday", time: "7:00 PM" },
      { day: "Wednesday", time: "7:00 PM" },
      { day: "Saturday", time: "10:30 AM" }
    ]
  },
  {
    id: 4,
    name: "Strength Training",
    description: "Build muscle and increase strength with guided weight training sessions.",
    category: "strength",
    duration: 60,
    intensity: "Medium-High",
    trainer: "David Martinez",
    image: "/placeholder.svg",
    schedule: [
      { day: "Tuesday", time: "6:00 AM" },
      { day: "Thursday", time: "6:00 AM" },
      { day: "Saturday", time: "9:00 AM" }
    ]
  },
  {
    id: 5,
    name: "Pilates",
    description: "Core-strengthening exercises that improve flexibility, posture, and overall body control.",
    category: "yoga",
    duration: 50,
    intensity: "Low-Medium",
    trainer: "Emma Wilson",
    image: "/placeholder.svg",
    schedule: [
      { day: "Monday", time: "9:00 AM" },
      { day: "Wednesday", time: "9:00 AM" },
      { day: "Friday", time: "9:00 AM" }
    ]
  },
  {
    id: 6,
    name: "Boxing Fundamentals",
    description: "Learn boxing techniques while getting a full-body workout.",
    category: "cardio",
    duration: 60,
    intensity: "High",
    trainer: "James Rodriguez",
    image: "/placeholder.svg",
    schedule: [
      { day: "Tuesday", time: "7:00 PM" },
      { day: "Thursday", time: "7:00 PM" }
    ]
  }
]

export default function ClassesPage() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredClasses = classes.filter((cls) => {
    const matchesFilter = filter === "all" || cls.category === filter
    const matchesSearch = cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* ... existing header code ... */}
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Our Classes
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
              Discover a variety of classes designed to help you achieve your fitness goals, led by our expert trainers.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b bg-gradient-to-b from-background to-muted/50">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" />
                <span className="font-medium">Filter by:</span>
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-[180px] transition-all duration-300 hover:ring-2 hover:ring-primary/20 focus:ring-2 focus:ring-primary/40">
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
                  className="md:w-[300px] transition-all duration-300 focus:ring-2 focus:ring-primary/40"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Classes Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            {filteredClasses.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No classes found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredClasses.map((cls) => (
                  <Card key={cls.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={cls.image || "/placeholder.svg"} 
                        alt={cls.name} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-2 right-2 bg-primary/90 hover:bg-primary transition-colors duration-300">
                        {cls.category.charAt(0).toUpperCase() + cls.category.slice(1)}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">{cls.name}</CardTitle>
                      <CardDescription>{cls.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm">{cls.duration} min</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-primary" />
                          <span className="text-sm">{cls.intensity}</span>
                        </div>
                        <div className="flex items-center gap-2 col-span-2">
                          <User className="h-4 w-4 text-primary" />
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
                      <Button asChild className="w-full group">
                        <Link href="/contact">
                          Book Now
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Class Schedule */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Weekly Schedule
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Plan your week with our comprehensive class schedule.
              </p>
            </div>
            <div className="overflow-x-auto rounded-lg border shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-4 bg-muted/50 font-medium">Time</th>
                    <th className="border p-4 bg-muted/50 font-medium">Monday</th>
                    <th className="border p-4 bg-muted/50 font-medium">Tuesday</th>
                    <th className="border p-4 bg-muted/50 font-medium">Wednesday</th>
                    <th className="border p-4 bg-muted/50 font-medium">Thursday</th>
                    <th className="border p-4 bg-muted/50 font-medium">Friday</th>
                    <th className="border p-4 bg-muted/50 font-medium">Saturday</th>
                    <th className="border p-4 bg-muted/50 font-medium">Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 bg-muted/50 font-medium">6:00 AM</td>
                    <td className="border p-4 bg-muted/50">Power Yoga</td>
                    <td className="border p-4 bg-muted/50">Strength Training</td>
                    <td className="border p-4 bg-muted/50">Power Yoga</td>
                    <td className="border p-4 bg-muted/50">Strength Training</td>
                    <td className="border p-4 bg-muted/50">Power Yoga</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">-</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-muted/50 font-medium">9:00 AM</td>
                    <td className="border p-4 bg-muted/50">Pilates</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">Pilates</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">Pilates</td>
                    <td className="border p-4 bg-muted/50">Strength Training</td>
                    <td className="border p-4 bg-muted/50">-</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-muted/50 font-medium">10:30 AM</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">Spin Class</td>
                    <td className="border p-4 bg-muted/50">Yoga Flow</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-muted/50 font-medium">5:30 PM</td>
                    <td className="border p-4 bg-muted/50">Zumba</td>
                    <td className="border p-4 bg-muted/50">HIIT Circuit</td>
                    <td className="border p-4 bg-muted/50">Zumba</td>
                    <td className="border p-4 bg-muted/50">HIIT Circuit</td>
                    <td className="border p-4 bg-muted/50">Zumba</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">-</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-muted/50 font-medium">6:00 PM</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">CrossFit</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">CrossFit</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">-</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-muted/50 font-medium">7:00 PM</td>
                    <td className="border p-4 bg-muted/50">Spin Class</td>
                    <td className="border p-4 bg-muted/50">Boxing Fundamentals</td>
                    <td className="border p-4 bg-muted/50">Spin Class</td>
                    <td className="border p-4 bg-muted/50">Boxing Fundamentals</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">-</td>
                    <td className="border p-4 bg-muted/50">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Join a Class?
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
              Book your first class today and start your fitness journey with our expert trainers.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link href="/contact">
                  Book a Class
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
