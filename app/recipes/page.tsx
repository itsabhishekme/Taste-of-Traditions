import { recipes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes | Taste of Traditions",
  description:
    "Explore authentic traditional Indian recipes revived from heritage kitchens.",
};

export default function Recipes() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-hidden">

      {/* 🔥 MULTI LAYER BACKGROUND */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Discover Authentic Recipes
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore traditional Indian recipes revived with love and heritage.
          </p>
        </header>

        {/* 🔥 FEATURED SECTION */}
        <section className="mt-16 grid md:grid-cols-2 gap-10 items-center">

          <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={recipes[0]?.image || "/fallback.jpg"}
              alt="Featured Recipe"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Recipe
            </h2>
            <p className="mt-4 text-gray-600">
              {recipes[0]?.description}
            </p>

            <Link
              href={`/recipes/${recipes[0]?.id}`}
              className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              View Recipe
            </Link>
          </div>

        </section>

        {/* GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {recipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="group">
              
              <article className="bg-white/70 backdrop-blur-xl border rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-3">
                
                <div className="relative h-52 w-full">
                  <Image
                    src={recipe.image || "/fallback.jpg"}
                    alt={recipe.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition">
                    {recipe.name}
                  </h2>

                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {recipe.description}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Traditional Recipe
                    </span>

                    <span className="text-sm font-semibold text-orange-600 group-hover:underline">
                      View →
                    </span>
                  </div>
                </div>

              </article>
            </Link>
          ))}
        </section>

        {/* MID CTA */}
        <section className="mt-24 text-center bg-white/60 backdrop-blur-xl rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Want More Traditional Recipes?
          </h2>

          <p className="mt-3 text-gray-600">
            Join our community and discover hidden culinary gems.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Join Now
          </Link>
        </section>

      </div>

      {/* 🔥 PREMIUM FINAL SECTION */}
      <section className="relative px-6 md:px-16 pt-24 pb-32 bg-gradient-to-b from-black via-black to-white text-white">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Keep Exploring Flavors 🍲
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Discover more recipes and reconnect with India’s culinary roots.
          </p>

          <Link
            href="/cloud-kitchen"
            className="inline-block mt-10 bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
          >
            Order Authentic Food
          </Link>
        </div>

        {/* TRUST CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "⭐ 4.9 Rating", desc: "Loved by food lovers" },
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

      {/* 🤍 WHITE END */}
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