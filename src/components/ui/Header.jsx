import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('heritage');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'heritage', label: 'Heritage Story', href: '#heritage' },
    { id: 'spaces', label: 'Our Spaces', href: '#spaces' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
    { id: 'experience', label: 'Experience', href: '#experience' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const handleBookingClick = () => {
    const bookingElement = document.querySelector('#booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-100 transition-heritage ${
      isScrolled 
        ? 'bg-card/95 backdrop-blur-md shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-primary-foreground"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-playfair font-semibold text-xl text-foreground">
                  Casa Mosaiko
                </h1>
                <p className="text-sm text-muted-foreground -mt-1">
                  Sonsón Heritage Hotel
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`font-inter font-medium text-sm transition-heritage hover:text-primary ${
                  activeSection === item.id 
                    ? 'text-primary border-b-2 border-primary pb-1' :'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA and Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => window.open('https://wa.me/573001234567?text=Hello, I would like to inquire about booking at Casa Mosaiko Sonsón', '_blank')}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-heritage"
            >
              <Icon name="MessageCircle" size={18} />
              <span className="text-sm font-inter">WhatsApp</span>
            </button>
            
            <Button
              variant="default"
              onClick={handleBookingClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-semibold shadow-heritage"
            >
              Reserve Your Heritage Experience
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-heritage"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-foreground"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-md border-t border-border">
          <div className="px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left py-3 px-4 rounded-lg font-inter font-medium transition-heritage ${
                  activeSection === item.id
                    ? 'bg-primary/10 text-primary border-l-4 border-primary' :'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-border space-y-3">
              <button
                onClick={() => {
                  window.open('https://wa.me/573001234567?text=Hello, I would like to inquire about booking at Casa Mosaiko Sonsón', '_blank');
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-3 w-full py-3 px-4 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-heritage"
              >
                <Icon name="MessageCircle" size={20} />
                <span className="font-inter">Contact via WhatsApp</span>
              </button>
              
              <Button
                variant="default"
                onClick={handleBookingClick}
                fullWidth
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-semibold shadow-heritage"
              >
                Reserve Your Heritage Experience
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;