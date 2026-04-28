"use client";

import Link from "next/link";
import Image from "next/image";
import { FaUtensils, FaTruck, FaLeaf, FaStar } from "react-icons/fa";

export default function CloudKitchen() {
  return (
    <main className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-800 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-300 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#facc15,_transparent_70%)] opacity-30"></div>

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            Taste of Traditions 🍛
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Authentic homemade meals crafted with ancestral recipes and delivered fresh to your doorstep.
          </p>

          <Link href="/cloud-kitchen">
            <span className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition shadow-lg">
              🍲 Order Now
            </span>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-10 text-center">

        {[
          { icon: <FaUtensils />, title: "Authentic Recipes", color: "text-yellow-500" },
          { icon: <FaLeaf />, title: "Fresh Ingredients", color: "text-green-500" },
          { icon: <FaTruck />, title: "Fast Delivery", color: "text-red-500" },
          { icon: <FaStar />, title: "Loved by Customers", color: "text-yellow-400" },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <div className={`text-3xl mx-auto mb-4 ${item.color}`}>
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm mt-2 text-gray-600">
              Premium quality experience.
            </p>
          </div>
        ))}
      </section>

      {/* MENU */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Our Signature Dishes
          </h2>

          <p className="text-gray-600 mb-12">
            Every dish is crafted with love and tradition.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              { name: "Dal Bati Churma", img: "/food1.jpg" },
              { name: "Handmade Roti Thali", img: "/food2.jpg" },
              { name: "Traditional Sweets", img: "/food3.jpg" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition"
              >
                <div className="relative h-64">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Our Story
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          We revive forgotten recipes and bring traditional cooking back to life.
          Every meal carries the warmth of heritage kitchens.
        </p>
      </section>

      {/* 🔥 PREMIUM FINAL SECTION */}
      <section className="relative px-6 md:px-16 pt-24 pb-32 bg-gradient-to-b from-black via-black to-white text-white">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            Ready to Taste Tradition?
          </h2>

          <p className="mt-4 text-gray-300">
            Order now and experience authentic Indian food.
          </p>

          <Link href="/cloud-kitchen">
            <span className="inline-block mt-8 bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition">
              🚀 Start Your Order
            </span>
          </Link>
        </div>

        {/* TRUST */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "⭐ 4.9 Rating", desc: "Trusted by customers" },
            { title: "🍲 100+ Recipes", desc: "Authentic meals" },
            { title: "🚀 Fast Delivery", desc: "Quick service" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black p-6 rounded-2xl text-center shadow-xl hover:scale-105 transition"
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
      </section>

    </main>
  );
}