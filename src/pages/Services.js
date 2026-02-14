import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button, Card, SectionHeading } from '../components';
import AnimationWrappers from '../components/Animations/AnimationWrappers';

const Services = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored applications built from the ground up to solve your specific business challenges.',
      image: '/images/services-custom.png',
      details: [
        'Requirements analysis and technical planning',
        'Modern architecture and scalable design',
        'Iterative development with regular updates',
        'Testing, deployment, and documentation',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Web Applications',
      description: 'Full-featured web applications that run smoothly across all devices and browsers.',
      image: '/images/services-web (2).png',
      details: [
        'Responsive, mobile-first design',
        'Intuitive user interfaces',
        'Secure authentication and data handling',
        'Integration with existing systems',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: 'Business Dashboards',
      description: 'Visual dashboards that turn your data into actionable insights for better decision-making.',
      image: '/images/services-dashboard.png',
      details: [
        'Real-time data visualization',
        'Custom metrics and KPIs',
        'Interactive charts and reports',
        'Export and sharing capabilities',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Internal Business Tools',
      description: 'Custom tools designed to streamline your internal operations and improve team productivity.',
      image: '/images/services-tools.png',
      details: [
        'Workflow automation tools',
        'Employee and resource management',
        'Inventory and asset tracking',
        'Communication and collaboration tools',
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'REST APIs', category: 'Integration' },
  ];

  const whyUs = [
    {
      title: 'Business-First Approach',
      description: 'We start by understanding your business goals, not jumping straight to code. Every technical decision is tied to a real business need.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Clean, Maintainable Code',
      description: 'We write code that your future team can understand and extend. No shortcuts, no technical debt traps.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Transparent Communication',
      description: 'Regular updates, honest timelines, and no surprises. You always know exactly where your project stands.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: 'Ongoing Support',
      description: 'Our relationship doesn\'t end at launch. We provide maintenance, updates, and support to keep your systems running smoothly.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="pt-0">
      <Helmet>
        <title>Services | BeeAlign</title>
        <meta name="description" content="Custom software development, web applications, business dashboards, and internal tools. Expert development services tailored to your business needs." />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Services | BeeAlign" />
        <meta property="og:description" content="Custom software development, web applications, business dashboards, and internal tools. Expert development services tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beealign.com/services" />
        <meta property="og:image" content="https://beealign.com/images/og-image.jpg" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | BeeAlign" />
        <meta name="twitter:description" content="Custom software development, web applications, business dashboards, and internal tools. Expert development services tailored to your business needs." />
        <meta name="twitter:image" content="https://beealign.com/images/og-image.jpg" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-32 bg-hero-gradient bg-grid">
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute bottom-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-bee-yellow/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="max-w-3xl">
              <span className="inline-block text-amber-800 font-bold text-sm sm:text-base tracking-wider uppercase mb-3 sm:mb-4">
                Services
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bee-black leading-tight mb-4 sm:mb-6">
                Custom Software{' '}
                <span className="text-highlight">Built Right</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-bee-slate-600 leading-relaxed">
                From web applications to internal tools, we develop software that fits your business perfectly—not the other way around.
              </p>
            </div>

            <AnimationWrappers.SlideInRight>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="relative group transform-gpu will-change-transform w-fit mx-auto lg:mx-0 lg:justify-self-end"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <div className="absolute -inset-4 rounded-[28px] bg-bee-yellow/10 blur-2xl" aria-hidden="true" />
                <div className="relative inline-block rounded-2xl overflow-hidden bg-transparent border border-bee-slate-700/35 shadow-lg transition-all duration-300 group-hover:border-bee-yellow/50 group-hover:shadow-2xl">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="transform-gpu"
                  >
                    <img
                      src="/images/services-web.png"
                      alt="Services preview"
                      className="block w-auto max-w-full h-auto max-h-[420px] object-contain object-center transform-gpu will-change-transform transition-transform duration-300 group-hover:scale-[1.04]"
                      decoding="async"
                      fetchPriority="high"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimationWrappers.SlideInRight>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-navy dark-accent-zone">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 2xl:px-12">
          <SectionHeading
            subtitle="What We Build"
            title="Development Services"
            description="We offer a range of custom development services to help businesses build the tools they need."
            className="mb-10 sm:mb-16"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 xl:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card
                      padding="md"
                      hover={false}
                      className="group bg-white/95 border border-bee-slate-200/80 shadow-lg ring-1 ring-transparent transition-all duration-300 hover:border-bee-yellow/70 hover:ring-bee-yellow/40 hover:shadow-2xl"
                    >
                      <div className="flex flex-col h-full">
                        {/* Image */}
                        <div className="-mx-4 -mt-4 sm:-mx-6 sm:-mt-6 mb-4 sm:mb-5 overflow-hidden h-44 sm:h-52 bg-transparent ring-1 ring-transparent shadow-none transition-all duration-300 group-hover:ring-bee-yellow/60 group-hover:shadow-inner">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover scale-[1.22] group-hover:scale-[1.32] transition-transform duration-500"
                          />
                        </div>
                        
                        <motion.div
                          animate={{ rotate: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-bee-yellow mb-3 sm:mb-4 group-hover:text-bee-yellow-light transition-colors [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8"
                        >
                          {service.icon}
                        </motion.div>
                        <h3 className="text-lg sm:text-xl font-semibold text-bee-black mb-2 sm:mb-3">{service.title}</h3>
                        <p className="text-bee-slate-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>
                        <ul className="space-y-2 mt-auto">
                          {service.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: detailIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start text-xs sm:text-sm text-bee-slate-600"
                            >
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-bee-yellow mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <SectionHeading
                  subtitle="Our Approach"
                  title="Why Work With Us"
                  align="left"
                  className="mb-6 sm:mb-8"
                />
                <p className="text-bee-slate-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  We're not a large agency or a freelance marketplace. We're a focused team of engineers who care about building software that actually works for your business.
                </p>
                <Button to="/how-we-work" fullWidthMobile>
                  See Our Process
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {whyUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}

                    transition={{ type: 'spring', stiffness: 300 }}
                    className="group relative z-0 hover:z-10 transform-gpu will-change-transform p-3 sm:p-4 rounded-xl bg-white/95 shadow-lg ring-1 ring-bee-slate-200/80 border border-transparent hover:border-bee-yellow/60 hover:ring-bee-yellow/40 hover:shadow-2xl"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-bee-yellow/10 border border-bee-yellow/20 rounded-lg flex items-center justify-center text-bee-yellow mb-3 sm:mb-4 transition-all duration-300 group-hover:bg-bee-yellow/15 group-hover:border-bee-yellow/40 group-hover:text-bee-yellow-dark group-hover:shadow-md"
                    >
                      {item.icon}
                    </motion.div>
                    <h4 className="text-bee-black font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-bee-slate-700 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-navy dark-accent-zone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Technology"
            title="Modern Tech Stack"
            description="We use proven, modern technologies that ensure your solutions are scalable, secure, and maintainable."
            className="mb-10 sm:mb-16"
          />

          <AnimationWrappers.StaggerContainer>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {techStack.map((tech, index) => (
                <AnimationWrappers.StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.06, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-gradient-to-br from-bee-slate-800 to-bee-navy border border-bee-slate-700/50 rounded-lg p-3 sm:p-4 text-center hover:border-bee-yellow/30 active:border-bee-yellow/50 transition-colors cursor-pointer"
                  >
                    <span className="text-bee-white-100 font-medium text-sm sm:text-base">{tech.name}</span>
                    <span className="block text-bee-slate-800 text-[10px] sm:text-xs mt-1">{tech.category}</span>
                  </motion.div>
                </AnimationWrappers.StaggerItem>
              ))}
            </div>
          </AnimationWrappers.StaggerContainer>

          <p className="text-center text-bee-slate-300 text-xs sm:text-sm mt-6 sm:mt-8">
            Technology choices are made based on your specific project requirements and team capabilities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-bee-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <SectionHeading
              subtitle="Have a Project in Mind?"
              title="Let's Discuss Your Requirements"
              description="Whether you have a detailed specification or just an idea, we'd love to hear about your project and explore how we can help."
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
                Start a Conversation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button to="/solutions" variant="outline" size="lg" fullWidthMobile>
                Explore Solutions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
