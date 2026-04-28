import { recipes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

/* =========================
   ✅ SEO METADATA
========================= */
export const metadata: Metadata = {
  title: "Recipes | Taste of Traditions",
  description:
    "Explore authentic traditional Indian recipes revived from heritage kitchens. Discover lost flavors and timeless cooking methods.",
  keywords: [
    "Indian recipes",
    "traditional recipes",
    "lost recipes India",
    "Taste of Traditions",
    "authentic Indian food",
  ],
};

/* =========================
   ✅ PAGE
========================= */
export default function Recipes() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Discover Authentic Recipes
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore traditional Indian recipes revived with love, culture, and timeless flavors.
          </p>
        </header>

        {/* GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {recipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="group">
              
              <article className="bg-white/70 backdrop-blur-xl border rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl hover:-translate-y-2">
                
                {/* IMAGE */}
                <div className="relative h-52 w-full">
                  <Image
                    src={recipe.image || "/fallback.jpg"}
                    alt={recipe.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-600">
                    {recipe.name}
                  </h2>

                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {recipe.description}
                  </p>

                  {/* CTA */}
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

        {/* CTA */}
        <section className="mt-24 text-center bg-white/60 backdrop-blur-xl rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900">
            Want More Traditional Recipes?
          </h2>

          <p className="mt-3 text-gray-600">
            Join our community and get exclusive recipes and cooking secrets.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Join Now
          </Link>
        </section>

      </div>

      {/* =========================
          ✅ STRUCTURED DATA (SEO)
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Traditional Indian Recipes",
            itemListElement: recipes.map((recipe, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: recipe.name,
              url: `https://tasteoftraditions.in/recipes/${recipe.id}`,
            })),
          }),
        }}
      />

    </main>
  );
}