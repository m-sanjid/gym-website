"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import {
  Sun,
  Moon,
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Logo from "./logo";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Membership", href: "/membership" },
  { title: "Classes", href: "/classes" },
  { title: "Contact", href: "/contact" },
  { title: "Blog", href: "/blog" },
];


export default function Navbar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState<number|null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    const currentTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    const isDark = currentTheme === "dark";
    setIsDarkMode(isDark);
    root.classList.toggle("dark", isDark);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur" />
    );
  }

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };


  return (
    <nav
      className={`sticky z-50 w-full transition-all duration-300 ${isScrolled
        ? "top-4 mx-auto max-w-5xl border rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        : "top-0 bg-background/95 backdrop-blur"
        }`}
    >
      <div className="max-w-7xl mx-auto flex h-14 items-center px-4 md:px-8 justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <nav className="relative flex space-x-2" ref={navRef} onMouseLeave={() => setIsHovered(null)}>

            {/* Navigation Items */}
            {navItems.map((item,idx) => (
                <Link href={item.href} key={item.href}
                    onMouseEnter={() => setIsHovered(idx)}
                    className={`gap-2 relative p-2 flex items-center z-10 ${pathname === item.href
                      ? "text-muted-foreground"
                      : "text-primary"
                      }`}
                      >
                    <span className="text-sm">{item.title}</span>
                    {isHovered === idx && (
                      <motion.div
                        layoutId="hover"
                        className="absolute inset-0 z-20 bg-black/10 dark:bg-white/10 h-full w-full rounded-lg"
                      />
                    )}
                </Link>
              ))}
          </nav>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navItems.map(({ title, href }) => (
                  <DropdownMenuItem key={href} asChild>
                    <Link
                      href={href}
                      className="flex items-center gap-2 w-full"
                    >
                      {title}
                    </Link>
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-4">

        <Button asChild className="hidden md:flex">
          <Link href="/membership">Join Now</Link>
        </Button>

          {/* Theme Toggle */}
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            {isDarkMode ? (
                <Sun className="h-4 w-4" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
