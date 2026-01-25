import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

import Bee3D from './Bee3D';
import Button from './Button';
import HoneycombClusters from './HoneycombClusters';

const HeroBeeSection = () => {
  const dpr = useMemo(() => {
    if (typeof window === 'undefined') return [1, 1.2];
    // Cap DPR for performance and browser compatibility.
    const maxDpr = 1.2;
    const current = window.devicePixelRatio || 1;
    return [1, Math.min(current, maxDpr)];
  }, []);

  return (
    <section className="relative h-screen w-full overflow-visible canvas-chamber">
      {/* Three.js Canvas Layer (z-10) */}
      <div className="absolute inset-0 z-10 overflow-visible glass-panel honeycomb-stage">
        {/* Honeycomb clusters (canvas-only): visible over canvas, under hero text */}
        <div className="absolute inset-0 z-[30] pointer-events-none" aria-hidden="true">
          <HoneycombClusters />
        </div>

        <div className="absolute inset-0 z-10">
          <Canvas
            // Performance-first renderer settings
            frameloop="always"
            dpr={dpr}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
              toneMapping: THREE.ACESFilmicToneMapping,
              stencil: false,
              depth: true,
              preserveDrawingBuffer: false,
            }}
            // Interactive canvas (drag to rotate)
            style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
            camera={{ position: [0, 1.2, 5], fov: 50 }}
          >
            <PerspectiveCamera makeDefault position={[0, 1.2, 5]} fov={50} />

            <Suspense fallback={null}>
              {/* Model */}
              <Bee3D
                // Hero placement: keep the bee readable and centered on the right
                scale={0.23}
                position={[4, -3, -0.6]}
                rotation={[0.15, -Math.PI * 0.6, 0.25]}
              />
            </Suspense>

            {/* Lightweight controls: rotate-only, no damping (avoids extra per-frame work) */}
            <OrbitControls
              // “Normal” interaction: drag to rotate, wheel to zoom.
              enabled
              enablePan={false}
              enableZoom={false}
              enableDolly={false}
              // Smooth interaction
              enableDamping
              dampingFactor={0.1}
              rotateSpeed={0.4}
              // Orbit around the bee (matches user expectation)
              target={[2.1, -1.15, -0.6]}
            />

            {/* Lighting (shadows disabled for stability/perf across browsers) */}
            <ambientLight intensity={3} />
            <directionalLight position={[6, 6, 6]} intensity={2.2} />
            <hemisphereLight intensity={0.5} groundColor="#0b1220" />
          </Canvas>
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-20 flex h-full items-center pointer-events-none">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="flex justify-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-bee-yellow/20 bg-bee-yellow/10 px-4 py-2 text-xs sm:text-sm text-bee-yellow">
                <span className="h-2 w-2 rounded-full bg-bee-yellow" />
                Technology & Automation Solutions
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-bee-white">
              Intelligent <span className="text-bee-yellow">Automation</span>
              <br />
              For Every Business
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
              We build smart, reliable automation solutions that transform business operations.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 pointer-events-auto">
              <Button to="/solutions" size="lg" fullWidthMobile>
                Explore Solutions
              </Button>
              <Button to="/contact" variant="outline" size="lg" fullWidthMobile>
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBeeSection;
