import React, { useRef } from 'react';

const HoneycombStructure = ({ enableParallax = false, count }) => {
  const containerRef = useRef(null);

  // NOTE: Parallax intentionally disabled (no scroll/mouse listeners) for performance.
  // `enableParallax` is kept only for API compatibility.

  // Define hexagon panels with varying sizes, positions, and depths
  const basePanels = [
    // Large background hexagons - Deep background layer
    { size: 480, x: 15, y: 10, depth: 0.5, opacity: 0.12, blur: 4, zIndex: 1, scale: 0.9 },
    { size: 420, x: 65, y: 25, depth: 0.8, opacity: 0.10, blur: 3.5, zIndex: 1, scale: 0.92 },
    
    // Mid-layer hexagons - Middle depth
    { size: 320, x: 75, y: 55, depth: 1.5, opacity: 0.18, blur: 2, zIndex: 2, scale: 0.95 },
    { size: 350, x: 10, y: 35, depth: 1.8, opacity: 0.15, blur: 2.2, zIndex: 2, scale: 0.96 },
    
    // Foreground accents - Close to viewer
    { size: 240, x: 55, y: 15, depth: 2.8, opacity: 0.22, blur: 0.3, zIndex: 3, scale: 0.98 },
    { size: 220, x: 88, y: 70, depth: 3.2, opacity: 0.19, blur: 0.2, zIndex: 3, scale: 0.99 },
    { size: 180, x: 92, y: 40, depth: 3.5, opacity: 0.68, blur: 0, zIndex: 4, scale: 1.02 },
  ];

  // Select a balanced subset across depths when a count is provided
  const hexPanels = (() => {
    if (!count || count >= basePanels.length) return basePanels;
    const clamped = Math.max(1, Math.min(count, basePanels.length));
    const step = Math.ceil(basePanels.length / clamped);
    const selected = [];
    for (let i = 0; i < basePanels.length && selected.length < clamped; i += step) {
      selected.push(basePanels[i]);
    }
    return selected;
  })();

  return (
    <div 
      ref={containerRef}
      className="honeycomb-3d-structure"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {hexPanels.map((panel, index) => (
        <div
          key={index}
          className="hex-panel"
          data-depth={panel.depth}
          style={{
            position: 'absolute',
            left: `${panel.x}%`,
            top: `${panel.y}%`,
            width: `${panel.size}px`,
            height: `${panel.size}px`,
            zIndex: panel.zIndex,
            opacity: panel.opacity,
            // Avoid expensive blur/filter and animated transforms.
            filter: 'none',
            transform: `scale(${panel.scale || 1})`,
          }}
        >
          <svg
            viewBox="0 0 100 100"
            style={{
              width: '100%',
              height: '100%',
              filter: 'none',
            }}
          >
            <defs>
              <linearGradient id={`hexGrad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#fffbf0" stopOpacity="0.92" />
                <stop offset="100%" stopColor="#fef3d8" stopOpacity="0.88" />
              </linearGradient>
            </defs>
            
            {/* Main hexagon */}
            <polygon
              points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
              fill={`url(#hexGrad${index})`}
              stroke="rgba(209, 154, 0, 0.25)"
              strokeWidth="0.8"
            />
            
            {/* Inner accent */}
            <polygon
              points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5"
              fill="none"
              stroke="rgba(255, 215, 0, 0.18)"
              strokeWidth="0.5"
            />
            
            {/* Embossed highlight */}
            <polygon
              points="50,8 88,29 88,71 50,92 12,71 12,29"
              fill="none"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="5,5"
              opacity="1"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default HoneycombStructure;
