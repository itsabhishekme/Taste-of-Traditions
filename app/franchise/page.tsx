import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Franchise Opportunity",
  description:
    "Start your own Taste of Traditions franchise and build a profitable cloud kitchen business.",
};

export default function Franchise() {
  return (
    <main className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-900 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-300 opacity-20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="relative py-28 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Build Your Food Empire 🍲
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700">
          Join Taste of Traditions and start your own profitable cloud kitchen.
        </p>

        <Link
          href="#apply"
          className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
        >
          Apply Now
        </Link>
      </section>

      {/* WHY JOIN */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-3xl font-bold text-center">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {[
            "Proven Business Model",
            "Low Investment",
            "Full Support",
          ].map((title, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold text-orange-600">
                {title}
              </h3>
              <p className="mt-3 text-gray-600">
                Build and scale your own food business easily.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MODEL */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Simple Business Model
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {["Setup", "Operate", "Scale"].map((step, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold">{step}</h3>
              <p className="text-gray-600 mt-2">
                Easy to start and grow quickly.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="px-6 md:px-16 py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold">
          Investment Overview
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {[
            "₹2L – ₹5L",
            "3–6 Months",
            "High ROI",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black p-6 rounded-xl shadow-xl hover:scale-105 transition"
            >
              <h3 className="font-bold text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 PREMIUM FINAL SECTION */}
      <section className="relative px-6 md:px-16 pt-24 pb-32 bg-gradient-to-b from-black via-black to-white text-white">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            Start Your Journey Today 🚀
          </h2>

          <p className="mt-4 text-gray-300">
            Become part of India’s growing food revolution.
          </p>

          <Link
            href="#apply"
            className="inline-block mt-8 bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
          >
            Apply Now
          </Link>
        </div>

        {/* TRUST CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "📈 High Growth", desc: "Scalable model" },
            { title: "🤝 Full Support", desc: "We guide you" },
            { title: "🔥 Trending Market", desc: "Cloud kitchens booming" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black p-6 rounded-2xl text-center shadow-xl hover:scale-105 transition"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🤍 WHITE END */}
      <section className="bg-white py-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          Taste of Traditions — Building Food Entrepreneurs
        </h3>
      </section>

      {/* FORM */}
      <section id="apply" className="px-6 md:px-16 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center">
          Apply for Franchise
        </h2>

        <form className="max-w-2xl mx-auto mt-10 space-y-6">
          <input className="w-full border p-3 rounded-lg" placeholder="Name" />
          <input className="w-full border p-3 rounded-lg" placeholder="Email" />
          <input className="w-full border p-3 rounded-lg" placeholder="City" />
          <textarea className="w-full border p-3 rounded-lg" placeholder="Message" />
          <button className="w-full bg-black text-white py-3 rounded-lg hover:scale-105 transition">
            Submit
          </button>
        </form>
      </section>

    </main>
  );
}