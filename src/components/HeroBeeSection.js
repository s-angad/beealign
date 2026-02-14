
import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

import Bee3D from './Bee3D';
import Button from './Button';
import HoneycombClusters from './HoneycombClusters';
import logo from '../assets/logo-trim.png';

const HeroBeeSection = () => {
  const [heroBreakpoint, setHeroBreakpoint] = useState('desktop');
  const cameraRef = useRef(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  const isMobileHero = heroBreakpoint === 'mobile';
  const allowInteraction = heroBreakpoint === 'desktop';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Defensive: avoid hard-crashing if the browser/GPU can’t create a WebGL context.
    // This can happen on low-memory GPUs or when hardware acceleration is disabled.
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const attributes = {
          alpha: true,
          antialias: !isMobileHero,
          depth: true,
          stencil: false,
          preserveDrawingBuffer: false,
          powerPreference: 'high-performance',
        };

        const gl2 = canvas.getContext('webgl2', attributes);
        if (gl2) {
          gl2.getExtension('WEBGL_lose_context')?.loseContext?.();
          return true;
        }
        const gl = canvas.getContext('webgl', attributes) || canvas.getContext('experimental-webgl', attributes);
        if (gl) {
          gl.getExtension('WEBGL_lose_context')?.loseContext?.();
          return true;
        }
        return false;
      } catch {
        return false;
      }
    };

    setWebglSupported(checkWebGL());
  }, [isMobileHero]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mqMobile = window.matchMedia('(max-width: 639px)');
    const mqDesktop = window.matchMedia('(min-width: 1024px)');

    const compute = () => {
      if (mqMobile.matches) return 'mobile';
      if (mqDesktop.matches) return 'desktop';
      return 'tablet';
    };

    const onChange = () => setHeroBreakpoint(compute());
    onChange();

    const add = (mql) => {
      if (!mql) return;
      if (typeof mql.addEventListener === 'function') {
        mql.addEventListener('change', onChange);
        return;
      }
      if (typeof mql.addListener === 'function') {
        mql.addListener(onChange);
      }
    };

    const remove = (mql) => {
      if (!mql) return;
      if (typeof mql.removeEventListener === 'function') {
        mql.removeEventListener('change', onChange);
        return;
      }
      if (typeof mql.removeListener === 'function') {
        mql.removeListener(onChange);
      }
    };

    add(mqMobile);
    add(mqDesktop);

    return () => {
      remove(mqMobile);
      remove(mqDesktop);
    };
  }, []);

  const dpr = useMemo(() => {
    if (typeof window === 'undefined') return [1, 1.2];
    // Cap DPR for performance and mobile browser stability.
    const maxDpr = isMobileHero ? 1 : 1.2;
    const current = window.devicePixelRatio || 1;
    return [1, Math.min(current, maxDpr)];
  }, [isMobileHero]);

  const heroModelConfig = useMemo(() => {
    // Goal:
    // - Mobile: bee centered lower so it appears below the headline/CTAs
    // - Tablet: slightly less right-shifted than desktop
    // - Desktop: keep existing placement
    if (heroBreakpoint === 'mobile') {
      return {
        scale: 0.14,
        position: [0.35, -8.6, -0.6],
        // Less pitch so it doesn't feel like a top-down view on mobile.
        rotation: [0.03, -Math.PI * 0.35, 0.18],
        target: [0.1, -5.15, -0.6],
        cameraPosition: [0.1, -5.15, 6.4],
        fov: 48,
      };
    }

    if (heroBreakpoint === 'tablet') {
      return {
        scale: 0.21,
        position: [3.1, -4.75, -0.6],
        rotation: [0.14, -Math.PI * 0.6, 0.24],
        target: [1.65, -1.5, -0.6],
        cameraPosition: [0, 1.2, 5],
        fov: 50,
      };
    }

    return {
      scale: 0.23,
      position: [4.25, -4, -0.6],
      rotation: [0.15, -Math.PI * 0.6, 0.25],
      target: [2.1, -1.15, -0.6],
      cameraPosition: [0, 1.2, 5],
      fov: 50,
    };
  }, [heroBreakpoint]);

  const orbitPolarLimits = useMemo(() => {
    if (heroBreakpoint !== 'mobile') return {};
    // Keep interaction feeling horizontal on mobile (avoid overhead angle).
    return {
      minPolarAngle: Math.PI / 2 - 0.18,
      maxPolarAngle: Math.PI / 2 + 0.55,
    };
  }, [heroBreakpoint]);

  const shadowConfig = useMemo(() => {
    // Mobile Safari/low-memory GPUs can crash with large shadow maps.
    // Disable shadows on mobile, and keep map sizes sane elsewhere.
    if (isMobileHero) return { enabled: false, mapSize: 0 };
    if (heroBreakpoint === 'tablet') return { enabled: true, mapSize: 2048 };
    return { enabled: true, mapSize: 4096 };
  }, [heroBreakpoint, isMobileHero]);

  useEffect(() => {
    // Defensive: during viewport transitions (e.g. closing DevTools), the R3F default camera
    // can briefly switch. Only mount controls once the camera ref is established.
    setCameraReady(false);
  }, [heroBreakpoint]);

  return (
    <section className="relative h-screen w-full overflow-visible canvas-chamber">
      {/* Three.js Canvas Layer (z-10) */}
      <div className="absolute inset-0 z-10 overflow-visible honeycomb-stage bg-hero-dual-vignette">
        {/* Subtle dark vignette behind the bee for contrast (no model changes). */}
        <div className="absolute inset-0 z-0 pointer-events-none bee-vignette" aria-hidden="true" />

        {/* Honeycomb clusters (canvas-only): visible over canvas, under hero text */}
        <div className="absolute inset-0 z-[30] pointer-events-none" aria-hidden="true">
          <HoneycombClusters />
        </div>

        <div className="absolute inset-0 z-10">
          {webglSupported ? (
            <Canvas
              // Performance-first renderer settings
              frameloop="always"
              dpr={dpr}
              shadows={shadowConfig.enabled ? { type: THREE.PCFShadowMap } : false}
              gl={{
                antialias: !isMobileHero,
                alpha: true,
                powerPreference: 'high-performance',
                toneMapping: THREE.ACESFilmicToneMapping,
                stencil: false,
                depth: true,
                preserveDrawingBuffer: false,
              }}
              // Interactive canvas (drag to rotate)
              style={{ width: '100%', height: '100%', pointerEvents: allowInteraction ? 'auto' : 'none' }}
              onCreated={({ gl }) => {
                // Avoid the red error overlay if the context is lost mid-session.
                const onLost = (e) => {
                  e.preventDefault?.();
                  setWebglSupported(false);
                };

                gl?.domElement?.addEventListener?.('webglcontextlost', onLost, { passive: false });
              }}
            >
              <PerspectiveCamera
                makeDefault
                ref={cameraRef}
                position={heroModelConfig.cameraPosition}
                fov={heroModelConfig.fov}
                onUpdate={(cam) => {
                  cam.updateProjectionMatrix();
                  if (!cameraReady) setCameraReady(true);
                }}
              />

              <Suspense fallback={null}>
                {/* Model */}
                <Bee3D
                  // Hero placement: keep the bee readable and centered on the right
                  scale={heroModelConfig.scale}
                  position={heroModelConfig.position}
                  rotation={heroModelConfig.rotation}
                />
              </Suspense>

              {/* Lightweight controls: rotate-only, no damping (avoids extra per-frame work) */}
              {cameraReady && cameraRef.current ? (
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
                  // Ensure OrbitControls always has a stable camera instance.
                  camera={cameraRef.current}
                  // Orbit around the bee (matches user expectation)
                  target={heroModelConfig.target}
                  {...orbitPolarLimits}
                />
              ) : null}

              {/* Lighting (ground shadow restored; model does not receive shadows) */}
              <ambientLight intensity={3} />
              <directionalLight
                position={[6, 6, 6]}
                intensity={2.2}
                castShadow={shadowConfig.enabled}
                shadow-mapSize={shadowConfig.enabled ? [shadowConfig.mapSize, shadowConfig.mapSize] : undefined}
                shadow-bias={-0.00015}
                shadow-normalBias={0.02}
                shadow-radius={0}
                shadow-camera-near={0.5}
                shadow-camera-far={50}

                shadow-camera-left={-30}
                shadow-camera-right={30}
                shadow-camera-top={30}
                shadow-camera-bottom={-30}
              />
              <hemisphereLight intensity={0.5} groundColor="#0b1220" />

              {/* Invisible receiver plane: renders only the bee shadow */}
              {shadowConfig.enabled ? (
                <mesh
                  position={[2.1, -3.85, -0.6]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  receiveShadow
                >
                  {/* Large receiver so the shadow can't hit the edge and clip */}
                  <planeGeometry args={[120, 120]} />
                  <shadowMaterial transparent opacity={0.22} />
                </mesh>
              ) : null}
            </Canvas>
          ) : null}
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-20 flex h-full items-start sm:items-center pointer-events-none">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:py-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="flex justify-center">
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm"
                style={{
                  color: 'rgb(121, 84, 45)',
                  border: '2px solid rgb(245, 179, 109)',
                  backgroundColor: 'rgba(245, 179, 109, 0.12)',
                }}
              >

                <span className="h-2 w-2 rounded-full bg-bee-yellow" />
                Technology & Automation Solutions
              </div>
            </div>

            {/* Logo above headline */}
            <div className="mb-4 sm:mb-5">
              <img
                src={logo}
                alt="BeeAlign"
                style={{ width: isMobileHero ? '150px' : '350px', height: 'auto' }}
              />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-bee-white">
              Intelligent <span className="text-bee-yellow" style={{ color: "rgb(245, 179, 109)" }}>Automation</span>
              <br />
              For Every Business
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed" style={{ color: "rgb(92, 69, 38)" }}>
              We build smart, reliable automation solutions that transform business operations.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 pointer-events-auto">
              <Button to="/solutions" variant="primary" size="lg" fullWidthMobile>
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
