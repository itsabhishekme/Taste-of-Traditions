import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    title: "Royal Indian Thali",
    category: "Traditional Cuisine",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Authentic Biryani",
    category: "Heritage Flavors",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d29a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Indian Street Food",
    category: "Food Culture",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Traditional Curry",
    category: "Chef Special",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    title: "Indian Desserts",
    category: "Sweet Traditions",
    image:
      "https://images.unsplash.com/photo-1605197161470-5c4d64f7f2f1?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    title: "Luxury Dining",
    category: "Premium Experience",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* ======================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* BACKGROUND GLOW */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-[-150px] left-[-120px] w-[320px] h-[320px] bg-yellow-400/10 rounded-full blur-[120px]" />

          <div className="absolute bottom-[-180px] right-[-120px] w-[320px] h-[320px] bg-orange-500/10 rounded-full blur-[120px]" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-yellow-300/5 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28">

          {/* TAG */}

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-xl">

            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

            <span className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold">

              Visual Food Experience
            </span>
          </div>

          {/* TITLE */}

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight tracking-tight">

            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">

              Food
            </span>

            <br />

            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">

              Gallery
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">

            Explore the luxurious flavors, rich traditions, and authentic
            culinary artistry of Taste of Traditions. Every dish tells
            a story rooted in Indian heritage and crafted with passion.
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
                Traditional Recipes
              </p>

              <p className="mt-1 text-2xl font-bold text-yellow-400">
                80+
              </p>
            </div>

            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-gray-400">
                Happy Customers
              </p>

              <p className="mt-1 text-2xl font-bold text-yellow-400">
                10K+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          GALLERY SECTION
      ====================================================== */}

      <section className="relative py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* SECTION HEADER */}

          <div className="text-center mb-20">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-xl">

              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

              <span className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold">

                Signature Collection
              </span>
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

              Crafted With
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">
                {" "}
                Tradition
              </span>
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">

              A visual celebration of authentic Indian cuisine,
              premium ingredients, and timeless culinary experiences.
            </p>
          </div>

          {/* GALLERY GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {galleryImages.map((item) => (
              <div
                key={item.id}
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* CATEGORY */}

                  <div className="absolute top-5 left-5">

                    <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">

                      <span className="text-xs uppercase tracking-[0.25em] text-yellow-300 font-semibold">

                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="absolute bottom-0 left-0 right-0 p-7">

                    <h3 className="text-2xl font-bold text-white">

                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-300 leading-7">

                      Authentic flavors inspired by Indian heritage,
                      prepared with premium ingredients and timeless recipes.
                    </p>

                    {/* BUTTON */}

                    <button className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black font-bold shadow-[0_10px_40px_rgba(255,200,0,0.25)] transition duration-300 hover:scale-105">

                      Explore Dish

                      <span className="text-lg">
                        →
                      </span>
                    </button>
                  </div>
                </div>

                {/* GLOW */}

                <div className="absolute inset-0 rounded-[32px] border border-yellow-400/0 group-hover:border-yellow-400/20 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          EXPERIENCE SECTION
      ====================================================== */}

      <section className="relative pb-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl p-10 md:p-16">

            {/* BACKGROUND */}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">

              <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-yellow-400/10 rounded-full blur-[120px]" />

              <div className="absolute bottom-[-140px] left-[-120px] w-[320px] h-[320px] bg-orange-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-14 items-center">

              {/* CONTENT */}

              <div>

                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-xl">

                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

                  <span className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold">

                    Luxury Food Experience
                  </span>
                </div>

                <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

                  Bringing
                  <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">
                    {" "}
                    Tradition
                  </span>
                  <br />
                  To Every Plate
                </h2>

                <p className="mt-8 text-lg text-gray-400 leading-relaxed">

                  Taste of Traditions combines authentic Indian culinary
                  heritage with premium modern presentation to create
                  unforgettable dining experiences for every customer.
                </p>

                {/* BUTTONS */}

                <div className="mt-10 flex flex-wrap gap-5">

                  <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black font-bold shadow-[0_15px_50px_rgba(255,200,0,0.25)] transition duration-300 hover:scale-105">

                    Explore Menu
                  </button>

                  <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-semibold hover:border-yellow-400/20 hover:text-yellow-300 transition duration-300">

                    View Services
                  </button>
                </div>
              </div>

              {/* IMAGE */}

              <div className="relative h-[500px] rounded-[32px] overflow-hidden border border-white/10">

                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop"
                  alt="Luxury Dining Experience"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* FLOATING CARD */}

                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10">

                  <p className="text-sm uppercase tracking-[0.25em] text-yellow-300 font-semibold">

                    Premium Experience
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-white">

                    Authentic Indian Dining
                  </h3>

                  <p className="mt-4 text-gray-300 leading-7">

                    Crafted with passion, heritage, and unforgettable flavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}