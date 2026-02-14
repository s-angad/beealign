import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | BeeAlign</title>
        <meta name="description" content="BeeAlign Terms of Service - Read our terms and conditions for using our services." />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Terms of Service | BeeAlign" />
        <meta property="og:description" content="BeeAlign Terms of Service - Read our terms and conditions for using our services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beealign.com/terms" />
        <meta property="og:image" content="https://beealign.com/images/og-image.jpg" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | BeeAlign" />
        <meta name="twitter:description" content="BeeAlign Terms of Service - Read our terms and conditions for using our services." />
        <meta name="twitter:image" content="https://beealign.com/images/og-image.jpg" />
      </Helmet>

      <section className="bg-bee-darker pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-bee-white mb-6">Terms of Service</h1>

          <div className="rounded-2xl border border-bee-slate-700/50 bg-bee-navy/20 p-6 sm:p-8">
            <div className="prose prose-invert max-w-none space-y-7">
              <p className="text-bee-br text-sm sm:text-base leading-relaxed">
                Last updated: January 2026
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white mb-3">1. Acceptance of Terms</h2>
                  <p className="text-bee-b leading-relaxed">
                    By accessing and using BeeAlign&apos;s website and services, you accept and agree to be bound by
                    these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white mb-3">2. Services</h2>
                  <p className="text-bee-b leading-relaxed">
                    BeeAlign provides automation solutions, custom software development, and digital services.
                    The specific terms of any service engagement will be outlined in a separate agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white mb-3">3. Intellectual Property</h2>
                  <p className="text-bee-b leading-relaxed">
                    All content on this website, including text, graphics, logos, and software, is the property
                    of BeeAlign and is protected by intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white mb-3">4. Limitation of Liability</h2>
                  <p className="text-bee-b leading-relaxed">
                    BeeAlign shall not be liable for any indirect, incidental, special, or consequential damages
                    arising from your use of our website or services.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white mb-3">5. Changes to Terms</h2>
                  <p className="text-bee-b leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately
                    upon posting to our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-bee-white mb-3">6. Contact</h2>
                  <p className="text-bee-b leading-relaxed">
                    For questions about these Terms of Service, contact us at{' '}
                    <a href="mailto:beealign@gmail.com" className="text-bee-br hover:text-bee-yellow-light">
                      beealign@gmail.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
