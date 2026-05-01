"use client";

import { useState } from "react";

/* 🔥 INLINE ICONS (NO DEPENDENCY) */
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

/* 🔥 TYPES */
type FormData = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<FormData>;

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState("");

  /* 🔥 INPUT HANDLER */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* 🔥 VALIDATION */
  const validate = (): Errors => {
    const newErrors: Errors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message required";
    } else if (form.message.length < 10) {
      newErrors.message = "Minimum 10 characters";
    }

    return newErrors;
  };

  /* 🔥 SUBMIT */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      await new Promise((res) => setTimeout(res, 1200));

      setSubmitted(true);
      setToast("Message sent successfully 🚀");

      setTimeout(() => setToast(""), 3000);

      setForm({ name: "", email: "", message: "" });

    } catch (err) {
      setToast("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 px-6">

      {/* 🔔 TOAST */}
      {toast && (
        <div className="fixed top-6 right-6 bg-black text-white px-4 py-2 rounded-lg shadow-lg animate-bounce z-50">
          {toast}
        </div>
      )}

      <div className="w-full max-w-3xl">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-2">
            Let’s build something meaningful together 🚀
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white/40 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10">

          {submitted ? (
            <SuccessState onReset={() => setSubmitted(false)} />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <InputField
                label="Full Name"
                name="name"
                value={form.name}
                error={errors.name}
                onChange={handleChange}
                icon={<UserIcon />}
              />

              <InputField
                label="Email Address"
                name="email"
                value={form.email}
                error={errors.email}
                onChange={handleChange}
                icon={<MailIcon />}
              />

              <TextareaField
                label="Message"
                name="message"
                value={form.message}
                error={errors.message}
                onChange={handleChange}
              />

              {/* BUTTON */}
              <button
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:scale-[1.03] active:scale-[0.97] transition-all"
              >
                {loading ? "Sending..." : "Send Message 🚀"}
              </button>

            </form>
          )}
        </div>

        {/* FOOTER */}
        <p className="text-center text-sm mt-6 text-gray-500">
          Taste of Traditions — Every message matters ❤️
        </p>

      </div>
    </main>
  );
}

/* 🔹 INPUT */
function InputField({ label, name, value, error, onChange, icon }: any) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-3 text-gray-400">{icon}</div>

      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={`w-full pl-10 p-3 rounded-xl border transition ${
          error ? "border-red-500" : "border-gray-300"
        } focus:ring-2 focus:ring-orange-400 outline-none`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

/* 🔹 TEXTAREA */
function TextareaField({
  label,
  name,
  value,
  error,
  onChange,
}: any) {
  return (
    <div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
        maxLength={200}
        placeholder={label}
        className={`w-full p-3 rounded-xl border ${
          error ? "border-red-500" : "border-gray-300"
        } focus:ring-2 focus:ring-orange-400 outline-none`}
      />

      <div className="flex justify-between text-xs mt-1 text-gray-400">
        <span>{error}</span>
        <span>{value.length}/200</span>
      </div>
    </div>
  );
}

/* 🔹 SUCCESS */
function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-12">
      <div className="text-6xl animate-bounce">🎉</div>

      <h2 className="text-2xl font-bold text-green-500 mt-4">
        Message Sent Successfully!
      </h2>

      <button
        onClick={onReset}
        className="mt-6 px-6 py-2 rounded-full bg-black text-white hover:scale-105 transition"
      >
        Send Another
      </button>
    </div>
  );
}