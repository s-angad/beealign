import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Card, SectionHeading } from '../components';

const Solutions = () => {
  const solutions = [
    {
      id: 'business-automation',
      title: 'Business Automation',
      subtitle: 'Streamline Operations',
      image: '/images/so.png',
      description: 'Eliminate repetitive tasks and manual processes with intelligent automation systems designed for real-world business needs.',
      features: [
        {
          title: 'Gym Automation',
          description: 'Membership management, check-ins, class scheduling, and payment tracking for fitness centers.',
        },
        {
          title: 'Clinic & Appointments',
          description: 'Patient scheduling, appointment reminders, and doctor availability management for healthcare providers.',
        },
        {
          title: 'Attendance Systems',
          description: 'Automated attendance tracking, reporting, and integration with existing HR systems.',
        },
        {
          title: 'Workflow Automation',
          description: 'Custom workflow rules, task automation, and process optimization for any business operation.',
        },
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 'ai-digital',
      title: 'AI & Digital Solutions',
      subtitle: 'Tech-Driven Innovation',
      image: '/images/solutions-ai.jpg',
      description: 'Build custom AI-powered applications, automate business processes, and unlock new possibilities with advanced technology solutions tailored for your needs.',
      features: [
        {
          title: 'Custom AI Applications',
          description: 'Development of intelligent web, mobile, and desktop apps using machine learning, natural language processing, and computer vision.',
        },
        {
          title: 'Process Automation',
          description: 'Automate workflows, data entry, reporting, and repetitive tasks with AI bots and smart scripts.',
        },
        {
          title: 'Predictive Analytics',
          description: 'Leverage data science and AI models to forecast trends, customer behavior, and business outcomes.',
        },
        {
          title: 'System Integration',
          description: 'Connect and enhance your existing tools with AI-powered APIs, cloud services, and custom integrations.',
        },
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'custom-projects',
      title: 'Custom Projects',
      subtitle: 'Tailored Solutions',
      image: '/images/solutions-custom.jpg',
      description: 'When off-the-shelf solutions don\'t fit, we design and build custom systems from the ground up to meet your specific requirements.',
      features: [
        {
          title: 'Client-Specific Solutions',
          description: 'Fully customized systems built around your unique business processes and requirements.',
        },
        {
          title: 'System Integration',
          description: 'Connect existing tools and platforms into a unified, efficient ecosystem.',
        },
        {
          title: 'End-to-End Design',
          description: 'From initial concept to final deployment, we handle every aspect of your project.',
        },
        {
          title: 'Ongoing Support',
          description: 'Long-term maintenance and support to ensure your systems continue to perform.',
        },
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      title: 'Reduced Manual Work',
      description: 'Automate repetitive tasks so your team can focus on what matters most.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Improved Accuracy',
      description: 'Eliminate human error with automated processes and validation.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Better Insights',
      description: 'Real-time data and analytics to make informed business decisions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Scalable Systems',
      description: 'Solutions that grow with your business without costly rebuilds.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <div className="pt-14 sm:pt-16 lg:pt-20" style={{ padding: 0, margin: 0 }}>
      <Helmet >
        <title>Solutions | BeeAlign</title>
        <meta name="description" content="Business automation, AI solutions, and custom projects. BeeAlign delivers technology that solves real problems for gyms, clinics, and enterprises." />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Solutions | BeeAlign" />
        <meta property="og:description" content="Business automation, AI solutions, and custom projects. BeeAlign delivers technology that solves real problems for gyms, clinics, and enterprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beealign.com/solutions" />
        <meta property="og:image" content="https://beealign.com/images/og-image.jpg" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solutions | BeeAlign" />
        <meta name="twitter:description" content="Business automation, AI solutions, and custom projects. BeeAlign delivers technology that solves real problems for gyms, clinics, and enterprises." />
        <meta name="twitter:image" content="https://beealign.com/images/og-image.jpg" />
      </Helmet>
      {/* Hero Section (light, improved contrast) */}
      <section className="relative py-10 sm:py-12 lg:py-16 bg-hero-gradient zbg-grid section-fade-bottom" style={{ marginTop: "5vh" }}>
        <div className="absolute inset-0 overflow-hidden hidden sm:block" >
          <div className="absolute top-1/4 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-bee-yellow/10 rounded-full blur-3xl" ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="max-w-3xl flex flex-col justify-center h-full">
              <span className="inline-block text-bee-yellow font-medium text-lg sm:text-xl tracking-wider uppercase mb-3 sm:mb-4" style={{ fontWeight: 7000, letterSpacing: '0.08em' }}>
                Solutions
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-bee-white leading-tight mb-4 sm:mb-6 whitespace-nowrap">
                <span>Technology That Solves</span><br />
                <span className="text-pink-500">Real world Problems</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-bee-slate-400 leading-relaxed">
                <span className="text-bee-slate-700">We build automation and software solutions tailored to the way your business actually works—not generic tools that force you to adapt.</span>
              </p>
            </div>
            <div className="flex justify-center md:justify-end">

              {(() => {
                const MotionImg = require('framer-motion').motion.img;
                return (
                  <MotionImg
                    src="/images/solutions-automation.jpg"
                    alt="Team collaborating on automation solutions, BeeAlign"
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                    style={{ transform: 'scaleX(1)' }}
                    whileHover={{ scale: 1.05, y: -10, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18), 0 1.5px 8px 0 rgba(255,193,7,0.12)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    role="img"
                    aria-label="Team collaborating on automation solutions, BeeAlign"
                  />
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section (light, improved contrast) */}
      <section className="py-8 sm:py-10 lg:py-12 bg-hero-gradient zbg-grid section-fade-bottom" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" >
            {benefits.map((benefit, index) => {

              // Use framer-motion for hover effect
              const MotionDiv = require('framer-motion').motion.div;
              return (
                <MotionDiv
                  key={index}
                  whileHover={{ scale: 1.05, y: -10, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18), 0 1.5px 8px 0 rgba(255,193,7,0.12)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`flex items-start space-x-3 sm:space-x-4 p-5 rounded-xl bg-white/60 shadow-sm border-2 relative overflow-hidden`}
                  style={{ cursor: 'pointer' }}
                >
                  <span className={`absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent bg-gradient-to-br z-0`} style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}></span>
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-200 border border-yellow-300 rounded-lg flex items-center justify-center text-yellow-700">
                    {benefit.icon}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-gray-900 font-semibold mb-1 text-sm sm:text-base">{benefit.title}</h3>
                    <p className="text-gray-700 text-xs sm:text-sm">{benefit.description}</p>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Detail Sections (alternate backgrounds) */}
      {solutions.map((solution, index) => (
        solution.id === 'ai-digital' ? (
          <section
            key={solution.id}
            id={solution.id}
            className="py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-yellow-50 via-white to-yellow-100"
            style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.08)', borderRadius: '2rem', margin: '3vh 0' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                {/* Left: Icon, Heading, Subtitle, Description, Button */}
                <div className="flex-1 min-w-[320px]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-bee-yellow">{solution.icon}</span>
                    <span className="inline-block text-bee-yellow font-bold text-xl tracking-wider uppercase" style={{ letterSpacing: '0.08em' }}>{solution.subtitle}</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4" style={{ color: '#2c232f', lineHeight: 1.1 }}>
                    {solution.title}
                  </h2>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8" style={{ fontWeight: 500 }}>
                    {solution.description}
                  </p>
                  <Button to="/contact" size="lg" fullWidthMobile>
                    Let's Get Started
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>
                {/* Right: Features Grid */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {solution.features.map((feature, featureIndex) => {
                    const MotionDiv = require('framer-motion').motion.div;
                    return (
                      <MotionDiv
                        key={featureIndex}
                        whileHover={{ scale: 1.05, y: -10, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18), 0 1.5px 8px 0 rgba(255,193,7,0.12)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[140px] border border-yellow-100 cursor-pointer"
                        style={{ borderLeft: '6px solid #c8a448' }}
                      >
                        <h4 className="font-bold mb-2 text-lg text-yellow-700" style={{ letterSpacing: '0.04em' }}>{feature.title}</h4>
                        <p className="text-gray-800 text-base" style={{ fontWeight: 500 }}>{feature.description}</p>
                      </MotionDiv>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section
            key={solution.id}
            id={solution.id}
            className={`py-16 sm:py-20 lg:py-32 ${index % 2 === 0 ? 'bg-bee-navy' : 'bg-bee-darker'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-start">
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-bee-yellow mb-3 sm:mb-4 [&>svg]:w-16 [&>svg]:h-16 sm:[&>svg]:w-20 sm:[&>svg]:h-20">
                    {solution.icon}
                  </div>
                  <span className="inline-block text-bee-yellow font-bold text-lg sm:text-xl tracking-wider uppercase mb-2" style={{ letterSpacing: '0.08em' }}>
                    {solution.subtitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 text-bee-b" style={{ lineHeight: 1.1, color: '#f7fafc' }}>
                    {solution.title}
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: '#4a5568', fontWeight: 500 }}>
                    {solution.description}
                  </p>
                  <Button to="/contact" fullWidthMobile>
                    Let's Get Started
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>
                {/* Image or Features Grid */}
                {index % 2 === 0 ? (
                  <div className="relative">
                    {(() => {
                      const MotionImg = require('framer-motion').motion.img;
                      return (
                        <MotionImg
                          src={solution.image}
                          alt={solution.title + ' - BeeAlign business solution'}
                          className="w-full rounded-xl sm:rounded-2xl object-cover h-64 sm:h-80 lg:h-96 border border-bee-slate-700/50"
                          whileHover={{ scale: 1.05, y: -10, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18), 0 1.5px 8px 0 rgba(255,193,7,0.12)' }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          style={{ cursor: 'pointer' }}
                          role="img"
                          aria-label={solution.title + ' - BeeAlign business solution'}
                        />
                      );
                    })()}
                  </div>
                ) : (
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:order-1`}>
                    {solution.features.map((feature, featureIndex) => (
                      <Card key={featureIndex} padding="md">
                        <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: '#c8a448' }}>{feature.title}</h4>
                        <p className="text-xs sm:text-sm" style={{ color: '#23272f' }}>{feature.description}</p>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
              {/* Features for odd-indexed items */}
              {index % 2 === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-12">
                  {solution.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} padding="md">
                      <h4 className="font-bold mb-1 sm:mb-2 text-base sm:text-lg" style={{ color: '#c8a448' }}>{feature.title}</h4>
                      <p className="text-sm sm:text-base" style={{ color: '#23272f', fontWeight: 500 }}>{feature.description}</p>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </section>
        )
      ))}

      {/* CTA Section (light) */}
      <section className="py-16 sm:py-20 lg:py-32 bg-hero-gradient zbg-grid section-fade-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading
              subtitle="Not Sure Where to Start?"
              title="Let's Find the Right Solution"
              description="Every business is different. Tell us about your challenges, and we'll help identify the best approach to solve them."
              className="mb-8 sm:mb-10"
            />
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button to="/contact" size="lg" fullWidthMobile>
                Schedule a Consultation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button to="/how-we-work" variant="outline" size="lg" fullWidthMobile>
                See How We Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
