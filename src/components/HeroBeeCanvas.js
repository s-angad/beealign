import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

import Bee3D from './Bee3D';

const InvalidateOnInteraction = ({ hovering }) => {
  const { invalidate } = useThree();

  useFrame(() => {
    if (hovering) invalidate();
  });

  return null;
};

const InvalidateLoop = ({ active = false, fps = 30 }) => {
  const { invalidate } = useThree();

  useEffect(() => {
    if (!active) return;

    let cancelled = false;
    let timeoutId;

    const intervalMs = Math.max(16, Math.floor(1000 / Math.max(1, fps)));

    const tick = () => {
      if (cancelled) return;

      // Pause work when the tab is hidden.
      if (typeof document !== 'undefined' && document.hidden) {
        timeoutId = window.setTimeout(tick, intervalMs);
        return;
      }

      invalidate();
      timeoutId = window.setTimeout(tick, intervalMs);
    };

    tick();

    return () => {
      cancelled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [active, fps, invalidate]);

  return null;
};

const Controls = ({ cameraRef, heroModelConfig, orbitPolarLimits }) => {
  const { invalidate } = useThree();

  if (!cameraRef.current) return null;

  return (
    <OrbitControls
      enabled
      enablePan={false}
      enableZoom={false}
      enableDolly={false}
      enableDamping={false}
      rotateSpeed={0.4}
      camera={cameraRef.current}
      target={heroModelConfig.target}
      onChange={invalidate}
      {...orbitPolarLimits}
    />
  );
};

const HeroBeeCanvas = ({ heroModelConfig, orbitPolarLimits, isMobileHero }) => {
  const cameraRef = useRef(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const dpr = useMemo(() => {
    if (typeof window === 'undefined') return [1, 1.1];
    const current = window.devicePixelRatio || 1;
    const maxDpr = isMobileHero ? 1 : 1.1;
    return [1, Math.min(current, maxDpr)];
  }, [isMobileHero]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mqDesktop = window.matchMedia('(min-width: 1024px)');

    const update = () => setIsDesktop(Boolean(mqDesktop.matches));
    update();

    if (typeof mqDesktop.addEventListener === 'function') {
      mqDesktop.addEventListener('change', update);
      return () => mqDesktop.removeEventListener('change', update);
    }

    if (typeof mqDesktop.addListener === 'function') {
      mqDesktop.addListener(update);
      return () => mqDesktop.removeListener(update);
    }

    return undefined;
  }, []);

  const allowInteraction = isDesktop;

  return (
    <Canvas
      linear
      frameloop="demand"
      dpr={dpr}
      shadows={false}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
    toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
        stencil: false,
        depth: true,
        preserveDrawingBuffer: false,
        physicallyCorrectLights: true,

      }}
      style={{ width: '100%', height: '100%', pointerEvents: allowInteraction ? 'auto' : 'none' }}
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
        <Bee3D
          scale={heroModelConfig.scale}
          position={heroModelConfig.position}
          rotation={heroModelConfig.rotation}
          onHoverChange={setHovering}
        />
      </Suspense>

      <InvalidateOnInteraction hovering={hovering} />
      <InvalidateLoop active={!prefersReducedMotion} fps={30} />

      {cameraReady ? (
        <Controls
          cameraRef={cameraRef}
          heroModelConfig={heroModelConfig}
          orbitPolarLimits={orbitPolarLimits}
        />
      ) : null}

      <ambientLight intensity={1.4} />

      <directionalLight
        position={[4, 6, 4]}
        intensity={1.4}
      />

      <hemisphereLight
        intensity={0.8}
        groundColor="#1a1a1a"
      />

    </Canvas>
  );
};

export default HeroBeeCanvas;
