import { recipes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes | Taste of Traditions",
  description:
    "Explore authentic traditional Indian recipes revived from heritage kitchens. Discover flavors, culture, and stories.",
};

/* 🔥 REUSABLE CORE */

function Container({ children, className = "" }: any) {
  return <section className={`max-w-7xl mx-auto px-6 ${className}`}>{children}</section>;
}

function Button({ href, children, dark }: any) {
  return (
    <Link
      href={href}
      className={`inline-block px-8 py-3 rounded-full font-semibold transition ${
        dark
          ? "bg-black text-white hover:scale-105"
          : "bg-orange-500 text-white hover:bg-orange-600"
      }`}
    >
      {children}
    </Link>
  );
}

function RecipeCard({ recipe }: any) {
  return (
    <Link href={`/recipes/${recipe.id}`} className="group">
      <article className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition hover:-translate-y-2">

        <div className="relative h-56">
          <Image
            src={recipe.image || "/fallback.jpg"}
            alt={recipe.name}
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold group-hover:text-orange-600">
            {recipe.name}
          </h3>

          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            {recipe.description}
          </p>

          <div className="mt-4 flex justify-between">
            <span className="text-xs text-gray-400">Traditional</span>
            <span className="text-sm text-orange-600 font-semibold">
              View →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* 🔥 MAIN PAGE */

export default function Recipes() {
  const featured = recipes[0];

  return (
    <main className="bg-gradient-to-b from-orange-50 via-yellow-50 to-white text-gray-900">

      {/* 🌟 HERO */}
      <div className="relative py-24 text-center overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-orange-300 blur-3xl opacity-20 rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-yellow-300 blur-3xl opacity-20 rounded-full bottom-[-150px] right-[-150px]" />

        <h1 className="text-4xl md:text-6xl font-extrabold">
          Authentic Indian Recipes 🍛
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          Experience flavors passed through generations — real, emotional, unforgettable.
        </p>

        <div className="mt-10 flex justify-center px-6">
          <input
            placeholder="Search recipes..."
            className="w-full max-w-md px-6 py-3 rounded-full border shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* ⭐ FEATURED */}
      {featured && (
        <Container className="py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <Image src={featured.image} alt={featured.name} fill className="object-cover" />
          </div>

          <div>
            <span className="text-orange-500 uppercase text-sm font-semibold">
              Featured Recipe
            </span>

            <h2 className="text-4xl font-bold mt-2">{featured.name}</h2>

            <p className="mt-4 text-gray-600">{featured.description}</p>

            <Button href={`/recipes/${featured.id}`} dark>
              View Recipe →
            </Button>
          </div>
        </Container>
      )}

      {/* 📊 TRUST STATS */}
      <Container className="py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { value: "100+", label: "Recipes" },
          { value: "4.9⭐", label: "User Rating" },
          { value: "1000+", label: "Happy Foodies" },
          { value: "10+", label: "Years Tradition" },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-orange-600">{item.value}</h3>
            <p className="text-gray-500 text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </Container>

      {/* 🍲 FILTER */}
      <Container className="pb-6">
        <div className="flex gap-3 overflow-x-auto">
          {["All", "Breakfast", "Lunch", "Dinner", "Snacks"].map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </Container>

      {/* 🧱 GRID */}
      <Container className="py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Container>

      {/* 🧡 TESTIMONIAL */}
      <div className="bg-black text-white py-24 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Loved by Food Lovers ❤️
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-300">
          “This is not just food — this is emotion, nostalgia, and home on a plate.”
        </p>
      </div>

      {/* 🚀 CTA */}
      <div className="py-20 text-center bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Craving Authentic Taste?
        </h2>

        <p className="mt-4 text-white/80">
          Order directly from our cloud kitchen and experience real flavor.
        </p>

        <Button href="/cloud-kitchen">Order Now 🍲</Button>
      </div>

      {/* 📌 FLOATING CTA */}
      <Link
        href="/cloud-kitchen"
        className="fixed bottom-6 right-6 bg-black text-white px-6 py-3 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        🍲 Order Food
      </Link>

    </main>
  );
}