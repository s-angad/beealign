import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Button, Card, SectionHeading } from '../components';

const ProcessStepRow = ({
  step,
  index,
  stepsCount,
  shouldReduceMotion,
  progress,
  children,
}) => {
  const dotThreshold = stepsCount > 1 ? index / (stepsCount - 1) : 1;
  const dotOpacity = useTransform(progress, (v) => {
    if (shouldReduceMotion) return 1;
    const start = Math.max(0, dotThreshold - 0.07);
    const end = Math.min(1, dotThreshold + 0.015);
    if (v <= start) return 0;
    if (v >= end) return 1;
    return (v - start) / (end - start);
  });
  const dotScale = useTransform(progress, (v) => {
    if (shouldReduceMotion) return 1;
    const start = Math.max(0, dotThreshold - 0.07);
    const end = Math.min(1, dotThreshold + 0.015);
    if (v <= start) return 0.5;
    if (v >= end) return 1;
    const t = (v - start) / (end - start);
    return 0.5 + t * 0.5;
  });

  return (
    <div
      className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
        index !== stepsCount - 1 ? 'lg:pb-24' : ''
      }`}
    >
      {/* Timeline Dot - Hidden on mobile */}
      <motion.div
        style={{ opacity: dotOpacity, scale: dotScale }}
        className="hidden lg:block absolute left-1/2 top-0 w-4 h-4 bg-bee-yellow rounded-full -translate-x-1/2 z-10 shadow-[0_0_0_6px_rgba(255,215,0,0.12)]"
      >
        <div className="absolute inset-0 bg-bee-yellow rounded-full opacity-25" />
      </motion.div>

      {children}
    </div>
  );
};

const HowWeWork = () => {
  const processSectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress: processScrollProgress } = useScroll({
    target: processSectionRef,
    offset: ['start 0.75', 'end 0.25'],
  });
  const smoothProcessScrollProgress = useSpring(processScrollProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });
  const effectiveProcessProgress = shouldReduceMotion ? processScrollProgress : smoothProcessScrollProgress;
  const timelineScaleY = useTransform(
    effectiveProcessProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [0, 1]
  );
  const timelineShineTop = useTransform(
    effectiveProcessProgress,
    [0, 1],
    ['0%', '100%']
  );
  const timelineShineOpacity = useTransform(
    effectiveProcessProgress,
    [0, 0.04, 0.96, 1],
    [0, 1, 1, 0]
  );

  const boxHover = shouldReduceMotion
    ? undefined
    : { y: -10, scale: 1.05, transition: { type: 'spring', stiffness: 320, damping: 22 } };
  const boxTap = shouldReduceMotion ? undefined : { scale: 0.99 };

  // Match Home button hover (see src/components/Button.js)
  const processCardHover = shouldReduceMotion
    ? undefined
    : {
        scale: 1.05,
        y: -6,
        transition: { type: 'spring', stiffness: 300 },
      };
  const processCardTap = shouldReduceMotion ? undefined : { scale: 0.98 };
  const boxFrameClass =
    'group bg-gradient-to-br from-white via-slate-50 to-amber-50 border border-bee-slate-200/80 hover:border-bee-yellow/45 ring-1 ring-inset ring-bee-yellow/15 hover:ring-bee-yellow/25 rounded-xl sm:rounded-2xl overflow-hidden card-glow shadow-xl hover:shadow-2xl transform-gpu will-change-transform transition-[box-shadow,border-color,ring-color] duration-300 ease-out';

  const process = [
    {
      step: '01',
      title: 'Discover',
      description: 'We start by understanding your business, your challenges, and what success looks like for you.',
      details: [
        'Initial consultation call',
        'Business requirements gathering',
        'Current systems assessment',
        'Goal definition and prioritization',
      ],
      duration: '1-2 weeks',
    },
    {
      step: '02',
      title: 'Design',
      description: 'We plan the technical approach and design the solution architecture before writing any code.',
      details: [
        'Technical specification',
        'System architecture design',
        'User experience planning',
        'Timeline and milestone planning',
      ],
      duration: '1-3 weeks',
    },
    {
      step: '03',
      title: 'Build',
      description: 'Development happens in iterative cycles with regular check-ins and working demos along the way.',
      details: [
        'Iterative development sprints',
        'Regular progress updates',
        'Working demos for feedback',
        'Continuous testing and quality assurance',
      ],
      duration: 'Varies by scope',
    },
    {
      step: '04',
      title: 'Deploy',
      description: 'We handle the deployment process and ensure everything runs smoothly in production.',
      details: [
        'Production environment setup',
        'Data migration if needed',
        'Performance optimization',
        'Security verification',
      ],
      duration: '1-2 weeks',
    },
    {
      step: '05',
      title: 'Support',
      description: 'Our relationship continues after launch with ongoing support, maintenance, and improvements.',
      details: [
        'Team training and documentation',
        'Bug fixes and maintenance',
        'Feature enhancements',
        'Performance monitoring',
      ],
      duration: 'Ongoing',
    },
  ];

  const expectations = [
    {
      title: 'Clear Communication',
      description: 'You\'ll always know where your project stands. Weekly updates, accessible team members, and no surprises.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: 'Honest Timelines',
      description: 'We give realistic estimates and flag potential delays early. No overpromising, no last-minute surprises.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Your Input Matters',
      description: 'This is a collaborative process. Your feedback shapes the project at every stage.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Quality Over Speed',
      description: 'We prioritize getting it right over getting it fast. Rushing leads to technical debt and problems down the road.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Documentation',
      description: 'Every project comes with proper documentation so your team can understand and maintain the system.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Long-term Thinking',
      description: 'We build systems designed to grow with your business, not solutions that need replacing in a year.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="pt-0">
      <Helmet>
        <title>How We Work | BeeAlign</title>
        <meta name="description" content="Our proven process from discovery to deployment. Learn how BeeAlign delivers projects with clear communication, honest timelines, and ongoing support." />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="How We Work | BeeAlign" />
        <meta property="og:description" content="Our proven process from discovery to deployment. Learn how BeeAlign delivers projects with clear communication, honest timelines, and ongoing support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beealign.com/how-we-work" />
        <meta property="og:image" content="https://beealign.com/images/og-image.jpg" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How We Work | BeeAlign" />
        <meta name="twitter:description" content="Our proven process from discovery to deployment. Learn how BeeAlign delivers projects with clear communication, honest timelines, and ongoing support." />
        <meta name="twitter:image" content="https://beealign.com/images/og-image.jpg" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 bg-hero-gradient bg-grid">
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute top-1/3 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-bee-yellow/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="max-w-3xl">
              <span className="inline-block font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4" style={{color: "rgb(111, 63, 12)"}}>
                How We Work
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-4 sm:mb-6">
                A Process Built for{' '}
                <span className="text-highlight">Results</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-secondary leading-relaxed">
                We follow a structured yet flexible approach that keeps projects on track while allowing room for the inevitable discoveries and adjustments along the way.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button to="/work#portfolio" size="lg" fullWidthMobile>
                  View Portfolio
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
                <Button to="/contact" variant="outline" size="lg" fullWidthMobile>
                  Talk to Us
                </Button>
              </div>
            </div>

            <motion.div
              whileHover={boxHover}
              whileTap={boxTap}
              className="relative hidden lg:block transform-gpu will-change-transform"
            >
              <div className="absolute -inset-4 bg-bee-yellow/10 rounded-[2.25rem] blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className={`relative rounded-[2rem] ${boxFrameClass}`}>
                <div className="relative h-[360px] xl:h-[420px] bg-bee-slate-800">
                  <img
                    src="/images/howwework-project-6.jpg"
                    alt="Team collaborating on a project"
                    className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-300 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-bee-yellow/10"></div>
                </div>
                <div className="p-5 xl:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-heading">Structured, not rigid</div>
                      <div className="text-xs text-secondary mt-1">Clear steps, regular demos, and feedback loops.</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-bee-yellow/10 border border-bee-yellow/20 text-bee-slate-700">Discovery</span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-bee-yellow/10 border border-bee-yellow/20 text-bee-slate-700">Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processSectionRef} className="py-16 sm:py-20 lg:py-32 bg-dark dark-accent-zone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Process"
            title="From Idea to Implementation"
            description="Every successful project follows a clear path. Here's how we take your idea from concept to reality."
            className="mb-10 sm:mb-16"
          />

          <div className="relative">
            {/* Timeline Line - Hidden on mobile/tablet */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
              <div className="absolute inset-0 bg-white/10" />
              <motion.div
                style={{ scaleY: timelineScaleY, transformOrigin: 'top' }}
                className="absolute inset-0 bg-gradient-to-b from-bee-yellow/90 via-bee-yellow/55 to-bee-yellow/10"
              />
              {!shouldReduceMotion && (
                <motion.div
                  style={{ top: timelineShineTop, opacity: timelineShineOpacity }}
                  className="absolute left-1/2 w-5 h-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bee-yellow/70 blur-[2px] shadow-[0_0_0_8px_rgba(255,215,0,0.10)]"
                />
              )}
            </div>

            <div className="space-y-6 sm:space-y-8 lg:space-y-0">
              {process.map((step, index) => (
                <ProcessStepRow
                  key={index}
                  step={step}
                  index={index}
                  stepsCount={process.length}
                  shouldReduceMotion={shouldReduceMotion}
                  progress={effectiveProcessProgress}
                >
                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'
                    }`}
                  >
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1, y: 0 }
                          : {
                              opacity: 0,
                              y: 44,
                              x: index % 2 === 0 ? -52 : 52,
                              rotateX: 12,
                              rotateY: index % 2 === 0 ? 18 : -18,
                              scale: 0.975,
                              filter: 'blur(10px)',
                            }
                      }
                      whileInView={{ opacity: 1, y: 0, x: 0, rotateX: 0, rotateY: 0, scale: 1, filter: 'blur(0px)' }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        default: {
                          type: 'spring',
                          stiffness: 120,
                          damping: 18,
                          mass: 0.9,
                          delay: index * 0.09,
                        },
                        opacity: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.09 },
                        filter: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.09 },
                      }}
                      whileHover={processCardHover}
                      whileTap={processCardTap}
                      className="transform-gpu will-change-transform"
                      style={
                        shouldReduceMotion
                          ? undefined
                          : {
                              perspective: 1200,
                              transformStyle: 'preserve-3d',
                              originX: index % 2 === 0 ? 0.85 : 0.15,
                              originY: 0.15,
                            }
                      }
                    >
                      <Card
                        padding="lg"
                        hover={false}
                        className={boxFrameClass}
                      >
                        {!shouldReduceMotion && (
                          <motion.div
                            aria-hidden="true"
                            initial={{ opacity: 0, x: '-65%' }}
                            whileInView={{ opacity: [0, 0.6, 0], x: ['-65%', '45%', '80%'] }}
                            viewport={{ once: true, amount: 0.55 }}
                            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: index * 0.09 + 0.08 }}
                            className="absolute inset-0 pointer-events-none"
                          >
                            <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-transparent via-bee-yellow/12 to-transparent skew-x-[-18deg] blur-sm" />
                          </motion.div>
                        )}
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="flex-shrink-0 text-4xl sm:text-5xl font-bold text-bee-slate-700">
                            {step.step}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              <h3 className="text-lg sm:text-xl font-semibold text-bee-black">{step.title}</h3>
                              <span className="text-[10px] sm:text-xs text-bee-slate-700 bg-bee-yellow/10 border border-bee-yellow/20 px-2 py-1 rounded">
                                {step.duration}
                              </span>
                            </div>
                            <p className="text-bee-slate-700 mb-3 sm:mb-4 text-sm sm:text-base">{step.description}</p>
                            <ul className="space-y-1.5 sm:space-y-2">
                              {step.details.map((detail, detailIndex) => (
                                <li
                                  key={detailIndex}
                                  className="flex items-center text-xs sm:text-sm text-bee-slate-600"
                                >
                                  <svg
                                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-bee-yellow flex-shrink-0 ${
                                      'mr-2'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </ProcessStepRow>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect + CTA (Combined) */}
      <section className="py-16 sm:py-20 lg:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {/* Left: Expectations */}
            <div>
              <SectionHeading
                subtitle="Working Together"
                title="What to Expect"
                description="When you work with BeeAlign, here's what you can count on throughout the process."
                align="left"
                className="mb-8 sm:mb-10"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 auto-rows-fr">
                {expectations.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={processCardHover}
                    whileTap={processCardTap}
                    className="transform-gpu will-change-transform h-full"
                  >
                    <Card hover={false} className={`group ${boxFrameClass} h-full min-h-[220px] sm:min-h-[240px] flex flex-col`}>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-bee-yellow/10 border border-bee-yellow/20 rounded-lg flex items-center justify-center text-bee-yellow mb-3 sm:mb-4 group-hover:bg-bee-yellow/20 transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-bee-black mb-1 sm:mb-2">{item.title}</h3>
                      <p className="text-bee-slate-700 text-xs sm:text-sm leading-relaxed flex-1">{item.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: CTA Panel */}
            <div className="h-full">
              <motion.div
                whileHover={processCardHover}
                whileTap={processCardTap}
                className="transform-gpu will-change-transform h-full"
              >
                <Card hover={false} padding="xl" className={`${boxFrameClass} h-full flex flex-col`}>
                  <span className="inline-block text-bee-orange font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
                    Ready to Start?
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-heading leading-tight mb-3 sm:mb-4">
                    Let's Discuss Your Project
                  </h3>
                  <p className="text-secondary text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    Every project begins with a conversation. Tell us about your challenges and let's explore how we can help.
                  </p>

                  <div className="rounded-xl border border-bee-yellow/20 bg-bee-yellow/5 p-4 sm:p-5">
                    <div className="text-sm font-semibold text-heading mb-3">What happens next</div>
                    <ul className="space-y-2.5 text-sm text-bee-slate-700">
                      <li className="flex items-start gap-2">
                        <svg className="mt-0.5 w-4 h-4 text-bee-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><span className="font-medium text-bee-black">15–30 min call</span> to understand your goal and scope.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="mt-0.5 w-4 h-4 text-bee-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><span className="font-medium text-bee-black">Clear plan</span> with milestones, timeline, and deliverables.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="mt-0.5 w-4 h-4 text-bee-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><span className="font-medium text-bee-black">Kickoff</span> with weekly updates and working demos.</span>
                      </li>
                    </ul>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div className="px-3 py-2 rounded-lg bg-white/70 border border-bee-yellow/15">
                        <div className="text-[11px] font-semibold text-bee-slate-700">Response time</div>
                        <div className="text-sm font-semibold text-heading">Within 24 hours</div>
                      </div>
                      <div className="px-3 py-2 rounded-lg bg-white/70 border border-bee-yellow/15">
                        <div className="text-[11px] font-semibold text-bee-slate-700">Discovery call</div>
                        <div className="text-sm font-semibold text-heading">Free</div>
                      </div>
                      <div className="px-3 py-2 rounded-lg bg-white/70 border border-bee-yellow/15">
                        <div className="text-[11px] font-semibold text-bee-slate-700">Confidentiality</div>
                        <div className="text-sm font-semibold text-heading">NDA available</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-bee-slate-200/70 bg-white/70 p-4 sm:p-5">
                      <div className="text-sm font-semibold text-heading mb-3">You'll receive</div>
                      <ul className="space-y-2.5 text-sm text-bee-slate-700">
                        <li className="flex items-start gap-2">
                          <svg className="mt-0.5 w-4 h-4 text-bee-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>High-level scope and a recommended approach</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="mt-0.5 w-4 h-4 text-bee-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Rough timeline + milestones you can track</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="mt-0.5 w-4 h-4 text-bee-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Clear next steps (even if we’re not the best fit)</span>
                        </li>
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-bee-yellow/10 border border-bee-yellow/20 text-bee-slate-700">Automation</span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-bee-yellow/10 border border-bee-yellow/20 text-bee-slate-700">AI</span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-bee-yellow/10 border border-bee-yellow/20 text-bee-slate-700">Web Apps</span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-bee-yellow/10 border border-bee-yellow/20 text-bee-slate-700">Integrations</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-bee-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-amber-50 p-4 sm:p-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-bee-yellow/10 border border-bee-yellow/20 flex items-center justify-center text-bee-yellow flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h7m-7 4h10M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H7.414a1 1 0 00-.707.293L3.293 7.707A1 1 0 003 8.414V18a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-heading">No fluff. Just clarity.</div>
                          <p className="text-sm text-bee-slate-700 mt-1 leading-relaxed">
                            We’ll keep it simple and actionable—what to build, how we’ll build it, and what it’ll take to ship.
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-bee-slate-200/70">
                        <div className="text-[11px] font-semibold text-bee-slate-700 uppercase tracking-wider">Quick tip</div>
                        <p className="text-sm text-bee-slate-700 mt-1">
                          Bring 1–2 examples of what you like (or competitors). It helps us estimate faster.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button to="/contact" size="lg" fullWidthMobile>
                      Start the Conversation
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                    <Button to="/solutions" variant="outline" size="lg" fullWidthMobile>
                      View Our Solutions
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
