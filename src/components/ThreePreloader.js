import { useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

const HERO_ASSETS = {
  glb: '/models/Bee_fbx.glb',
  textures: ['/models/gltf_embedded_0.png', '/models/gltf_embedded_3@channels=R.png'],
};

const ThreePreloader = () => {
  useEffect(() => {
    // Start loading early so the global PageLoader can wait for it.
    try {
      useGLTF.preload(HERO_ASSETS.glb);
      useTexture.preload(HERO_ASSETS.textures);
    } catch {
      // If preload fails for any reason, don't crash the app.
    }
  }, []);

  return null;
};

export default ThreePreloader;
