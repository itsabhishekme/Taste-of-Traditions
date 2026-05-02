"use client";

import { useState } from "react";

/* ---------------- ICONS ---------------- */
const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5z" />
    <path d="M2 22c0-4 4-7 10-7s10 3 10 7" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16v16H4z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

/* ---------------- TYPES ---------------- */
type FormData = {
  name: string;
  email: string;
  message: string;
};

/* ---------------- MAIN ---------------- */
export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      setToast("All fields required ⚠️");
      return false;
    }

    if (!form.email.includes("@")) {
      setToast("Invalid email ❌");
      return false;
    }

    return true;
  };

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setSubmitted(true);
      setToast("Message sent 🚀");

      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setToast(""), 3000);
    } catch {
      setToast("Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 px-6 py-16 relative overflow-hidden">

      {/* TOAST */}
      {toast && (
        <div className="fixed top-6 right-6 bg-black text-white px-5 py-3 rounded-xl shadow-xl z-50">
          {toast}
        </div>
      )}

      <div className="w-full max-w-5xl">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            We’d love to hear your thoughts ✨
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white/40 backdrop-blur-2xl rounded-3xl shadow-2xl p-12">

          {submitted ? (
            <SuccessState onReset={() => setSubmitted(false)} />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">

              <FloatingInput
                icon={<UserIcon />}
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />

              <FloatingInput
                icon={<MailIcon />}
                label="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
              />

              <FloatingTextarea
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
              />

              <button
                disabled={loading}
                className="w-full py-4 rounded-2xl font-semibold text-white text-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:scale-[1.02] transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          )}
        </div>

        {/* FOOTER */}
        <p className="text-center text-sm mt-10 text-gray-600">
          Taste of Traditions — Crafted with ❤️
        </p>
      </div>
    </main>
  );
}

/* ---------------- INPUT ---------------- */
function FloatingInput({ icon, label, name, value, onChange }: any) {
  const id = `input-${name}`;

  return (
    <div className="relative">
      <div className="absolute left-4 top-4 text-gray-400">{icon}</div>

      <input
        id={id}                         // ✅ FIX
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder=" "                 // ✅ required for floating label
        aria-label={label}              // ✅ accessibility
        className="peer w-full pl-12 p-4 pt-6 rounded-xl bg-white/70 border border-transparent focus:border-orange-400 focus:ring-2 focus:ring-orange-300 outline-none transition"
      />

      <label
        htmlFor={id}                   // ✅ FIX
        className="absolute left-12 top-2 text-sm text-gray-500 transition-all 
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
        peer-focus:top-2 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}

/* ---------------- TEXTAREA ---------------- */
function FloatingTextarea({ label, name, value, onChange }: any) {
  const id = `textarea-${name}`;

  return (
    <div className="relative">
      <textarea
        id={id}                        // ✅ FIX
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
        maxLength={300}
        required
        placeholder="Your Message..." // ✅ required for axe
        aria-label={label}
        className="w-full p-4 rounded-xl bg-white/70 border border-transparent focus:border-orange-400 focus:ring-2 focus:ring-orange-300 outline-none transition"
      />

      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <div className="text-right text-sm text-gray-500 mt-1">
        {value.length}/300
      </div>
    </div>
  );
}

/* ---------------- SUCCESS ---------------- */
function SuccessState({ onReset }: any) {
  return (
    <div className="text-center py-16">
      <div className="text-7xl">🚀</div>

      <h2 className="text-3xl font-bold text-green-500 mt-6">
        Message Delivered!
      </h2>

      <button
        onClick={onReset}
        className="mt-8 px-8 py-3 rounded-full bg-black text-white hover:scale-105 transition"
      >
        Send Another
      </button>
    </div>
  );
}