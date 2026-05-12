"use client";

import { useState } from "react";

/* ======================================================
   ICONS
====================================================== */

const UserIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5z" />
    <path d="M2 22c0-4 4-7 10-7s10 3 10 7" />
  </svg>
);

const MailIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M4 4h16v16H4z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

const MessageIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15 15 0 0 1 0 20" />
    <path d="M12 2a15 15 0 0 0 0 20" />
  </svg>
);

/* ======================================================
   TYPES
====================================================== */

type FormData = {
  name: string;
  email: string;
  message: string;
};

/* ======================================================
   MAIN COMPONENT
====================================================== */

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /* ======================================================
     VALIDATION
  ====================================================== */

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      setToast("All fields are required ⚠️");

      setTimeout(() => setToast(""), 3000);

      return false;
    }

    if (!form.email.includes("@")) {
      setToast("Please enter a valid email ❌");

      setTimeout(() => setToast(""), 3000);

      return false;
    }

    return true;
  };

  /* ======================================================
     HANDLERS
  ====================================================== */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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

      setToast("Message sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setToast(""), 3000);

    } catch {
      setToast("Something went wrong ❌");

      setTimeout(() => setToast(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  /* ======================================================
     UI
  ====================================================== */

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 px-6 py-20">

      {/* BACKGROUND BLURS */}

      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-orange-300/30 rounded-full blur-3xl" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-pink-300/30 rounded-full blur-3xl" />

      {/* TOAST */}

      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-black text-white px-6 py-4 rounded-2xl shadow-2xl animate-pulse">
          {toast}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg text-orange-600 font-semibold">
            ✨ Contact Taste Of Traditions
          </div>

          <h1 className="text-5xl md:text-7xl font-black mt-8 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Let’s Connect
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mt-8 leading-relaxed">
            We’d love to hear your feedback, ideas,
            collaborations, and traditional food stories.
          </p>
        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}

          <div className="space-y-8">

            {/* INFO CARD */}

            <div className="bg-white/50 backdrop-blur-2xl rounded-[32px] p-10 shadow-2xl border border-white/40">

              <h2 className="text-4xl font-black text-gray-900">
                Contact Information
              </h2>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Reach out to us anytime. We are always excited
                to connect with food lovers and tradition seekers.
              </p>

              <div className="mt-10 space-y-6">

                <InfoCard
                  icon={<MailIcon />}
                  title="Email"
                  value="hello@tasteoftraditions.com"
                />

                <InfoCard
                  icon={<GlobeIcon />}
                  title="Website"
                  value="www.tasteoftraditions.com"
                />

                <InfoCard
                  icon={<MessageIcon />}
                  title="Support"
                  value="Available 24/7"
                />
              </div>
            </div>

            {/* SOCIAL */}

            <div className="bg-white/50 backdrop-blur-2xl rounded-[32px] p-10 shadow-2xl border border-white/40">

              <h3 className="text-3xl font-black">
                Follow Our Journey
              </h3>

              <p className="text-gray-600 mt-4">
                Explore traditional recipes, culture,
                and authentic Indian food experiences.
              </p>

              <div className="flex gap-5 mt-8">

                {[1, 2, 3].map((item) => (
                  <button
                    key={item}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl"
                  >
                    <GlobeIcon />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="bg-white/50 backdrop-blur-2xl rounded-[40px] p-10 md:p-14 shadow-2xl border border-white/40">

            {submitted ? (
              <SuccessState
                onReset={() => setSubmitted(false)}
              />
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >

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
                  label="Your Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />

                {/* BUTTON */}

                <button
                  disabled={loading}
                  className="w-full py-5 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:scale-[1.02] transition-all duration-300 shadow-2xl disabled:opacity-70"
                >
                  {loading ? "Sending Message..." : "Send Message 🚀"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FOOTER */}

        <div className="text-center mt-16 text-gray-600 text-sm">
          
        </div>
      </div>
    </main>
  );
}

/* ======================================================
   INFO CARD
====================================================== */

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/70 shadow-lg">

      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white flex items-center justify-center shadow-xl">
        {icon}
      </div>

      <div>
        <h4 className="font-bold text-lg">
          {title}
        </h4>

        <p className="text-gray-600">
          {value}
        </p>
      </div>
    </div>
  );
}

/* ======================================================
   FLOATING INPUT
====================================================== */

function FloatingInput({
  icon,
  label,
  name,
  value,
  onChange,
}: any) {
  const id = `input-${name}`;

  return (
    <div className="relative">

      <div className="absolute left-5 top-5 text-gray-400">
        {icon}
      </div>

      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder=" "
        aria-label={label}
        className="peer w-full pl-14 p-5 pt-7 rounded-2xl bg-white/80 border border-transparent focus:border-orange-400 focus:ring-4 focus:ring-orange-300 outline-none transition-all duration-300"
      />

      <label
        htmlFor={id}
        className="absolute left-14 top-3 text-sm text-gray-500 transition-all
        peer-placeholder-shown:top-5
        peer-placeholder-shown:text-base
        peer-focus:top-3
        peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}

/* ======================================================
   FLOATING TEXTAREA
====================================================== */

function FloatingTextarea({
  label,
  name,
  value,
  onChange,
}: any) {
  const id = `textarea-${name}`;

  return (
    <div className="relative">

      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={6}
        maxLength={500}
        required
        placeholder=" "
        aria-label={label}
        className="peer w-full p-5 pt-7 rounded-2xl bg-white/80 border border-transparent focus:border-orange-400 focus:ring-4 focus:ring-orange-300 outline-none transition-all duration-300 resize-none"
      />

      <label
        htmlFor={id}
        className="absolute left-5 top-3 text-sm text-gray-500 transition-all
        peer-placeholder-shown:top-5
        peer-placeholder-shown:text-base
        peer-focus:top-3
        peer-focus:text-sm"
      >
        {label}
      </label>

      <div className="text-right text-sm text-gray-500 mt-2">
        {value.length}/500
      </div>
    </div>
  );
}

/* ======================================================
   SUCCESS STATE
====================================================== */

function SuccessState({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="text-center py-16">

      <div className="text-8xl animate-bounce">
        🚀
      </div>

      <h2 className="text-4xl font-black text-green-500 mt-8">
        Message Delivered!
      </h2>

      <p className="text-gray-600 mt-4 text-lg">
        Thank you for reaching out to us.
      </p>

      <button
        onClick={onReset}
        className="mt-10 px-10 py-4 rounded-full bg-black text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
      >
        Send Another Message
      </button>
    </div>
  );
}