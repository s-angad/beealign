import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { Button, Card, SectionHeading } from '../components';

const PortfolioFaq = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const shouldReduceMotion = useReducedMotion();

  const boxHover = shouldReduceMotion
    ? undefined
    : { y: -10, scale: 1.05, transition: { type: 'spring', stiffness: 320, damping: 22 } };
  const boxTap = shouldReduceMotion ? undefined : { scale: 0.99 };
  const boxFrameClass =
    'group bg-gradient-to-br from-white via-slate-50 to-amber-50 border border-bee-slate-200/80 hover:border-bee-yellow/45 ring-1 ring-inset ring-bee-yellow/15 hover:ring-bee-yellow/25 rounded-xl sm:rounded-2xl overflow-hidden card-glow shadow-xl hover:shadow-2xl transform-gpu will-change-transform transition-[box-shadow,border-color,ring-color] duration-300 ease-out';

  const workProjects = useMemo(
    () => [
      {
        id: 1,
        title: 'Business Process Automation',
        category: 'automation',
        image: '/images/howwework-project-1.jpg',
        description: 'Streamlined enterprise workflow with 60% efficiency gain',
        details:
          'Automated complex business processes for a Fortune 500 company, reducing manual work by 60% and improving accuracy.',
        results: ['60% efficiency gain', '40% cost reduction', '99.9% uptime'],
        technologies: ['Python', 'RPA', 'Cloud'],
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
        id: 3,
        title: 'Custom ERP System',
        category: 'custom',
        image: '/images/howwework-project-3.jpg',
        description: 'End-to-end enterprise resource planning solution',
        details:
          "Developed a fully customized ERP system tailored to client's specific business needs with seamless integration.",
        results: ['100% integration', 'Multi-module system', 'Scalable architecture'],
        technologies: ['Node.js', 'React', 'PostgreSQL'],
      },
      {
        id: 4,
        title: 'Mobile App Development',
        category: 'mobile',
        image: '/images/howwework-project-4.jpg',
        description: 'Cross-platform mobile solution for iOS and Android',
        details:
          'Created a feature-rich mobile application deployed on both iOS and Android with offline capabilities.',
        results: ['4.8★ rating', '100K+ downloads', '95% retention'],
        technologies: ['React Native', 'Firebase', 'Node.js'],
      },
      {
        id: 5,
        title: 'Cloud Infrastructure Migration',
        category: 'infrastructure',
        image: '/images/howwework-project-5.jpg',
        description: 'Seamless migration to cloud with zero downtime',
        details:
          'Migrated legacy systems to modern cloud infrastructure with zero downtime and improved performance.',
        results: ['Zero downtime', '3x performance', '40% cost savings'],
        technologies: ['AWS', 'Docker', 'Kubernetes'],
      },
      {
        id: 6,
        title: 'Web Application Suite',
        category: 'web',
        image: '/images/howwework-project-6.jpg',
        description: 'Comprehensive web platform with real-time collaboration',
        details:
          'Built a modern web application suite with real-time collaboration features and advanced security protocols.',
        results: ['Real-time sync', 'Enterprise security', '99.95% uptime'],
        technologies: ['React', 'Node.js', 'WebSocket'],
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
          "Project timelines vary significantly based on scope. A simple web application might take 4-8 weeks, while a complex automation system could take 3-6 months. We'll give you a realistic estimate during the discovery phase.",
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
    ],
    []
  );

  return (
    <div className="pt-14 sm:pt-16 lg:pt-20">
      <Helmet>
        <title>Portfolio & FAQ | Bixxy Bee</title>
        <meta
          name="description"
          content="Explore our portfolio and find answers to common questions about how we work, timelines, communication, and support."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-hero-gradient bg-grid">
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute top-1/3 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-bee-yellow/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span
              className="inline-block font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4"
              style={{ color: 'rgb(111, 63, 12)' }}
            >
              Portfolio & FAQ
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-4 sm:mb-6">
              Our Work, and the Answers You Need
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
        </div>
      </section>

      {/* Single combined section: Portfolio + FAQ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Explore"
            title="Portfolio + Frequently Asked Questions"
            description="Everything in one place — see our work and get quick clarity before you reach out."
            className="mb-10 sm:mb-16"
          />

          {/* Portfolio */}
          <div id="portfolio" className="scroll-mt-28">
            <div className="flex items-end justify-between gap-4 flex-wrap mb-6 sm:mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-heading">Portfolio</h2>
                <p className="text-secondary mt-2">Selected projects across automation, AI, apps, and infrastructure.</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-start">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-bee-yellow text-bee-dark shadow-md'
                        : 'bg-white border border-bee-slate-200 text-bee-slate-700 hover:border-bee-yellow/40 hover:shadow-md'
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
                  className={`rounded-2xl ${boxFrameClass}`}
                >
                  <div className="relative overflow-hidden h-64 sm:h-56 lg:h-64 bg-bee-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-300 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bee-darker via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6 sm:p-5 lg:p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-bee-yellow/10 border border-bee-yellow/20 rounded-full text-xs font-medium text-bee-yellow">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-base lg:text-lg font-bold text-bee-black mb-2 group-hover:text-bee-yellow-dark transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-bee-slate-700 mb-4">{project.description}</p>
                    <p className="text-xs sm:text-xs lg:text-sm text-bee-slate-600 mb-4 line-clamp-2">{project.details}</p>

                    <div className="mb-4 space-y-1">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-xs sm:text-xs lg:text-sm text-bee-slate-700">
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
                          className="px-2 py-1 bg-bee-yellow/10 border border-bee-yellow/20 rounded text-xs text-bee-slate-700"
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

          {/* FAQ */}
          <div id="faq" className="scroll-mt-28 mt-14 sm:mt-18 lg:mt-20">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-heading">Frequently Asked Questions</h2>
              <p className="text-secondary mt-2">Quick answers to the most common questions.</p>
            </div>

            <div className="max-w-3xl space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  whileHover={boxHover}
                  whileTap={boxTap}
                  className="transform-gpu will-change-transform"
                >
                  <Card hover={false} padding="md" className={boxFrameClass}>
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
