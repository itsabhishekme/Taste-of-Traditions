"use client";

import Link from "next/link";
import Image from "next/image";
import { FaUtensils, FaTruck, FaLeaf, FaStar } from "react-icons/fa";

export default function CloudKitchen() {
  return (
    <main className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#facc15,_transparent_70%)] opacity-30"></div>

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Taste of Traditions
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Authentic homemade meals, crafted with ancestral recipes and delivered fresh to your doorstep.
            This is not just food — it’s heritage on your plate.
          </p>

          <Link href="/order">
            <button className="mt-8 bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition shadow-lg">
              🍲 Order Now
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-center">
        
        <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition">
          <FaUtensils className="text-3xl mx-auto text-yellow-500 mb-4" />
          <h3 className="font-semibold text-lg">Authentic Recipes</h3>
          <p className="text-sm mt-2 text-gray-600">
            Passed down through generations.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition">
          <FaLeaf className="text-3xl mx-auto text-green-500 mb-4" />
          <h3 className="font-semibold text-lg">Fresh Ingredients</h3>
          <p className="text-sm mt-2 text-gray-600">
            Locally sourced and naturally grown.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition">
          <FaTruck className="text-3xl mx-auto text-red-500 mb-4" />
          <h3 className="font-semibold text-lg">Fast Delivery</h3>
          <p className="text-sm mt-2 text-gray-600">
            Hot meals delivered to your door.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition">
          <FaStar className="text-3xl mx-auto text-yellow-400 mb-4" />
          <h3 className="font-semibold text-lg">Loved by Customers</h3>
          <p className="text-sm mt-2 text-gray-600">
            Rated 4.9★ by food lovers.
          </p>
        </div>
      </section>

      {/* MENU SHOWCASE */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          <h2 className="text-4xl font-bold mb-6">
            Our Signature Dishes
          </h2>

          <p className="text-gray-600 mb-12">
            Each dish is a story of culture, tradition, and unforgettable flavor.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                name: "Dal Bati Churma",
                img: "/food1.jpg",
              },
              {
                name: "Handmade Roti Thali",
                img: "/food2.jpg",
              },
              {
                name: "Traditional Sweets",
                img: "/food3.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
                <div className="relative h-64">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Our Story
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          Taste of Traditions began with a simple idea — to preserve the forgotten recipes of our ancestors.
          In a world of fast food, we bring slow, soulful cooking back to life.
          Every meal is prepared with care, just like it was in our grandmother’s kitchen.
        </p>
      </section>

      {/* CTA SECTION */}
      <section className="bg-black text-white py-20 text-center px-6">
        <h2 className="text-4xl font-bold">
          Ready to Experience Real Taste?
        </h2>

        <p className="mt-4 text-gray-300">
          Order now and bring authentic tradition to your table.
        </p>

        <Link href="/order">
          <button className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition">
            🚀 Start Your Order
          </button>
        </Link>
      </section>

      {/* SEO STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FoodEstablishment",
            name: "Taste of Traditions Cloud Kitchen",
            description:
              "Order authentic homemade Indian traditional meals online with fast delivery.",
            servesCuisine: ["Indian"],
            url: "https://tasteoftraditions.com/cloud-kitchen",
          }),
        }}
      />
    </main>
  );
}