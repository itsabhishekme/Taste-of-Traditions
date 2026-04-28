"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* 🔥 Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-food.jpg" // replace with your image
          alt="Traditional Indian Food"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 🔥 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />

      {/* 🔥 Decorative Blur Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white">

        {/* ✨ Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Taste of{" "}
          <span className="text-yellow-400 drop-shadow-lg">
            Traditions
          </span>
        </motion.h1>

        {/* ✨ Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto"
        >
          Bringing forgotten recipes back to life — crafted with heritage,
          passion, and authentic flavors that connect generations.
        </motion.p>

        {/* 🔥 CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/menu">
            <button className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg hover:scale-105">
              Explore Menu
            </button>
          </Link>

          <Link href="/order">
            <button className="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition duration-300 shadow-lg hover:scale-105">
              Order Now
            </button>
          </Link>
        </motion.div>

        {/* 🔥 Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <span>🍲 Authentic Recipes</span>
          <span>🌿 Fresh Ingredients</span>
          <span>🔥 Handmade with Love</span>
        </div>
      </div>

      {/* 🔥 Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}