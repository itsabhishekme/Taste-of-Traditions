"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

/* ================= ANIMATIONS ================= */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  /* 🔥 PARALLAX EFFECT */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* 🔥 BACKGROUND PARALLAX */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src="/images/hero-food.jpg"
          alt="Traditional Indian Food"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* 🌌 ANIMATED OVERLAY */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.7))",
            "linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(0,0,0,0.6))",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0"
      />

      {/* 🌟 GLOW */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-yellow-400/30 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full animate-pulse"></div>

      {/* ✨ FLOATING PARTICLES */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute left-20 top-1/3 text-yellow-400 opacity-20 text-4xl"
      >
        ✨
      </motion.div>

      {/* 🌟 CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl px-6 text-center text-white"
      >
        {/* 🔥 HEADLINE */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
        >
          Rediscover the Soul of{" "}
          <span className="text-yellow-400 drop-shadow-xl">
            Traditions
          </span>
        </motion.h1>

        {/* ✨ SUBTITLE */}
        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Where every dish carries a story — crafted with heritage,
          passion, and timeless Indian flavors.
        </motion.p>

        {/* 🔥 CTA */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
        >
          <motion.div whileHover={{ scale: 1.1, y: -3 }}>
            <Link href="/menu">
              <button className="relative px-10 py-4 rounded-full bg-yellow-400 text-black font-semibold shadow-2xl overflow-hidden">
                <span className="relative z-10">Explore Menu</span>
                <span className="absolute inset-0 bg-yellow-300 opacity-0 hover:opacity-30 transition"></span>
              </button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1, y: -3 }}>
            <Link href="/order">
              <button className="px-10 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition shadow-xl">
                Order Now
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* 🔥 SOCIAL PROOF */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-300"
        >
          <span className="bg-white/5 px-4 py-2 rounded-full backdrop-blur-md">
            ⭐ 4.9 Rated
          </span>
          <span className="bg-white/5 px-4 py-2 rounded-full backdrop-blur-md">
            👨‍🍳 10K+ Orders Served
          </span>
          <span className="bg-white/5 px-4 py-2 rounded-full backdrop-blur-md">
            ❤️ Loved by Families
          </span>
        </motion.div>
      </motion.div>

      {/* 👇 SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 text-white text-sm opacity-70"
      >
        ↓ Scroll
      </motion.div>

      {/* 🔻 BOTTOM FADE */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}