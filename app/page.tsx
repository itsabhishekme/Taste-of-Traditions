import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Taste of Traditions",
  description:
    "Authentic Indian heritage recipes and homemade food delivered with love.",
};

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-900">

      {/* 🔥 ANIMATED BACKGROUND BLOBS */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-orange-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[500px] bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* HERO */}
      <Hero />

      {/* 🔥 BRAND STORY */}
      <section className="px-6 md:px-16 py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          More Than Food.
          <span className="block text-orange-600">It’s Heritage 🍲</span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Taste of Traditions isn’t just about meals — it’s about reviving memories,
          preserving culture, and reconnecting with flavors lost in time.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/recipes"
            className="px-8 py-3 rounded-xl bg-black text-white shadow-xl hover:scale-105 transition"
          >
            Explore Recipes
          </Link>

          <Link
            href="/cloud-kitchen"
            className="px-8 py-3 rounded-xl border border-black hover:bg-black hover:text-white transition"
          >
            Order Now 🍛
          </Link>
        </div>
      </section>

      {/* 🔥 FEATURES GRID */}
      <section className="px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "🍲 Authentic Recipes",
              desc: "Rare dishes from forgotten Indian kitchens.",
            },
            {
              title: "👵 Traditional Cooking",
              desc: "Prepared with age-old techniques and love.",
            },
            {
              title: "🚀 Fast Delivery",
              desc: "Fresh meals delivered to your doorstep.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl border hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-orange-600 group-hover:scale-105 transition">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 PARALLAX STYLE SECTION */}
      <section className="relative py-32 text-center bg-gradient-to-r from-orange-500 to-pink-500 text-white overflow-hidden">

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Every Bite Tells a Story
          </h2>

          <p className="mt-6 text-lg text-white/90">
            From forgotten village kitchens to your plate — we bring the soul of India back.
          </p>

          <Link
            href="/recipes"
            className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Discover Now
          </Link>
        </div>
      </section>

      {/* 🔥 TRUST SECTION */}
      <section className="px-6 md:px-16 py-24 bg-white">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Why People Love Us ❤️
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            { title: "⭐ 4.9 Rating", desc: "Highly loved by customers" },
            { title: "🍲 100+ Recipes", desc: "Authentic traditional dishes" },
            { title: "🚀 Fast Delivery", desc: "Fresh & quick service" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition text-center"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="relative px-6 md:px-16 py-32 bg-black text-white text-center">

        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 blur-3xl"></div>

        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Ready to Taste Real India?
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Join our journey and experience authentic flavors like never before.
          </p>

          <Link
            href="/cloud-kitchen"
            className="inline-block mt-10 bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
          >
            Order Now 🍛
          </Link>
        </div>
      </section>

      {/* 🔥 FOOTER */}
      <footer className="bg-white py-16 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          Taste of Traditions
        </h3>
        <p className="mt-4 text-gray-500">
          Bringing India’s lost flavors back to life 🇮🇳
        </p>
      </footer>

      <Analytics />

    </main>
  );
}