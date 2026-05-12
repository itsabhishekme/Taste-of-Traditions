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

import { FiArrowRight } from "react-icons/fi";

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
            ? "bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
            : "bg-black/40 backdrop-blur-xl"
        }`}
      >

        {/* ======================================================
            BACKGROUND GLOW
        ====================================================== */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-[-120px] left-[-120px] w-[260px] h-[260px] bg-yellow-400/10 rounded-full blur-[100px]" />

          <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-orange-500/10 rounded-full blur-[100px]" />
        </div>

        {/* ======================================================
            PREMIUM BORDER
        ====================================================== */}

        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

        {/* ======================================================
            NAVBAR
        ====================================================== */}

        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[88px] flex items-center justify-between">

          {/* ======================================================
              LOGO
          ====================================================== */}

          <Link
            href="/"
            className="relative group flex items-center gap-4 shrink-0"
          >

            {/* GLOW */}

            <div className="absolute -inset-4 bg-yellow-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700 rounded-full" />

            {/* LOGO ICON */}

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" />

              <div className="relative w-[58px] h-[58px] rounded-full bg-gradient-to-br from-[#FFD95A] via-[#FFB627] to-[#FF8A00] p-[2px] shadow-[0_12px_40px_rgba(255,180,0,0.35)]">

                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden border border-yellow-300/30">

                  <div className="relative flex items-center justify-center">

                    <div className="absolute w-10 h-10 bg-yellow-400/30 blur-xl rounded-full" />

                    <span className="relative text-[26px]">
                      🍛
                    </span>
                  </div>
                </div>
              </div>

              {/* ONLINE DOT */}

              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-black animate-pulse" />
            </div>

            {/* BRAND */}

            <div className="leading-none">

              <div className="flex items-center gap-2">

                <h2 className="text-[24px] md:text-[28px] font-black tracking-tight text-white">

                  Taste of
                </h2>

                
              </div>

              <div className="flex items-center gap-3 mt-1">

                <p className="text-yellow-400 font-bold text-sm md:text-base tracking-[0.32em] uppercase">

                  Traditions
                </p>

                <div className="hidden md:block h-[1px] w-14 bg-gradient-to-r from-yellow-400/70 to-transparent" />
              </div>

              <p className="hidden lg:block text-[11px] text-gray-500 mt-2 tracking-[0.22em] uppercase">

                Authentic Indian Heritage
              </p>
            </div>
          </Link>

          {/* ======================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <div className="hidden lg:flex items-center gap-2">

            {navLinks.map((link) => {
              const active =
                isActive(
                  link.href
                );

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
                      className="absolute inset-0 rounded-2xl bg-yellow-400/10 border border-yellow-400/20"
                    />
                  )}

                  {/* LINK */}

                  <Link
                    href={link.href}
                    className={`relative flex items-center justify-center px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                      active
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              );
            })}

            {/* ======================================================
                ORDER BUTTON
            ====================================================== */}

            <motion.div
              whileHover={{
                scale: 1.04,
                y: -2,
              }}

              whileTap={{
                scale: 0.97,
              }}

              className="ml-4"
            >

              <Link
                href="/cloud-kitchen"
                className="group relative overflow-hidden"
              >

                <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-20 group-hover:opacity-40 transition duration-500 rounded-2xl" />

                <div className="relative flex items-center gap-3 px-7 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black font-bold shadow-[0_15px_40px_rgba(255,215,0,0.25)] overflow-hidden">

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
              setIsOpen(
                !isOpen
              )
            }
            className="lg:hidden relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white text-3xl shrink-0"
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
            custom={1}
            variants={drawer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 w-[320px] max-w-full h-full bg-[#050505] border-l border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.55)] z-50 overflow-hidden"
          >

            {/* DRAWER GLOW */}

            <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-yellow-400/10 blur-[120px] rounded-full" />

            {/* CONTENT */}

            <div className="relative flex flex-col h-full p-8">

              {/* MOBILE HEADER */}

              <div className="flex items-center justify-between pb-8 border-b border-white/10">

                <div>

                  <h2 className="text-2xl font-black text-white">
                    Taste of
                  </h2>

                  <p className="text-yellow-400 text-sm tracking-[0.25em] uppercase mt-1">

                    Traditions
                  </p>
                </div>

                <button
                  onClick={() =>
                    setIsOpen(
                      false
                    )
                  }
                  className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-2xl"
                >
                  <HiOutlineX />
                </button>
              </div>

              {/* LINKS */}

              <div className="flex-1 mt-10 space-y-3">

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
                        className={`flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 ${
                          isActive(
                            link.href
                          )
                            ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                            : "text-gray-300 hover:bg-white/5 hover:text-yellow-400"
                        }`}
                      >

                        <span className="text-lg font-medium">
                          {
                            link.name
                          }
                        </span>

                        <FiArrowRight />
                      </Link>
                    </motion.div>
                  )
                )}
              </div>

              {/* MOBILE CTA */}

              <div className="pt-6 border-t border-white/10">

                <Link
                  href="/cloud-kitchen"
                  className="group relative overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black py-4 rounded-2xl font-bold shadow-[0_15px_40px_rgba(255,215,0,0.25)]"
                >

                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 transition-transform duration-1000 skew-x-12" />

                  <span className="relative z-10">
                    Order Now
                  </span>

                  <FiArrowRight className="relative z-10 text-lg" />
                </Link>

                

                <div className="mt-6 text-center text-xs text-gray-500">

                

                  <span className="ml-1 text-yellow-400 font-semibold">
                 
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================
          SPACER
      ====================================================== */}

      <div className="h-[90px] lg:h-[88px]" />
    </>
  );
}