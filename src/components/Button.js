import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  fullWidthMobile = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]';

  const variants = {
    primary: 'glass-panel bg-gradient-to-br from-bee-yellow to-bee-amber hover:from-bee-amber hover:to-bee-yellow text-bee-dark focus:ring-bee-yellow/50 shadow-lg hover:shadow-xl hover:floating-layer border border-amber-300/50 font-bold',
    secondary: 'glass-panel hover:floating-layer text-bee-dark border border-bee-yellow/40 focus:ring-bee-yellow/30 shadow-sm',
    outline: 'bg-[#f7f3ed]/70 hover:bg-[#f7f3ed]/90 active:bg-[#f7f3ed] text-bee-brown border-2 border-bee-yellow hover:border-bee-yellow-dark focus:ring-bee-yellow',
    ghost: 'text-bee-dark hover:glass-panel hover:border hover:border-bee-yellow/30 focus:ring-bee-yellow/30',
  };

  // Sizes with minimum 44px height for touch targets on mobile
  const sizes = {
    sm: 'px-3 py-2 text-sm min-h-[40px] sm:min-h-0 sm:py-1.5',
    md: 'px-4 sm:px-5 py-2.5 sm:py-2.5 text-sm min-h-[44px]',
    lg: 'px-5 sm:px-6 py-3 sm:py-3 text-base min-h-[48px]',
    xl: 'px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg min-h-[52px]',
  };

  const mobileWidth = fullWidthMobile ? 'w-full sm:w-auto' : '';

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${mobileWidth} ${className}`;

  const MotionDiv = require('framer-motion').motion.div;
  const hoverEffect = {
    whileHover: { scale: 1.05, y: -6, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12), 0 1.5px 8px 0 rgba(255,193,7,0.10)' },
    transition: { type: 'spring', stiffness: 300 }
  };

  // Render as Link if "to" prop is provided (internal navigation)
  if (to) {
    return (
      <MotionDiv {...hoverEffect} style={{ display: 'inline-block' }}>
        <Link to={to} className={combinedClassName} {...props}>
          {children}
        </Link>
      </MotionDiv>
    );
  }

  // Render as anchor if "href" prop is provided (external link)
  if (href) {
    return (
      <MotionDiv {...hoverEffect} style={{ display: 'inline-block' }}>
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      </MotionDiv>
    );
  }

  // Render as button by default
  return (
    <MotionDiv {...hoverEffect} style={{ display: 'inline-block' }}>
      <button
        type={type}
        className={combinedClassName}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </MotionDiv>
  );
};

export default Button;
