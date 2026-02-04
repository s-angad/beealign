import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  // Performance-first: no scroll listeners.
  const navStyle = useMemo(() => {
    // Keep hero readable while letting the bee show through.
    const baseBackground = isHome ? 'rgba(255, 255, 255, 0.72)' : 'rgba(255, 255, 255, 0.94)';
    const backgroundColor = isMobileMenuOpen ? 'rgba(255, 255, 255, 0.96)' : baseBackground;

    const backgroundImage = isMobileMenuOpen
      ? 'linear-gradient(180deg, rgba(15, 23, 42, 0.10) 0%, rgba(255, 255, 255, 0) 85%)'
      : isHome
        ? 'linear-gradient(180deg, rgba(15, 23, 42, 0.22) 0%, rgba(15, 23, 42, 0.10) 52%, rgba(255, 255, 255, 0) 100%)'
        : 'linear-gradient(180deg, rgba(15, 23, 42, 0.16) 0%, rgba(255, 255, 255, 0) 85%)';

    return {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor,
      backgroundImage,
      borderBottom: isHome ? '1px solid rgba(15, 23, 42, 0.14)' : '1px solid rgba(15, 23, 42, 0.10)',
      transition: 'background-color 0.2s ease, border-color 0.2s ease, background-image 0.2s ease',
    };
  }, [isHome, isMobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Portfolio', path: '/work#portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    const basePath = String(path).split('#')[0];
    return location.pathname === basePath;
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        style={navStyle}
        className="nav-accent backdrop-blur-md bg-white/60 border-b border-white/30 shadow-lg"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }} className="navbar-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="navbar-inner">
            {/* Logo */}
            <Link to="/" className="navbar-logo" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '2px', 
              textDecoration: 'none',
            }}>
              <div className="logo-wrapper" style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div className="logo-glow" style={{
                  position: 'absolute',
                  background: 'radial-gradient(circle, rgba(255, 215, 0, 0.25) 0%, transparent 70%)',
                  borderRadius: '50%',
                  opacity: 0.9,
                }} />
                <img 
                  src={logo} 
                  alt="Bixxy Bee Logo" 
                  className="logo-img img-bounce"
                  style={{ 
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                <span className="brand-text" style={{ 
                  fontWeight: 700, 
                  color: '#FFD700',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}>Bixxy Bee</span>
              </div>
            </Link>
            {/* Desktop Navigation */}
            <div className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '4px' }}>
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                    boxShadow: '0 4px 16px rgba(15,23,42,0.12)',
                  }}
                  style={{ display: 'inline-block', borderRadius: '8px' }}
                >
                  <motion.span
                    whileHover={{
                      color: '#e6c578', // gold accent on hover
                      backgroundColor: 'rgba(255, 215, 0, 0.10)',
                    }}
                    transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                    style={{
                      display: 'inline-block',
                      borderRadius: '8px',
                      padding: '0',
                    }}
                  >
                    <Link
                      to={link.path}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: isActive(link.path) ? '#D19A00' : '#0F172A',
                        backgroundColor: isActive(link.path) ? 'rgba(255, 215, 0, 0.14)' : 'transparent',
                        textDecoration: 'none',
                        transition: 'color 0.18s, background 0.18s',
                        boxShadow: 'none',
                        display: 'inline-block',
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.span>
                </motion.div>
              ))}
            </div>
            {/* Desktop CTA */}
            <div className="desktop-cta" style={{ display: 'none' }}>
              <motion.div
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  boxShadow: '0 4px 16px rgba(15,23,42,0.12)',
                }}
                transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                style={{ display: 'inline-block', borderRadius: '8px' }}
              >
                <motion.span
                  whileHover={{
                    color: '#e6c578',
                    backgroundColor: 'rgba(255, 215, 0, 0.10)',
                  }}
                  transition={{ type: 'spring', stiffness: 340, damping: 22 }}
                  style={{ display: 'inline-block', borderRadius: '8px', padding: '0' }}
                >
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '10px 20px',
                      backgroundColor: '#e6c578',
                      color: '#5e594c',
                      fontSize: '14px',
                      fontWeight: 500,
                      borderRadius: '8px',
                      textDecoration: 'none',
                      border: '1px solid brown',
                      transition: 'color 0.18s, background 0.18s',
                      boxShadow: 'none',
                    }}
                  >
                    Get Started
                  </Link>
                </motion.span>
              </motion.div>
            </div>
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="mobile-menu-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
              aria-label="Open menu"
            >
              <img
                src={logo}
                alt="Bixxy Bee Logo"
                className="logo-img"
                style={{ objectFit: 'contain' }}
              />
              <span className="brand-text" style={{ color: '#FFD700', fontWeight: 600 }}>
                Bixxy Bee
              </span>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Overlay */}
      <div
        className="mobile-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.28)',
          zIndex: 1001,
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.25s ease, visibility 0.25s ease',
        }}
        onClick={closeMenu}
        aria-hidden={!isMobileMenuOpen}
      />
      {/* Mobile Side Drawer */}
      <div
        className="mobile-drawer drawer-accent"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '80%',
          maxWidth: '320px',
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          zIndex: 1002,
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.25s ease-out',
          overflowY: 'auto',
          overflowX: 'hidden',
          boxShadow: isMobileMenuOpen ? '0 8px 24px rgba(15, 23, 42, 0.10)' : 'none',
          borderRight: '1px solid rgba(15, 23, 42, 0.08)',
        }}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Drawer Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 20px',
          borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
        }}>
          <Link to="/" onClick={closeMenu} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2px', 
            textDecoration: 'none' 
          }}>
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                position: 'absolute',
                width: '64px',
                height: '64px',
                background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                opacity: 0.9,
              }} />
              <img 
                src={logo} 
                alt="Bixxy Bee Logo" 
                className="img-bounce"
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </div>
            <span style={{ 
              fontSize: '26px', 
              fontWeight: 700, 
              color: '#0F172A',
              letterSpacing: '-0.02em',
            }}>Bixxy Bee</span>
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            style={{
              padding: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              color: '#334155',
            }}
            aria-label="Close menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <nav style={{ padding: '20px 16px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              style={{
                display: 'block',
                padding: '14px 16px',
                marginBottom: '4px',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: 500,
                color: isActive(link.path) ? '#D19A00' : '#0F172A',
                backgroundColor: isActive(link.path) ? 'rgba(255, 215, 0, 0.14)' : 'transparent',
                textDecoration: 'none',
                transition: 'background-color 0.15s ease',
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* CTA Button */}
        <div style={{ padding: '0 16px 24px 16px' }}>
          <Link
            to="/contact"
            onClick={closeMenu}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '14px 16px',
              backgroundColor: '#4F46E5',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 500,
              borderRadius: '10px',
              textDecoration: 'none',
            }}
          >
            Get Started
            <svg
              style={{ marginLeft: '8px', width: '18px', height: '18px' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
      {/* Responsive CSS */}
      <style>{`
        /* Navbar base styles */
        .navbar-inner {
          height: 72px;
        }
        .logo-img {
          width: 68px;
          height: 68px;
        }
        .logo-glow {
          width: 76px;
          height: 76px;
        }
        .brand-text {
          font-size: 30px;
        }
        
        /* Mobile styles */
        @media (max-width: 767px) {
          .navbar-container {
            padding: 0 16px !important;
          }
          .navbar-inner {
            height: 64px !important;
          }
          .navbar-logo {
            gap: 4px !important;
          }
          .logo-img {
            width: 44px !important;
            height: 44px !important;
          }
          .logo-glow {
            width: 52px !important;
            height: 52px !important;
          }
          .brand-text {
            font-size: 22px !important;
          }
        }
        
        /* Tablet styles */
        @media (min-width: 768px) and (max-width: 1023px) {
          .navbar-inner {
            height: 68px !important;
          }
          .logo-img {
            width: 56px !important;
            height: 56px !important;
          }
          .logo-glow {
            width: 64px !important;
            height: 64px !important;
          }
          .brand-text {
            font-size: 26px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-drawer { display: none !important; }
          .mobile-overlay { display: none !important; }
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: block !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .mobile-drawer {
            width: 65% !important;
            max-width: 400px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .mobile-drawer,
          .mobile-overlay {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;