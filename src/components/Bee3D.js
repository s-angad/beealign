
import React, { useEffect, useMemo, useRef } from 'react';
import { useAnimations, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export function Bee3D({ onHoverChange, ...props }) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/Bee_fbx.glb');

  // Performance: this hero uses a single instance, so avoid expensive SkeletonUtils cloning.
  // (If multiple instances are needed later, re-introduce cloning intentionally.)
  const modelScene = useMemo(() => scene, [scene]);
  const { actions } = useAnimations(animations, group);

  // Load external textures
  const textures = useTexture({
    baseColor: '/models/gltf_embedded_0.png',
    roughness: '/models/gltf_embedded_3@channels=R.png',
  });

  // Fix texture orientation and color space


  // Apply textures and material settings to all meshes
  useEffect(() => {
    if (!modelScene || !textures?.baseColor) return;

    modelScene.traverse((child) => {
      if (!child.isMesh) return;

      // Keep the model appearance unchanged: allow casting a ground shadow,
      // but don't receive shadows (avoids self-shadow/lighting changes).
      child.castShadow = true;
      child.receiveShadow = false;


      const apply = (material) => {
        if (!material) return;

        let changed = false;

        if (!material.map) {
          material.map = textures.baseColor;
          changed = true;
        }
        if (textures.roughness && !material.roughnessMap) {
          material.roughnessMap = textures.roughness;
          changed = true;
        }

        if (material.metalness !== 0.1) {
          material.metalness = 0.1;
          changed = true;
        }
        if (material.roughness !== 0.6) {
          material.roughness = 0.6;
          changed = true;
        }
        material.transparent = false;
        material.opacity = 1;

        if (changed) material.needsUpdate = true;
      };

      if (Array.isArray(child.material)) {
        child.material.forEach(apply);
      } else {
        apply(child.material);
      }
    });
  }, [modelScene, textures]);

  // Play first hover animation (loop)
  useEffect(() => {
    if (!actions || Object.keys(actions).length === 0) return;

    // Respect reduced-motion: keep the model static.
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    Object.values(actions).forEach((action) => action?.stop());

    const hoverKey = Object.keys(actions).find((name) =>
      name.toLowerCase().includes('hover')
    );
    const hoverAction = hoverKey ? actions[hoverKey] : Object.values(actions)[0];
    if (!hoverAction) return;

    hoverAction.reset();
    hoverAction.setLoop(THREE.LoopRepeat, Infinity);
    hoverAction.play();

    return () => {
      Object.values(actions).forEach((action) => action?.stop());
    };
  }, [actions]);

  const firstAction = useMemo(() => {
    if (!actions || Object.keys(actions).length === 0) return null;
    const hoverKey = Object.keys(actions).find((name) =>
      name.toLowerCase().includes('hover')
    );
    return hoverKey ? actions[hoverKey] : Object.values(actions)[0];
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive
        object={modelScene}
        onPointerOver={(e) => {
          e.stopPropagation();
          if (onHoverChange) onHoverChange(true);
          if (firstAction) firstAction.timeScale = 1.35;
          if (typeof document !== 'undefined') document.body.style.cursor = 'grab';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          if (onHoverChange) onHoverChange(false);
          if (firstAction) firstAction.timeScale = 1;
          if (typeof document !== 'undefined') document.body.style.cursor = '';
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
          if (typeof document !== 'undefined') document.body.style.cursor = 'grabbing';
        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          if (typeof document !== 'undefined') document.body.style.cursor = 'grab';
        }}
      />
    </group>
  );
}

useGLTF.preload('/models/Bee_fbx.glb');

export default Bee3D;
