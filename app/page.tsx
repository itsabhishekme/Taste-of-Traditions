import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Taste of Traditions brings lost Indian recipes and authentic homemade food to your doorstep. Discover heritage cooking and order now.",
  keywords: [
    "lost recipes",
    "Indian traditional food",
    "cloud kitchen India",
    "homemade food delivery",
    "Taste of Traditions",
  ],
};

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <Hero />

      {/* INTRO SECTION */}
      <section className="px-6 md:px-16 py-16 text-center">
        <h2 className="text-4xl font-bold leading-tight">
          Reviving Lost Recipes 🍲
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          We bring forgotten Indian flavors back to life. Experience authentic,
          homemade meals crafted with tradition, love, and heritage recipes.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            href="/recipes"
            className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition"
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
      <section className="px-6 md:px-16 py-16 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Authentic Recipes</h3>
            <p className="mt-3 text-gray-600">
              Rediscover rare and lost recipes from Indian villages and traditions.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Homemade Quality</h3>
            <p className="mt-3 text-gray-600">
              Every dish is crafted with care using traditional methods and fresh ingredients.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Cloud Kitchen</h3>
            <p className="mt-3 text-gray-600">
              Order directly from our kitchen and enjoy heritage meals at your doorstep.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 md:px-16 py-20 text-center bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Taste the Tradition Today
        </h2>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Join our journey of reviving India’s lost food culture. Order now or explore recipes.
        </p>

        <Link
          href="/cloud-kitchen"
          className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Order Now
        </Link>
      </section>

    </main>
  );
}