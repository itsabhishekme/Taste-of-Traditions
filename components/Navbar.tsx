"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

/* ================= ANIMATION ================= */

const drawer = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

const overlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const navItem = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06 },
  }),
};

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ROUTE CHANGE */
  useEffect(() => setIsOpen(false), [pathname]);

  /* LOCK SCROLL */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  /* ESC CLOSE */
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  /* SCROLL EFFECT */
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipes" },
    { name: "Cloud Kitchen", href: "/cloud-kitchen" },
    { name: "Franchise", href: "/franchise" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black border-b border-white/10 shadow-lg"
          : "bg-black"
      }`}
    >
      {/* 🔥 PREMIUM GLOW LINE */}
      <div className="absolute bottom-0 w-full h-[1px] bg-yellow-400/40" />

      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-white hover:text-yellow-400 transition"
        >
          Taste of Traditions
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center space-x-10">

          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`relative z-10 px-2 ${
                    active
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                  }`}
                >
                  {link.name}
                </Link>

                {/* ACTIVE INDICATOR */}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-yellow-400/10"
                  />
                )}

                {/* HOVER LINE */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full" />
              </div>
            );
          })}

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.08 }}>
            <Link
              href="/cloud-kitchen"
              className="relative px-6 py-2 rounded-xl bg-yellow-400 text-black font-semibold overflow-hidden"
            >
              <span className="relative z-10">Order Now</span>
              <span className="absolute inset-0 bg-yellow-300 opacity-0 hover:opacity-20 transition" />
            </Link>
          </motion.div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-white"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlay}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/95"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={drawer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 right-0 w-72 h-full bg-black shadow-2xl p-6 z-50"
          >
            <h2 className="text-xl font-bold text-yellow-400 mb-8">
              Menu
            </h2>

            <div className="space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={navItem}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    className={`block text-lg ${
                      isActive(link.href)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/cloud-kitchen"
                className="block text-center bg-yellow-400 text-black py-3 rounded-xl font-semibold"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}