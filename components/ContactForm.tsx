"use client";

import { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Valid email required";
    if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative max-w-xl mx-auto">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 blur-2xl opacity-20 rounded-3xl"></div>

      <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-100">
        {submitted ? (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-green-600">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600 mt-2">
              Thank you for reaching out. We'll respond shortly.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
              }}
              className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:opacity-90"
            >
              Send Another
            </button>
          </div>
        ) : (
          <>
            {/* Heading */}
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                Contact Us
              </h2>
              <p className="text-gray-500 mt-1">
                We'd love to hear from you 💬
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <div className="flex items-center border rounded-xl px-3 focus-within:ring-2 focus-within:ring-black">
                  <User className="text-gray-400 mr-2" size={18} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 outline-none bg-transparent"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center border rounded-xl px-3 focus-within:ring-2 focus-within:ring-black">
                  <Mail className="text-gray-400 mr-2" size={18} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 outline-none bg-transparent"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <div className="flex items-start border rounded-xl px-3 focus-within:ring-2 focus-within:ring-black">
                  <MessageSquare
                    className="text-gray-400 mr-2 mt-3"
                    size={18}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 outline-none bg-transparent resize-none"
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}