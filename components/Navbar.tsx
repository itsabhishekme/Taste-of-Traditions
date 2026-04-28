"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipes" },
    { name: "Cloud Kitchen", href: "/cloud-kitchen" },
    { name: "Franchise", href: "/franchise" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Taste of Traditions
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition hover:text-yellow-400 ${
                pathname === link.href ? "text-yellow-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA BUTTON */}
          <Link
            href="/cloud-kitchen"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Order Now
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-lg ${
                pathname === link.href ? "text-yellow-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/cloud-kitchen"
            onClick={() => setIsOpen(false)}
            className="block bg-yellow-400 text-black text-center py-2 rounded-lg font-semibold"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}