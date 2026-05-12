"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Sparkles,
  Heart,
  Leaf,
  Flame,
  Star,
  Crown,
  Gift,
  Clock3,
  ChefHat,
  ArrowRight,
  UtensilsCrossed,
  Coffee,
} from "lucide-react";

/* ======================================================
   ONLINE IMAGES
====================================================== */

const heroImage =
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1400&auto=format&fit=crop";

const chefImage =
  "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop";

const galleryImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
];

const dishes = [
  {
    name: "Dal Baati Churma",
    price: "₹199",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Royal Indian Thali",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Paneer Handi",
    price: "₹249",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop",
  },
];

/* ======================================================
   REUSABLE CONTAINER
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
   ICON CARD
====================================================== */

function IconCard({
  icon,
  title,
  desc,
}: any) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      className="relative bg-white/80 backdrop-blur-xl p-10 rounded-[36px] shadow-2xl overflow-hidden group"
    >

      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-orange-400 to-yellow-400 transition" />

      <div className="relative w-16 h-16 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center shadow-xl">
        {icon}
      </div>

      <h3 className="text-2xl font-black text-orange-600 mt-8">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

/* ======================================================
   FOOD CARD
====================================================== */

function FoodCard({
  name,
  price,
  image,
}: any) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      className="bg-white rounded-[36px] shadow-2xl overflow-hidden group"
    >

      {/* IMAGE */}

      <div className="relative h-72 overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">

          <div>

            <h3 className="text-2xl font-black">
              {name}
            </h3>

            <p className="text-orange-300 mt-1">
              {price}
            </p>
          </div>

          <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition">
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-8">

        <div className="flex items-center gap-2 text-orange-500">
          <ChefHat size={18} />
          Premium Traditional Dish
        </div>

        <p className="text-gray-600 mt-5 leading-relaxed">
          Experience authentic Indian flavors crafted
          with emotional connection and heritage recipes.
        </p>

        <button className="mt-8 w-full bg-orange-500 text-white py-4 rounded-2xl font-semibold hover:bg-orange-600 transition">
          Order Now 🍛
        </button>
      </div>
    </motion.div>
  );
}

/* ======================================================
   MAIN PAGE
====================================================== */

export default function AboutClient() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-900">

      {/* ======================================================
          BACKGROUND BLOBS
      ====================================================== */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-orange-300/20 blur-3xl rounded-full" />

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative py-32 overflow-hidden">

        <Container className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-3 rounded-full shadow-lg font-semibold"
            >
              🍛 Taste Of Traditions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mt-8 leading-tight"
            >
              Reviving India’s
              <span className="block text-orange-500">
                Forgotten Flavors
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg md:text-xl text-gray-600 mt-8 leading-relaxed max-w-2xl"
            >
              Bringing emotional homemade recipes,
              authentic spices, and timeless Indian traditions back to life.
            </motion.p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/cloud-kitchen"
                className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                🍲 Explore Menu
              </Link>

              <Link
                href="/recipes"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                View Recipes
              </Link>
            </div>

            {/* MINI STATS */}

            <div className="grid grid-cols-2 gap-5 mt-14">

              {[
                "100+ Recipes",
                "10K+ Customers",
                "Traditional Cooking",
                "Premium Ingredients",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl px-5 py-5 shadow-xl font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >

            <div className="relative h-[750px] rounded-[40px] overflow-hidden shadow-2xl">

              <Image
                src={heroImage}
                alt="Indian Food"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* FLOAT CARD */}

              <div className="absolute bottom-8 left-8 right-8 bg-white/20 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 text-white shadow-2xl">

                <div className="flex items-center justify-between">

                  <div>

                    <div className="flex items-center gap-2 text-orange-300 font-semibold">
                      <Flame size={18} />
                      Trending Dish
                    </div>

                    <h3 className="text-4xl font-black mt-3">
                      Royal Indian Thali
                    </h3>
                  </div>

                  <div className="text-right">

                    <div className="text-yellow-300 font-bold text-xl">
                      ⭐ 4.9
                    </div>

                    <p className="text-sm mt-1">
                      Loved by food lovers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}

            <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-6 shadow-2xl w-72">

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-3xl bg-orange-100 flex items-center justify-center text-orange-500 text-3xl">
                  🍲
                </div>

                <div>

                  <h4 className="font-black text-xl">
                    Authentic Recipes
                  </h4>

                  <p className="text-gray-500">
                    Passed through generations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ======================================================
          TIMELINE
      ====================================================== */}

      <Container className="py-28">

        <SectionTitle
          badge="Our Journey"
          title="The Story Behind The Taste"
          subtitle="Every recipe carries memories, emotions, and timeless traditions."
        />

        <div className="max-w-4xl mx-auto space-y-10">

          {[
            "Started from a small home kitchen",
            "Collected recipes from villages",
            "Served thousands of happy food lovers",
            "Reviving traditional Indian flavors globally",
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-6 bg-white rounded-[32px] p-8 shadow-xl"
            >

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center font-black text-2xl shadow-xl">
                {i + 1}
              </div>

              <div>

                <h3 className="text-2xl font-black">
                  Step {i + 1}
                </h3>

                <p className="text-gray-600 mt-3 text-lg">
                  {step}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* ======================================================
          FEATURES
      ====================================================== */}

      <Container className="py-28">

        <SectionTitle
          badge="Why Choose Us"
          title="Crafted With Emotion & Tradition"
          subtitle="Authentic Indian food experiences made with love."
        />

        <div className="grid md:grid-cols-3 gap-10">

          <IconCard
            icon={<Crown />}
            title="Premium Recipes"
            desc="Rare traditional dishes revived with care."
          />

          <IconCard
            icon={<Gift />}
            title="Emotional Experience"
            desc="Food connected with memories and nostalgia."
          />

          <IconCard
            icon={<Flame />}
            title="Authentic Cooking"
            desc="Prepared with timeless traditional methods."
          />
        </div>
      </Container>

      {/* ======================================================
          FEATURED DISHES
      ====================================================== */}

      <Container className="py-28">

        <SectionTitle
          badge="Featured Dishes"
          title="Most Loved Traditional Meals"
          subtitle="Authentic Indian dishes crafted beautifully."
        />

        <div className="grid md:grid-cols-3 gap-10">

          {dishes.map((dish, i) => (
            <FoodCard
              key={i}
              name={dish.name}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </div>
      </Container>

      {/* ======================================================
          CHEF SECTION
      ====================================================== */}

      <Container className="py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative h-[650px] rounded-[40px] overflow-hidden shadow-2xl">

            <Image
              src={chefImage}
              alt="Chef"
              fill
              className="object-cover"
            />
          </div>

          <div>

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-3 rounded-full font-semibold">
              👨‍🍳 Master Chef
            </div>

            <h2 className="text-5xl font-black mt-8 leading-tight">
              Crafted With
              <span className="block text-orange-500">
                Passion & Heritage
              </span>
            </h2>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              Every meal is prepared using emotional connection,
              authentic Indian spices, and traditional cooking techniques.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              {[
                "Traditional Recipes",
                "Fresh Ingredients",
                "Authentic Spices",
                "Premium Quality",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-orange-50 rounded-2xl px-5 py-5 font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* ======================================================
          FOOD GALLERY
      ====================================================== */}

      <section className="py-28 bg-black text-white">

        <Container>

          <SectionTitle
            badge="Food Gallery"
            title="Beautiful Traditional Dishes"
            subtitle="Visual experiences inspired by Indian food culture."
          />

          <div className="grid md:grid-cols-3 gap-8">

            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="relative h-[420px] rounded-[36px] overflow-hidden group"
              >

                <Image
                  src={img}
                  alt="Gallery"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ======================================================
          VALUES
      ====================================================== */}

      <Container className="py-28">

        <SectionTitle
          badge="Core Values"
          title="What We Believe In"
          subtitle="Tradition, love, authenticity, and emotional connection."
        />

        <div className="grid md:grid-cols-3 gap-10">

          <IconCard
            icon={<Leaf />}
            title="Authenticity"
            desc="True to Indian roots and traditions."
          />

          <IconCard
            icon={<Heart />}
            title="Love"
            desc="Cooked with emotion and connection."
          />

          <IconCard
            icon={<Sparkles />}
            title="Quality"
            desc="Premium ingredients and standards."
          />
        </div>
      </Container>

      {/* ======================================================
          TESTIMONIALS
      ====================================================== */}

      <Container className="py-28">

        <SectionTitle
          badge="Testimonials"
          title="Loved By Food Lovers"
          subtitle="Thousands enjoy our authentic traditional recipes."
        />

        <div className="grid md:grid-cols-3 gap-10">

          {[
            "Amazing authentic taste!",
            "Feels exactly like homemade meals ❤️",
            "Best traditional food experience online!",
          ].map((text, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] p-10 shadow-2xl"
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
            </motion.div>
          ))}
        </div>
      </Container>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="py-32 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-center">

        <Container>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Taste The Legacy
          </h2>

          <p className="text-xl text-white/90 mt-8 max-w-3xl mx-auto">
            Experience emotional flavors, traditional Indian recipes,
            and unforgettable homemade meals today.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              href="/cloud-kitchen"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              🍛 Order Now
            </Link>

            <Link
              href="/recipes"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Explore Recipes
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}