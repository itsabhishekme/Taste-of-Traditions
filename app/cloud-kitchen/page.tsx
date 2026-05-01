"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaUtensils,
  FaTruck,
  FaLeaf,
  FaStar,
  FaClock,
  FaHeart,
} from "react-icons/fa";

export default function CloudKitchen() {
  return (
    <main className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-800 overflow-hidden">

      {/* 🌈 BACKGROUND BLOBS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-300 opacity-20 blur-3xl rounded-full"></div>

      {/* 🔥 HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#facc15,_transparent_70%)] opacity-30"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Taste of Traditions 🍛
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700">
          Experience authentic homemade meals crafted with love and delivered fresh to your doorstep.
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link href="/cloud-kitchen">
            <span className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition shadow-lg">
              🍲 Order Now
            </span>
          </Link>

          <Link href="#menu">
            <span className="border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
              View Menu
            </span>
          </Link>
        </div>
      </section>

      {/* 📊 STATS */}
      <section className="px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Happy Customers", value: "10K+" },
            { label: "Orders Delivered", value: "50K+" },
            { label: "Cities Served", value: "15+" },
          ].map((item, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold text-orange-600">{item.value}</h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-10 text-center">
        {[
          { icon: <FaUtensils />, title: "Authentic Recipes", color: "text-yellow-500" },
          { icon: <FaLeaf />, title: "Fresh Ingredients", color: "text-green-500" },
          { icon: <FaTruck />, title: "Fast Delivery", color: "text-red-500" },
          { icon: <FaClock />, title: "Always On Time", color: "text-blue-500" },
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition">
            <div className={`text-3xl mb-4 ${item.color}`}>
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm mt-2 text-gray-600">
              Premium quality experience guaranteed.
            </p>
          </div>
        ))}
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Our Signature Dishes
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[
              { name: "Dal Bati Churma", img: "/food1.jpg" },
              { name: "Handmade Roti Thali", img: "/food2.jpg" },
              { name: "Traditional Sweets", img: "/food3.jpg" },
            ].map((item, i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition">
                <div className="relative h-64">
                  <Image src={item.img} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ❤️ WHY PEOPLE LOVE US */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-4xl font-bold">
          Why Customers Love Us ❤️
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {[
            "Home-style taste",
            "Affordable pricing",
            "Healthy & hygienic",
          ].map((text, i) => (
            <div key={i} className="flex items-center justify-center gap-3">
              <FaHeart className="text-red-500" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 🧾 TESTIMONIALS */}
      <section className="px-6 md:px-16 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {[
            "Absolutely loved the food!",
            "Feels like home cooking ❤️",
            "Best cloud kitchen experience!",
          ].map((text, i) => (
            <div key={i} className="p-6 rounded-2xl shadow-lg bg-white border">
              <FaStar className="text-yellow-400 mb-3" />
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="relative px-6 md:px-16 pt-24 pb-32 bg-gradient-to-b from-black via-black to-white text-white text-center">
        <h2 className="text-5xl font-bold">
          Ready to Taste Tradition?
        </h2>

        <p className="mt-4 text-gray-300">
          Order now and experience authentic Indian meals.
        </p>

        <Link href="/cloud-kitchen">
          <span className="inline-block mt-8 bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition">
            🚀 Start Your Order
          </span>
        </Link>
      </section>

      {/* 🤍 FOOTER TAGLINE */}
      <section className="bg-white py-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          Taste of Traditions — Bringing Heritage Back to Life
        </h3>
      </section>

    </main>
  );
}