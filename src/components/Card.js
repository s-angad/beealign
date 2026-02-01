import React from 'react';

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
}) => {
  // Responsive padding - slightly smaller on mobile
  const paddingClasses = {
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-5 sm:p-8',
    xl: 'p-6 sm:p-10',
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        bg-white border border-bee-navy/30 shadow-lg
        ${hover ? 'transition-all duration-200 hover:shadow-2xl hover:scale-[1.04] hover:border-bee-yellow/60' : ''}
        ${paddingClasses[padding]}
        ${className}
      `}
      style={{
        color: '#1a2233',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
