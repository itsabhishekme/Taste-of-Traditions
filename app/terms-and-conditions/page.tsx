export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* HERO SECTION */}

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

              Legal Information
            </span>
          </div>

          {/* TITLE */}

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight tracking-tight">

            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">

              Terms &
            </span>

            <br />

            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">

              Conditions
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">

            Welcome to Taste of Traditions. By accessing our website,
            placing an order, or using any of our services, you agree
            to comply with the following Terms & Conditions. Please read
            them carefully before using our platform.
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

      {/* CONTENT SECTION */}

      <section className="relative py-24">

        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="space-y-10">

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                1. Acceptance of Terms
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                By using our website, services, cloud kitchen platform,
                and online ordering systems, you acknowledge that you
                have read, understood, and agreed to these Terms &
                Conditions. If you do not agree with any part of these
                terms, please discontinue use of our services immediately.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                2. Services Offered
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                Taste of Traditions provides food preparation, online
                ordering, home delivery, catering services, recipe
                experiences, and food storytelling content. Availability
                of services may vary depending on your location and
                operational capacity.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                3. Orders & Payments
              </h2>

              <ul className="mt-6 space-y-4 text-gray-400 leading-8 list-disc pl-6">

                <li>
                  All orders are subject to availability and confirmation.
                </li>

                <li>
                  Prices may change without prior notice.
                </li>

                <li>
                  Payments must be completed through approved payment methods.
                </li>

                <li>
                  Fraudulent or unauthorized transactions may lead to order cancellation.
                </li>

                <li>
                  We reserve the right to refuse or cancel orders at our discretion.
                </li>
              </ul>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                4. Delivery Policy
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                Delivery times are estimated and may vary due to traffic,
                weather, operational delays, or high demand periods.
                While we strive for timely delivery, we cannot guarantee
                exact delivery timings under all circumstances.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                5. Refund & Cancellation
              </h2>

              <ul className="mt-6 space-y-4 text-gray-400 leading-8 list-disc pl-6">

                <li>
                  Orders once prepared may not be eligible for cancellation.
                </li>

                <li>
                  Refund requests are reviewed on a case-by-case basis.
                </li>

                <li>
                  Refunds may take several business days depending on payment providers.
                </li>

                <li>
                  Incorrect delivery information provided by customers is not our responsibility.
                </li>
              </ul>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                6. Intellectual Property
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                All content including branding, recipes, photographs,
                graphics, website design, and written materials are the
                intellectual property of Taste of Traditions unless
                otherwise stated. Unauthorized use, reproduction, or
                distribution is prohibited.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                7. User Conduct
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                Users agree not to misuse the website, attempt unauthorized
                access, distribute harmful software, or engage in activities
                that may negatively impact the operation or reputation of
                Taste of Traditions.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                8. Limitation of Liability
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                Taste of Traditions shall not be liable for indirect,
                incidental, special, or consequential damages resulting
                from the use or inability to use our services, including
                delays, technical issues, or third-party service failures.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                9. Privacy & Data
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                User information collected through our platform is handled
                according to our Privacy Policy. We are committed to
                maintaining reasonable security and protecting user data.
              </p>
            </div>

            {/* SECTION */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                10. Changes to Terms
              </h2>

              <p className="mt-5 text-gray-400 leading-8">

                We reserve the right to update or modify these Terms &
                Conditions at any time without prior notice. Continued
                use of our website or services after changes indicates
                acceptance of the updated terms.
              </p>
            </div>

            {/* CONTACT SECTION */}

            <div className="rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 to-orange-400/5 backdrop-blur-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold text-white">

                Contact Information
              </h2>

              <p className="mt-5 text-gray-300 leading-8">

                If you have any questions regarding these Terms &
                Conditions, please contact Taste of Traditions through
                our official communication channels.
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
                    Support
                  </p>

                  <p className="mt-1 font-semibold text-yellow-400">
                    support@tasteoftraditions.com
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