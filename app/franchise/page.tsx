import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Franchise Opportunity",
  description:
    "Start your own Taste of Traditions franchise. Join India's fastest-growing cloud kitchen focused on authentic and lost recipes.",
  keywords: [
    "cloud kitchen franchise India",
    "food franchise opportunity",
    "Taste of Traditions franchise",
    "restaurant franchise India",
    "start food business",
  ],
};

export default function Franchise() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-orange-200 via-yellow-100 to-orange-300 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Start Your Own Food Empire 🍲
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700">
          Partner with Taste of Traditions and bring authentic Indian flavors
          to your city. Build a profitable cloud kitchen business with us.
        </p>

        <Link
          href="#apply"
          className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Apply for Franchise
        </Link>
      </section>

      {/* WHY JOIN US */}
      <section className="px-6 md:px-16 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center">
          Why Choose Taste of Traditions?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Proven Concept</h3>
            <p className="mt-3 text-gray-600">
              A unique cloud kitchen model focused on lost recipes and authentic
              Indian flavors that customers love.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Low Investment</h3>
            <p className="mt-3 text-gray-600">
              Start your own kitchen with minimal investment and maximum returns.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Full Support</h3>
            <p className="mt-3 text-gray-600">
              Get training, branding, operations, and marketing support from our team.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="px-6 md:px-16 py-20">
        <h2 className="text-3xl font-bold text-center">
          Our Business Model
        </h2>

        <p className="mt-6 text-center max-w-3xl mx-auto text-gray-600">
          Taste of Traditions operates as a cloud kitchen, meaning you don’t need
          expensive dine-in spaces. Focus on delivery and maximize profits.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <h3 className="text-xl font-semibold">Setup</h3>
            <p className="mt-2 text-gray-600">
              Small kitchen setup with essential equipment.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Operations</h3>
            <p className="mt-2 text-gray-600">
              Manage orders via Swiggy, Zomato, and direct website.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Growth</h3>
            <p className="mt-2 text-gray-600">
              Expand into multiple outlets and scale quickly.
            </p>
          </div>
        </div>
      </section>

      {/* INVESTMENT SECTION */}
      <section className="px-6 md:px-16 py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold">
          Investment & Returns
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-300">
          Start your franchise with affordable investment and achieve
          high-profit margins with our proven model.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="bg-white text-black p-6 rounded-xl">
            <h3 className="font-bold text-xl">₹2L – ₹5L</h3>
            <p>Initial Investment</p>
          </div>

          <div className="bg-white text-black p-6 rounded-xl">
            <h3 className="font-bold text-xl">3–6 Months</h3>
            <p>Break-even Time</p>
          </div>

          <div className="bg-white text-black p-6 rounded-xl">
            <h3 className="font-bold text-xl">High ROI</h3>
            <p>Scalable Profit Model</p>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="px-6 md:px-16 py-20">
        <h2 className="text-3xl font-bold text-center">
          Apply for Franchise
        </h2>

        <form className="max-w-2xl mx-auto mt-10 space-y-6">
          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Full Name"
          />
          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Email Address"
          />
          <input
            className="w-full border p-3 rounded-lg"
            placeholder="City"
          />
          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Investment Budget"
          />

          <textarea
            className="w-full border p-3 rounded-lg"
            placeholder="Why do you want to join?"
          />

          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:scale-105 transition">
            Submit Application
          </button>
        </form>
      </section>

    </main>
  );
}