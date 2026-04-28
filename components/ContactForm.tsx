"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">

      {submitted ? (
        <div className="text-center py-10">
          <h2 className="text-xl font-bold text-green-600">
            Message Sent ✅
          </h2>
          <p className="text-gray-600 mt-2">
            We’ll get back to you soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-4"
        >
          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            required
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            required
            placeholder="Message"
            rows={4}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      )}

    </div>
  );
}