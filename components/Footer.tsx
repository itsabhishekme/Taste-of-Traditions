"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

/* ================= ANIMATION CONFIG ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

/* ================= COMPONENT ================= */

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: any) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("⚠️ Please enter a valid email");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("✅ You're now part of our food story!");
        setEmail("");
      } else {
        setStatus("❌ Something went wrong");
      }
    } catch {
      setStatus("🚨 Server error");
    }

    setLoading(false);
  };

  return (
    <footer className="relative mt-28 text-gray-300 overflow-hidden">

      {/* 🌌 MULTI-LAYER BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>

      <div className="absolute w-full h-full opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-yellow-400 blur-[180px] rounded-full -top-40 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-orange-500 blur-[180px] rounded-full bottom-0 right-0"></div>
      </div>

      {/* 🔥 CTA SECTION */}
      <div className="relative max-w-5xl mx-auto px-6 pt-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Bring Tradition Back to Your Plate 🍲
        </motion.h2>

        <p className="text-gray-400 mb-8 text-sm md:text-base">
          Join our journey of rediscovering lost recipes and timeless flavors.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <Link
            href="/menu"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Explore Menu →
          </Link>
        </motion.div>
      </div>

      {/* 🌟 MAIN GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-14"
      >
        {/* 🟡 BRAND */}
        <motion.div variants={item}>
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-4">
            Taste of Traditions
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            Preserving India's culinary heritage through authentic flavors,
            storytelling, and timeless recipes.
          </p>

          <div className="mt-5 text-xs text-yellow-300 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 rounded-full inline-block">
            Since 2024 • Handmade Recipes
          </div>
        </motion.div>

        {/* 🔗 LINKS */}
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            {["Home", "Menu", "About", "Contact", "Stories"].map(
              (name, i) => (
                <li key={i}>
                  <Link
                    href={`/${name.toLowerCase()}`}
                    className="group relative"
                  >
                    <span className="group-hover:text-yellow-400 transition">
                      {name}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-400 group-hover:w-full transition-all"></span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* 🍽 SERVICES */}
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold text-white mb-5">
            Services
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            {[
              "Cloud Kitchen",
              "Catering",
              "Recipe Revival",
              "Food Stories",
              "Franchise",
            ].map((service, i) => (
              <li
                key={i}
                className="hover:text-yellow-400 transition"
              >
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 📩 NEWSLETTER */}
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold text-white mb-5">
            Stay Connected
          </h3>

          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-300 transition disabled:opacity-50"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>

            {status && (
              <p className="text-xs text-gray-400">{status}</p>
            )}
          </form>

          {/* SOCIAL */}
          <div className="flex space-x-4 mt-6">
            {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.3, rotate: 5 }}
                  className="p-2 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-black transition"
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800"></div>

      {/* 🔻 BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 Taste of Traditions. All rights reserved.</p>

        <div className="flex space-x-6 mt-3 md:mt-0">
          <Link href="/privacy" className="hover:text-yellow-400">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-yellow-400">
            Terms
          </Link>
        </div>
      </div>

      {/* SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Taste of Traditions",
            servesCuisine: ["Indian Traditional"],
          }),
        }}
      />
    </footer>
  );
}