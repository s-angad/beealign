import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { Button, Card } from '../components';

const WEB3FORMS_ACCESS_KEY =
  process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || 'c1c1dd78-f246-46ce-976d-27dab521c408';

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Match Home button hover (see src/components/Button.js)
  const heroHover = shouldReduceMotion
    ? undefined
    : {
        scale: 1.05,
        y: -6,
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12), 0 1.5px 8px 0 rgba(255,193,7,0.10)',
        transition: { type: 'spring', stiffness: 300 },
      };
  const heroTap = shouldReduceMotion ? undefined : { scale: 0.98 };

  // Same hover/tap for the 4 cards in the Contact Form & Info section
  const cardHover = heroHover;
  const cardTap = heroTap;

  // Slightly softer hover for the small response-time cards
  const statHover = shouldReduceMotion
    ? undefined
    : {
        scale: 1.04,
        y: -6,
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12), 0 1.5px 8px 0 rgba(255,193,7,0.10)',
        transition: { type: 'spring', stiffness: 300 },
      };
  const statTap = shouldReduceMotion ? undefined : { scale: 0.98 };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "New Contact Form Submission | BeeAlign",
        from_name: "BeeAlign Website",
        ...formData,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Form Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };


  const projectTypes = [
    'Business Automation',
    'Custom Software Development',
    'Web Application',
    'Dashboard / Analytics',
    'AI / Digital Solutions',
    'BeeAlign Platform Demo',
    'Other',
  ];

  // Used by the clickable email + Gmail compose button
  const contactEmail = 'beealign@gmail.com';
  const gmailComposeSubject = 'Hello BeeAlign , I want to an inquiry';
  const gmailComposeBody = '';
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contactEmail
  )}&su=${encodeURIComponent(gmailComposeSubject)}&body=${encodeURIComponent(gmailComposeBody)}`;

  const contactMethods = [
    {
      title: 'Email Us',
      description: 'For general inquiries and project discussions',
      value: contactEmail,
      href: `mailto:${contactEmail}`,
      webHref: gmailComposeUrl,
      valueClass: 'text-rose-600 hover:text-rose-700 active:text-rose-800',
      icon: (
        <svg className="w-6 h-6 text-bg-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },

  ];

  return (
    <div>
      <Helmet>
        <title>Contact Us | BeeAlign</title>
        <meta name="description" content="Get in touch with BeeAlign. Discuss your automation project, request a demo, or learn more about our solutions. We respond within 24 hours." />
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Contact | BeeAlign" />
          <meta property="og:description" content="Get in touch with BeeAlign. Discuss your automation project, request a demo, or learn more about our solutions. We respond within 24 hours." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://beealign.com/contact" />
          <meta property="og:image" content="https://beealign.com/images/og-image.jpg" />
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Contact | BeeAlign" />
          <meta name="twitter:description" content="Get in touch with BeeAlign. Discuss your automation project, request a demo, or learn more about our solutions. We respond within 24 hours." />
          <meta name="twitter:image" content="https://beealign.com/images/og-image.jpg" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-32 bg-hero-gradient bg-grid">
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute bottom-1/3 left-1/3 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-bee-yellow/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="max-w-3xl">
              <span className="inline-block text-bee-b font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
                Contact Us
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bee-white leading-tight mb-4 sm:mb-6">
                Let's Start a{' '}
                <span className="text-highlight">Conversation</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-bee-slate-10000 leading-relaxed">
                Have a project in mind? Want to learn more about our solutions? We're here to help. Reach out and let's discuss how we can work together.
              </p>
            </div>

            <motion.div
              whileHover={heroHover}
              whileTap={heroTap}
              className="relative transform-gpu will-change-transform"
            >
              <div className="absolute -inset-4 bg-bee-yellow/10 rounded-[2.25rem] blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 ring-1 ring-inset ring-bee-yellow/15 shadow-2xl card-glow">
                <div className="relative h-72 sm:h-80 lg:h-[420px] bg-bee-slate-800">
                  <img
                    src="/images/convo.png"
                    alt="Team collaboration"
                    className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-300 hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-bee-yellow/10" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16 items-stretch">
            {/* Contact Form */}
            <div className="lg:col-span-3 h-full">
              <motion.div
                whileHover={cardHover}
                whileTap={cardTap}
                className="h-full transform-gpu will-change-transform"
              >
                <Card padding="xl" className="h-full" hover={false}>
                  <h2 className="text-xl sm:text-2xl font-bold text-bee-br mb-2">Send Us a Message</h2>
                  <p className="text-bee-slate-700 mb-6 sm:mb-8 text-sm sm:text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-3 sm:p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-green-500 font-medium text-sm sm:text-base">Message sent successfully!</span>
                    </div>
                    <p className="text-green-400/80 text-xs sm:text-sm mt-1">We'll be in touch soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-3 sm:p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-red-500 font-medium text-sm sm:text-base">Something went wrong</span>
                    </div>
                    <p className="text-red-400/80 text-xs sm:text-sm mt-1">Please try again or contact us directly via email.</p>
                  </div>
                )}

                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <input
                    type="text"
                    name="botcheck"
                    className="hidden"
                    onChange={handleChange}
                  />
                  <input type="hidden" name="replyto" value={formData.email} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-bee-white-100 mb-1.5 sm:mb-2">
                        Your Name *
                      </label>


                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-3 bg-bee-dark/50 border border-bee-slate-700/50 rounded-lg text-bee-white placeholder-bee-slate-400 focus:outline-none focus:ring-2 focus:ring-bee-yellow focus:border-transparent transition-all text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-bee-white-100 mb-1.5 sm:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-3 bg-bee-dark/50 border border-bee-slate-700/50 rounded-lg text-bee-white placeholder-bee-slate-400 focus:outline-none focus:ring-2 focus:ring-bee-yellow focus:border-transparent transition-all text-base"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-bee-white-100 mb-1.5 sm:mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-3 bg-bee-dark/50 border border-bee-slate-700/50 rounded-lg text-bee-white placeholder-bee-slate-400 focus:outline-none focus:ring-2 focus:ring-bee-yellow focus:border-transparent transition-all text-base"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-xs sm:text-sm font-medium text-bee-white-100 mb-1.5 sm:mb-2">
                        What are you interested in? *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-3 bg-bee-dark/50 border border-bee-slate-700/50 rounded-lg text-bee-white focus:outline-none focus:ring-2 focus:ring-bee-yellow focus:border-transparent transition-all appearance-none cursor-pointer text-base"
                      >
                        <option value="" className="bg-bee-dark">Select an option</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-bee-dark">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-bee-white-100 mb-1.5 sm:mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-3 bg-bee-dark/50 border border-bee-slate-700/50 rounded-lg text-bee-white placeholder-bee-slate-400 focus:outline-none focus:ring-2 focus:ring-bee-yellow focus:border-transparent transition-all resize-none text-base"
                      placeholder="Describe your project, challenges, or questions..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </Button>
                  </form>
                </Card>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Contact Methods */}
              <div className="space-y-3 sm:space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    whileHover={cardHover}
                    whileTap={cardTap}
                    className="transform-gpu will-change-transform"
                  >
                    <Card padding="md" className="group" hover={false}>
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-bee-yellow/10 border border-bee-yellow/20 rounded-lg flex items-center justify-center text-bee-yellow group-hover:bg-bee-yellow/20 transition-colors">
                          {method.icon}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-bee-white-100 font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">{method.title}</h3>
                          <p className="text-bee-slate-500 text-xs sm:text-sm mb-1.5 sm:mb-2">{method.description}</p>
                          {method.href ? (
                            method.href.startsWith('mailto:') ? (
                              <div className="flex flex-wrap items-center gap-2">
                                <a
                                  href={method.href}
                                  aria-label={`Email: ${method.value}`}
                                  className={`${
                                    method.valueClass ?? 'text-rose-600 hover:text-rose-700 active:text-rose-800'
                                  } transition-colors text-sm sm:text-base break-all font-medium`}
                                >
                                  {method.value}
                                </a>

                                {method.webHref ? (
                                  <a
                                    href={method.webHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 py-2 rounded-lg border border-bee-navy/20 bg-bee-slate-700 hover:bg-bee-slate-50 active:bg-bee-slate-100 transition-colors text-sm sm:text-base font-semibold text-bee-navy"
                                  >
                                    Open in Gmail
                                  </a>
                                ) : null}
                              </div>
                            ) : (
                              <a
                                href={method.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${
                                  method.valueClass ??
                                  'text-bee-yellow hover:text-bee-yellow-light active:text-bee-yellow-dark'
                                } transition-colors text-sm sm:text-base break-all font-medium`}
                              >
                                {method.value}
                              </a>
                            )
                          ) : (
                            <span
                              className={`${
                                method.valueClass ?? 'text-bee-slate-600'
                              } text-sm sm:text-base break-all font-medium`}
                            >
                              {method.value}
                            </span>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.div whileHover={cardHover} whileTap={cardTap} className="transform-gpu will-change-transform">
                <Card
                  padding="lg"
                  hover={false}
                  className="bg-gradient-to-br from-bee-slate-800 to-bee-navy border-bee-slate-700/50"
                >
                  <div className="text-left">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-bee-white-100 mb-1 sm:mb-2">Prefer WhatsApp?</h3>
                    <p className="text-bee-br text-xs sm:text-sm mb-4 sm:mb-6">
                      Get quick answers to your questions. We typically respond within a few hours.
                    </p>
                    <Button
                      href="https://wa.me/7818874934"
                      variant="secondary"
                      className="w-full border border-green-500/40 hover:border-green-600"
                    >
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Chat on WhatsApp
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* Request Demo */}
              <motion.div whileHover={cardHover} whileTap={cardTap} className="transform-gpu will-change-transform">
                <Card padding="lg" hover={false}>
                  <h3 className="text-base sm:text-lg font-semibold text-bee-white-100 mb-1 sm:mb-2">Want to See BeeAlign in Action?</h3>
                  <p className="text-bee-br text-xs sm:text-sm mb-3 sm:mb-4">
                    Schedule a personalized demo and see how our platform can work for your business.
                  </p>
                  <Button to="/products" variant="outline" className="w-full">
                    Learn About BeeAlign
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-bee-darker overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-bee-yellow/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-bee-slate-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-bee-yellow/10 border border-bee-yellow/20 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase ext-bee-slate-600 ">
              <span className="w-2 h-2 rounded-full bg-bee-slate-700" />
              Response timeline
            </span>
            <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-bee-white-100 tracking-tight">
              What Happens Next?
            </h3>
            <p className="mt-4 text-base sm:text-lg text-bee-brown leading-relaxed">
              Clear expectations from the first message to the first call.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <motion.div whileHover={statHover} whileTap={statTap} className="transform-gpu will-change-transform">
              <Card padding="lg" hover={false} className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-bee-yellow/10 border border-bee-yellow/20 flex items-center justify-center text-bee-yellow">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M5 11h14M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-bee-navy">24</div>
                <div className="mt-1 font-semibold text-bee-navy">Hours</div>
                <div className="mt-1 text-sm text-bee-slate-600">Typical email response time</div>
              </Card>
            </motion.div>

            <motion.div whileHover={statHover} whileTap={statTap} className="transform-gpu will-change-transform">
              <Card padding="lg" hover={false} className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-bee-yellow/10 border border-bee-yellow/20 flex items-center justify-center text-bee-yellow">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-bee-navy">30</div>
                <div className="mt-1 font-semibold text-bee-navy">Minutes</div>
                <div className="mt-1 text-sm text-bee-slate-600">Initial consultation call</div>
              </Card>
            </motion.div>

            <motion.div whileHover={statHover} whileTap={statTap} className="transform-gpu will-change-transform">
              <Card padding="lg" hover={false} className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-bee-yellow/10 border border-bee-yellow/20 flex items-center justify-center text-bee-yellow">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2v2c0 1.105 1.343 2 3 2s3 .895 3 2v2c0 1.105-1.343 2-3 2m0-14V4m0 16v-2" />
                  </svg>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-bee-navy">Free</div>
                <div className="mt-1 font-semibold text-bee-navy">No pressure</div>
                <div className="mt-1 text-sm text-bee-slate-600">No-obligation project discussion</div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
