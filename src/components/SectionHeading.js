import React from 'react';

const SectionHeading = ({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };
  

  return (
    <div className={`max-w-3xl px-1 ${alignmentClasses[align]} ${className}`}>
      {subtitle && (
        <span className="subtitle inline-block text-bee-orange font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-4 sm:mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
