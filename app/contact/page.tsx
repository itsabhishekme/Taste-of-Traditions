"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.message.trim())
      newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-300 opacity-20 blur-3xl rounded-full"></div>

      <section className="relative flex items-center justify-center px-6 py-20">

        <div className="w-full max-w-2xl">

          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Contact Us ✉️
            </h1>
            <p className="mt-4 text-gray-600">
              Have questions or ideas? Let’s build something amazing together.
            </p>
          </div>

          {/* CARD */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/30 p-10 rounded-3xl shadow-2xl">

            {submitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                <h2 className="text-2xl font-bold text-green-600">
                  Message Sent Successfully!
                </h2>
                <p className="text-gray-600 mt-3">
                  We’ll get back to you very soon.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:scale-105 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full mt-2 p-3 rounded-xl border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-orange-400`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full mt-2 p-3 rounded-xl border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-orange-400`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className={`w-full mt-2 p-3 rounded-xl border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-orange-400`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:scale-[1.02] transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* 🔥 PREMIUM BOTTOM */}
      <section className="bg-gradient-to-b from-transparent to-white py-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          Taste of Traditions — We Value Every Connection
        </h3>
        <p className="mt-3 text-gray-500">
          Your message matters. Let’s build something meaningful.
        </p>
      </section>

    </main>
  );
}