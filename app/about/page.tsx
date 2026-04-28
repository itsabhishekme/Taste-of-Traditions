import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Taste of Traditions, a cloud kitchen dedicated to reviving lost Indian recipes and delivering authentic homemade food across India.",
  keywords: [
    "about Taste of Traditions",
    "Indian food brand story",
    "cloud kitchen India",
    "lost recipes India",
    "authentic Indian food",
  ],
};

export default function About() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-200 py-24 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Our Story 🍲
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700">
          Taste of Traditions is more than a cloud kitchen — it’s a mission to
          revive India’s lost recipes and bring them back to life.
        </p>
      </section>

      {/* STORY SECTION */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-3xl font-bold text-center">
          Why We Started
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-center text-gray-600 leading-relaxed">
          Over time, many traditional Indian recipes have been forgotten.
          Fast food replaced heritage cooking, and generations lost connection
          with authentic flavors.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-600 leading-relaxed">
          Taste of Traditions was created to bring those recipes back —
          from villages, grandmothers’ kitchens, and regional cultures —
          straight to your plate.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 md:px-16 py-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To revive lost recipes and preserve India’s culinary heritage
              by delivering authentic, homemade food experiences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To become India’s most trusted cloud kitchen brand for
              traditional and heritage recipes.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl font-bold">Our Core Values</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div>
            <h3 className="text-xl font-semibold">Authenticity</h3>
            <p className="mt-3 text-gray-600">
              Staying true to traditional cooking methods and flavors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Quality</h3>
            <p className="mt-3 text-gray-600">
              Using fresh, high-quality ingredients in every dish.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Heritage</h3>
            <p className="mt-3 text-gray-600">
              Preserving India’s food culture for future generations.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Taste the Legacy
        </h2>

        <p className="mt-4 text-gray-300">
          Experience real Indian flavors crafted with love and tradition.
        </p>

        <a
          href="/cloud-kitchen"
          className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Order Now
        </a>
      </section>

    </main>
  );
}