import React, { useState, useEffect } from 'react';

const SectionProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'heritage', label: 'Heritage Story', color: 'bg-primary' },
    { id: 'spaces', label: 'Our Spaces', color: 'bg-accent' },
    { id: 'gallery', label: 'Gallery', color: 'bg-secondary' },
    { id: 'experience', label: 'Experience', color: 'bg-success' },
    { id: 'booking', label: 'Booking', color: 'bg-warning' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine active section
      const sectionElements = sections.map(section => ({
        ...section,
        element: document.getElementById(section.id)
      }));

      const currentSectionIndex = sectionElements.findIndex(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSectionIndex !== -1) {
        setActiveSection(currentSectionIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Desktop - Vertical Progress Indicator */}
      <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-100">
        <div className="flex flex-col items-center space-y-4">
          {/* Overall Progress Bar */}
          <div className="w-1 h-32 bg-muted rounded-full relative overflow-hidden">
            <div 
              className="w-full bg-primary transition-all duration-300 ease-out rounded-full"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Section Indicators */}
          <div className="flex flex-col space-y-3">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className="group relative flex items-center"
                title={section.label}
              >
                <div className={`w-3 h-3 rounded-full transition-heritage ${
                  index === activeSection 
                    ? `${section.color} scale-125` 
                    : 'bg-muted hover:bg-muted-foreground/30'
                }`} />
                
                {/* Tooltip */}
                <div className="absolute right-6 bg-card text-card-foreground px-3 py-1 rounded-lg shadow-card text-sm font-inter whitespace-nowrap opacity-0 group-hover:opacity-100 transition-heritage pointer-events-none">
                  {section.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile - Horizontal Progress Dots */}
      <div className="lg:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 z-100">
        <div className="bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-card border border-border">
          <div className="flex items-center space-x-3">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`w-2 h-2 rounded-full transition-heritage ${
                  index === activeSection 
                    ? `${section.color} scale-150` 
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                title={section.label}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionProgressIndicator;