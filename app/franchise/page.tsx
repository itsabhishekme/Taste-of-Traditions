import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  TrendingUp,
  Users,
  Rocket,
  Star,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Franchise Opportunity | Taste of Traditions",
  description:
    "Start your own Taste of Traditions franchise and build a profitable cloud kitchen business.",
};

export default function Franchise() {
  return (
    <main className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-900 overflow-hidden">

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-300 opacity-20 blur-3xl rounded-full"></div>

      {/* 🔥 HERO */}
      <section className="relative py-36 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Build Your Food Empire 🍲
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700">
          Launch your cloud kitchen with <b>Taste of Traditions</b> and create
          a scalable income stream with minimal investment.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <Link
            href="#apply"
            className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
          >
            Apply Now
          </Link>

          <Link
            href="#model"
            className="border border-black px-8 py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition"
          >
            Explore Model
          </Link>
        </div>
      </section>

      {/* 📊 STATS */}
      <section className="px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { label: "Cities", value: "20+" },
            { label: "Partners", value: "100+" },
            { label: "Avg ROI", value: "3–6 Months" },
          ].map((item, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-2xl p-10 rounded-3xl shadow-xl hover:scale-105 transition">
              <h3 className="text-4xl font-bold text-orange-600">{item.value}</h3>
              <p className="text-gray-600 mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💡 WHY JOIN */}
      <section className="px-6 md:px-16 py-24">
        <h2 className="text-4xl font-bold text-center">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {[
            { title: "Proven Model", icon: <TrendingUp />, desc: "Profitable system tested across multiple cities." },
            { title: "Low Investment", icon: <Rocket />, desc: "Start small and scale fast with low risk." },
            { title: "Full Support", icon: <Users />, desc: "We handle marketing, training & operations." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition text-center"
            >
              <div className="flex justify-center mb-4 text-orange-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⚙️ MODEL */}
      <section id="model" className="px-6 md:px-16 py-24 bg-white/40 backdrop-blur-xl text-center">
        <h2 className="text-4xl font-bold">Simple 3-Step Model</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {["Setup Kitchen", "Start Orders", "Scale Profits"].map((step, i) => (
            <div key={i} className="p-8 rounded-2xl border bg-white/70 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">{step}</h3>
              <p className="text-gray-600 mt-2">
                Quick onboarding and smooth scaling system.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 💰 INVESTMENT */}
      <section className="px-6 md:px-16 py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-bold">Investment Overview</h2>

        <div className="mt-14 grid md:grid-cols-3 gap-10">
          {[
            "₹2L – ₹5L Setup",
            "3–6 Months ROI",
            "High Profit Margins",
          ].map((item, i) => (
            <div key={i} className="bg-white text-black p-10 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="font-bold text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 TESTIMONIALS */}
      <section className="px-6 md:px-16 py-24 text-center">
        <h2 className="text-4xl font-bold">Success Stories</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl">
              <Star className="text-yellow-400 mx-auto mb-4" />
              <p className="text-gray-600">
                “Started with zero experience. Now earning consistent monthly profits!”
              </p>
              <h4 className="mt-4 font-semibold">Franchise Partner</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 🔐 TRUST */}
      <section className="px-6 md:px-16 py-24 text-center">
        <h2 className="text-4xl font-bold">Why It Works</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {[
            "High demand food niche",
            "Online delivery boom",
            "Brand + system support",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3 justify-center">
              <CheckCircle className="text-green-500" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center items-center gap-3 text-green-600">
          <ShieldCheck />
          Trusted & scalable franchise model
        </div>
      </section>

      {/* ❓ FAQ */}
      <section className="px-6 md:px-16 py-24">
        <h2 className="text-4xl font-bold text-center">FAQs</h2>

        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          {[
            "Do I need experience?",
            "How fast can I start?",
            "Will I get support?",
          ].map((q, i) => (
            <div key={i} className="p-6 bg-white/60 rounded-xl shadow">
              <h3 className="font-semibold">{q}</h3>
              <p className="text-gray-600 mt-2">
                No prior experience needed. We provide complete setup and support.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="px-6 md:px-16 py-28 bg-gradient-to-b from-black via-black to-orange-50 text-white text-center">
        <h2 className="text-5xl font-bold">Start Your Journey 🚀</h2>
        <p className="mt-4 text-gray-300">
          Join India's fastest growing cloud kitchen network.
        </p>

        <Link
          href="#apply"
          className="inline-block mt-8 bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
        >
          Apply Now
        </Link>
      </section>

      {/* 📝 FORM */}
      <section id="apply" className="px-6 md:px-16 py-28 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
        <h2 className="text-4xl font-bold text-center">
          Apply for Franchise
        </h2>

        <form className="max-w-3xl mx-auto mt-14 space-y-6 bg-white/40 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl">

          <input className="w-full p-4 rounded-xl bg-white/70 focus:ring-2 focus:ring-orange-400 outline-none" placeholder="Full Name" />

          <input className="w-full p-4 rounded-xl bg-white/70 focus:ring-2 focus:ring-orange-400 outline-none" placeholder="Email" />

          <input className="w-full p-4 rounded-xl bg-white/70 focus:ring-2 focus:ring-orange-400 outline-none" placeholder="City" />

          <textarea className="w-full p-4 rounded-xl bg-white/70 focus:ring-2 focus:ring-orange-400 outline-none" placeholder="Message" />

          <button className="relative w-full py-4 rounded-2xl font-semibold text-white overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 group-hover:scale-110 transition"></span>

            <span className="relative z-10 text-lg">
              Submit Application →
            </span>
          </button>

        </form>
      </section>

    </main>
  );
}