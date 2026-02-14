import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { Button, Card, SectionHeading } from '../components';

const PortfolioFaq = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const shouldReduceMotion = useReducedMotion();

  const boxHover = shouldReduceMotion
    ? undefined
    : {
        scale: 1.05,
        y: -6,
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12), 0 1.5px 8px 0 rgba(255,193,7,0.10)',
        transition: { type: 'spring', stiffness: 300 },
      };
  const boxTap = shouldReduceMotion ? undefined : { scale: 0.98 };
  const boxFrameClass =
    'group bg-gradient-to-br from-white via-slate-50 to-amber-50 border border-bee-slate-200/80 hover:border-bee-yellow/45 ring-1 ring-inset ring-bee-yellow/15 hover:ring-bee-yellow/25 rounded-xl sm:rounded-2xl overflow-hidden card-glow shadow-xl hover:shadow-2xl transform-gpu will-change-transform transition-[box-shadow,border-color,ring-color] duration-300 ease-out';

  const portfolioFrameClass =
    'group card-dark border border-white/10 ring-1 ring-inset ring-bee-yellow/15 hover:ring-bee-yellow/25 rounded-xl sm:rounded-2xl overflow-hidden card-glow shadow-xl hover:shadow-2xl transform-gpu will-change-transform transition-[box-shadow,border-color,ring-color] duration-300 ease-out';

  const workProjects = useMemo(
    () => [
      {
        id: 1,
        title: 'Business Process Automation',
        category: 'automation',
        image: '/images/p-1.jpeg',
        description: 'Streamlined enterprise workflow with 60% efficiency gain',
        details:
          'Automated complex business processes for a Fortune 500 company, reducing manual work by 60% and improving accuracy.',
        results: ['60% efficiency gain', '40% cost reduction', '99.9% uptime'],
        technologies: ['Python', 'RPA', 'Cloud'],
      },
      {
        id: 7,
        title: 'Customer Support Workflow Automation',
        category: 'automation',
        image: '/images/p-2.jpeg',
        description: 'Faster ticket handling with fewer manual steps',
        details:
          'Implemented automated triage, routing, and SLA tracking across support channels to reduce response times and standardize workflows.',
        results: ['35% faster response', 'SLA visibility', 'Fewer escalations'],
        technologies: ['Node.js', 'APIs', 'Automation'],
      },
      {
        id: 2,
        title: 'AI-Powered Analytics Platform',
        category: 'ai',
        image: '/images/howwework-project-2.jpg',
        description: 'Real-time data insights with machine learning',
        details:
          'Built a comprehensive analytics platform using machine learning to provide real-time insights and predictive analysis.',
        results: ['Real-time insights', '95% accuracy', '10x faster analysis'],
        technologies: ['Python', 'TensorFlow', 'React'],
      },
      {
        id: 8,
        title: 'Intelligent Lead Scoring',
        category: 'ai',
        image: '/images/p-4.jpeg',
        description: 'Prioritize leads automatically using behavior signals',
        details:
          'Delivered an ML-assisted scoring pipeline that ranks inbound leads using website events and CRM history to help sales teams focus on the best opportunities.',
        results: ['Higher conversion', 'Less manual review', 'Faster follow-up'],
        technologies: ['Python', 'ML', 'Data Pipelines'],
      },
      {
        id: 3,
        title: 'Custom ERP System',
        category: 'custom',
        image: '/images/p-5.jpeg',
        description: 'End-to-end enterprise resource planning solution',
        details:
          "Developed a fully customized ERP system tailored to client's specific business needs with seamless integration.",
        results: ['100% integration', 'Multi-module system', 'Scalable architecture'],
        technologies: ['Node.js', 'React', 'PostgreSQL'],
      },
      {
        id: 9,
        title: 'Operations Dashboard + Admin Suite',
        category: 'custom',
        image: '/images/p-6.jpeg',
        description: 'Custom internal tools to reduce operational overhead',
        details:
          'Built a secure admin suite for managing users, permissions, and operational workflows with audit logs and role-based access control.',
        results: ['RBAC security', 'Audit logging', 'Faster ops'],
        technologies: ['React', 'Node.js', 'PostgreSQL'],
      },
      {
        id: 4,
        title: 'Mobile App Development',
        category: 'mobile',
        image: '/images/p-7.jpeg',
        description: 'Cross-platform mobile solution for iOS and Android',
        details:
          'Created a feature-rich mobile application deployed on both iOS and Android with offline capabilities.',
        results: ['4.8★ rating', '100K+ downloads', '95% retention'],
        technologies: ['React Native', 'Firebase', 'Node.js'],
      },
      {
        id: 10,
        title: 'Appointment Booking Mobile Experience',
        category: 'mobile',
        image: '/images/p-8.jpeg',
        description: 'Frictionless booking with reminders and offline support',
        details:
          'Designed and built a mobile-first booking experience with push notifications, calendar sync, and offline-friendly flows for busy users.',
        results: ['Fewer no-shows', 'Faster booking', 'Better UX'],
        technologies: ['React Native', 'Notifications', 'APIs'],
      },
      {
        id: 5,
        title: 'Cloud Infrastructure Migration',
        category: 'infrastructure',
        image: '/images/p-9.jpeg',
        description: 'Seamless migration to cloud with zero downtime',
        details:
          'Migrated legacy systems to modern cloud infrastructure with zero downtime and improved performance.',
        results: ['Zero downtime', '3x performance', '40% cost savings'],
        technologies: ['AWS', 'Docker', 'Kubernetes'],
      },
      {
        id: 11,
        title: 'Secure CI/CD + Deployment Hardening',
        category: 'infrastructure',
        image: '/images/p-10.jpeg',
        description: 'Reliable releases with better observability and rollbacks',
        details:
          'Implemented CI/CD pipelines, environment isolation, secrets handling, and rollback strategies to ship faster with confidence.',
        results: ['Safer releases', 'Faster deployments', 'Better monitoring'],
        technologies: ['Docker', 'CI/CD', 'Cloud'],
      },
      {
        id: 6,
        title: 'Web Application Suite',
        category: 'web',
        image: '/images/p-11.jpeg',
        description: 'Comprehensive web platform with real-time collaboration',
        details:
          'Built a modern web application suite with real-time collaboration features and advanced security protocols.',
        results: ['Real-time sync', 'Enterprise security', '99.95% uptime'],
        technologies: ['React', 'Node.js', 'WebSocket'],
      },
      {
        id: 12,
        title: 'Client Portal for Reporting',
        category: 'web',
        image: '/images/p-12.jpeg',
        description: 'A clean portal for documents, reporting, and status updates',
        details:
          'Delivered a responsive client portal with secure authentication, reporting views, and automated status updates for stakeholders.',
        results: ['Fewer emails', 'Self-serve reporting', 'Secure access'],
        technologies: ['React', 'APIs', 'Auth'],
      },
    ],
    []
  );

  const categories = useMemo(
    () => [
      { id: 'all', label: 'All Projects' },
      { id: 'automation', label: 'Automation' },
      { id: 'ai', label: 'AI Solutions' },
      { id: 'custom', label: 'Custom Development' },
      { id: 'mobile', label: 'Mobile Apps' },
      { id: 'infrastructure', label: 'Infrastructure' },
      { id: 'web', label: 'Web Apps' },
    ],
    []
  );

  const filteredProjects = selectedCategory === 'all'
    ? workProjects
    : workProjects.filter((project) => project.category === selectedCategory);

  const faqs = useMemo(
    () => [
      {
        question: 'How long does a typical project take?',
        answer:
          "Project timelines vary significantly based on scope. A simple web application might take 2-4 weeks, while a complex automation system could take 2-3 months. We'll give you a realistic estimate during the discovery phase.",
      },
      {
        question: 'Do you work with existing systems?',
        answer:
          "Yes. We frequently integrate with or build upon existing systems. During discovery, we assess your current technology stack and plan how new solutions will work alongside what you already have.",
      },
      {
        question: 'What if requirements change during the project?',
        answer:
          'Changes happen, and we expect them. Our iterative approach allows for adjustments along the way. Significant scope changes may affect timeline and cost, but we always discuss this openly before proceeding.',
      },
      {
        question: 'How do you handle project communication?',
        answer:
          'We provide weekly progress updates and are available for questions throughout the project. Most teams use a combination of email, scheduled calls, and a project management tool to stay aligned.',
      },
      {
        question: 'What happens after the project launches?',
        answer:
          "We offer ongoing support and maintenance packages. Even without a formal support agreement, we're available for bug fixes and questions. Your success with the system matters to us.",
      },
      {
        question: 'Can you sign an NDA?',
        answer:
          'Yes. If you need an NDA before sharing details, we can sign one. We also follow best practices for access control, least-privilege permissions, and secure handling of credentials and data.',
      },
    ],
    []
  );

  return (
    <div>
      <Helmet>
        <title>Portfolio & FAQ | BeeAlign</title>
        <meta
          name="description"
          content="Explore our portfolio and find answers to common questions about how we work, timelines, communication, and support."
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Portfolio & FAQ | BeeAlign" />
        <meta property="og:description" content="Explore our portfolio and find answers to common questions about how we work, timelines, communication, and support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beealign.com/portfolio" />
        <meta property="og:image" content="https://beealign.com/images/og-image.jpg" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio & FAQ | BeeAlign" />
        <meta name="twitter:description" content="Explore our portfolio and find answers to common questions about how we work, timelines, communication, and support." />
        <meta name="twitter:image" content="https://beealign.com/images/og-image.jpg" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28 bg-hero-gradient bg-grid">
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute top-1/3 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-bee-yellow/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="max-w-3xl">
              <span
                className="inline-block font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4"
                style={{ color: 'rgb(111, 63, 12)' }}
              >
                Portfolio & FAQ
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-4 sm:mb-6">
                Our <span className="text-highlight">Work</span>, and the Answers You Need
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-secondary leading-relaxed">
                Browse real projects we&apos;ve delivered and get clear answers about timelines, communication, and what working
                with us looks like.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button to="#portfolio" size="lg" fullWidthMobile>
                  View Portfolio
                </Button>
                <Button to="#faq" variant="outline" size="lg" fullWidthMobile>
                  Read FAQs
                </Button>
              </div>
            </div>

            <motion.div
              whileHover={boxHover}
              whileTap={boxTap}
              className="relative transform-gpu will-change-transform"
            >
              <div className="absolute -inset-4 bg-bee-yellow/10 rounded-[2.25rem] blur-2xl" />
              <Card hover={false} className={`relative p-0 ${boxFrameClass}`}>
                <div className="relative h-72 sm:h-80 lg:h-[420px] bg-bee-slate-800">
                  <img
                    src="/images/portfolio.png"
                    alt="Portfolio preview"
                    className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-300 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-bee-yellow/10" />
                </div>
                <div className="p-5 xl:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-heading">Real projects. Real outcomes.</div>
                      <div className="text-xs text-secondary mt-1">Automation, AI, apps, and infrastructure — built to ship.</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-bee-yellow/10 border border-bee-yellow/20 text-bee-slate-700">
                        Portfolio
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-bee-yellow/10 border border-bee-yellow/20 text-bee-slate-700">
                        FAQ
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio (Dark) */}
      <section className="py-16 sm:py-20 lg:py-28 bg-dark dark-accent-zone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Explore"
            title="Portfolio"
            description="Selected projects across automation, AI, apps, and infrastructure."
            className="mb-10 sm:mb-14"
          />

          <div id="portfolio" className="scroll-mt-28">
            <div className="flex items-end justify-between gap-4 flex-wrap mb-6 sm:mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Recent Projects</h2>
                <p className="text-slate-300 mt-2">Filter by category to quickly find relevant work.</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-start">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-bee-yellow text-bee-dark shadow-md'
                        : 'bg-white/5 border border-white/10 text-slate-200 hover:border-bee-yellow/35 hover:bg-white/10'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={boxHover}
                  whileTap={boxTap}
                  className={portfolioFrameClass}
                >
                  <div className="relative overflow-hidden h-64 sm:h-56 lg:h-64 bg-bee-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-300 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6 sm:p-5 lg:p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-bee-yellow/10 border border-bee-yellow/20 rounded-full text-xs font-medium text-bee-yellow">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-base lg:text-lg font-bold text-slate-50 mb-2 group-hover:text-bee-yellow transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 mb-4">{project.description}</p>
                    <p className="text-xs sm:text-xs lg:text-sm text-slate-400 mb-4 line-clamp-2">{project.details}</p>

                    <div className="mb-4 space-y-1">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-xs sm:text-xs lg:text-sm text-slate-200">
                          <svg className="w-3 h-3 mr-2 text-bee-yellow" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {result}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (Light) */}
      <section className="py-16 sm:py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to the most common questions."
            className="mb-10 sm:mb-14"
          />

          <div id="faq" className="scroll-mt-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  whileHover={boxHover}
                  whileTap={boxTap}
                  className="transform-gpu will-change-transform h-full"
                >
                  <Card hover={false} padding="md" className={`${boxFrameClass} h-full`}>
                    <h4 className="text-base sm:text-lg font-semibold text-bee-black mb-1 sm:mb-2">{faq.question}</h4>
                    <p className="text-bee-slate-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <Button to="/contact" size="lg" fullWidthMobile>
                Still have questions? Talk to us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioFaq;
