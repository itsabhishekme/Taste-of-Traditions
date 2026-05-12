"use client";

import Image from "next/image";
import Link from "next/link";

import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useEffect } from "react";

import {
  Flame,
  Star,
  ArrowRight,
  ChefHat,
  Sparkles,
  Clock3,
} from "lucide-react";

/* ======================================================
   ONLINE IMAGES
====================================================== */

const heroImage =
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1800&auto=format&fit=crop";

const floatingFood =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop";

const chefImage =
  "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop";

/* ======================================================
   ANIMATIONS
====================================================== */

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

/* ======================================================
   COMPONENT
====================================================== */

export default function Hero() {
  /* ======================================================
     PARALLAX EFFECT
  ====================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(
    mouseY,
    [-300, 300],
    [10, -10]
  );

  const rotateY = useTransform(
    mouseX,
    [-300, 300],
    [-10, 10]
  );

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(
        e.clientX - window.innerWidth / 2
      );

      mouseY.set(
        e.clientY - window.innerHeight / 2
      );
    };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMove
      );
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* ======================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        className="absolute inset-0 scale-110"
      >

        <Image
          src={heroImage}
          alt="Traditional Indian Food"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* ======================================================
          OVERLAY
      ====================================================== */}

      <motion.div
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(0,0,0,0.88), rgba(0,0,0,0.70))",

            "linear-gradient(to bottom right, rgba(0,0,0,0.92), rgba(0,0,0,0.60))",

            "linear-gradient(to bottom right, rgba(0,0,0,0.88), rgba(0,0,0,0.70))",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute inset-0"
      />

      {/* ======================================================
          GLOW EFFECTS
      ====================================================== */}

      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-yellow-400/20 blur-[180px] rounded-full animate-pulse" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[600px] h-[600px] bg-orange-500/20 blur-[180px] rounded-full animate-pulse" />

      {/* ======================================================
          FLOATING PARTICLES
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute top-32 left-20 text-yellow-300 text-5xl opacity-20"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute bottom-40 right-20 text-orange-300 text-4xl opacity-20"
      >
        🍛
      </motion.div>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center"
      >

        {/* ======================================================
            LEFT CONTENT
        ====================================================== */}

        <div className="text-white">

          {/* TOP BADGE */}

          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-full shadow-2xl"
          >

          </motion.div>

          {/* HEADLINE */}

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight mt-8"
          >
            Rediscover
            <span className="block text-yellow-400">
              Timeless
            </span>

            <span className="block">
              Indian Flavors
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            variants={item}
            className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Experience authentic Indian recipes crafted
            with heritage spices, emotional memories,
            and traditional homemade cooking methods.
          </motion.p>

          {/* CTA BUTTONS */}

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-5"
          >

            <motion.div
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
            >

              <Link
                href="/recipes"
                className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-5 rounded-full font-bold shadow-[0_15px_40px_rgba(255,215,0,0.35)]"
              >
                Explore Recipes

                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
            >

              <Link
                href="/cloud-kitchen"
                className="inline-flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-5 rounded-full font-semibold text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Order Food 🍛
              </Link>
            </motion.div>
          </motion.div>

          {/* STATS */}

          <motion.div
            variants={item}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14"
          >

            {[
              "100+ Recipes",
              "10K+ Orders",
              "4.9⭐ Ratings",
              "Authentic Taste",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl"
              >

                <p className="font-semibold text-center">
                  {text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ======================================================
            RIGHT VISUALS
        ====================================================== */}

        <motion.div
          variants={item}
          className="relative"
        >

          {/* MAIN CARD */}

          <div className="relative h-[760px] rounded-[40px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.45)]">

            <Image
              src={floatingFood}
              alt="Indian Dish"
              fill
              className="object-cover"
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* TOP FLOAT */}

            <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl text-white">

              <div className="flex items-center gap-3">

                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center shadow-xl">
                  <ChefHat />
                </div>

                <div>

                  <p className="text-sm text-gray-300">
                    Chef Special
                  </p>

                  <h3 className="font-black text-xl">
                    Royal Indian Thali
                  </h3>
                </div>
              </div>
            </div>

            {/* BOTTOM CONTENT */}

            <div className="absolute bottom-10 left-10 right-10">

              <div className="flex items-center gap-2 text-orange-300 font-semibold">
                <Flame size={18} />
                Trending Heritage Cuisine
              </div>

              <h2 className="text-5xl font-black text-white mt-5 leading-tight">
                Crafted With
                <span className="block text-yellow-400">
                  Passion & Tradition
                </span>
              </h2>

              {/* FLOATING INFO */}

              <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 text-white">

                  <div className="flex items-center gap-3">

                    <Clock3 size={20} />

                    <span>30 Min Cooking</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 text-white">

                  <div className="flex items-center gap-3">

                    <Star
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span>4.9 Ratings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING CHEF CARD */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute -bottom-12 -left-10 bg-white rounded-[32px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] w-80"
          >

            <div className="flex items-center gap-5">

              <div className="relative w-20 h-20 rounded-3xl overflow-hidden">

                <Image
                  src={chefImage}
                  alt="Chef"
                  fill
                  className="object-cover"
                />
              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Master Chef
                </p>

                <h3 className="text-2xl font-black">
                  Heritage Cooking
                </h3>

                <p className="text-orange-500 mt-1 font-semibold">
                  Premium Traditional Recipes
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ======================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 text-white text-sm opacity-70 z-30"
      >
        ↓ Scroll To Explore
      </motion.div>

      {/* ======================================================
          BOTTOM FADE
      ====================================================== */}

      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
    </section>
  );
}