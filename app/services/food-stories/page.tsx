import Image from "next/image";

const stories = [
  {
    id: 1,
    title: "The Heritage Behind Every Recipe",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
    description:
      "Traditional Indian recipes passed through generations and recreated with modern luxury dining experiences.",
  },

  {
    id: 2,
    title: "Royal Kitchens Of India",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop",
    description:
      "Experience the influence of royal Mughlai and regional cuisines that shaped timeless Indian flavors.",
  },

  {
    id: 3,
    title: "Street Food Culture",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop",
    description:
      "From busy Indian streets to premium presentation, every bite tells a cultural story.",
  },
];

const featuredExperiences = [
  {
    title: "Authentic Culinary Heritage",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Traditional Family Dining",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Luxury Indian Experience",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FoodStoriesPage() {
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

              Heritage • Culture • Cuisine
            </span>
          </div>

          {/* TITLE */}

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight tracking-tight">

            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">

              Food
            </span>

            <br />

            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">

              Stories
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">

            Discover the emotional journey behind Indian cuisine through
            authentic stories, family traditions, regional heritage,
            spices, and culinary inspirations that shaped Taste of
            Traditions.
          </p>

          {/* STATS */}

          <div className="mt-12 flex flex-wrap gap-5">

            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-gray-400">
                Heritage Stories
              </p>

              <p className="mt-1 text-2xl font-bold text-yellow-400">
                100+
              </p>
            </div>

            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-gray-400">
                Culinary Experiences
              </p>

              <p className="mt-1 text-2xl font-bold text-yellow-400">
                50+
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
          </div>
        </div>
      </section>

      {/* ======================================================
          STORIES SECTION
      ====================================================== */}

      <section className="relative py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* HEADER */}

          <div className="text-center mb-20">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-xl">

              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

              <span className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold">

                Culinary Heritage
              </span>
            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

              Every Flavor Has A
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">
                {" "}
                Story
              </span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">

              Explore timeless traditions, culinary inspirations,
              regional stories, and the emotional connection behind
              authentic Indian food experiences.
            </p>
          </div>

          {/* STORIES GRID */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {stories.map((story) => (
              <div
                key={story.id}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                {/* IMAGE */}

                <div className="relative h-[520px] overflow-hidden">

                  <Image
                    src={story.image}
                    alt={story.title}
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

                        Featured Story
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-bold text-white leading-tight">

                      {story.title}
                    </h3>

                    <p className="mt-5 text-gray-300 leading-7">

                      {story.description}
                    </p>

                    {/* BUTTON */}

                    <button className="mt-7 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-black font-bold shadow-[0_10px_40px_rgba(255,200,0,0.25)] transition duration-300 hover:scale-105">

                      Read Story

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

                  Premium Experiences
                </span>
              </div>

              <h2 className="mt-8 text-4xl md:text-6xl font-black leading-tight">

                Inspired By
                <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">
                  {" "}
                  Indian Culture
                </span>
              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">

                Every experience reflects the soul of India’s culinary
                traditions, luxury hospitality, and timeless food culture.
              </p>
            </div>

            {/* GRID */}

            <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

              {featuredExperiences.map((item, index) => (
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

                        Explore Experience

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

                Discover More Stories
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}