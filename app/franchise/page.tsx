import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, TrendingUp, Users, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Franchise Opportunity | Taste of Traditions",
  description:
    "Start your own Taste of Traditions franchise and build a profitable cloud kitchen business.",
};

export default function Franchise() {
  return (
    <main className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-900 overflow-hidden">

      {/* 🌈 BACKGROUND BLOBS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-300 opacity-20 blur-3xl rounded-full"></div>

      {/* 🔥 HERO */}
      <section className="relative py-28 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Build Your Food Empire 🍲
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700">
          Start your own cloud kitchen with <b>Taste of Traditions</b> — low investment, high returns.
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
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
            Learn More
          </Link>
        </div>
      </section>

      {/* 📊 STATS */}
      <section className="px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Cities", value: "20+" },
            { label: "Partners", value: "100+" },
            { label: "Avg ROI", value: "6 Months" },
          ].map((item, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold text-orange-600">{item.value}</h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💡 WHY JOIN */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-4xl font-bold text-center">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {[
            { title: "Proven Model", icon: <TrendingUp />, desc: "Tested & profitable business model." },
            { title: "Low Investment", icon: <Rocket />, desc: "Start small, scale fast." },
            { title: "Full Support", icon: <Users />, desc: "Training, marketing & operations." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center"
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
      <section id="model" className="px-6 md:px-16 py-20 bg-white text-center">
        <h2 className="text-4xl font-bold">
          Simple 3-Step Model
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {["Setup Kitchen", "Start Orders", "Scale Profits"].map((step, i) => (
            <div key={i} className="p-6 rounded-xl border hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{step}</h3>
              <p className="text-gray-600 mt-2">
                Easy onboarding and rapid growth.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 💰 INVESTMENT */}
      <section className="px-6 md:px-16 py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold">
          Investment Overview
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            "₹2L – ₹5L",
            "3–6 Months ROI",
            "High Profit Margins",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black p-8 rounded-xl shadow-xl hover:scale-105 transition"
            >
              <h3 className="font-bold text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🧠 TRUST SECTION */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-4xl font-bold">
          Why It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
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
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="relative px-6 md:px-16 pt-24 pb-32 bg-gradient-to-b from-black via-black to-white text-white text-center">
        <h2 className="text-5xl font-bold">
          Start Your Journey 🚀
        </h2>

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
      <section id="apply" className="px-6 md:px-16 py-24 bg-white">
        <h2 className="text-4xl font-bold text-center">
          Apply for Franchise
        </h2>

        <form className="max-w-2xl mx-auto mt-12 space-y-6 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl">
          <input className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="Full Name" />
          <input className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="Email" />
          <input className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="City" />
          <textarea className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="Message" />

          <button className="w-full bg-black text-white py-3 rounded-xl hover:scale-105 transition font-semibold">
            Submit Application
          </button>
        </form>
      </section>

    </main>
  );
}