import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components';

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const workProjects = [
    {
      id: 1,
      title: 'Business Process Automation',
      category: 'automation',
      image: '/images/work-project-1.jpg',
      description: 'Streamlined enterprise workflow with 60% efficiency gain',
      details: 'Automated complex business processes for a Fortune 500 company, reducing manual work by 60% and improving accuracy.',
      results: ['60% efficiency gain', '40% cost reduction', '99.9% uptime'],
      technologies: ['Python', 'RPA', 'Cloud'],
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Platform',
      category: 'ai',
      image: '/images/work-project-2.jpg',
      description: 'Real-time data insights with machine learning',
      details: 'Built a comprehensive analytics platform using machine learning to provide real-time insights and predictive analysis.',
      results: ['Real-time insights', '95% accuracy', '10x faster analysis'],
      technologies: ['Python', 'TensorFlow', 'React'],
    },
    {
      id: 3,
      title: 'Custom ERP System',
      category: 'custom',
      image: '/images/work-project-3.jpg',
      description: 'End-to-end enterprise resource planning solution',
      details: 'Developed a fully customized ERP system tailored to client\'s specific business needs with seamless integration.',
      results: ['100% integration', 'Multi-module system', 'Scalable architecture'],
      technologies: ['Node.js', 'React', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'Mobile App Development',
      category: 'mobile',
      image: '/images/work-project-4.jpg',
      description: 'Cross-platform mobile solution for iOS and Android',
      details: 'Created a feature-rich mobile application deployed on both iOS and Android with offline capabilities.',
      results: ['4.8★ rating', '100K+ downloads', '95% retention'],
      technologies: ['React Native', 'Firebase', 'Node.js'],
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Migration',
      category: 'infrastructure',
      image: '/images/work-project-5.jpg',
      description: 'Seamless migration to cloud with zero downtime',
      details: 'Migrated legacy systems to modern cloud infrastructure with zero downtime and improved performance.',
      results: ['Zero downtime', '3x performance', '40% cost savings'],
      technologies: ['AWS', 'Docker', 'Kubernetes'],
    },
    {
      id: 6,
      title: 'Web Application Suite',
      category: 'web',
      image: '/images/work-project-6.jpg',
      description: 'Comprehensive web platform with real-time collaboration',
      details: 'Built a modern web application suite with real-time collaboration features and advanced security protocols.',
      results: ['Real-time sync', 'Enterprise security', '99.95% uptime'],
      technologies: ['React', 'Node.js', 'WebSocket'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'automation', label: 'Automation' },
    { id: 'ai', label: 'AI Solutions' },
    { id: 'custom', label: 'Custom Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'web', label: 'Web Apps' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? workProjects
    : workProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-14 sm:pt-16 lg:pt-20">
      <Helmet>
        <title>Our Work | Bixxy Bee</title>
        <meta name="description" content="Explore Bixxy Bee projects and case studies. See how we help businesses automate and scale with intelligent solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-hero-dual-vignette bg-grid py-12 sm:py-16 lg:py-20 section-fade-bottom">

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bee-white leading-tight mb-4 sm:mb-6">
            Our Work
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-bee-slate-400 leading-relaxed max-w-2xl mx-auto">
            Showcasing successful projects where we've helped businesses transform, automate, and scale with intelligent solutions.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-10 lg:py-12 bg-bee-darker section-fade-top section-fade-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-bee-yellow text-bee-darker'
                    : 'bg-bee-slate-600/50 text-bee-slate-300 hover:bg-bee-slate-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-bee-darker section-fade-top section-fade-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden bg-bee-slate-700/50 border border-bee-slate-700/50 hover:border-bee-yellow/30 transition-all duration-300 hover:shadow-lg hover:shadow-bee-yellow/10"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64 sm:h-56 lg:h-64 bg-bee-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bee-darker via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-5 lg:p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-bee-yellow/10 border border-bee-yellow/20 rounded-full text-xs font-medium text-bee-yellow">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-base lg:text-lg font-bold text-bee-white mb-2 group-hover:text-bee-yellow transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-bee-slate-400 mb-4">
                    {project.description}
                  </p>

                  {/* Details */}
                  <p className="text-xs sm:text-xs lg:text-sm text-bee-slate-500 mb-4 line-clamp-2">
                    {project.details}
                  </p>

                  {/* Results */}
                  <div className="mb-4 space-y-1">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-xs sm:text-xs lg:text-sm text-bee-slate-400">
                        <svg className="w-3 h-3 mr-2 text-bee-yellow" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-bee-slate-600/50 rounded text-xs text-bee-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-hero-gradient relative section-fade-top">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-bee-yellow/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-bee-white mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg text-bee-slate-400 mb-8 sm:mb-10 max-w-xl mx-auto">
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button to="/contact" variant="primary" size="lg" fullWidthMobile>
              Request a Demo
            </Button>
            <Button to="/solutions" variant="outline" size="lg" fullWidthMobile>
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
