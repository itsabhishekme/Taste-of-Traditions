"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  motion,
  AnimatePresence,
  type Variants,
} from "framer-motion";

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";

import {
  FiArrowRight,
} from "react-icons/fi";

/* ======================================================
   ANIMATIONS
====================================================== */

const drawer: Variants = {
  hidden: {
    x: "100%",
  },

  visible: {
    x: 0,

    transition: {
      type: "spring",
      damping: 28,
      stiffness: 260,
    },
  },

  exit: {
    x: "100%",

    transition: {
      duration: 0.25,
    },
  },
};

const overlay: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },
};

const navItem: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.07,
    },
  }),
};

/* ======================================================
   COMPONENT
====================================================== */

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  /* ======================================================
     CLOSE DRAWER ON ROUTE CHANGE
  ====================================================== */

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* ======================================================
     LOCK BODY SCROLL
  ====================================================== */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [isOpen]);

  /* ======================================================
     ESC CLOSE
  ====================================================== */

  useEffect(() => {
    const handleEscape = (
      e: KeyboardEvent
    ) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleEscape
      );
  }, []);

  /* ======================================================
     SCROLL EFFECT
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 8
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* ======================================================
     NAVIGATION LINKS
  ====================================================== */

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

  /* ======================================================
     ACTIVE LINK
  ====================================================== */

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
    <>
      {/* ======================================================
          HEADER
      ====================================================== */}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
            : "bg-black/20 backdrop-blur-xl"
        }`}
      >

        {/* ======================================================
            BACKGROUND EFFECTS
        ====================================================== */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-yellow-400/10 rounded-full blur-[120px]" />

          <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-orange-500/10 rounded-full blur-[120px]" />

          <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-yellow-300/5 blur-[140px]" />
        </div>

        {/* ======================================================
            PREMIUM BORDER
        ====================================================== */}

        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

        {/* ======================================================
            NAVBAR
        ====================================================== */}

        <nav className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-[92px] flex items-center justify-between">

          {/* ======================================================
              BRAND
          ====================================================== */}

          <Link
            href="/"
            className="relative group shrink-0"
          >

            {/* GLOW */}
            <div className="absolute -inset-6 bg-yellow-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700 rounded-full" />

            <div className="relative">

              {/* TOP LABEL */}
              <div className="flex items-center gap-3">

                <div className="h-[1px] w-10 bg-gradient-to-r from-yellow-400 to-transparent" />

                <span className="text-[10px] tracking-[0.35em] uppercase text-yellow-400 font-semibold">
                
                </span>
              </div>

              {/* TITLE */}
              <h1 className="mt-2 text-[30px] md:text-[40px] font-black tracking-tight leading-none">

                <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">

                  Taste
                </span>

                <span className="text-white mx-2">
                  of
                </span>

                <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">

                  Traditions
                </span>
              </h1>

              {/* SUBTEXT */}
              <p className="hidden md:block mt-2 text-[11px] tracking-[0.35em] uppercase text-gray-400">

                Authentic Indian Heritage Cuisine
              </p>
            </div>
          </Link>

          {/* ======================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <div className="hidden lg:flex items-center gap-2">

            {navLinks.map((link) => {
              const active =
                isActive(link.href);

              return (
                <div
                  key={link.name}
                  className="relative"
                >

                  {/* ACTIVE BG */}

                  {active && (
                    <motion.div
                      layout
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-xl"
                    />
                  )}

                  {/* LINK */}

                  <Link
                    href={link.href}
                    className={`relative flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                      active
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400 hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}

            {/* ======================================================
                CTA BUTTON
            ====================================================== */}

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -2,
              }}

              whileTap={{
                scale: 0.97,
              }}

              className="ml-5"
            >

              <Link
                href="/cloud-kitchen"
                className="group relative overflow-hidden"
              >

                {/* GLOW */}
                <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-30 group-hover:opacity-50 transition duration-500 rounded-2xl" />

                {/* BUTTON */}

                <div className="relative flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black font-bold shadow-[0_15px_50px_rgba(255,200,0,0.25)] overflow-hidden">

                  {/* SHINE */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 transition-transform duration-1000 skew-x-12" />

                  <span className="relative z-10">
                    Order Now
                  </span>

                  <FiArrowRight className="relative z-10 text-lg" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* ======================================================
              MOBILE BUTTON
          ====================================================== */}

          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="lg:hidden relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white text-3xl"
          >
            {isOpen ? (
              <HiOutlineX />
            ) : (
              <HiOutlineMenuAlt3 />
            )}
          </button>
        </nav>
      </header>

      {/* ======================================================
          OVERLAY
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40"
            onClick={() =>
              setIsOpen(false)
            }
          />
        )}
      </AnimatePresence>

      {/* ======================================================
          MOBILE DRAWER
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={drawer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 w-[320px] max-w-full h-full bg-[#050505] border-l border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] z-50 overflow-hidden"
          >

            {/* GLOW */}

            <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-yellow-400/10 blur-[120px] rounded-full" />

            {/* CONTENT */}

            <div className="relative flex flex-col h-full p-8">

              {/* MOBILE HEADER */}

              <div className="flex items-center justify-between pb-8 border-b border-white/10">

                <div>

                  <h2 className="text-3xl font-black leading-none">

                    <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">

                      Taste
                    </span>

                    <span className="text-white mx-2">
                      of
                    </span>

                    <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">

                      Traditions
                    </span>
                  </h2>

                  <p className="mt-2 text-[10px] tracking-[0.30em] uppercase text-gray-400">

                    Indian Heritage Cuisine
                  </p>
                </div>

                <button
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-2xl"
                >
                  <HiOutlineX />
                </button>
              </div>

              {/* NAVIGATION LINKS */}

              <div className="flex-1 mt-10 space-y-3">

                {navLinks.map(
                  (link, i) => (
                    <motion.div
                      key={link.name}
                      custom={i}
                      variants={navItem}
                      initial="hidden"
                      animate="visible"
                    >

                      <Link
                        href={link.href}
                        className={`flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 ${
                          isActive(link.href)
                            ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                            : "text-gray-300 hover:bg-white/5 hover:text-yellow-400"
                        }`}
                      >

                        <span className="text-lg font-medium">
                          {link.name}
                        </span>

                        <FiArrowRight />
                      </Link>
                    </motion.div>
                  )
                )}
              </div>

              {/* CTA */}

              <div className="pt-6 border-t border-white/10">

                <Link
                  href="/cloud-kitchen"
                  className="group relative overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black py-4 rounded-2xl font-bold shadow-[0_15px_50px_rgba(255,200,0,0.25)]"
                >

                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 transition-transform duration-1000 skew-x-12" />

                  <span className="relative z-10">
                    Order Now
                  </span>

                  <FiArrowRight className="relative z-10 text-lg" />
                </Link>

                <p className="mt-6 text-center text-xs text-gray-500 tracking-[0.2em] uppercase">

                  Taste • Tradition • Luxury
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================
          SPACER
      ====================================================== */}

      <div className="h-[92px]" />
    </>
  );
}