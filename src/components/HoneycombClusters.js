import React, { useMemo } from 'react';

/**
 * STATIC HONEYCOMB CLUSTERS
 * 
 * Premium, architectural honeycomb structure with:
 * - Completely static positioning (no randomization, no scroll parallax)
 * - Manually-configured cluster layouts with connected hexagons
 * - Natural page flow integration (scrolls naturally with content)
 * - Subtle 3D depth using CSS perspective and translateZ
 * - Soft, elegant styling with low-opacity gold accents
 * - Strategic placement to enhance without overwhelming readability
 * 
 * DESIGN APPROACH:
 * Clusters are hard-positioned on the page using absolute coordinates
 * inside the layout container. They scroll naturally with content,
 * sit behind the hero bee, and keep generous margins around text/CTAs.
 */

/**
 * Cluster Configuration (AXIAL COORDS):
 * Each entry is an axial hex coordinate (q, r) that guarantees shared edges.
 * We convert axial -> pixel offsets at render-time based on the current hex radius.
 */
const CLUSTER_CONFIGS = {
  // 3-hex cluster
  triangle: [
    { q: 0, r: 0, depth: 0.5 },
    { q: 1, r: 0, depth: 0.35 },
    { q: 0, r: 1, depth: 0.45 },
  ],

  // 4-hex cluster
  diamond: [
    { q: 0, r: 0, depth: 0.4 },
    { q: 1, r: 0, depth: 0.35 },
    { q: 0, r: 1, depth: 0.5 },
    { q: -1, r: 1, depth: 0.45 },
  ],
};

/**
 * GROUPS
 * Each group is a single “structure” on the canvas made by combining:
 * - one 4-hex mini-cluster (diamond)
 * - one 3-hex mini-cluster (triangle)
 * The parts are offset in axial coords so they share at least one edge.
 */
const BASE_GROUPS = [
  {
    id: 'group-1',
    top: '8%',
    left: '2%',
    rotation: 10,
    opacity: 0.75,
    scale: 1.0,
    parts: [
      { layout: 'diamond', offset: { q: 0, r: 0 } },
      { layout: 'triangle', offset: { q: 2, r: 0 } },
      // +4 hex (diamond) attached to the left side
      { layout: 'diamond', offset: { q: -2, r: 0 } },
    ],
  },
  {
    id: 'group-2',
    top: '10%',
    right: '2%',
    rotation: -12,
    opacity: 0.38,
    scale: 0.95,
    parts: [
      { layout: 'diamond', offset: { q: 0, r: 0 } },
      { layout: 'triangle', offset: { q: -2, r: 1 } },
      // +4 hex (diamond) attached to the right side
      { layout: 'diamond', offset: { q: 2, r: 0 } },
    ],
  },
  {
    id: 'group-3',
    top: '6%',
    left: '44%',
    rotation: 6,
    opacity: 0.26,
    scale: 0.85,
    parts: [
      { layout: 'diamond', offset: { q: 0, r: 0 } },
      { layout: 'triangle', offset: { q: 0, r: -2 } },
    ],
  },
  {
    id: 'group-4',
    top: '34%',
    right: '1%',
    rotation: -16,
    opacity: 0.34,
    scale: 0.9,
    parts: [
      { layout: 'diamond', offset: { q: 0, r: 0 } },
      { layout: 'triangle', offset: { q: 2, r: 1 } },
      // +4 hex (diamond) attached below
      { layout: 'diamond', offset: { q: 0, r: 2 } },
    ],
  },
  {
    id: 'group-5',
    top: '44%',
    right: '6%',
    rotation: -18,
    opacity: 0.50,
    scale: 1.0,
    parts: [
      { layout: 'diamond', offset: { q: 0, r: 0 } },
      { layout: 'triangle', offset: { q: 2, r: 0 } },
      // +4 hex (diamond) attached to the right side
      { layout: 'diamond', offset: { q: 3, r: 0 } },
    ],
  },
  {
    id: 'group-6',
    top: '40%',
    left: '3%',
    rotation: 16,
    opacity: 0.76,
    scale: 0.85,
    parts: [
      { layout: 'diamond', offset: { q: 0, r: 0 } },
      { layout: 'triangle', offset: { q: -2, r: 0 } },
      // +4 hex (diamond) attached further left
      { layout: 'diamond', offset: { q: -3, r: 0 } },
    ],
  },
  {
    id: 'group-7',
    top: '60%',
    left: '6%',
    rotation: 18,
    opacity: 0.78,
    scale: 0.88,
    parts: [
      { layout: 'diamond', offset: { q: 0, r: 0 } },
      { layout: 'triangle', offset: { q: 0, r: 2 } },
    ],
  },
  {
    id: 'group-8',
    top: '62%',
    right: '16%',
    rotation: -22,
    opacity: 0.78,
    scale: 0.88,
    parts: [
      { layout: 'diamond', offset: { q: 0, r: 0 } },
      { layout: 'triangle', offset: { q: 2, r: 1 } },
      // +3 hex (triangle) attached to the left
      { layout: 'triangle', offset: { q: -2, r: 0 } },
    ],
  },
  {
    id: 'group-9',
    top: '78%',
    right: '2%',
    rotation: 22,
    opacity: 0.70,
    scale: 0.9,
    parts: [
      { layout: 'diamond', offset: { q: 0, r: 0 } },
      { layout: 'triangle', offset: { q: -2, r: 1 } },
      // +4 hex (diamond) attached below-left, shares an edge (no overlap)
      { layout: 'diamond', offset: { q: -3, r: 0 } },
    ],
  },
  {
    id: 'group-10',
    top: '82%',
    left: '2%',
    rotation: 20,
    opacity: 0.70,
    scale: 0.9,
    parts: [
      { layout: 'diamond', offset: { q: 0, r: 0 } },
      { layout: 'triangle', offset: { q: 2, r: 0 } },
    ],
  },
  {
    id: 'group-11',
    top: '90%',
    left: '42%',
    rotation: -10,
    opacity: 0.70,
    scale: 0.8,
    parts: [
      { layout: 'diamond', offset: { q: 0, r: 0 } },
      { layout: 'triangle', offset: { q: 0, r: 2 } },
    ],
  },
  {
    id: 'group-12',
    top: '22%',
    right: '28%',
    rotation: -8,
    opacity: 0.72,
    scale: 0.82,
    parts: [
      { layout: 'diamond', offset: { q: 0, r: 0 } },
      { layout: 'triangle', offset: { q: 2, r: 0 } },
      // +3 hex (triangle) attached below, shares an edge
      { layout: 'triangle', offset: { q: 0, r: 2 } },
    ],
  },
  
];

const parsePercent = (value) => {
  if (typeof value !== 'string') return null;
  const match = value.trim().match(/^(-?\d+(?:\.\d+)?)%$/);
  if (!match) return null;
  return Number(match[1]);
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const formatPercent = (value) => `${value.toFixed(1).replace(/\.0$/, '')}%`;

const makeVariantGroup = (group, layerIndex) => {
  // Deterministic shifts by layer; pushes more towards edges.
  const topNum = parsePercent(group.top);
  const leftNum = parsePercent(group.left);
  const rightNum = parsePercent(group.right);

  // Smooth deterministic shift curve (supports many layers)
  const shift = clamp(2 + (layerIndex - 1) * 1.6, 2, 14.5);
  const signA = layerIndex % 2 === 0 ? 1 : -1;
  const signB = layerIndex % 3 === 0 ? 1 : -1;

  const nextTop = topNum === null
    ? group.top
    : formatPercent(clamp(topNum + signA * shift, 2, 96));

  // Move left-anchored groups further left or slightly inward (alternating).
  const nextLeft = leftNum === null
    ? undefined
    : formatPercent(clamp(leftNum + signB * (-shift), 0, 92));

  // For right-anchored groups, reduce right to move closer to the edge.
  // Alternating sign keeps some variation while staying deterministic.
  const nextRight = rightNum === null
    ? undefined
    : formatPercent(clamp(rightNum + signB * (-shift), 0, 92));

  const baseOpacity = typeof group.opacity === 'number' ? group.opacity : 0.28;
  // Keep later layers visible but lighter
  const opacity = clamp(baseOpacity * (0.80 - layerIndex * 0.05), 0.14, 0.72);

  const baseScale = typeof group.scale === 'number' ? group.scale : 1;
  const scale = clamp(baseScale * (0.92 - layerIndex * 0.03), 0.68, 1.0);

  const baseRotation = typeof group.rotation === 'number' ? group.rotation : 0;
  const rotation = baseRotation + signA * (6 + layerIndex * 2);

  return {
    ...group,
    id: `${group.id}-v${layerIndex}`,
    top: nextTop,
    ...(nextLeft !== undefined ? { left: nextLeft, right: undefined } : {}),
    ...(nextRight !== undefined ? { right: nextRight, left: undefined } : {}),
    opacity,
    scale,
    rotation,
  };
};

// Performance-first density: keep the premium look, but avoid huge DOM/SVG counts.
const GROUPS = (() => {
  const layers = 2; // 1 base + 1 deterministic variant layer
  const out = [...BASE_GROUPS];
  for (let layerIndex = 1; layerIndex < layers; layerIndex += 1) {
    out.push(...BASE_GROUPS.map((g) => makeVariantGroup(g, layerIndex)));
  }
  return out;
})();

const HoneycombClusters = () => {
  const clusters = useMemo(() => {
    const axialToPixel = (q, r, radius) => {
      // Pointy-top axial to pixel
      const x = radius * Math.sqrt(3) * (q + r / 2);
      const y = radius * 1.5 * r;
      return { x, y };
    };

    const renderHexagon = (hex, size = 60, groupId = '') => {
      const radius = size / 2;
      const pos = axialToPixel(hex.q, hex.r, radius);
      const points = [];

      // Generate hexagon points (6-sided polygon)
      for (let i = 0; i < 6; i++) {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        points.push([x, y]);
      }

      const polygonPoints = points.map((p) => p.join(',')).join(' ');
      const gradientId = `hexGradient-${groupId}`;

      return (
        <g
          key={`hex-${groupId}-${hex.q}-${hex.r}`}
          transform={`translate(${pos.x}, ${pos.y})`}
        >
          <polygon
            points={polygonPoints}
            fill={`url(#${gradientId})`}
            fillOpacity="var(--honeycomb-fill-opacity, 0.72)"
            stroke="var(--honeycomb-stroke, #b56f06)"
            strokeWidth="var(--honeycomb-stroke-width, 1.6)"
            strokeOpacity="var(--honeycomb-stroke-opacity, 0.84)"
          />

          <polygon
            points={polygonPoints}
            fill="none"
            stroke="var(--honeycomb-highlight, #ffffff)"
            strokeWidth="1.0"
            strokeOpacity="var(--honeycomb-highlight-opacity, 0.36)"
          />
        </g>
      );
    };

    const getGroupHexes = (group) => {
      const merged = new Map();

      group.parts.forEach((part) => {
        const base = CLUSTER_CONFIGS[part.layout] || [];
        const offsetQ = part.offset?.q ?? 0;
        const offsetR = part.offset?.r ?? 0;

        base.forEach((hex) => {
          const q = hex.q + offsetQ;
          const r = hex.r + offsetR;
          const key = `${q},${r}`;
          const existing = merged.get(key);

          // If a hex position overlaps, keep the one with greater depth.
          if (!existing || (hex.depth ?? 0) > (existing.depth ?? 0)) {
            merged.set(key, { q, r, depth: hex.depth });
          }
        });
      });

      return Array.from(merged.values());
    };

    return GROUPS.map((group) => {
      const hexes = getGroupHexes(group);
      const scale = typeof group.scale === 'number' ? group.scale : 1;

      const isLeftAnchored = group.left !== undefined && group.right === undefined;
      const styleProps = {
        position: 'absolute',
        pointerEvents: 'none',
        opacity: `calc(var(--honeycomb-opacity-mult, 1) * ${group.opacity}${isLeftAnchored ? ' * 1.35' : ''})`,
        zIndex: 15,
      };

      // Left-side clusters sit on the white portion of the hero.
      // Make their diagonals/edges darker so they remain visible on white.
      if (isLeftAnchored) {
        styleProps['--honeycomb-stroke'] = '#0f172a';
        styleProps['--honeycomb-stroke-opacity'] = 0.32;
        styleProps['--honeycomb-stroke-width'] = 1.9;
        styleProps['--honeycomb-fill-opacity'] = 0.22;
        styleProps['--honeycomb-highlight-opacity'] = 0.12;
        styleProps['--honeycomb-stop-0'] = '#eef2f7';
        styleProps['--honeycomb-stop-1'] = '#e5eaf2';
        styleProps['--honeycomb-stop-2'] = '#d7deea';
      }
      
      if (group.left !== undefined) styleProps.left = group.left;
      if (group.right !== undefined) styleProps.right = group.right;
      if (group.top !== undefined) styleProps.top = group.top;

      return (
        <div
          key={group.id}
          className="honeycomb-cluster"
          style={styleProps}
        >
          {/* SVG container for a combined honeycomb structure */}
          <svg
            viewBox="-260 -260 520 520"
            width={340 * scale}
            height={340 * scale}
            className="honeycomb-svg"
            style={{
              transform: `rotate(${group.rotation}deg)`,
            }}
            aria-hidden="true"
          >
            {/* Define a single gradient per cluster (keeps SVG defs small). */}
            <defs>
              <linearGradient
                id={`hexGradient-${group.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="var(--honeycomb-stop-0, #ffffff)" stopOpacity="0.90" />
                <stop offset="50%" stopColor="var(--honeycomb-stop-1, #f5f0e8)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="var(--honeycomb-stop-2, #e8dcc8)" stopOpacity="0.35" />
              </linearGradient>
            </defs>

            {/* Render connected hexagons for this cluster */}
            <g>
              {hexes.map((hex) => renderHexagon(hex, 64, group.id))}
            </g>
          </svg>
        </div>
      );
    });
  }, []);

  return (
    <div className="honeycomb-clusters-container" aria-hidden="true">
      {clusters}
    </div>
  );
};

export default HoneycombClusters;
