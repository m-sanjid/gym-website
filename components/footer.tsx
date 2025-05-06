"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dumbbell,
  Mail,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
} from "lucide-react";
import SocialLinks from "./social-links";

const Footer = () => {
  const [hovered, setHovered] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="border-t py-12 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950 transition-all duration-300">
      <div className="container">
        {/* Newsletter sign-up */}
        <div className="mb-12 p-6 bg-gray-100 dark:bg-neutral-800 rounded-xl shadow-sm mx-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">
                Join Our Fitness Community
              </h3>
              <p className="text-sm text-muted-foreground">
                Get weekly workout tips and special offers.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-200 w-full md:w-64"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSubscribe}
                  className={`px-4 py-2 rounded-lg bg-primary font-medium transition-all duration-300 transform ${
                    subscribed ? "scale-105" : ""
                  }`}
                >
                  {subscribed ? "Subscribed! ✓" : "Subscribe"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div
              className="inline-flex items-center gap-2 transition-transform duration-300"
              onMouseEnter={() => setHovered("logo")}
              onMouseLeave={() => setHovered("")}
            >
              <div
                className={`rounded-ful p-2 transition-all duration-300 ${
                  hovered === "logo" ? "rotate-12" : ""
                }`}
              >
                <Dumbbell className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">FitForge</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming lives through fitness since 2010.
            </p>
            <SocialLinks />
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Membership", path: "/membership" },
                { name: "Classes", path: "/classes" },
              ].map((link) => (
                <li key={link.name} className="group">
                  <Link
                    href={link.path}
                    className="inline-flex items-center text-muted-foreground hover: transition-all duration-200"
                    onMouseEnter={() => setHovered(link.name)}
                    onMouseLeave={() => setHovered("")}
                  >
                    <ChevronRight
                      className={`mr-1 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 ${
                        hovered === link.name ? "" : ""
                      }`}
                    />
                    <span className="border-b border-transparent group-hover:border-primary pb-px">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic space-y-3 text-muted-foreground">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0 " />
                <p>
                  123 Fitness Street
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center group hover: transition-colors duration-200">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0  group-hover:scale-110 transition-transform duration-200" />
                <a href="mailto:info@fitforge.com" className="hover:underline">
                  info@fitforge.com
                </a>
              </div>
              <div className="flex items-center group hover: transition-colors duration-200">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0  group-hover:scale-110 transition-transform duration-200" />
                <a href="tel:+11234567890" className="hover:underline">
                  (123) 456-7890
                </a>
              </div>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-1 flex-shrink-0 " />
                <div className="space-y-2">
                  <div className="flex justify-between gap-2">
                    <span className="font-medium">Mon-Fri:</span>
                    <span className="text-green-600 font-medium">
                      5am - 10pm
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="font-medium">Sat:</span>
                    <span className="text-green-600 font-medium">
                      7am - 8pm
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="font-medium">Sun:</span>
                    <span className="text-green-600 font-medium">
                      8am - 6pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} FitForge. All rights reserved.</p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover: transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="hover: transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="hover: transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
