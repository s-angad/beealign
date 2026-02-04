import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/' },
      { name: 'How We Work', path: '/how-we-work' },
      { name: 'Our Work', path: '/work#portfolio' },
      { name: 'Contact', path: '/contact' },
    ],
    solutions: [
      { name: 'Business Automation', path: '/solutions' },
      { name: 'AI Solutions', path: '/solutions' },
      { name: 'Custom Projects', path: '/solutions' },
    ],
    offerings: [
      { name: 'Products', path: '/products' },
      { name: 'Services', path: '/services' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  return (
    <footer className="bg-bee-darker footer-accent border-t border-bee-slate-700/30 safe-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section - Full width on mobile */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 group mb-4">
                <img
                  src={logo}
                  alt="Bixxy Bee Logo"
                  className="w-11 h-11 sm:w-12 sm:h-12 object-contain"
                  style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }}
                />
                <span className="text-xl sm:text-2xl font-semibold text-bee-yellow" style={{ verticalAlign: 'middle' }}>
                  Bixxy Bee
                </span>
              </Link>
              <p className="text-bee-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                Intelligent automation solutions that transform how businesses operate. We build technology that works.
              </p>
              <div className="flex space-x-3">
                {/* Social Links */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-lg bg-bee-slate-700/50 flex items-center justify-center text-bee-slate-400 hover:text-bee-yellow active:bg-bee-yellow/20 hover:bg-bee-yellow/10 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-lg bg-bee-slate-700/50 flex items-center justify-center text-bee-slate-400 hover:text-bee-yellow active:bg-bee-yellow/20 hover:bg-bee-yellow/10 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-lg bg-bee-slate-700/50 flex items-center justify-center text-bee-slate-400 hover:text-bee-yellow active:bg-bee-yellow/20 hover:bg-bee-yellow/10 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-bee-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-bee-slate-400 hover:text-bee-yellow active:text-bee-yellow transition-colors text-sm py-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="text-bee-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Solutions</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-bee-slate-400 hover:text-bee-yellow active:text-bee-yellow transition-colors text-sm py-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offerings Links */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-bee-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Offerings</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {footerLinks.offerings.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-bee-slate-400 hover:text-bee-yellow active:text-bee-yellow transition-colors text-sm py-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 sm:mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-bee-yellow hover:text-bee-yellow-light active:text-bee-yellow-dark text-sm font-medium transition-colors py-1"
                >
                  Request a Demo
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 sm:py-6 border-t border-bee-slate-700/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-bee-slate-400 text-xs sm:text-sm text-center sm:text-left">
              Ã‚Â© 2025 Bixxy Bee. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <Link to="/privacy" className="text-bee-slate-400 hover:text-bee-yellow active:text-bee-yellow text-xs sm:text-sm transition-colors py-1">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-bee-slate-400 hover:text-bee-yellow active:text-bee-yellow text-xs sm:text-sm transition-colors py-1">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
