import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Button, Card, SectionHeading, HeroBeeSection } from '../components';
import AnimationWrappers from '../components/Animations/AnimationWrappers';
import founder1 from '../assets/founder1.jpg';
import founder2 from '../assets/founder2.jpg';


// Icons for solution areas
const Icons = {
  Automation: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Product: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  Code: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  AI: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Custom: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  Arrow: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
};

// Avatar-style doodle icons (male/female)
const Doodles = {
  Male: ({ className = '' }) => (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 48c2.5-8 9-12 14-12s11.5 4 14 12" />
      <path d="M32 34c6 0 11-5 11-11S38 12 32 12 21 17 21 23s5 11 11 11z" />
      <path d="M24 20c2-2 5-3 8-3 3.2 0 6.1 1.2 8 3" />
    </svg>
  ),
  Female: ({ className = '' }) => (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 48c2.2-9 8.8-13 16-13s13.8 4 16 13" />
      <path d="M32 33c6 0 11-5 11-11S38 11 32 11 21 16 21 22s5 11 11 11z" />
      <path d="M22 23c1.5-6 6-10 10-10s8.5 4 10 10" />
      <path d="M22 23c2.5 2.5 6.2 4 10 4s7.5-1.5 10-4" />
    </svg>
  ),
};

const Home = () => {
  const testimonials = useMemo(
    () => [
      {
        name: 'Graphic Era',
        role: 'Operations Lead',
        company: 'Graphic Era',
        rating: 5,
        quote:
          'BeeAlign built our timetable software and smart scheduler. Timetables, clashes, and updates are now streamlined, accurate, and easy to manage across teams.',
      },
      {
        name: 'Neha Sharma',
        role: 'Founder',
        company: 'Clinic Network',
        rating: 4,
        quote:
          'Appointments, reminders, and reporting are finally reliable. The dashboard is clean, and our staff training time dropped a lot.',
      },
      {
        name: 'Liam',
        role: 'General Manager',
        company: 'PulseFit Gym (Dubai)',
        rating: 4.5,
        quote:
          'We partnered with BeeAlign for our gym automation software—memberships, check-ins, billing, and attendance. The rollout was smooth and the system is fast, reliable, and easy for staff to use.',
      },
      {
        name: 'Isha Verma',
        role: 'Director',
        company: 'Services Business',
        rating: 4,
        quote:
          'The automation reduced our daily manual work dramatically. What impressed me most was the clarity in communication and handover.',
      },
    ],
    []
  );

  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [testimonialDirection, setTestimonialDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const founderCardMotion = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        whileHover: {},
        whileTap: {},
        transition: {},
      };
    }

    return {
      whileHover: {
        scale: 1.05,
        y: -6,
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12), 0 1.5px 8px 0 rgba(255,193,7,0.10)',
      },
      whileTap: { scale: 0.99 },
      transition: { type: 'spring', stiffness: 300 },
    };
  }, [shouldReduceMotion]);

  const founderAvatarMotion = useMemo(() => {
    if (shouldReduceMotion) return null;
    return {
      animate: { y: [0, -6, 0] },
      transition: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
    };
  }, [shouldReduceMotion]);

  const testimonialCount = testimonials.length;

  const nextTestimonial = () => {
    setTestimonialDirection(1);
    setActiveTestimonialIndex((prev) => (prev + 1) % testimonialCount);
  };

  const prevTestimonial = () => {
    setTestimonialDirection(-1);
    setActiveTestimonialIndex((prev) => (prev - 1 + testimonialCount) % testimonialCount);
  };

  // Assign a unique accent color to each testimonial card
  const testimonialColors = [
    {
      ring: 'ring-blue-500/20',
      border: 'border-blue-300/70',
      glow: 'bg-blue-400/10',
      star: 'text-blue-500',
      name: 'text-blue-950',
      company: 'text-blue-700',
    },
    {
      ring: 'ring-emerald-500/20',
      border: 'border-emerald-300/70',
      glow: 'bg-emerald-400/10',
      star: 'text-emerald-500',
      name: 'text-emerald-950',
      company: 'text-emerald-700',
    },
    {
      ring: 'ring-violet-500/20',
      border: 'border-violet-300/70',
      glow: 'bg-violet-400/10',
      star: 'text-violet-500',
      name: 'text-violet-950',
      company: 'text-violet-700',
    },
    {
      ring: 'ring-rose-500/20',
      border: 'border-rose-300/70',
      glow: 'bg-rose-400/10',
      star: 'text-rose-500',
      name: 'text-rose-950',
      company: 'text-rose-700',
    },
  ];

  const EASE_PREMIUM = [0.22, 1.15, 0.32, 1];
  const DURATION = shouldReduceMotion ? 0 : 0.42;

  const getTestimonialByOffset = (offset) => {
    const index = (activeTestimonialIndex + offset) % testimonialCount;
    const colorIdx = index % testimonialColors.length;
    const avatar = index % 2 === 0 ? 'male' : 'female';
    return { index, data: testimonials[index], color: testimonialColors[colorIdx], avatar };
  };
  const getAvatarIcon = (avatar) => (avatar === 'female' ? Doodles.Female : Doodles.Male);

  const renderRatingStars = (ratingValue, starColorClass, keyPrefix) => {
    const safeRating = Math.max(0, Math.min(5, Number(ratingValue) || 0));

    const StarSvg = ({ className, style }) => (
      <svg
        className={className}
        style={style}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );

    return Array.from({ length: 5 }).map((_, starIndex) => {
      const starNumber = starIndex + 1;
      const isFull = safeRating >= starNumber;
      const isHalf = !isFull && safeRating >= starNumber - 0.5;

      if (isFull) {
        return (
          <StarSvg
            key={`${keyPrefix}-star-${starIndex}`}
            className={`w-4 h-4 ${starColorClass} drop-shadow-[0_1px_2px_rgba(15,23,42,0.12)]`}
          />
        );
      }

      if (isHalf) {
        return (
          <span key={`${keyPrefix}-star-${starIndex}`} className="relative inline-block w-4 h-4">
            <StarSvg className="w-4 h-4 text-bee-slate-300" />
            <StarSvg
              className={`absolute inset-0 w-4 h-4 ${starColorClass} drop-shadow-[0_1px_2px_rgba(15,23,42,0.12)]`}
              style={{ clipPath: 'inset(0 50% 0 0)' }}
            />
          </span>
        );
      }

      return (
        <StarSvg
          key={`${keyPrefix}-star-${starIndex}`}
          className="w-4 h-4 text-bee-slate-300"
        />
      );
    });
  };

  const stackStyleByPos = (pos) => {
    if (pos === 1) return { y: 16, scale: 0.98, opacity: 0.84, rotate: -1.4 };
    if (pos === 2) return { y: 32, scale: 0.96, opacity: 0.68, rotate: 1.8 };
    return { y: 0, scale: 1, opacity: 1, rotate: 0 };
  };

  const activeCardVariants = {
    initial: (direction) => ({
      x: shouldReduceMotion ? 0 : direction * 48,
      y: 0,
      opacity: shouldReduceMotion ? 1 : 0,
      scale: shouldReduceMotion ? 1.05 : 1.02,
      rotate: shouldReduceMotion ? 0 : direction * 0.6,
    }),
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1.05,
      rotate: 0,
      transition: {
        duration: DURATION,
        ease: EASE_PREMIUM,
      },
    },
    exit: (direction) => ({
      x: shouldReduceMotion ? 0 : direction * -56,
      y: shouldReduceMotion ? 0 : 6,
      opacity: 0,
      scale: 0.98,
      rotate: shouldReduceMotion ? 0 : direction * -0.8,
      transition: {
        duration: DURATION,
        ease: EASE_PREMIUM,
      },
    }),
  };

  const solutionAreas = [
    {
      icon: Icons.Automation,
      title: 'Business Automation',
      description: 'Streamline your operations with intelligent automation for gyms, clinics, appointments, and attendance systems.',
      link: '/solutions',
      image: '/images/home-solutions-automation.jpg',
    },
    {
      icon: Icons.Product,
      title: 'Product Solutions',
      description: 'Ready-to-deploy platforms like BeeAlign that transform how businesses manage their daily operations.',
      link: '/products',
      image: '/images/home-solutions-products.jpg',
    },
    {
      icon: Icons.Code,
      title: 'Custom Development',
      description: 'Tailored web applications, dashboards, and internal tools built specifically for your business needs.',
      link: '/services',
      image: '/images/home-solutions-custom.jpg',
    },
    {
      icon: Icons.AI,
      title: 'AI & Digital Solutions',
      description: 'Modern digital presence with AI-powered content, social media management, and automation-driven marketing.',
      link: '/solutions',
      image: '/images/home-solutions-ai.jpg',
    },
  ];

  return (
    <div>
      <Helmet>
        <title>BeeAlign | Intelligent Business Automation Solutions</title>
        <meta name="description" content="BeeAlign builds intelligent automation solutions for gyms, clinics, and businesses. Custom software, AI solutions, and ready-to-deploy platforms that transform operations." />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="BeeAlign | Intelligent Business Automation Solutions" />
        <meta property="og:description" content="BeeAlign builds intelligent automation solutions for gyms, clinics, and businesses. Custom software, AI solutions, and ready-to-deploy platforms that transform operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beealign.com/" />
        <meta property="og:image" content="https://beealign.com/images/og-image.jpg" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BeeAlign | Intelligent Business Automation Solutions" />
        <meta name="twitter:description" content="BeeAlign builds intelligent automation solutions for gyms, clinics, and businesses. Custom software, AI solutions, and ready-to-deploy platforms that transform operations." />
        <meta name="twitter:image" content="https://beealign.com/images/og-image.jpg" />
      </Helmet>

      <HeroBeeSection />

      {/* Subtle dark-accent separator (light-first hierarchy) */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-bee-slate-800/20 to-transparent" aria-hidden="true" />

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-dark dark-accent-zone section-fade-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Content */}
            <AnimationWrappers.SlideInLeft delay={0.2}>
              <div>
                <SectionHeading
                  subtitle="Who We Are"
                  title="More Than Just Development"
                  align="left"
                  className="mb-6"
                />
                <div className="space-y-4 text-bee-slate-400 text-base sm:text-lg leading-relaxed">
                  <p style={{color: "rgb(151, 112, 34)"}}>
                    BeeAlign isn't your typical tech company. We're engineers, problem-solvers, and automation specialists focused on building solutions that actually work in the real world.
                  </p>
                  <p style={{color: "rgb(151, 112, 34)"}}>
                    Whether it's automation, management, appointment system, or creating custom business tools—we approach every project with the same commitment to quality and reliability.
                  </p>
                </div>
                <div className="mt-6 sm:mt-8">
                  <Button to="/how-we-work" variant="secondary" fullWidthMobile>
                    Learn How We Work
                    <Icons.Arrow />
                  </Button>
                </div>
              </div>
            </AnimationWrappers.SlideInLeft>

            {/* Visual Element */}
            <AnimationWrappers.SlideInRight delay={0.2}>
              <div className="relative img-bouncey">
                <motion.img
                  src="/images/h1.jpg"
                  alt="BeeAlign team collaborating on automation solutions"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-full rounded-xl sm:rounded-2xl shadow-2xl object-cover h-80 sm:h-96 card-glow"
                  role="img"
                  aria-label="BeeAlign team collaborating on automation solutions"
                />
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-bee-yellow/10 rounded-xl -z-10 hidden sm:block"></div>
              </div>
            </AnimationWrappers.SlideInRight>
          </div>
        </div>
      </section>

      {/* Solution Areas Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-light section-fade-top section-fade-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Build"
            title="Solutions That Drive Results"
            description="From automation platforms to custom software, we deliver technology that transforms how your business operates."
            className="mb-10 sm:mb-16"
          />

          <AnimationWrappers.StaggerContainer delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {solutionAreas.map((solution, index) => (
                <AnimationWrappers.StaggerItem key={index}>
                  <Link to={solution.link}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Card className="h-full group cursor-pointer overflow-hidden bg-white border border-bee-navy/30">
                        <div className="relative h-48 mb-4 -mx-6 -mt-6 mb-4 overflow-hidden rounded-lg">
                          <img
                            src={solution.image}
                            alt={solution.title + ' - BeeAlign business solution'}
                            className="w-full h-full object-cover img-bounce"
                            aria-label={solution.title + ' - BeeAlign business solution'}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
                        </div>
                        <div
                          className="text-bee-yellow mb-4 group-hover:text-bee-yellow-dark transition-colors"
                        >
                          <solution.icon />
                        </div>
                        <h3 className="text-heading text-lg font-bold mb-3 group-hover:text-bee-yellow-dark transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-secondary text-sm leading-relaxed">
                          {solution.description}
                        </p>
                      </Card>
                    </motion.div>
                  </Link>
                </AnimationWrappers.StaggerItem>
              ))}
            </div>
          </AnimationWrappers.StaggerContainer>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-dark dark-accent-zone section-fade-top section-fade-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-slate-800/60 via-slate-900/85 to-slate-950 border border-slate-700/70 ring-1 ring-inset ring-yellow-400/15 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-16 shadow-2xl"
          >
            {/* Background Pattern - Reduced on mobile */}
            <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_28%_18%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(900px_520px_at_85%_35%,rgba(255,215,0,0.06),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-grid opacity-10 sm:opacity-20 pointer-events-none"></div>
            <motion.div
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-bee-yellow/10 rounded-full blur-3xl hidden sm:block"
            ></motion.div>

            <div className="relative grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <AnimationWrappers.SlideInLeft>
                <div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="inline-block text-yellow-400 font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4"
                  >
                    Featured Product
                  </motion.span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                    BeeAlign Platform
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    Our flagship automation platform designed for gyms and businesses. Manage memberships, track attendance, handle appointments, and streamline operations, All in one place.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button to="/products" size="lg" fullWidthMobile>
                      Learn More
                      <Icons.Arrow />
                    </Button>
                    <Button to="/contact" variant="outline" size="lg" fullWidthMobile>
                      Request Demo
                    </Button>
                  </div>
                </div>
              </AnimationWrappers.SlideInLeft>

              <AnimationWrappers.SlideInRight>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <motion.img
                    src="/images/ai.jpg"
                    alt="Our team working"
                    className="w-full rounded-xl sm:rounded-2xl shadow-xl object-cover h-80 sm:h-96"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                </motion.div>
              </AnimationWrappers.SlideInRight>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics & Metrics Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-light section-fade-top section-fade-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Performance"
            title="Data-Driven Results"
            description="Real metrics and analytics that show the impact of our automation solutions."
            className="mb-10 sm:mb-16"
          />

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Chart 1 */}
            <AnimationWrappers.SlideInRight delay={0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.05, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
                whileTap={{ scale: 0.99 }}
                className="group bg-gradient-to-br from-white via-slate-50 to-amber-50 border border-bee-slate-200/80 hover:border-bee-yellow/45 ring-1 ring-inset ring-bee-yellow/15 hover:ring-bee-yellow/25 rounded-xl overflow-hidden card-glow transform-gpu will-change-transform transition-colors"
              >
                <img
                  src="/images/performance.jpg"
                  alt="Business Metrics"
                  className="w-full h-64 object-cover transform-gpu will-change-transform transition-transform duration-300 group-hover:scale-[1.04]"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-heading mb-2">Performance Growth</h3>
                  <p className="text-secondary text-sm">Average improvement across all metrics</p>
                </div>
              </motion.div>
            </AnimationWrappers.SlideInRight>

            {/* Metrics Visualization */}
            <AnimationWrappers.SlideInRight delay={0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.05, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
                whileTap={{ scale: 0.99 }}
                className="group bg-gradient-to-br from-white via-slate-50 to-amber-50 border border-bee-slate-200/80 hover:border-bee-yellow/45 ring-1 ring-inset ring-bee-yellow/15 hover:ring-bee-yellow/25 rounded-xl overflow-hidden card-glow transform-gpu will-change-transform transition-colors"
              >
                <img
                  src="/images/systemhealth.png"
                  alt="Business Metrics"
                  className="w-full h-64 object-cover transform-gpu will-change-transform transition-transform duration-300 group-hover:scale-[1.04]"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-heading mb-2">System Health</h3>
                  <p className="text-secondary text-sm">Real-time monitoring and optimization</p>
                </div>
              </motion.div>
            </AnimationWrappers.SlideInRight>

            {/* Metrics Image */}
            <AnimationWrappers.SlideInRight delay={0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.05, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
                whileTap={{ scale: 0.99 }}
                className="group bg-gradient-to-br from-white via-slate-50 to-amber-50 border border-bee-slate-200/80 hover:border-bee-yellow/45 ring-1 ring-inset ring-bee-yellow/15 hover:ring-bee-yellow/25 rounded-xl overflow-hidden card-glow transform-gpu will-change-transform transition-colors"
              >
                <img
                  src="/images/businessintelligence.png"
                  alt="Business Metrics"
                  className="w-full h-64 object-cover transform-gpu will-change-transform transition-transform duration-300 group-hover:scale-[1.04]"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-heading mb-2">Business Intelligence</h3>
                  <p className="text-secondary text-sm">Actionable insights for growth</p>
                </div>
              </motion.div>
            </AnimationWrappers.SlideInRight>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '95%', label: 'Time Savings' },
              { value: '10x', label: 'Faster Processing' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-white via-slate-50 to-amber-50 rounded-lg border border-bee-slate-200/80 ring-1 ring-inset ring-bee-yellow/10"
              >
                <div className="text-2xl sm:text-3xl font-bold text-bee-yellow mb-2">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Preview Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-dark dark-accent-zone section-fade-top section-fade-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Work"
            title="Real Solutions We've Built"
            description="From our flagship product to internal automation projects and digital content."
            className="mb-8 sm:mb-12"
          />

          <AnimationWrappers.StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {/* BeeAlign Product */}
              <AnimationWrappers.StaggerItem >
                <Link to="/work#portfolio">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}

                  >
                    <Card hover={false} className="h-full group cursor-pointer overflow-hidden card-dark work-card-variant--product ring-1 ring-inset ring-bee-yellow/20 hover:ring-bee-yellow/35 transition" >
                      <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden rounded-lg" >
                        <img
                          src="/images/platform.jpeg"
                          alt="BeeAlign Platform"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 mb-4"

                      >
                        <span className="px-2 py-1 bg-bee-yellow/10 border border-bee-yellow/20 rounded text-xs text-bee-yellow font-medium" >
                          Product
                        </span>
                      </motion.div>
                      <h3 className="text-lg font-semibold text-bee-white-100 mb-2 group-hover:text-bee-yellow transition-colors" >
                        BeeAlign Platform
                      </h3>
                      <p className="text-bee-slate-400 text-sm leading-relaxed">
                        Gym and business automation platform handling memberships, check-ins, and scheduling.
                      </p>
                    </Card>
                  </motion.div>
                </Link>
              </AnimationWrappers.StaggerItem>

              {/* Internal Projects */}
              <AnimationWrappers.StaggerItem>
                <Link to="/work#portfolio">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card hover={false} className="h-full group cursor-pointer overflow-hidden card-dark work-card-variant--internal ring-1 ring-inset ring-bee-yellow/20 hover:ring-bee-yellow/35 transition">
                      <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden rounded-lg">
                        <img
                          src="/images/ai-work.jpg"
                          alt="Automation Projects"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 mb-4"
                      >
                        <span className="px-2 py-1 bg-bee-slate-700/40 border border-bee-slate-700 rounded text-xs text-bee-slate-400">
                          Internal Work
                        </span>
                      </motion.div>
                      <h3 className="text-lg font-semibold text-bee-white-100 mb-2 group-hover:text-bee-yellow transition-colors">
                        Automation Projects
                      </h3>
                      <p className="text-bee-slate-400 text-sm leading-relaxed">
                        Clinic appointments, attendance systems, and workflow automation frameworks.
                      </p>
                    </Card>
                  </motion.div>
                </Link>
              </AnimationWrappers.StaggerItem>

              {/* Digital & AI */}
              <AnimationWrappers.StaggerItem>
                <Link to="/work#portfolio">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card hover={false} className="h-full group cursor-pointer overflow-hidden card-dark work-card-variant--digital ring-1 ring-inset ring-bee-yellow/20 hover:ring-bee-yellow/35 transition">
                      <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden rounded-lg">
                        <img
                          src="/images/auto.png"
                          alt="Digital & AI Work"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 mb-4"
                      >
                        <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400">
                          Digital
                        </span>
                      </motion.div>
                      <h3 className="text-lg font-semibold text-bee-white-100 mb-2 group-hover:text-bee-yellow transition-colors">
                        Digital & AI Work
                      </h3>
                      <p className="text-bee-slate-400 text-sm leading-relaxed">
                        AI videos, social media content, and automation-driven creative workflows.
                      </p>
                    </Card>
                  </motion.div>
                </Link>
              </AnimationWrappers.StaggerItem>
            </div>
          </AnimationWrappers.StaggerContainer>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button to="/work#portfolio" variant="outline" fullWidthMobile>
              View All Work
              <Icons.Arrow />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-light section-fade-top section-fade-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Testimonials"
            title="What Clients Say"
            description="A few words from teams who trusted us with automation, dashboards, and custom builds."
            className="mb-10 sm:mb-12"
          />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-xl">
              <div className="space-y-4 text-secondary text-base sm:text-lg leading-relaxed">
                <p>
                  We work in milestones, communicate clearly, and focus on shipping solutions that actually run in production.
                </p>
                <p>
                  Tap the card to cycle testimonials, or use the arrows to browse.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-bee-slate-200 bg-white hover:bg-bee-slate-50 active:bg-bee-slate-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-bee-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-bee-slate-200 bg-white hover:bg-bee-slate-50 active:bg-bee-slate-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-bee-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="ml-2 flex items-center gap-2" aria-hidden="true">
                  {testimonials.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2 rounded-full transition-all duration-200 ${i === activeTestimonialIndex ? 'w-6 bg-bee-yellow' : 'w-2 bg-bee-slate-300'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-full max-w-xl h-[340px] sm:h-[360px]">
                {/* Back cards (stable stack, no layout shift) */}
                {[2, 1].map((pos) => {
                  const { index, data, color, avatar } = getTestimonialByOffset(pos);
                  const stackStyle = stackStyleByPos(pos);
                  const AvatarIcon = getAvatarIcon(avatar);
                  return (
                    <motion.div
                      key={`back-${index}`}
                      animate={shouldReduceMotion ? {} : { y: stackStyle.y, scale: stackStyle.scale, opacity: stackStyle.opacity, rotate: stackStyle.rotate }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: EASE_PREMIUM }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 30 - pos,
                        pointerEvents: 'none',
                        willChange: 'transform',
                      }}
                      className="transform-gpu"
                    >
                      <div
                        className={`relative h-full rounded-2xl bg-white/70 backdrop-blur-md border ${color.border} ${color.ring} ring-1 overflow-hidden shadow-[0_12px_30px_rgba(15,23,42,0.10)]`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-transparent pointer-events-none" />
                        <div className={`absolute -inset-2 rounded-2xl ${color.glow} blur-xl pointer-events-none`} />

                        <div className="p-6 pb-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-11 h-11 rounded-2xl border ${color.border} ${color.glow} flex items-center justify-center font-bold text-sm ${color.name}`}>
                                <AvatarIcon className="w-6 h-6" />
                              </div>
                              <div>
                                <div className={`font-extrabold leading-tight ${color.name}`}>{data.name}</div>
                                <div className="text-bee-slate-600 text-sm">
                                  {data.role}
                                  <span className="mx-2 text-bee-slate-300">•</span>
                                  <span className={`font-semibold ${color.company}`}>{data.company}</span>
                                </div>
                              </div>
                            </div>

                            <div className="hidden sm:flex flex-col items-end">
                              <span className="text-bee-slate-500 text-xs font-semibold uppercase tracking-wider">
                                Verified
                              </span>
                              <span className="text-bee-slate-400 text-xs">Client</span>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center gap-1.5" aria-hidden="true">
                            {renderRatingStars(data.rating ?? 5, color.star, `back-${index}`)}
                          </div>

                          <p
                            className="mt-4 text-bee-slate-800/95 text-base sm:text-lg leading-relaxed"
                            style={{
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            <span className="text-bee-slate-400 font-extrabold mr-1">“</span>
                            {data.quote}
                          </p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-bee-slate-200/80 flex items-center justify-between gap-4 px-6 pb-4">
                          <div>
                            <div className={`font-bold text-base ${color.name}`}>{data.name}</div>
                            <div className="text-bee-slate-600 text-sm">{data.role}</div>
                          </div>
                          <div className={`text-sm font-semibold ${color.company}`}>{data.company}</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Active card (AnimatePresence handles exit-left + enter-right) */}
                <AnimatePresence initial={false} custom={testimonialDirection}>
                  {(() => {
                    const { index, data, color, avatar } = getTestimonialByOffset(0);
                    const AvatarIcon = getAvatarIcon(avatar);
                    return (
                      <motion.div
                        key={`active-${index}`}
                        custom={testimonialDirection}
                        variants={activeCardVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          zIndex: 30,
                          willChange: 'transform',
                        }}
                        className="transform-gpu"
                      >
                        <motion.button
                          type="button"
                          onClick={nextTestimonial}
                          aria-label="Next testimonial"
                          whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                          className="w-full h-full text-left touch-manipulation [-webkit-tap-highlight-color:transparent] outline-none focus:outline-none focus:ring-0 active:outline-none focus-visible:outline-none focus-visible:ring-0"
                          style={{ background: 'transparent', border: 0, padding: 0, cursor: 'pointer' }}
                        >
                          <div
                            className={`relative h-full rounded-2xl bg-white/85 backdrop-blur-md border ${color.border} ${color.ring} ring-1 overflow-hidden shadow-[0_18px_44px_rgba(15,23,42,0.14)]`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-transparent pointer-events-none" />
                            <div className={`absolute -inset-2 rounded-2xl ${color.glow} blur-2xl pointer-events-none`} />

                            <div className="p-6 pb-4">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                  <div className={`w-12 h-12 rounded-2xl border ${color.border} ${color.glow} flex items-center justify-center font-extrabold text-sm ${color.name}`}>
                                    <AvatarIcon className="w-7 h-7" />
                                  </div>
                                  <div>
                                    <div className={`font-extrabold text-base sm:text-lg leading-tight ${color.name}`}>{data.name}</div>
                                    <div className="text-bee-slate-600 text-sm">
                                      {data.role}
                                      <span className="mx-2 text-bee-slate-300">•</span>
                                      <span className={`font-semibold ${color.company}`}>{data.company}</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="hidden sm:flex flex-col items-end">
                                  <span className="text-bee-slate-500 text-xs font-semibold uppercase tracking-wider">
                                    Verified
                                  </span>
                                  <span className="text-bee-slate-400 text-xs">Client</span>
                                </div>
                              </div>

                              <div className="mt-4 flex items-center gap-1.5" aria-hidden="true">
                                {renderRatingStars(data.rating ?? 5, color.star, `active-${index}`)}
                              </div>

                              <p className="mt-4 text-bee-slate-800 text-base sm:text-lg leading-relaxed">
                                <span className="text-bee-slate-400 font-extrabold mr-1">“</span>
                                {data.quote}
                              </p>
                            </div>
                          </div>
                        </motion.button>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>

              <div
                className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-bee-yellow/10 rounded-2xl hidden sm:block"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-dark dark-accent-zone section-fade-top section-fade-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="The Team"
            title="Meet the Founders"
            description="The people behind BeeAlign, committed to building technology that works."
            className="mb-10 sm:mb-14"
          />

          <AnimationWrappers.StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* Founder 1 */}
              <AnimationWrappers.StaggerItem>
                <motion.div
                  whileHover={founderCardMotion.whileHover}
                  whileTap={founderCardMotion.whileTap}
                  transition={founderCardMotion.transition}
                  style={{ willChange: 'transform' }}
                  className="group bg-gradient-to-br from-bee-slate-800/50 to-bee-navy/30 border border-bee-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-bee-yellow/30 transition-colors duration-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      {...(founderAvatarMotion || {})}
                      style={{ willChange: 'transform' }}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-bee-slate-600/50 border-2 border-bee-slate-600/50 overflow-hidden mb-5 group-hover:border-bee-yellow/40 transition-colors"
                    >
                      <img src={founder1} alt="Shvang Jagwan" className="w-full h-full object-cover img-bounce" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-bee-white mb-1">
                      Shvang Jagwan
                    </h3>
                    <p className="text-bee-b font-medium text-sm sm:text-base mb-3">
                      Co-Founder & Engineering
                    </p>
                    <p className="text-bee-w text-sm sm:text-base leading-relaxed max-w-xs">
                      Focused on building scalable automation solutions and turning complex business problems into elegant software.
                    </p>
                  </div>
                </motion.div>
              </AnimationWrappers.StaggerItem>

              {/* Founder 2 */}
              <AnimationWrappers.StaggerItem>
                <motion.div
                  whileHover={founderCardMotion.whileHover}
                  whileTap={founderCardMotion.whileTap}
                  transition={founderCardMotion.transition}
                  style={{ willChange: 'transform' }}
                  className="group bg-gradient-to-br from-bee-slate-800/50 to-bee-navy/30 border border-bee-slate-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-bee-yellow/30 transition-colors duration-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      {...(founderAvatarMotion ? { ...founderAvatarMotion, transition: { ...founderAvatarMotion.transition, delay: 0.4 } } : {})}
                      style={{ willChange: 'transform' }}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-bee-slate-600/50 border-2 border-bee-slate-600/50 overflow-hidden mb-5 group-hover:border-bee-yellow/40 transition-colors"
                    >
                      <img src={founder2} alt="Anagd Singh" className="w-full h-full object-cover img-bounce" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-bee-white mb-1">
                      Anagd Singh
                    </h3>
                    <p className="text-bee-b font-medium text-sm sm:text-base mb-3">
                      Co-Founder & Operations
                    </p>
                    <p className="text-bee-w text-sm sm:text-base leading-relaxed max-w-xs">
                      Driving business strategy and ensuring every solution delivers real value to our clients.
                    </p>
                  </div>
                </motion.div>
              </AnimationWrappers.StaggerItem>
            </div>
          </AnimationWrappers.StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-light section-fade-top section-fade-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl border border-bee-slate-200 bg-gradient-to-br from-white via-[#fffaf0] to-[#f7f3ed] p-8 sm:p-10 lg:p-14 shadow-xl">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-bee-yellow/15 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-bee-yellow/10 rounded-full blur-3xl" aria-hidden="true" />

              <div className="relative">
                <SectionHeading
                  subtitle="Ready to Start?"
                  title="Let's Build Something Together"
                  description="Whether you have a specific project in mind or want to explore how automation can help your business, we're here to help."
                  className="mb-8 sm:mb-10"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
                >
                  <Button to="/contact" size="lg" fullWidthMobile>
                    Contact Us
                    <Icons.Arrow />
                  </Button>
                  <Button
                    href="https://wa.me/7818874934"
                    variant="secondary"
                    size="lg"
                    fullWidthMobile
                  >
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
