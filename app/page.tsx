import type { Metadata } from "next";

import Hero from "@/components/Hero";

import Image from "next/image";
import Link from "next/link";

import { Analytics } from "@vercel/analytics/next";

import {
  Flame,
  Star,
  Heart,
  Sparkles,
  ChefHat,
  ArrowRight,
  Crown,
  Clock3,
} from "lucide-react";

/* ======================================================
   METADATA
====================================================== */

export const metadata: Metadata = {
  title: "Taste Of Traditions",

  description:
    "Authentic Indian heritage recipes and homemade food delivered with emotional flavors.",

  openGraph: {
    title: "Taste Of Traditions",

    description:
      "Traditional Indian food crafted with heritage and love.",

    images: [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1600&auto=format&fit=crop",
    ],
  },
};

/* ======================================================
   ONLINE IMAGES
====================================================== */

const featuredImage =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop";

const chefImage =
  "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop";

const galleryImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
];

const dishes = [
  {
    name: "Royal Indian Thali",

    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",

    rating: "4.9",

    time: "30 mins",
  },

  {
    name: "Dal Baati Churma",

    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop",

    rating: "4.8",

    time: "40 mins",
  },

  {
    name: "Paneer Butter Masala",

    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop",

    rating: "5.0",

    time: "25 mins",
  },
];

/* ======================================================
   CONTAINER
====================================================== */

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`max-w-7xl mx-auto px-6 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

/* ======================================================
   SECTION TITLE
====================================================== */

function SectionTitle({
  badge,
  title,
  subtitle,
}: any) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20">

      <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-3 rounded-full shadow-lg font-semibold">
        <Sparkles size={16} />
        {badge}
      </div>

      <h2 className="text-4xl md:text-6xl font-black mt-8 leading-tight">
        {title}
      </h2>

      <p className="text-lg text-gray-600 mt-6 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

/* ======================================================
   DISH CARD
====================================================== */

function DishCard({ dish }: any) {
  return (
    <div className="group bg-white rounded-[36px] overflow-hidden shadow-2xl hover:-translate-y-3 transition-all duration-500">

      {/* IMAGE */}

      <div className="relative h-80 overflow-hidden">

        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

        {/* BADGES */}

        <div className="absolute top-5 left-5 flex gap-3">

          <div className="bg-orange-500 text-white text-xs px-4 py-2 rounded-full font-semibold">
            Trending
          </div>

          <div className="bg-black/60 text-white text-xs px-4 py-2 rounded-full">
            Traditional
          </div>
        </div>

        {/* TEXT */}

        <div className="absolute bottom-5 left-5 right-5 text-white">

          <h3 className="text-3xl font-black">
            {dish.name}
          </h3>

          <div className="flex items-center gap-5 mt-4 text-sm">

            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              {dish.time}
            </div>

            <div className="flex items-center gap-2">
              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
              {dish.rating}
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-8">

        <div className="flex items-center gap-2 text-orange-500 font-semibold">
          <ChefHat size={18} />
          Signature Heritage Dish
        </div>

        <p className="text-gray-600 mt-5 leading-relaxed">
          Crafted with authentic spices, emotional memories,
          and traditional Indian cooking methods.
        </p>

        <div className="flex items-center justify-between mt-8">

          <div className="flex items-center gap-2 text-red-500">
            <Heart size={18} />
            Loved by families
          </div>

          <Link
            href="/recipes"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold"
          >
            Explore
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ======================================================
   PAGE
====================================================== */

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-900">

      {/* ======================================================
          BACKGROUND BLOBS
      ====================================================== */}

      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-orange-300/20 blur-3xl rounded-full animate-pulse" />

      <div className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[500px] bg-pink-300/20 blur-3xl rounded-full animate-pulse" />

      {/* ======================================================
          HERO
      ====================================================== */}

      <Hero />

      {/* ======================================================
          BRAND STORY
      ====================================================== */}

      <Container className="py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}

          <div className="relative group">

            <div className="relative h-[700px] rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.2)]">

              <Image
                src={featuredImage}
                alt="Traditional Food"
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-10 left-10 right-10">

                <div className="flex items-center gap-2 text-orange-300 font-semibold">
                  <Flame size={18} />
                  Authentic Heritage Experience
                </div>

                <h2 className="text-5xl font-black text-white mt-5 leading-tight">
                  More Than Food
                  <span className="block text-yellow-400">
                    It’s Heritage 🍲
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* CONTENT */}

          <div>

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-3 rounded-full shadow-lg font-semibold">
              ✨ Our Story
            </div>

            <h2 className="text-5xl md:text-6xl font-black mt-10 leading-tight">
              Bringing India’s
              <span className="block text-orange-500">
                Lost Flavors Back
              </span>
            </h2>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              Taste Of Traditions is not just a food platform.
              It’s an emotional journey reconnecting people
              with timeless Indian recipes, homemade memories,
              and authentic culinary traditions.
            </p>

            {/* FEATURES */}

            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              {[
                "Authentic Recipes",
                "Traditional Cooking",
                "Premium Ingredients",
                "Fast Delivery",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[28px] p-6 shadow-xl"
                >

                  <div className="text-3xl">
                    🍛
                  </div>

                  <h3 className="text-xl font-black mt-4">
                    {item}
                  </h3>
                </div>
              ))}
            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-12">

              <Link
                href="/recipes"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-5 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Explore Recipes
              </Link>

              <Link
                href="/cloud-kitchen"
                className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-5 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Order Food 🍛
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* ======================================================
          FEATURES GRID
      ====================================================== */}

      <Container className="py-28">

        <SectionTitle
          badge="Why Choose Us"
          title="Crafted With Passion"
          subtitle="Authentic Indian experiences made with love."
        />

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Authentic Recipes",
              desc:
                "Rare traditional dishes from forgotten Indian kitchens.",

              icon: "🍲",
            },

            {
              title: "Traditional Cooking",
              desc:
                "Prepared using age-old methods and emotional connection.",

              icon: "👵",
            },

            {
              title: "Premium Experience",
              desc:
                "Luxury food presentation with unforgettable flavors.",

              icon: "👑",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white/70 backdrop-blur-xl p-10 rounded-[36px] shadow-2xl border hover:-translate-y-3 transition-all duration-300"
            >

              <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center text-4xl shadow-2xl">
                {item.icon}
              </div>

              <h3 className="text-3xl font-black mt-8">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* ======================================================
          TRENDING DISHES
      ====================================================== */}

      <Container className="py-28">

        <SectionTitle
          badge="Trending Dishes"
          title="Most Loved Traditional Meals"
          subtitle="Authentic Indian dishes crafted beautifully."
        />

        <div className="grid md:grid-cols-3 gap-10">

          {dishes.map((dish, i) => (
            <DishCard
              key={i}
              dish={dish}
            />
          ))}
        </div>
      </Container>

      {/* ======================================================
          GALLERY
      ====================================================== */}

      <section className="py-28 bg-black text-white">

        <Container>

          <SectionTitle
            badge="Food Gallery"
            title="Beautiful Traditional Dishes"
            subtitle="Visual experiences inspired by Indian food culture."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative h-[380px] rounded-[36px] overflow-hidden group"
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
        </Container>
      </section>

      {/* ======================================================
          TESTIMONIALS
      ====================================================== */}

      <Container className="py-28">

        <SectionTitle
          badge="Testimonials"
          title="Loved By Families ❤️"
          subtitle="Thousands enjoy our traditional Indian recipes."
        />

        <div className="grid md:grid-cols-3 gap-10">

          {[
            "Amazing authentic flavors!",
            "Feels exactly like homemade food ❤️",
            "Best traditional food experience online!",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] p-10 shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex gap-1 text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                "{text}"
              </p>

              <div className="mt-8 font-bold text-orange-500">
                Happy Customer
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="relative py-32 bg-black text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 blur-3xl" />

        <Container className="relative text-center">

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-full shadow-2xl">
            <Crown size={18} />
            Premium Traditional Experience
          </div>

          <h2 className="text-5xl md:text-7xl font-black mt-10 leading-tight">
            Ready To Taste
            <span className="block text-yellow-400">
              Real India? 🍛
            </span>
          </h2>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
            Experience authentic homemade flavors,
            traditional Indian recipes, and emotional
            food memories like never before.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              href="/cloud-kitchen"
              className="inline-flex items-center gap-3 bg-yellow-400 text-black px-10 py-5 rounded-full font-bold shadow-[0_15px_40px_rgba(255,215,0,0.35)] hover:scale-105 transition-all duration-300"
            >
              Order Food 🍛
            </Link>

            <Link
              href="/recipes"
              className="inline-flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-xl px-10 py-5 rounded-full font-semibold text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore Recipes
            </Link>
          </div>
        </Container>
      </section>

      <Analytics />
    </main>
  );
}