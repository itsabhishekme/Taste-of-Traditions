"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaApple,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

/* ================= ANIMATION ================= */

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

/* ================= COMPONENT ================= */

export default function Footer() {
  const [email, setEmail] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  /* ================= SUBSCRIBE ================= */

  const handleSubscribe = async (
    e: any
  ) => {
    e.preventDefault();

    if (
      !email ||
      !email.includes("@")
    ) {
      setStatus(
        "⚠️ Please enter valid email"
      );

      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(
        "/api/subscribe",
        {
          method: "POST",

          body: JSON.stringify({
            email,
          }),
        }
      );

      if (res.ok) {
        setStatus(
          "✅ Successfully subscribed"
        );

        setEmail("");
      } else {
        setStatus(
          "❌ Subscription failed"
        );
      }
    } catch {
      setStatus(
        "🚨 Server error"
      );
    }

    setLoading(false);
  };

  return (
    <footer className="relative overflow-hidden bg-black text-gray-300">

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-red-500/10" />

      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-yellow-500/20 rounded-full blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-orange-500/20 rounded-full blur-[150px]" />

      {/* ======================================================
          TOP CTA
      ====================================================== */}

      <section className="relative max-w-7xl mx-auto px-6 pt-14">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          className="relative overflow-hidden rounded-[35px] border border-yellow-500/20 bg-white/5 backdrop-blur-2xl px-6 md:px-14 py-12"
        >

          {/* GLOW */}

          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT */}

            <div className="max-w-2xl">

              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">

                Taste The Real

                <span className="block text-yellow-400">
                  Indian Tradition 🍛
                </span>
              </h2>

              <p className="mt-5 text-gray-300 text-base leading-relaxed">

                Discover timeless recipes,
                handmade flavors, and
                authentic Indian culinary
                experiences delivered fresh
                to your table.
              </p>

              {/* BUTTONS */}

              <div className="flex flex-wrap gap-4 mt-8">

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                >

                  <Link
                    href="/menu"
                    className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold transition shadow-2xl"
                  >
                    Explore Menu →
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                >

                  <Link
                    href="/contact"
                    className="border border-yellow-400/30 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* APP STORE */}

            <div className="w-full lg:w-[350px]">

              <motion.a
                whileHover={{
                  scale: 1.03,
                }}

                href="https://www.apple.com/app-store/"

                target="_blank"

                className="group flex items-center justify-between bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-yellow-400/40 p-5 rounded-3xl transition"
              >

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl text-black shadow-lg">

                    <FaApple />
                  </div>

                  <div>

                    <p className="text-xs text-gray-400">
                      DOWNLOAD ON THE
                    </p>

                    <h4 className="text-white text-xl font-bold">
                      App Store
                    </h4>
                  </div>
                </div>

                <span className="text-yellow-400 text-xl group-hover:translate-x-1 transition">
                  →
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ======================================================
          MAIN FOOTER
      ====================================================== */}

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
      >

        {/* BRAND */}

        <motion.div variants={item}>

          <h2 className="text-3xl font-black text-yellow-400">
            Taste of Traditions
          </h2>

          <p className="mt-5 text-gray-400 leading-relaxed">

            Preserving authentic Indian
            flavors through handcrafted
            recipes, heritage cooking,
            and timeless traditions.
          </p>

          {/* CONTACT */}

          <div className="mt-8 space-y-4 text-sm">

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Karnataka, India</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 7991185414</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <span>
                support@tasteoftraditions.com
              </span>
            </div>
          </div>
        </motion.div>

        {/* QUICK LINKS */}

        <motion.div variants={item}>

          <h3 className="text-xl font-bold text-white mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">

            {[
              "Home",
              "Menu",
              "About",
              "Gallery",
              "Contact",
              "Stories",
            ].map((link, i) => (
              <li key={i}>

                <Link
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-yellow-400 transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SERVICES */}

        <motion.div variants={item}>

          <h3 className="text-xl font-bold text-white mb-6">
            Services
          </h3>

          <ul className="space-y-4 text-gray-400">

            {[
              "Cloud Kitchen",
              "Traditional Catering",
              "Recipe Revival",
              "Home Delivery",
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

        {/* NEWSLETTER */}

        <motion.div variants={item}>

          <h3 className="text-xl font-bold text-white mb-6">
            Newsletter
          </h3>

          <p className="text-gray-400 text-sm mb-5">

            Subscribe for food stories,
            offers & special recipes.
          </p>

          {/* FORM */}

          <form
            onSubmit={handleSubscribe}
            className="space-y-4"
          >

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 rounded-2xl font-bold hover:opacity-90 transition shadow-2xl"
            >

              {loading
                ? "Please wait..."
                : "Subscribe"}
            </button>

            {status && (
              <p className="text-sm text-gray-400">
                {status}
              </p>
            )}
          </form>

          {/* SOCIAL */}

          <div className="flex items-center gap-4 mt-8">

            {[
              FaFacebookF,
              FaInstagram,
              FaTwitter,
              FaYoutube,
            ].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{
                  scale: 1.15,
                  rotate: 6,
                }}
                className="w-12 h-12 rounded-full bg-white/5 border border-gray-700 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ======================================================
          BOTTOM
      ====================================================== */}

      <div className="relative border-t border-white/10">

        {/* GLOW */}

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5" />

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-gray-500 relative z-10">

          {/* COPYRIGHT */}

          <p className="text-center md:text-left">
            © 2026 Taste of Traditions.
            All rights reserved.
          </p>

          {/* LINKS */}

          <div className="flex items-center gap-6">

            <Link
              href="/privacy"
              className="hover:text-yellow-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-yellow-400 transition"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* DEVELOPER CREDIT */}

          <div className="group relative">

            {/* GLOW */}

            <div className="absolute inset-0 bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full" />

            <div className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:border-yellow-400/40 transition-all duration-300">

              <span className="text-gray-400">
                Developed by
              </span>

              <span className="font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">

                EchoSoul Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}