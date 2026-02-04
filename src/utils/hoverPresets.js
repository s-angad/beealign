// Centralized Framer Motion hover presets.
// Use these via: <motion.div {...hoverLift} />

export const hoverLift = {
  whileHover: { y: -10, scale: 1.05 },
  whileTap: { scale: 0.99 },
  transition: { type: 'spring', stiffness: 320, damping: 22 },
};
