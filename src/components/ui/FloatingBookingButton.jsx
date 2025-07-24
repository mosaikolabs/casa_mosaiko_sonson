import React, { useState, useEffect } from 'react';
import Button from './Button';
import Icon from '../AppIcon';

const FloatingBookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approximately 100vh)
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingClick = () => {
    const bookingElement = document.querySelector('#booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573001234567?text=Hello, I would like to inquire about booking at Casa Mosaiko Sonsón', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-200 lg:hidden">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 bg-card rounded-lg shadow-card border border-border p-2 space-y-2 min-w-[200px] fade-in">
          <Button
            variant="outline"
            onClick={handleWhatsAppClick}
            className="w-full justify-start text-sm"
            iconName="MessageCircle"
            iconPosition="left"
          >
            WhatsApp Inquiry
          </Button>
          
          <Button
            variant="default"
            onClick={handleBookingClick}
            className="w-full justify-start text-sm bg-accent hover:bg-accent/90"
            iconName="Calendar"
            iconPosition="left"
          >
            Check Availability
          </Button>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="flex flex-col items-end space-y-3">
        {/* Quick Actions Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-12 h-12 rounded-full bg-secondary text-secondary-foreground shadow-heritage flex items-center justify-center transition-heritage hover:scale-105 ${
            isExpanded ? 'rotate-45' : ''
          }`}
        >
          <Icon name="Plus" size={20} />
        </button>

        {/* Primary Booking Button */}
        <Button
          variant="default"
          onClick={handleBookingClick}
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-heritage hover:scale-105 transition-heritage px-6 py-3 rounded-full"
          iconName="Calendar"
          iconPosition="left"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default FloatingBookingButton;