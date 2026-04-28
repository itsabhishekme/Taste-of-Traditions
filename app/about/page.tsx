import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Taste of Traditions is a cloud kitchen reviving lost Indian recipes and delivering authentic homemade food.",
};

export default function About() {
  return (
    <main className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-900 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-300 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="relative py-28 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Our Story 🍲
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700">
          More than a cloud kitchen — we are a movement to revive India’s lost recipes.
        </p>
      </section>

      {/* STORY */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Why We Started
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Over time, traditional Indian recipes began to disappear. Fast food replaced heritage cooking,
          and generations lost connection with authentic flavors.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Taste of Traditions was born to bring those lost recipes back —
          from villages, homes, and memories — directly to your plate.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-orange-600">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To revive lost recipes and preserve India’s culinary heritage through authentic homemade food.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-orange-600">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To become India’s most trusted brand for traditional and heritage food experiences.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {[
            { title: "Authenticity", desc: "True to traditional cooking." },
            { title: "Quality", desc: "Fresh ingredients always." },
            { title: "Heritage", desc: "Preserving food culture." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold text-orange-600">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 PREMIUM CTA SECTION */}
      <section className="relative px-6 md:px-16 pt-24 pb-32 bg-gradient-to-b from-black via-black to-white text-white">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            Taste the Legacy
          </h2>

          <p className="mt-4 text-gray-300">
            Experience real Indian flavors crafted with love and tradition.
          </p>

          <Link
            href="/cloud-kitchen"
            className="inline-block mt-8 bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
          >
            Order Now 🍛
          </Link>
        </div>

        {/* TRUST CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "🍲 100+ Recipes", desc: "Traditional dishes" },
            { title: "❤️ Homemade", desc: "Cooked with care" },
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

      {/* 🤍 WHITE END */}
      <section className="bg-white py-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          Taste of Traditions — Bringing Heritage Back to Life
        </h3>
        <p className="mt-4 text-gray-500">
          Crafted with passion, tradition, and authenticity.
        </p>
      </section>

    </main>
  );
}