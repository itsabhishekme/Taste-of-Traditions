import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  CheckCircle,
  TrendingUp,
  Users,
  Rocket,
  Star,
  ShieldCheck,
  Crown,
  ArrowRight,
  Building2,
  ChefHat,
  Globe,
  BadgeIndianRupee,
  Sparkles,
} from "lucide-react";

/* ======================================================
   METADATA
====================================================== */

export const metadata: Metadata = {
  title: "Franchise Opportunity | Taste Of Traditions",

  description:
    "Start your own Taste Of Traditions franchise and build a scalable cloud kitchen business with authentic Indian food.",

  openGraph: {
    title: "Taste Of Traditions Franchise",

    description:
      "Launch your premium cloud kitchen franchise with Taste Of Traditions.",

    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop",
    ],
  },
};

/* ======================================================
   ONLINE IMAGES
====================================================== */

const heroImage =
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1400&auto=format&fit=crop";

const founderImage =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop";

const officeImage =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop";

const galleryImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
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

      <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-3 rounded-full font-semibold shadow-lg">
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
   MAIN PAGE
====================================================== */

export default function Franchise() {
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

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-3 rounded-full shadow-lg font-semibold">
              🚀 India’s Fast Growing Cloud Kitchen
            </div>

            <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">
              Build Your
              <span className="block text-orange-500">
                Food Empire 🍛
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Start your premium cloud kitchen franchise
              with Taste Of Traditions and create a scalable,
              profitable food business with authentic Indian recipes.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="#apply"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Apply Now 🚀
              </Link>

              <Link
                href="#model"
                className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Explore Model
              </Link>
            </div>

            {/* MINI STATS */}

            <div className="grid grid-cols-2 gap-5 mt-14">

              {[
                "100+ Partners",
                "20+ Cities",
                "Fast ROI",
                "Low Investment",
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
                alt="Franchise"
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
                      <TrendingUp size={18} />
                      Fast Growing Opportunity
                    </div>

                    <h3 className="text-4xl font-black mt-3">
                      Franchise Model
                    </h3>
                  </div>

                  <div className="text-right">

                    <div className="text-yellow-300 font-bold text-xl">
                      ROI 3–6 Months
                    </div>

                    <p className="text-sm mt-1">
                      Scalable business
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
                    Premium Brand
                  </h4>

                  <p className="text-gray-500">
                    Trusted food network
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================
          STATS
      ====================================================== */}

      <Container className="py-24">

        <div className="grid md:grid-cols-4 gap-8">

          {[
            {
              value: "20+",
              label: "Cities",
            },

            {
              value: "100+",
              label: "Partners",
            },

            {
              value: "3–6",
              label: "Months ROI",
            },

            {
              value: "10K+",
              label: "Daily Orders",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-xl rounded-[36px] p-10 text-center shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >

              <h3 className="text-5xl font-black text-orange-500">
                {item.value}
              </h3>

              <p className="text-gray-600 mt-4 text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* ======================================================
          WHY JOIN
      ====================================================== */}

      <Container className="py-28">

        <SectionTitle
          badge="Why Choose Us"
          title="Built For Fast Growth"
          subtitle="A proven franchise system designed for scalable success."
        />

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              icon: <TrendingUp size={34} />,
              title: "Proven Business Model",
              desc: "Highly profitable cloud kitchen system tested across multiple cities.",
            },

            {
              icon: <Rocket size={34} />,
              title: "Low Investment",
              desc: "Start your food business with low operational risk and fast scalability.",
            },

            {
              icon: <Users size={34} />,
              title: "Complete Support",
              desc: "Operations, branding, training, and marketing support included.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-xl rounded-[36px] p-10 shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center shadow-2xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black mt-8">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* ======================================================
          BUSINESS MODEL
      ====================================================== */}

      <section
        id="model"
        className="py-28 bg-black text-white"
      >

        <Container>

          <SectionTitle
            badge="Business Model"
            title="Simple 3-Step Franchise System"
            subtitle="Designed for quick onboarding and fast scalability."
          />

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                step: "01",
                title: "Setup Kitchen",
                desc: "We help you establish your cloud kitchen quickly.",
              },

              {
                step: "02",
                title: "Start Orders",
                desc: "Launch online food delivery and begin receiving orders.",
              },

              {
                step: "03",
                title: "Scale Profits",
                desc: "Expand operations and increase profitability efficiently.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl rounded-[36px] p-10 border border-white/10 shadow-2xl"
              >

                <div className="text-6xl font-black text-orange-400">
                  {item.step}
                </div>

                <h3 className="text-3xl font-black mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ======================================================
          INVESTMENT
      ====================================================== */}

      <Container className="py-28">

        <SectionTitle
          badge="Investment"
          title="Affordable & Scalable"
          subtitle="Low-cost setup with strong long-term profitability."
        />

        <div className="grid md:grid-cols-3 gap-10">

          {[
            "₹2L – ₹5L Setup",

            "3–6 Months ROI",

            "High Profit Margins",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-[36px] p-12 shadow-2xl text-center hover:scale-105 transition-all duration-300"
            >

              <BadgeIndianRupee
                size={40}
                className="mx-auto"
              />

              <h3 className="text-3xl font-black mt-8">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </Container>

      {/* ======================================================
          FOUNDER SECTION
      ====================================================== */}

      <Container className="py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative h-[650px] rounded-[40px] overflow-hidden shadow-2xl">

            <Image
              src="/founder.jpg"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>

          <div>

            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-3 rounded-full font-semibold">
              👨‍💼 Leadership
            </div>

            <h2 className="text-5xl font-black mt-8 leading-tight">
              Built With
              <span className="block text-orange-500">
                Vision & Innovation
              </span>
            </h2>

            <p className="text-lg text-gray-600 mt-8 leading-relaxed">
              Taste Of Traditions is designed to revive Indian food culture
              while empowering entrepreneurs to build profitable businesses.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              {[
                "Scalable System",
                "Strong Branding",
                "Fast Operations",
                "Premium Support",
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
          GALLERY
      ====================================================== */}

      <section className="py-28 bg-black text-white">

        <Container>

          <SectionTitle
            badge="Brand Experience"
            title="Inside Taste Of Traditions"
            subtitle="Premium food experiences and modern cloud kitchen operations."
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
          FAQ
      ====================================================== */}

      <Container className="py-28">

        <SectionTitle
          badge="FAQs"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before starting."
        />

        <div className="max-w-4xl mx-auto space-y-6">

          {[
            "Do I need food business experience?",
            "How quickly can I start operations?",
            "Will I receive marketing support?",
            "Can I scale to multiple locations?",
          ].map((q, i) => (
            <div
              key={i}
              className="bg-white rounded-[28px] p-8 shadow-xl"
            >

              <h3 className="text-2xl font-black">
                {q}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Yes. We provide complete onboarding,
                operational training, branding, and marketing assistance.
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="py-32 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-center">

        <Container>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Ready To Build
            <span className="block">
              Your Food Business? 🚀
            </span>
          </h2>

          <p className="text-xl text-white/90 mt-8 max-w-3xl mx-auto">
            Join one of India’s fastest-growing cloud kitchen franchise systems.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              href="#apply"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Apply Now
            </Link>

            <Link
              href="/cloud-kitchen"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Explore Brand
            </Link>
          </div>
        </Container>
      </section>

      {/* ======================================================
          APPLICATION FORM
      ====================================================== */}

      <section
        id="apply"
        className="py-32"
      >

        <Container>

          <SectionTitle
            badge="Franchise Form"
            title="Apply For Partnership"
            subtitle="Take the first step toward building your food empire."
          />

          <form className="max-w-4xl mx-auto bg-white/70 backdrop-blur-2xl rounded-[40px] p-10 md:p-14 shadow-2xl border border-white/40">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="h-16 px-6 rounded-2xl bg-white border border-orange-100 focus:ring-4 focus:ring-orange-300 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-16 px-6 rounded-2xl bg-white border border-orange-100 focus:ring-4 focus:ring-orange-300 outline-none"
              />

              <input
                type="text"
                placeholder="City"
                className="h-16 px-6 rounded-2xl bg-white border border-orange-100 focus:ring-4 focus:ring-orange-300 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="h-16 px-6 rounded-2xl bg-white border border-orange-100 focus:ring-4 focus:ring-orange-300 outline-none"
              />
            </div>

            <textarea
              placeholder="Tell us about your business goals..."
              rows={6}
              className="w-full mt-6 p-6 rounded-2xl bg-white border border-orange-100 focus:ring-4 focus:ring-orange-300 outline-none"
            />

            <button className="mt-8 w-full h-16 rounded-2xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-lg font-bold hover:scale-[1.02] transition-all duration-300 shadow-2xl">
              Submit Application →
            </button>
          </form>
        </Container>
      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-black text-white py-16">

        <Container>

          <div className="grid md:grid-cols-4 gap-12">

            <div>

              <h3 className="text-3xl font-black text-orange-400">
                Taste Of Traditions
              </h3>

              <p className="text-gray-400 mt-5 leading-relaxed">
                Reviving authentic Indian food culture
                through scalable cloud kitchen franchises.
              </p>
            </div>

            <div>

              <h4 className="font-bold text-xl mb-5">
                Quick Links
              </h4>

              <div className="flex flex-col gap-3 text-gray-400">

                <Link href="/">Home</Link>
                <Link href="/recipes">Recipes</Link>
                <Link href="/franchise">Franchise</Link>
                <Link href="/about">About</Link>
              </div>
            </div>

            <div>

              <h4 className="font-bold text-xl mb-5">
                Business
              </h4>

              <div className="flex flex-col gap-3 text-gray-400">

                <p>Cloud Kitchens</p>
                <p>Partnerships</p>
                <p>Investments</p>
                <p>Expansion</p>
              </div>
            </div>

            <div>

              <h4 className="font-bold text-xl mb-5">
                Contact
              </h4>

              <div className="flex flex-col gap-3 text-gray-400">

                <p>support@tasteoftraditions.com</p>
                <p>+91 XXXXX XXXXX</p>
                <p>India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
            © 2026 Taste Of Traditions. All Rights Reserved.
          </div>
        </Container>
      </footer>
    </main>
  );
}