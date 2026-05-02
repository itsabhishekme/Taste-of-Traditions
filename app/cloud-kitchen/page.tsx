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
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function CloudKitchen() {
  return (
    <main className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-800">

      {/* 🌈 BACKGROUND BLOBS */}
      <div className="fixed top-0 left-0 w-[400px] h-[400px] bg-yellow-300 opacity-20 blur-3xl rounded-full -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-red-300 opacity-20 blur-3xl rounded-full -z-10"></div>

      {/* 🔥 HERO */}
      <section className="py-24 px-6 text-center max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Taste of Traditions 🍛
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
          Authentic homemade meals delivered fresh & hot to your doorstep.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <Link
            href="/cloud-kitchen"
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition shadow-lg"
          >
            🍲 Order Now
          </Link>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </section>

      {/* 📊 STATS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Happy Customers", value: "10K+" },
            { label: "Orders Delivered", value: "50K+" },
            { label: "Daily Meals", value: "500+" },
          ].map((item, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-orange-600">{item.value}</h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🍽 FEATURES */}
      <section className="py-20 px-6 bg-white/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            { icon: <FaUtensils />, title: "Authentic Taste" },
            { icon: <FaLeaf />, title: "Fresh Ingredients" },
            { icon: <FaTruck />, title: "Fast Delivery" },
            { icon: <FaClock />, title: "On-Time" },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition bg-white">
              <div className="text-3xl mb-4 text-orange-500">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🍛 MENU */}
      <section id="menu" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Signature Dishes</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[
              { name: "Dal Bati Churma", price: "₹199", img: "/food1.jpg" },
              { name: "Roti Thali", price: "₹149", img: "/food2.jpg" },
              { name: "Traditional Sweets", price: "₹99", img: "/food3.jpg" },
            ].map((item, i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition bg-white">
                <div className="relative h-64">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-orange-600 font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📍 DELIVERY */}
      <section className="py-16 px-6 bg-white text-center">
        <FaMapMarkerAlt className="text-3xl mx-auto text-red-500" />
        <h2 className="text-3xl font-bold mt-4">
          Delivery in Your Area
        </h2>
        <p className="text-gray-600 mt-2">
          30–45 min fast delivery 🚀
        </p>
      </section>

      {/* ❤️ WHY */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold">Why Choose Us ❤️</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {["Home Taste", "Affordable", "Hygienic"].map((t, i) => (
            <div key={i} className="flex justify-center gap-2 text-lg">
              <FaHeart className="text-red-500" /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ TESTIMONIAL */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Customer Reviews</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "Amazing food!",
              "Feels like home ❤️",
              "Fast delivery!",
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-xl shadow-lg border">
                <FaStar className="text-yellow-400 mb-2" />
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <h2 className="text-5xl font-bold">Order Now 🍛</h2>

        <Link
          href="/cloud-kitchen"
          className="inline-block mt-8 bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Start Order 🚀
        </Link>
      </section>

      {/* 📱 FLOAT BUTTON */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
      >
        <FaWhatsapp size={22} />
      </a>

    </main>
  );
}