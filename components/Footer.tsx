"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-300 mt-20">
      
      {/* Top Decorative Gradient Blur */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#facc15,_transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4 tracking-wide">
            Taste of Traditions
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Reviving lost recipes, preserving culture, and bringing authentic flavors back to life.
            Every dish tells a story rooted in heritage and tradition.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link href="/menu" className="hover:text-yellow-400 transition">Menu</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-yellow-400 transition">Stories</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Cloud Kitchen Delivery</li>
            <li>Traditional Catering</li>
            <li>Recipe Revival Projects</li>
            <li>Food Storytelling</li>
            <li>Franchise Opportunities</li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Connected
          </h3>

          {/* Newsletter */}
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black py-2 rounded-md font-medium hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition"><FaFacebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition"><FaInstagram /></a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-400 transition"><FaTwitter /></a>
            <a href="#" aria-label="YouTube" className="hover:text-yellow-400 transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        
        <p>
          © 2026 Taste of Traditions. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-3 md:mt-0">
          <Link href="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-yellow-400 transition">Terms of Service</Link>
        </div>
      </div>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Taste of Traditions",
            description:
              "Authentic traditional food and forgotten recipes revived with modern culinary excellence.",
            url: "https://tasteoftraditions.com",
            sameAs: [
              "https://facebook.com",
              "https://instagram.com",
              "https://twitter.com"
            ],
            servesCuisine: ["Indian Traditional"],
          }),
        }}
      />
    </footer>
  );
}