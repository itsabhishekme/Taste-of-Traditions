import Image from "next/image";

const menuCategories = [
  {
    title: "Traditional Thali",
    description:
      "Authentic Indian thali with handcrafted regional flavors.",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop",
    price: "₹499",
  },

  {
    title: "Royal Biryani",
    description:
      "Aromatic biryani cooked with heritage spices and saffron.",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d29a?q=80&w=1200&auto=format&fit=crop",
    price: "₹349",
  },

  {
    title: "Street Food Fusion",
    description:
      "Classic Indian street food with modern luxury presentation.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
    price: "₹299",
  },

  {
    title: "Chef Signature Curry",
    description:
      "Rich creamy curry inspired by timeless family recipes.",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1200&auto=format&fit=crop",
    price: "₹399",
  },

  {
    title: "Indian Desserts",
    description:
      "Traditional sweets crafted with premium ingredients.",
    image:
      "https://images.unsplash.com/photo-1605197161470-5c4d64f7f2f1?q=80&w=1200&auto=format&fit=crop",
    price: "₹199",
  },

  {
    title: "Luxury Dining Combo",
    description:
      "Exclusive gourmet combo experience for food lovers.",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop",
    price: "₹799",
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* ======================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* BACKGROUND EFFECTS */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-[-140px] left-[-100px] w-[320px] h-[320px] bg-yellow-400/10 rounded-full blur-[120px]" />

          <div className="absolute bottom-[-160px] right-[-120px] w-[320px] h-[320px] bg-orange-500/10 rounded-full blur-[120px]" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-yellow-300/5 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28">

          {/* TAG */}

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-xl">

            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

            <span className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold">

              Signature Menu
            </span>
          </div>

          {/* TITLE */}

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight tracking-tight">

            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">

              Taste The
            </span>

            <br />

            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">

              Tradition
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">

            Discover our handcrafted Indian menu inspired by timeless
            recipes, rich spices, and authentic culinary traditions.
            Every dish is prepared with passion and premium ingredients.
          </p>

          {/* STATS */}

          <div className="mt-12 flex flex-wrap gap-5">

            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-gray-400">
                Premium Dishes
              </p>

              <p className="mt-1 text-2xl font-bold text-yellow-400">
                120+
              </p>
            </div>

            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-gray-400">
                Heritage Recipes
              </p>

              <p className="mt-1 text-2xl font-bold text-yellow-400">
                80+
              </p>
            </div>

            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-gray-400">
                Daily Orders
              </p>

              <p className="mt-1 text-2xl font-bold text-yellow-400">
                500+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          MENU GRID
      ====================================================== */}

      <section className="relative py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* HEADER */}

          <div className="text-center mb-20">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-xl">

              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

              <span className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold">

                Handcrafted Collection
              </span>
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

              Premium Indian
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">
                {" "}
                Cuisine
              </span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">

              Experience authentic Indian flavors elevated with modern
              presentation and luxurious dining experiences.
            </p>
          </div>

          {/* GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {menuCategories.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                {/* IMAGE */}

                <div className="relative h-[380px] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* PRICE */}

                  <div className="absolute top-5 right-5">

                    <div className="px-5 py-2 rounded-full bg-yellow-400 text-black font-bold shadow-[0_10px_30px_rgba(255,200,0,0.35)]">

                      {item.price}
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="absolute bottom-0 left-0 right-0 p-7">

                    <h3 className="text-3xl font-bold text-white">

                      {item.title}
                    </h3>

                    <p className="mt-4 text-gray-300 leading-7">

                      {item.description}
                    </p>

                    {/* BUTTON */}

                    <button className="mt-7 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black font-bold shadow-[0_10px_40px_rgba(255,200,0,0.25)] transition duration-300 hover:scale-105">

                      Order Now

                      <span className="text-lg">
                        →
                      </span>
                    </button>
                  </div>
                </div>

                {/* BORDER EFFECT */}

                <div className="absolute inset-0 rounded-[32px] border border-yellow-400/0 group-hover:border-yellow-400/20 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          FEATURED EXPERIENCE
      ====================================================== */}

      <section className="relative pb-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl">

            {/* BG EFFECT */}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">

              <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-yellow-400/10 rounded-full blur-[120px]" />

              <div className="absolute bottom-[-140px] left-[-120px] w-[320px] h-[320px] bg-orange-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-0 items-center">

              {/* IMAGE */}

              <div className="relative h-[500px] lg:h-full min-h-[500px]">

                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop"
                  alt="Luxury Indian Dining"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* FLOATING CARD */}

                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10">

                  <p className="text-sm uppercase tracking-[0.25em] text-yellow-300 font-semibold">

                    Chef Special
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-white">

                    Authentic Heritage Dining
                  </h3>

                  <p className="mt-4 text-gray-300 leading-7">

                    Crafted with timeless recipes and premium culinary artistry.
                  </p>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-10 md:p-16">

                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-xl">

                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

                  <span className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold">

                    Luxury Experience
                  </span>
                </div>

                <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

                  Crafted For
                  <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">
                    {" "}
                    Food Lovers
                  </span>
                </h2>

                <p className="mt-8 text-lg text-gray-400 leading-relaxed">

                  At Taste of Traditions, every dish is a celebration of
                  Indian culture, luxury dining, and unforgettable culinary
                  experiences designed to delight every guest.
                </p>

                {/* FEATURES */}

                <div className="mt-10 space-y-5">

                  {[
                    "Authentic Indian Heritage Recipes",
                    "Premium Fresh Ingredients",
                    "Luxury Cloud Kitchen Experience",
                    "Fast & Safe Home Delivery",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >

                      <div className="w-10 h-10 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">

                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      </div>

                      <p className="text-gray-300 text-lg">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* BUTTONS */}

                <div className="mt-12 flex flex-wrap gap-5">

                  <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black font-bold shadow-[0_15px_50px_rgba(255,200,0,0.25)] transition duration-300 hover:scale-105">

                    Order Online
                  </button>

                  <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-semibold hover:border-yellow-400/20 hover:text-yellow-300 transition duration-300">

                    Explore Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}