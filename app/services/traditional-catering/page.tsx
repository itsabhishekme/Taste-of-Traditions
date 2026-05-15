import Image from "next/image";

const cateringServices = [
  {
    id: 1,
    title: "Wedding Catering",
    description:
      "Luxury Indian wedding catering experiences with authentic regional cuisines and premium presentation.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1400&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Corporate Events",
    description:
      "Professional catering services designed for corporate meetings, celebrations, and premium dining experiences.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1400&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Traditional Family Gatherings",
    description:
      "Authentic Indian food experiences crafted for family functions, festivals, and cultural celebrations.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1400&auto=format&fit=crop",
  },
];

const cateringFeatures = [
  {
    title: "Authentic Regional Cuisine",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Luxury Event Presentation",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Premium Dining Experience",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TraditionalCateringPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* ======================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* BACKGROUND EFFECTS */}

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

              Luxury Catering Experience
            </span>
          </div>

          {/* TITLE */}

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight tracking-tight">

            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">

              Traditional
            </span>

            <br />

            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">

              Catering
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">

            Experience authentic Indian catering crafted with heritage
            recipes, luxury presentation, and unforgettable culinary
            traditions for weddings, events, festivals, and celebrations.
          </p>

          {/* STATS */}

          <div className="mt-12 flex flex-wrap gap-5">

            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-gray-400">
                Events Catered
              </p>

              <p className="mt-1 text-2xl font-bold text-yellow-400">
                500+
              </p>
            </div>

            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-gray-400">
                Traditional Dishes
              </p>

              <p className="mt-1 text-2xl font-bold text-yellow-400">
                150+
              </p>
            </div>

            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-gray-400">
                Happy Guests
              </p>

              <p className="mt-1 text-2xl font-bold text-yellow-400">
                50K+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SERVICES SECTION
      ====================================================== */}

      <section className="relative py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* HEADER */}

          <div className="text-center mb-20">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-xl">

              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

              <span className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold">

                Signature Catering Services
              </span>
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

              Crafted For
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">
                {" "}
                Memorable Celebrations
              </span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">

              From royal weddings to premium corporate events, Taste of
              Traditions creates unforgettable dining experiences inspired
              by authentic Indian heritage.
            </p>
          </div>

          {/* GRID */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {cateringServices.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                {/* IMAGE */}

                <div className="relative h-[520px] overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  {/* CONTENT */}

                  <div className="absolute bottom-0 left-0 right-0 p-8">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">

                      <div className="w-2 h-2 rounded-full bg-yellow-400" />

                      <span className="text-xs uppercase tracking-[0.25em] text-yellow-300 font-semibold">

                        Premium Event Service
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-bold text-white leading-tight">

                      {service.title}
                    </h3>

                    <p className="mt-5 text-gray-300 leading-7">

                      {service.description}
                    </p>

                    {/* BUTTON */}

                    <button className="mt-7 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black font-bold shadow-[0_10px_40px_rgba(255,200,0,0.25)] transition duration-300 hover:scale-105">

                      Book Catering

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

            {/* HEADER */}

            <div className="relative text-center">

              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-xl">

                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

                <span className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold">

                  Authentic Experiences
                </span>
              </div>

              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

                Traditional Cuisine,
                <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">
                  {" "}
                  Luxury Presentation
                </span>
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">

                We blend timeless Indian flavors with modern premium
                presentation to create unforgettable event catering
                experiences for every celebration.
              </p>
            </div>

            {/* GRID */}

            <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

              {cateringFeatures.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10"
                >

                  <div className="relative h-[420px]">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-7">

                      <h3 className="text-2xl font-bold text-white leading-tight">

                        {item.title}
                      </h3>

                      <button className="mt-6 inline-flex items-center gap-3 text-yellow-300 font-semibold hover:text-yellow-400 transition">

                        Learn More

                        <span>
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="relative mt-20 text-center">

              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black font-bold shadow-[0_15px_50px_rgba(255,200,0,0.25)] transition duration-300 hover:scale-105">

                Book Your Catering Experience
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}