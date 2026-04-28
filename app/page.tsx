import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Taste of Traditions brings lost Indian recipes and authentic homemade food to your doorstep.",
};

export default function Home() {
  return (
    <main className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-900 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-300 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <Hero />

      {/* INTRO */}
      <section className="relative px-6 md:px-16 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Reviving Lost Recipes 🍲
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          We bring forgotten Indian flavors back to life with authentic,
          homemade meals crafted from heritage recipes passed through generations.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/recipes"
            className="bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Explore Recipes
          </Link>

          <Link
            href="/cloud-kitchen"
            className="border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
          >
            Order Food
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "🍲 Authentic Recipes",
              desc: "Rediscover rare and lost recipes from Indian villages.",
            },
            {
              title: "❤️ Homemade Quality",
              desc: "Prepared with love using traditional techniques.",
            },
            {
              title: "🚀 Cloud Kitchen",
              desc: "Enjoy authentic food delivered to your doorstep.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-xl border p-8 rounded-3xl shadow-xl hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-orange-600">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MID CTA */}
      <section className="px-6 md:px-16 py-20 text-center">
        <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white p-12 rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Taste Heritage Like Never Before
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-white/90">
            Step into a world of forgotten flavors and rediscover India's culinary roots.
          </p>

          <Link
            href="/recipes"
            className="inline-block mt-6 bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Browse Recipes
          </Link>
        </div>
      </section>

      {/* 🔥 PREMIUM FINAL SECTION */}
      <section className="relative px-6 md:px-16 pt-24 pb-32 bg-gradient-to-b from-black via-black to-white text-white">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Ready to Experience Real Taste?
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Join our journey of reviving India’s lost food culture.
          </p>

          <Link
            href="/cloud-kitchen"
            className="inline-block mt-10 bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
          >
            Order Now 🍛
          </Link>
        </div>

        {/* TRUST CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "⭐ 4.9 Rating", desc: "Loved by customers" },
            { title: "🍲 100+ Recipes", desc: "Traditional dishes" },
            { title: "🚀 Fast Delivery", desc: "Fresh & quick" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🤍 BEAUTIFUL WHITE END */}
      <section className="bg-white py-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          Taste of Traditions — Bringing Heritage Back to Life
        </h3>
        <p className="mt-4 text-gray-500">
          Crafted with love, tradition, and authenticity.
        </p>
      </section>

    </main>
  );
}