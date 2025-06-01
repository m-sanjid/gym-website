"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Calendar, User, Tag, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogPosts } from "@/lib/constant";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" ||
      post.category.toLowerCase() === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/gym.jpeg"
              alt="Blog hero"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              FitForge Blog
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
              Expert advice, training tips, and success stories to help you
              achieve your fitness goals.
            </p>
            <div className="mt-8 max-w-md w-full">
              <div className="relative group">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 transition-all duration-300 group-hover:bg-white/20 focus:bg-white/20 focus:ring-2 focus:ring-white/40"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute right-0 top-0 h-full px-3 text-white hover:text-white hover:bg-transparent"
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
                    className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b bg-gradient-to-b from-background to-muted/50">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === "all" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                All
              </Button>
              <Button
                variant={selectedCategory === "training" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory("training")}
                className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                Training
              </Button>
              <Button
                variant={selectedCategory === "nutrition" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory("nutrition")}
                className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                Nutrition
              </Button>
              <Button
                variant={selectedCategory === "cardio" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory("cardio")}
                className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                Cardio
              </Button>
              <Button
                variant={selectedCategory === "wellness" ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory("wellness")}
                className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                Wellness
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search query.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-2 right-2 bg-primary/90 hover:bg-primary transition-colors duration-300">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {post.tags &&
                          post.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-muted hover:bg-muted/80 transition-colors duration-300"
                            >
                              {tag}
                            </Badge>
                          ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {post.author}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group/btn hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-primary/10 hover:text-primary transition-colors duration-300"
              >
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Stay Updated
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Subscribe to our newsletter for the latest fitness tips, workout
                ideas, and exclusive content.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 transition-all duration-300 focus:ring-2 focus:ring-primary/40"
                />
                <Button className="hover:bg-primary/90 transition-colors duration-300">
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link
                  href="#"
                  className="underline underline-offset-2 hover:text-primary transition-colors duration-300"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="underline underline-offset-2 hover:text-primary transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
