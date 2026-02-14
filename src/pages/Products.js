import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Card, SectionHeading } from '../components';
import { motion, useInView } from 'framer-motion';

const Products = () => {
  const gridHover = {
    scale: 1.02,
    y: -5,
  };

  const setupSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We learn about your business, current processes, and specific requirements.',
    },
    {
      step: '02',
      title: 'Configuration',
      description: 'BeeAlign is configured to match your workflows, branding, and operational needs.',
    },
    {
      step: '03',
      title: 'Launch',
      description: 'Go live with training and support to ensure a smooth transition for your team.',
    },
  ];

  const setupRef = useRef(null);
  const setupInView = useInView(setupRef, { once: true, amount: 0.35 });

  const stepVariants = {
    hidden: (custom) => ({
      opacity: 0,
      y: 18,
      scale: 0.92,
      x: custom?.fromX ?? 0,
    }),
    show: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      x: 0,
      transition: {
        delay: custom?.delay ?? 0,
        type: 'spring',
        stiffness: 260,
        damping: 16,
        bounce: 0.35,
      },
    }),
  };

  const arrowVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    show: (custom) => ({
      opacity: 1,
      scaleX: 1,
      transition: {
        delay: custom?.delay ?? 0,
        duration: 0.45,
        ease: 'easeOut',
      },
    }),
  };

  const flagshipProducts = [
    {
      title: 'Automated Timetable System',
      desc: 'AI-powered scheduling for classes, trainers, and resources. Automatically resolves conflicts and optimizes for efficiency.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Gym Management Software',
      desc: 'All-in-one solution for gyms: member management, check-ins, payments, analytics, and more—accessible from any device.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M9 3h6" />
        </svg>
      ),
    },
    {
      title: 'Smart Attendance & Access',
      desc: 'Touchless QR, biometric, or RFID-based attendance and access control for secure, seamless entry and real-time tracking.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        </svg>
      ),
    },
    {
      title: 'Custom Projects',
      desc: 'Need something unique? We build custom automation, analytics, and management solutions for any business or workflow.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a4 4 0 00-4 4v2a4 4 0 004 4m0-10a4 4 0 014 4v2a4 4 0 01-4 4m0 0v2m0-2a4 4 0 01-4-4m4 4a4 4 0 004-4" />
        </svg>
      ),
    },
  ];

  const productFeatures = [
    {
      title: 'Member Management',
      description: 'Complete member profiles, membership tracking, and automated renewal handling.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Check-in System',
      description: 'Quick check-ins via QR code, card swipe, or manual entry with real-time tracking.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Scheduling',
      description: 'Class schedules, trainer bookings, and facility reservations in one unified calendar.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Payment Tracking',
      description: 'Automated payment reminders, invoice generation, and financial reporting.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Attendance Reports',
      description: 'Detailed analytics on member activity, peak hours, and utilization trends.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Staff Management',
      description: 'Employee scheduling, role-based access, and performance tracking tools.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const useCases = [
    {
      title: 'Gyms & Fitness Centers',
      description: 'Manage memberships, track attendance, schedule classes, and handle payments all in one place.',
    },
    {
      title: 'Erp Systems',
      description: 'Member check-ins, and team management for sports organizations.',
    },
    {
      title: 'Appointment-Based Businesses',
      description: 'Appointment scheduling, package tracking, and client management.',
    },
    {
      title: 'Automation and Ai',
      description: 'Automations, tracking, and schedule management using ai and automation tools.',
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Products | BeeAlign Platform</title>
        <meta name="description" content="BeeAlign Platform - Comprehensive gym and business automation. Member management, check-ins, scheduling, and payments all in one place." />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Products | BeeAlign Platform" />
        <meta property="og:description" content="BeeAlign Platform - Comprehensive gym and business automation. Member management, check-ins, scheduling, and payments all in one place." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beealign.com/products" />
        <meta property="og:image" content="https://beealign.com/images/og-image.jpg" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Products | BeeAlign Platform" />
        <meta name="twitter:description" content="BeeAlign Platform - Comprehensive gym and business automation. Member management, check-ins, scheduling, and payments all in one place." />
        <meta name="twitter:image" content="https://beealign.com/images/og-image.jpg" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 bg-hero-gradient bg-grid overflow-hidden">
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute top-1/3 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-bee-yellow/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-bee-yellow/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-12 xl:gap-14 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white/70 backdrop-blur border border-yellow-200/80 text-yellow-800 shadow-sm ring-1 ring-black/5 mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-red-800 ring-4 ring-red-200/40"></span>
                Our Flagship Products
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bee-white leading-tight mb-4 sm:mb-6">
                BeeAlign{' '}
                <span className="text-highlight">Platform</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 text-bee-slate-700" style={{ fontWeight: 600 }}>
                A comprehensive automation and system deisgn platform designed for  every kind of buisness, startups and centers that need reliable member management, scheduling, and operational tools.
              </p>
              {/* Improved Flagship Products List UI */}
              <div className="relative mb-6">
                <div className="absolute -inset-2 sm:-inset-4 rounded-3xl bg-gradient-to-br from-yellow-50/60 via-white/80 to-yellow-100/60 blur-lg z-0 hidden sm:block"></div>
                <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 p-2 sm:p-3">
                  {flagshipProducts.map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={gridHover}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="relative bg-white/90 shadow-md hover:shadow-xl rounded-2xl px-4 py-2.5 sm:px-6 sm:py-3 border border-yellow-100 hover:border-yellow-200 cursor-pointer transition-shadow duration-200 will-change-transform transform-gpu"
                    >
                      <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-yellow-200/60"></div>
                      <div className="flex items-start gap-2.5">
                        <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-yellow-100 border border-yellow-200 text-yellow-700 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-extrabold text-yellow-700 leading-snug tracking-tight">
                            {item.title}
                          </h3>
                          <p className="text-gray-800 text-[13px] sm:text-sm mt-0.5" style={{ fontWeight: 500, lineHeight: 1.35 }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button to="/contact" size="lg" fullWidthMobile>
                  Request a Demo
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button to="/contact" variant="outline" size="lg" fullWidthMobile>
                  Talk to Sales
                </Button>
              </div>
            </div>

            {/* Product Visual */}
            <div className="relative lg:justify-self-end lg:translate-x-4 xl:translate-x-6">
              <div className="bg-white/85 backdrop-blur border border-bee-gray-300/70 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl ring-1 ring-black/5">
                {/* Mock Dashboard Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-bee-yellow/30 rounded-lg flex items-center justify-center">
                      <span className="text-bee-black font-bold text-sm sm:text-base">P</span>
                    </div>
                    <span className="text-bee-black font-semibold text-sm sm:text-base">BeeAlign Dashboard</span>
                  </div>
                  <div className="flex space-x-1.5 sm:space-x-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-bee-gray-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-bee-gray-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-bee-gray-500 rounded-full"></div>
                  </div>
                </div>

                {/* Mock Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  {[
                    { label: 'Active Members', value: '---' },
                    { label: 'Check-ins Today', value: '---' },
                    { label: 'Classes Scheduled', value: '---' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-bee-gray-200/80 border border-bee-gray-300/70 rounded-lg p-2 sm:p-3 text-center">
                      <div className="text-lg sm:text-2xl font-bold text-bee-black">{stat.value}</div>
                      <div className="text-[10px] sm:text-xs text-bee-black/80 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Mock Chart Area */}
                <div className="bg-bee-gray-200/70 border border-bee-gray-300/70 rounded-lg p-3 sm:p-4">
                  <div className="flex items-end justify-between h-24 space-x-2">
                    {[40, 65, 45, 80, 55, 70, 60].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-bee-yellow/60 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-bee-black font-medium">Mon</span>
                    <span className="text-xs text-bee-black font-medium">Sun</span>
                  </div>
                </div>
              </div>

              {/* Floating Cards - Hidden on small screens */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white/90 border border-bee-gray-300/70 rounded-lg p-2 sm:p-3 shadow-xl hidden sm:block">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-bee-black text-xs sm:text-sm font-semibold">System Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-navy dark-accent-zone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Platform Features"
            title="Everything You Need to Run Your Business"
            description="BeeAlign combines essential tools into one cohesive platform, eliminating the need for multiple disconnected systems."
            className="mb-10 sm:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {productFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={gridHover}
                transition={{ type: 'spring', stiffness: 300}}
                className="h-full will-change-transform transform-gpu"
              >
                <Card className="group h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-bee-yellow/10 border border-bee-yellow/20 rounded-lg flex items-center justify-center text-bee-yellow mb-3 sm:mb-4 group-hover:bg-bee-yellow/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-bee-black mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-bee-slate-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Simple Setup"
            title={
              <>
                Up and Running in Days,{' '}
                <span className="text-bee-highlight">Not Months</span>
              </>
            }
            className="mb-10 sm:mb-16"
          />

          <div ref={setupRef}>
            {/* Mobile/Tablet layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:hidden max-w-4xl mx-auto">
              {setupSteps.map((item) => (
                <motion.div
                  key={item.step}
                  initial="hidden"
                  animate={setupInView ? 'show' : 'hidden'}
                  variants={stepVariants}
                  custom={{ delay: item.step === '01' ? 0.05 : item.step === '02' ? 0.2 : 0.35, fromX: 0 }}
                  className="text-center"
                >
                  <div className="text-5xl sm:text-6xl font-bold text-bee-slate-800 mb-3 sm:mb-4">{item.step}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-bee-black mb-2">{item.title}</h3>
                  <p className="text-bee-slate-700 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Desktop centered layout with arrows + scroll sequence */}
            <div className="hidden md:flex items-start justify-center gap-10 lg:gap-16 max-w-6xl mx-auto">
              {setupSteps.map((item, index) => {
                const stepCustom =
                  item.step === '01'
                    ? { delay: 0.05, fromX: 220 }
                    : item.step === '02'
                      ? { delay: 0.95, fromX: 0 }
                      : { delay: 1.85, fromX: -220 };

                const arrowDelay = index === 0 ? 0.65 : 1.55;

                return (
                  <React.Fragment key={item.step}>
                    <motion.div
                      initial="hidden"
                      animate={setupInView ? 'show' : 'hidden'}
                      variants={stepVariants}
                      custom={stepCustom}
                      className="text-center max-w-sm"
                    >
                      <div className="text-6xl font-bold text-bee-slate-800 mb-4">{item.step}</div>
                      <h3 className="text-xl font-semibold text-bee-black mb-2">{item.title}</h3>
                      <p className="text-bee-slate-700 leading-relaxed">{item.description}</p>
                    </motion.div>

                    {index < setupSteps.length - 1 && (
                      <div className="pt-8" aria-hidden="true">
                        <motion.div
                          initial="hidden"
                          animate={setupInView ? 'show' : 'hidden'}
                          variants={arrowVariants}
                          custom={{ delay: arrowDelay }}
                          className="relative w-32 lg:w-44 h-0.5 bg-bee-highlight/70 rounded-full"
                          style={{ transformOrigin: 'left' }}
                        >
                          <span className="absolute right-0 -top-1.5 w-3.5 h-3.5 border-r-2 border-t-2 border-bee-highlight rotate-45"></span>
                        </motion.div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-navy dark-accent-zone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Who It's For"
            title="Built for Businesses Like Yours"
            className="mb-10 sm:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                whileHover={gridHover}
                transition={{ type: 'spring', stiffness: 300 }}
                className="h-full will-change-transform transform-gpu"
              >
                <Card
                  padding="lg"
                  hover={false}
                  className="group h-full bg-white/95 border-bee-gray-300/70 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-bee-yellow/10 rounded-lg flex items-center justify-center text-bee-yellow group-hover:bg-bee-yellow/20 transition-colors">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-bee-black mb-1 sm:mb-2">{useCase.title}</h3>
                      <p className="text-bee-slate-700 leading-relaxed text-xs sm:text-sm">{useCase.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-bee-slate-800 to-bee-darker border border-bee-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-16 card-glow">
            <div className="absolute inset-0 bg-grid opacity-20 sm:opacity-30"></div>
            <div className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-bee-yellow/10 rounded-full blur-3xl hidden sm:block"></div>

            <div className="relative text-center max-w-3xl mx-auto">
              <SectionHeading
                subtitle="Ready to See BeeAlign in Action?"
                title="Schedule a Personalized Demo"
                description="See how BeeAlign can streamline your operations. We'll walk you through the platform and show you exactly how it fits your business."
                className="mb-8 sm:mb-10"
              />
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button to="/contact" size="lg" fullWidthMobile>
                  Request Demo
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button
                  href="https://wa.me/1234567890"
                  variant="secondary"
                  size="lg"
                  fullWidthMobile
                >
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
