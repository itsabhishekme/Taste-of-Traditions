export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* ======================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* BACKGROUND GLOW */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-[-150px] left-[-100px] w-[320px] h-[320px] bg-yellow-400/10 rounded-full blur-[120px]" />

          <div className="absolute bottom-[-180px] right-[-100px] w-[320px] h-[320px] bg-orange-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28">

          {/* TAG */}

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-xl">

            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

            <span className="text-xs uppercase tracking-[0.3em] text-yellow-300 font-semibold">

              Privacy & Security
            </span>
          </div>

          {/* TITLE */}

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight tracking-tight">

            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">

              Privacy
            </span>

            <br />

            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">

              Policy
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">

            At Taste of Traditions, your privacy matters to us. This
            Privacy Policy explains how we collect, use, protect, and
            manage your information when you interact with our website,
            cloud kitchen services, catering platform, and digital
            experiences.
          </p>

          {/* UPDATED */}

          <div className="mt-10 flex flex-wrap gap-4">

            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-gray-400">
                Last Updated
              </p>

              <p className="mt-1 font-semibold text-white">
                May 2026
              </p>
            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-gray-400">
                Business
              </p>

              <p className="mt-1 font-semibold text-white">
                Taste of Traditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CONTENT SECTION
      ====================================================== */}

      <section className="relative py-24">

        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="space-y-10">

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                1. Information We Collect
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                We may collect personal information such as your name,
                email address, phone number, delivery address, payment
                details, and order history when you use our services,
                place orders, or communicate with us.
              </p>

              <ul className="mt-6 space-y-4 text-gray-400 leading-8 list-disc pl-6">

                <li>
                  Personal identification information
                </li>

                <li>
                  Delivery and billing information
                </li>

                <li>
                  Payment transaction details
                </li>

                <li>
                  Device and browser information
                </li>

                <li>
                  Website usage analytics
                </li>
              </ul>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                2. How We Use Your Information
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                The information we collect is used to improve your
                experience, process orders, provide customer support,
                personalize services, and maintain the security and
                functionality of our platform.
              </p>

              <ul className="mt-6 space-y-4 text-gray-400 leading-8 list-disc pl-6">

                <li>
                  Processing and delivering orders
                </li>

                <li>
                  Customer communication and support
                </li>

                <li>
                  Improving website performance
                </li>

                <li>
                  Sending service-related notifications
                </li>

                <li>
                  Enhancing user experience
                </li>
              </ul>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                3. Cookies & Tracking Technologies
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                We may use cookies, analytics tools, and tracking
                technologies to understand user behavior, remember
                preferences, and improve website functionality.
                Cookies help us create a smoother and more personalized
                browsing experience.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                4. Payment Security
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                Payment information is processed through trusted payment
                gateways and secure platforms. We do not store sensitive
                payment credentials such as card CVV numbers or complete
                card details on our servers.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                5. Data Protection
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                We implement reasonable technical and organizational
                security measures to protect your personal information
                from unauthorized access, misuse, disclosure, or loss.
                However, no digital platform can guarantee absolute
                security.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                6. Third-Party Services
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                Our platform may integrate with third-party services such
                as payment gateways, analytics providers, delivery
                partners, or social platforms. These third-party services
                operate under their own privacy policies and practices.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                7. User Rights
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                Depending on applicable laws, users may have the right to
                access, update, correct, or request deletion of their
                personal data. Users may also opt out of certain
                communications or marketing notifications.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                8. Children's Privacy
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                Our services are not directed toward children under the
                age of 13. We do not knowingly collect personal
                information from children without parental consent.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                9. Policy Updates
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                We may revise or update this Privacy Policy periodically.
                Any changes will be reflected on this page with an
                updated revision date. Continued use of our services
                indicates acceptance of the updated policy.
              </p>
            </div>

            {/* CONTACT SECTION */}

            <div className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-orange-400/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                Contact Us
              </h2>

              <p className="mt-5 text-gray-300 leading-8">

                If you have questions regarding this Privacy Policy or
                how your data is handled, please contact Taste of
                Traditions through our official communication channels.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <div className="px-5 py-3 rounded-2xl bg-black/30 border border-white/10">

                  <p className="text-sm text-gray-400">
                    Website
                  </p>

                  <p className="mt-1 font-semibold text-yellow-400">
                    tasteoftraditions.com
                  </p>
                </div>

                <div className="px-5 py-3 rounded-2xl bg-black/30 border border-white/10">

                  <p className="text-sm text-gray-400">
                    Email Support
                  </p>

                  <p className="mt-1 font-semibold text-yellow-400">
                    privacy@tasteoftraditions.com
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}