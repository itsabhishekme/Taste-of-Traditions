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
  FaFire,
  FaArrowRight,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";

/* ======================================================
   ONLINE IMAGES
====================================================== */

const dishes = [
  {
    name: "Dal Bati Churma",
    price: "₹199",
    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop",
    desc: "Traditional Rajasthani authentic flavor.",
  },

  {
    name: "Indian Thali",
    price: "₹249",
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",
    desc: "Complete homemade traditional meal.",
  },

  {
    name: "Traditional Sweets",
    price: "₹149",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
    desc: "Authentic Indian dessert collection.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
];

/* ======================================================
   MAIN
====================================================== */

export default function CloudKitchen() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-800 min-h-screen">

      {/* ======================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-yellow-300/20 blur-3xl rounded-full -z-10" />

      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-red-300/20 blur-3xl rounded-full -z-10" />

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative py-28 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl px-5 py-3 rounded-full shadow-lg text-orange-600 font-semibold">
              🔥 Premium Indian Cloud Kitchen
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-8">
              Taste Of
              <span className="block text-orange-500">
                Traditions 🍛
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Emotional homemade meals, authentic flavors,
              and traditional Indian food crafted with love.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="#menu"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                🍲 Explore Menu
              </Link>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>

            {/* MINI FEATURES */}

            <div className="grid grid-cols-2 gap-5 mt-14">

              {[
                "Fresh Ingredients",
                "Fast Delivery",
                "Traditional Taste",
                "Premium Packaging",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-xl px-5 py-4 rounded-2xl shadow-lg"
                >
                  <FaHeart className="text-red-500" />

                  <span className="font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="relative h-[700px] rounded-[40px] overflow-hidden shadow-2xl">

              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop"
                alt="Indian Food"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* FLOAT CARD */}

              <div className="absolute bottom-8 left-8 right-8 bg-white/20 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 text-white shadow-2xl">

                <div className="flex items-center justify-between">

                  <div>

                    <div className="flex items-center gap-2 text-orange-300 font-semibold">
                      <FaFire />
                      Trending Dish
                    </div>

                    <h3 className="text-3xl font-black mt-3">
                      Royal Indian Thali
                    </h3>
                  </div>

                  <div className="text-right">

                    <div className="text-yellow-300 font-bold text-xl">
                      ₹249
                    </div>

                    <div className="flex items-center gap-1 mt-1">
                      <FaStar className="text-yellow-400" />
                      4.9
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING DELIVERY CARD */}

            <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-6 shadow-2xl w-64">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 text-2xl">
                  <FaTruck />
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Fast Delivery
                  </h4>

                  <p className="text-gray-500 text-sm">
                    30-45 min delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          STATS
      ====================================================== */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

          {[
            {
              value: "10K+",
              label: "Happy Customers",
            },
            {
              value: "50K+",
              label: "Orders Delivered",
            },
            {
              value: "500+",
              label: "Daily Meals",
            },
            {
              value: "4.9⭐",
              label: "Average Rating",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-2xl rounded-3xl p-10 text-center shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-4xl font-black text-orange-500">
                {item.value}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================
          FEATURES
      ====================================================== */}

      <section className="py-24 px-6 bg-white/50">

        <div className="max-w-7xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-3 rounded-full font-semibold">
            ✨ Why Choose Us
          </div>

          <h2 className="text-5xl font-black mt-8">
            Crafted With Love ❤️
          </h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16">

            {[
              {
                icon: <FaUtensils />,
                title: "Authentic Taste",
              },
              {
                icon: <FaLeaf />,
                title: "Fresh Ingredients",
              },
              {
                icon: <FaTruck />,
                title: "Fast Delivery",
              },
              {
                icon: <FaClock />,
                title: "On-Time Service",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[32px] p-10 shadow-xl hover:-translate-y-3 transition-all duration-300"
              >

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center text-3xl mx-auto shadow-xl">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          MENU
      ====================================================== */}

      <section
        id="menu"
        className="py-28 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-3 rounded-full font-semibold">
              🍽 Signature Dishes
            </div>

            <h2 className="text-5xl font-black mt-8">
              Most Loved Meals
            </h2>
          </div>

          {/* GRID */}

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            {dishes.map((item, i) => (
              <div
                key={i}
                className="group rounded-[36px] overflow-hidden bg-white shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >

                {/* IMAGE */}

                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">

                    <div>

                      <h3 className="text-2xl font-black">
                        {item.name}
                      </h3>

                      <p className="text-orange-300 mt-1">
                        {item.price}
                      </p>
                    </div>

                    <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-8">

                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between mt-8">

                    <div className="flex items-center gap-2 text-yellow-500">
                      <FaStar />
                      4.9
                    </div>

                    <Link
                      href="/cloud-kitchen"
                      className="text-orange-600 font-semibold"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          FOOD GALLERY
      ====================================================== */}

      <section className="py-28 px-6 bg-black text-white">

        <div className="max-w-7xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-3 rounded-full">
            📸 Food Gallery
          </div>

          <h2 className="text-5xl font-black mt-8">
            Delicious Moments
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-20">

            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative h-80 rounded-[32px] overflow-hidden group"
              >

                <Image
                  src={img}
                  alt="Gallery"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          INSTAGRAM SECTION
      ====================================================== */}

      <section className="py-24 px-6 text-center">

        <div className="max-w-5xl mx-auto">

          <FaInstagram className="text-6xl text-pink-500 mx-auto" />

          <h2 className="text-5xl font-black mt-8">
            Follow Our Food Journey
          </h2>

          <p className="text-lg text-gray-600 mt-6">
            Explore authentic food stories and delicious Indian meals.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 mt-10 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <FaInstagram />
            Follow Instagram
          </a>
        </div>
      </section>

      {/* ======================================================
          DELIVERY
      ====================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-3 rounded-full">
              🚀 Fast Delivery
            </div>

            <h2 className="text-5xl font-black mt-8">
              Hot Meals
              <span className="block text-orange-500">
                Delivered Fast
              </span>
            </h2>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              Fresh homemade food delivered within 30–45 minutes
              with premium packaging and hygiene.
            </p>

            <div className="grid gap-5 mt-10">

              {[
                "Premium Packaging",
                "Live Order Tracking",
                "Fresh Homemade Meals",
                "24/7 Support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-orange-50 rounded-2xl p-5"
                >

                  <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center">
                    <FaHeart />
                  </div>

                  <span className="text-lg font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DELIVERY IMAGE */}

          <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl">

            <Image
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop"
              alt="Delivery"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="py-28 px-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Ready To Taste
            <span className="block">
              Authentic Indian Food? 🍛
            </span>
          </h2>

          <p className="text-xl text-white/90 mt-8">
            Experience emotional flavors and homemade meals today.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              href="/cloud-kitchen"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Start Order 🚀
            </Link>

            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          FLOAT WHATSAPP
      ====================================================== */}

      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <FaWhatsapp size={28} />
      </a>
    </main>
  );
}