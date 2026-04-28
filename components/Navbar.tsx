"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipes" },
    { name: "Cloud Kitchen", href: "/cloud-kitchen" },
    { name: "Franchise", href: "/franchise" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Active link logic (FIXED)
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md text-white shadow-lg">
      <nav
        className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
        role="navigation"
        aria-label="Main Navigation"
      >

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition"
        >
          Taste of Traditions
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative transition duration-300 hover:text-yellow-400 ${
                isActive(link.href) ? "text-yellow-400" : ""
              }`}
            >
              {link.name}

              {/* Underline Animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/cloud-kitchen"
            className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold shadow-md hover:scale-105 hover:bg-yellow-300 transition"
          >
            Order Now
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">

          <h2 className="text-xl font-bold text-yellow-400">
            Menu
          </h2>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block text-lg transition ${
                isActive(link.href) ? "text-yellow-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/cloud-kitchen"
            className="block bg-yellow-400 text-black text-center py-3 rounded-xl font-semibold mt-6"
          >
            Order Now
          </Link>
        </div>
      </div>
    </header>
  );
}