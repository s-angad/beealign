import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useProgress } from '@react-three/drei';
import { Layout } from './components';
import PageLoader from './components/PageLoader';
import ThreePreloader from './components/ThreePreloader';
import { Home, Solutions, Products, Services, HowWeWork, PortfolioFaq, Contact, Privacy, Terms } from './pages';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace('#', '');
    let cancelled = false;
    let attempts = 0;

    const tryScroll = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      attempts += 1;
      if (attempts < 10) {
        window.setTimeout(tryScroll, 50);
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.setTimeout(tryScroll, 0);
    return () => {
      cancelled = true;
    };
  }, [pathname, hash]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [minDelayDone, setMinDelayDone] = useState(false);
  const [domReady, setDomReady] = useState(false);
  const [sawThreeAssets, setSawThreeAssets] = useState(false);

  const { active, progress, loaded, total, errors } = useProgress();

  useEffect(() => {
    // Keep a tiny minimum so the loader doesn't flash.
    const timer = window.setTimeout(() => setMinDelayDone(true), 450);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Wait for initial DOM/assets load (fonts/images etc). On SPA this runs once.
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    if (document.readyState === 'complete') {
      setDomReady(true);
      return;
    }

    const onLoad = () => setDomReady(true);
    window.addEventListener('load', onLoad, { once: true });
    return () => window.removeEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    // Mark that three assets have begun (prevents false "ready" before preloads start).
    if (!sawThreeAssets && (active || total > 0)) setSawThreeAssets(true);
  }, [active, total, sawThreeAssets]);

  const threeReady = useMemo(() => {
    // If anything fails to load, don't block the whole site forever.
    if (errors && errors.length > 0) return true;

    // If we never kicked off any Three loads, consider it ready.
    if (!sawThreeAssets) return true;

    // Once we started loading, wait for it to finish.
    if (active) return false;
    if (total > 0) return loaded >= total;
    return progress >= 100;
  }, [active, progress, loaded, total, errors, sawThreeAssets]);

  const readyToShowApp = minDelayDone && domReady && threeReady;

  useEffect(() => {
    if (!isLoading) return;
    if (readyToShowApp) setIsLoading(false);
  }, [readyToShowApp, isLoading]);

  return (
    <HelmetProvider>
      {/* Preload critical Three.js assets (bee model + textures) before the loader exits */}
      <ThreePreloader />
      <PageLoader isLoading={isLoading} />
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/work" element={<PortfolioFaq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
