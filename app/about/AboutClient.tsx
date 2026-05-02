"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Utensils,
  Leaf,
  Flame,
  Users,
  Star,
  MapPin,
  Clock,
  Crown,
  Gift,
} from "lucide-react";

/* 🔥 REUSABLE ICON CARD */
function IconCard({ icon, title, desc }: any) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      className="relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl group overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-orange-400 to-yellow-400 transition"></div>

      <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-lg mb-5 group-hover:rotate-6 transition">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-orange-600">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </motion.div>
  );
}

/* 🍛 FOOD CARD (NEW SECTION) */
function FoodCard({ name, price }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden"
    >
      <div className="h-40 bg-gradient-to-br from-orange-200 to-red-200"></div>

      <div className="p-6">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-orange-600 font-semibold mt-2">₹{price}</p>

        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export default function AboutClient() {
  return (
    <main className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-900 overflow-hidden">

      {/* 🌕 BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-300 opacity-20 blur-3xl rounded-full"></div>

      {/* 🔥 HERO */}
      <section className="py-32 text-center px-6">
        <motion.h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
          Our Story 🍲
        </motion.h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700">
          Reviving India’s forgotten flavors with emotion and tradition.
        </p>
      </section>

      {/* 🕰️ TIMELINE (NEW) */}
      <section className="px-6 md:px-20 py-24">
        <h2 className="text-4xl font-bold text-center">Our Journey</h2>

        <div className="mt-16 space-y-10 max-w-3xl mx-auto">
          {[
            "Started from a small home kitchen",
            "Collected recipes from villages",
            "Served first 100 customers",
            "Expanding to a larger audience",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-4 h-4 bg-orange-500 rounded-full mt-2"></div>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 👑 FEATURES */}
      <section className="px-6 md:px-16 py-24">
        <h2 className="text-4xl font-bold text-center">What Makes Us Special</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          <IconCard icon={<Crown />} title="Premium Recipes" desc="Rare dishes revived" />
          <IconCard icon={<Gift />} title="Emotional Experience" desc="Food with memories" />
          <IconCard icon={<Flame />} title="Authentic Cooking" desc="Traditional methods" />
        </div>
      </section>

      {/* 🍛 FEATURED FOOD (NEW + IMPORTANT) */}
      <section className="px-6 md:px-16 py-24 bg-white">
        <h2 className="text-4xl font-bold text-center">Featured Dishes</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          <FoodCard name="Dal Baati" price="199" />
          <FoodCard name="Paneer Handi" price="249" />
          <FoodCard name="Ghar Ka Thali" price="299" />
        </div>
      </section>

      {/* 🌿 VALUES */}
      <section className="px-6 md:px-16 py-24 text-center">
        <h2 className="text-4xl font-bold">Our Core Values</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          <IconCard icon={<Leaf />} title="Authenticity" desc="True to roots" />
          <IconCard icon={<Heart />} title="Love" desc="Cooked with emotion" />
          <IconCard icon={<Sparkles />} title="Quality" desc="Premium ingredients" />
        </div>
      </section>

      {/* ⭐ TESTIMONIAL */}
      <section className="px-6 md:px-16 py-24 text-center">
        <h2 className="text-4xl font-bold">What People Say</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {["Amazing taste!", "Feels like home", "Authentic flavors"].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <Star className="text-orange-500 mb-3" />
              <p className="text-gray-600">{t}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="text-center py-28 bg-black text-white">
        <h2 className="text-5xl font-bold">Taste the Legacy</h2>

        <Link
          href="/cloud-kitchen"
          className="inline-block mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-4 rounded-xl font-semibold hover:scale-110 transition"
        >
          Order Now 🍛
        </Link>
      </section>

    </main>
  );
}