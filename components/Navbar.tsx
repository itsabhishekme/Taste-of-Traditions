"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import { FiArrowRight } from "react-icons/fi";

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

    transition: {
      delay: i * 0.06,
    },
  }),
};

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  /* ROUTE CHANGE */
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* LOCK SCROLL */
  useEffect(() => {
    document.body.style.overflow =
      isOpen ? "hidden" : "auto";
  }, [isOpen]);

  /* ESC CLOSE */
  useEffect(() => {
    const esc = (
      e: KeyboardEvent
    ) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      esc
    );

    return () =>
      window.removeEventListener(
        "keydown",
        esc
      );
  }, []);

  /* SCROLL EFFECT */
  useEffect(() => {
    const scroll = () => {
      setScrolled(
        window.scrollY > 10
      );
    };

    window.addEventListener(
      "scroll",
      scroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        scroll
      );
  }, []);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },

    {
      name: "Recipes",
      href: "/recipes",
    },

    {
      name: "Cloud Kitchen",
      href: "/cloud-kitchen",
    },

    {
      name: "Franchise",
      href: "/franchise",
    },

    {
      name: "About",
      href: "/about",
    },

    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const isActive = (
    href: string
  ) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(
      href
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black border-b border-white/10 shadow-lg backdrop-blur-xl"
          : "bg-black"
      }`}
    >

      {/* PREMIUM GLOW LINE */}

      <div className="absolute bottom-0 w-full h-[1px] bg-yellow-400/40" />

      {/* NAVBAR */}

      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}

        <Link
          href="/"
          className="text-2xl font-extrabold text-white hover:text-yellow-400 transition"
        >
          Taste of Traditions
        </Link>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center space-x-10">

          {navLinks.map((link) => {
            const active =
              isActive(
                link.href
              );

            return (
              <div
                key={link.name}
                className="relative group"
              >

                <Link
                  href={link.href}
                  className={`relative z-10 px-2 transition ${
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

          {/* ORDER NOW BUTTON */}

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
            }}

            whileTap={{
              scale: 0.96,
            }}
          >

            <Link
              href="/cloud-kitchen"
              className="group relative overflow-hidden"
            >

              {/* GLOW */}

              <div className="absolute inset-0 rounded-2xl bg-yellow-400 blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />

              {/* BUTTON */}

              <div className="relative flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold shadow-2xl border border-yellow-200 overflow-hidden">

                <span className="relative z-10">
                  Order Now
                </span>

                <FiArrowRight className="relative z-10 text-lg" />

                {/* SHINE */}

                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 transition-transform duration-1000 skew-x-12" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() =>
            setIsOpen(
              !isOpen
            )
          }
          className="md:hidden text-3xl text-white"
        >
          {isOpen ? (
            <HiOutlineX />
          ) : (
            <HiOutlineMenuAlt3 />
          )}
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
            onClick={() =>
              setIsOpen(false)
            }
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

              {navLinks.map(
                (
                  link,
                  i
                ) => (
                  <motion.div
                    key={
                      link.name
                    }
                    custom={i}
                    variants={
                      navItem
                    }
                    initial="hidden"
                    animate="visible"
                  >

                    <Link
                      href={
                        link.href
                      }
                      className={`block text-lg transition ${
                        isActive(
                          link.href
                        )
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-yellow-400"
                      }`}
                    >
                      {
                        link.name
                      }
                    </Link>
                  </motion.div>
                )
              )}
            </div>

            {/* MOBILE CTA */}

            <div className="mt-10">

              <Link
                href="/cloud-kitchen"
                className="group relative overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black py-4 rounded-2xl font-bold shadow-lg"
              >

                <span className="relative z-10">
                  Order Now
                </span>

                <FiArrowRight className="relative z-10 text-lg" />

                {/* SHINE */}

                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 transition-transform duration-1000 skew-x-12" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}