import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  Search,
  Star,
  Clock3,
  ChefHat,
  ArrowRight,
  Flame,
  Heart,
  Sparkles,
  Coffee,
  Soup,
  Sandwich,
  Salad,
} from "lucide-react";

/* ======================================================
   METADATA
====================================================== */

export const metadata: Metadata = {
  title: "Recipes | Taste Of Traditions",

  description:
    "Explore authentic Indian recipes, emotional flavors, and traditional homemade food experiences.",

  openGraph: {
    title: "Recipes | Taste Of Traditions",

    description:
      "Discover timeless Indian recipes and heritage cuisine.",

    images: [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1400&auto=format&fit=crop",
    ],
  },
};

/* ======================================================
   ONLINE IMAGES
====================================================== */

const heroImage =
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1600&auto=format&fit=crop";

const featuredImage =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop";

const galleryImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
];

const recipes = [
  {
    id: 1,
    name: "Royal Indian Thali",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",
    time: "30 mins",
    rating: "4.9",
    desc:
      "Traditional Indian thali with authentic spices and homemade flavors.",
  },

  {
    id: 2,
    name: "Dal Baati Churma",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop",
    time: "40 mins",
    rating: "4.8",
    desc:
      "Classic Rajasthani dish served with churma and spicy dal.",
  },

  {
    id: 3,
    name: "Paneer Butter Masala",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop",
    time: "25 mins",
    rating: "4.9",
    desc:
      "Creamy paneer curry cooked with rich tomato gravy and spices.",
  },

  {
    id: 4,
    name: "Masala Dosa",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1200&auto=format&fit=crop",
    time: "20 mins",
    rating: "4.7",
    desc:
      "South Indian crispy dosa filled with spicy potato masala.",
  },

  {
    id: 5,
    name: "Traditional Sweets",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
    time: "15 mins",
    rating: "4.8",
    desc:
      "Authentic Indian desserts inspired by traditional celebrations.",
  },

  {
    id: 6,
    name: "Hyderabadi Biryani",
    image:
      "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1200&auto=format&fit=crop",
    time: "50 mins",
    rating: "5.0",
    desc:
      "Royal dum biryani cooked with aromatic spices and herbs.",
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
   RECIPE CARD
====================================================== */

function RecipeCard({ recipe }: any) {
  return (
    <div className="group bg-white rounded-[36px] overflow-hidden shadow-2xl hover:-translate-y-3 transition-all duration-500">

      {/* IMAGE */}

      <div className="relative h-80 overflow-hidden">

        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* BADGES */}

        <div className="absolute top-5 left-5 flex gap-3">

          <div className="bg-orange-500 text-white text-xs px-4 py-2 rounded-full font-semibold">
            Trending
          </div>

          <div className="bg-black/60 text-white text-xs px-4 py-2 rounded-full">
            Traditional
          </div>
        </div>

        {/* FLOAT INFO */}

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">

          <div>

            <h3 className="text-3xl font-black">
              {recipe.name}
            </h3>

            <div className="flex items-center gap-5 mt-3 text-sm">

              <div className="flex items-center gap-2">
                <Clock3 size={16} />
                {recipe.time}
              </div>

              <div className="flex items-center gap-2">
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
                {recipe.rating}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-8">

        <div className="flex items-center gap-2 text-orange-500 font-semibold">
          <ChefHat size={18} />
          Heritage Recipe
        </div>

        <p className="text-gray-600 mt-5 leading-relaxed">
          {recipe.desc}
        </p>

        {/* BUTTONS */}

        <div className="flex items-center justify-between mt-8">

          <div className="flex items-center gap-2 text-red-500">
            <Heart size={18} />
            Loved by foodies
          </div>

          <Link
            href={`/recipes/${recipe.id}`}
            className="inline-flex items-center gap-2 text-orange-600 font-semibold"
          >
            View Recipe
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

export default function RecipesPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-yellow-50 to-white text-gray-900">

      {/* BACKGROUND */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-300/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-300/20 blur-3xl rounded-full" />

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative py-32 overflow-hidden">

        <Container className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-3 rounded-full shadow-lg font-semibold">
              🍛 Traditional Indian Recipes
            </div>

            <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">
              Explore India’s
              <span className="block text-orange-500">
                Timeless Flavors
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mt-8 leading-relaxed max-w-2xl">
              Discover emotional homemade recipes,
              authentic spices, and unforgettable Indian food experiences.
            </p>

            {/* SEARCH */}

            <div className="relative mt-12 max-w-2xl">

              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
              />

              <input
                type="text"
                placeholder="Search traditional recipes..."
                className="w-full h-16 rounded-full bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl pl-14 pr-6 text-lg focus:outline-none focus:ring-4 focus:ring-orange-300"
              />
            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/cloud-kitchen"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                🍲 Order Food
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Explore Story
              </Link>
            </div>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-5 mt-14">

              {[
                "100+ Recipes",
                "10K+ Food Lovers",
                "Traditional Taste",
                "Premium Quality",
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

          <div className="relative">

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
                      Loved by customers
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
          </div>
        </Container>
      </section>

      {/* ======================================================
          CATEGORIES
      ====================================================== */}

      <Container className="py-24">

        <SectionTitle
          badge="Categories"
          title="Explore By Taste"
          subtitle="Discover traditional Indian dishes beautifully categorized."
        />

        <div className="grid md:grid-cols-4 gap-8">

          {[
            {
              icon: <Coffee size={32} />,
              title: "Breakfast",
            },

            {
              icon: <Soup size={32} />,
              title: "Traditional Meals",
            },

            {
              icon: <Sandwich size={32} />,
              title: "Street Food",
            },

            {
              icon: <Salad size={32} />,
              title: "Healthy Recipes",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[36px] p-10 shadow-2xl hover:-translate-y-3 transition-all duration-300 text-center"
            >

              <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center mx-auto shadow-2xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black mt-8">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>

      {/* ======================================================
          FEATURED EXPERIENCE
      ====================================================== */}

      <Container className="py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}

          <div className="relative group">

            <div className="relative h-[720px] rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

              <Image
                src={featuredImage}
                alt="Featured Food"
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-10 left-10 right-10">

                <div className="flex items-center gap-2 text-orange-300 font-semibold">
                  <Flame size={18} />
                  Signature Heritage Cuisine
                </div>

                <h2 className="text-5xl md:text-6xl font-black text-white mt-5 leading-tight">
                  Timeless Indian
                  <span className="block text-orange-300">
                    Culinary Experience
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* CONTENT */}

          <div>

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-3 rounded-full shadow-lg font-semibold">
              ✨ Chef Recommended
            </div>

            <h2 className="text-5xl md:text-6xl font-black mt-10 leading-tight">
              Crafted With
              <span className="block text-orange-500">
                Passion & Tradition
              </span>
            </h2>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              Experience unforgettable flavors inspired by
              royal kitchens, traditional Indian homes,
              and timeless cooking methods.
            </p>

            {/* FEATURES */}

            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              {[
                "Authentic Indian Recipes",
                "Premium Ingredients",
                "Traditional Spices",
                "Luxury Food Experience",
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
          </div>
        </div>
      </Container>

      {/* ======================================================
          RECIPES GRID
      ====================================================== */}

      <Container className="py-28">

        <SectionTitle
          badge="Trending Recipes"
          title="Most Loved Dishes"
          subtitle="Traditional Indian dishes enjoyed by thousands."
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">

          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
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
            subtitle="Experience Indian food culture visually."
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
          title="Loved By Food Lovers"
          subtitle="Thousands enjoy our traditional Indian recipes."
        />

        <div className="grid md:grid-cols-3 gap-10">

          {[
            "Amazing authentic flavors!",
            "Feels exactly like homemade food ❤️",
            "Best traditional recipe experience online!",
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
          NEWSLETTER
      ====================================================== */}

      <section className="py-28 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">

        <Container className="text-center">

          <h2 className="text-5xl md:text-6xl font-black">
            Join Our Food Community
          </h2>

          <p className="text-xl text-white/90 mt-8 max-w-3xl mx-auto">
            Get authentic recipes, emotional food stories,
            and traditional cooking inspiration.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="h-16 px-6 rounded-full text-black w-full max-w-md outline-none shadow-2xl"
            />

            <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl">
              Subscribe 🚀
            </button>
          </div>
        </Container>
      </section>

    </main>
  );
}