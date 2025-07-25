import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('heritage');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'heritage', label: 'Nuestra Historia', href: '#heritage' },
    { id: 'spaces', label: 'Nuestros Espacios', href: '#spaces' },
    { id: 'gallery', label: 'Galería', href: '#gallery' },
    { id: 'experience', label: 'Experiencia', href: '#experience' },
    { id: 'testimonials', label: 'Testimonios', href: '#testimonials' },
    { id: 'location', label: 'Ubicación', href: '#location' },
    { id: 'contact', label: 'Contacto', href: '#contact' }
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
      const headerHeight = 80; // altura del header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleBookingClick = () => {
    // Trigger booking form from parent component
    // This will be handled by the landing page
    window.dispatchEvent(new CustomEvent('openBookingForm'));
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-gradient-to-r from-black/30 via-black/15 to-black/30 backdrop-blur-md border-b border-white/10'
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
                <h1 className={`font-playfair font-semibold text-xl transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  Casa Mosaiko
                </h1>
                <p className={`text-sm -mt-1 transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
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
                className={`font-inter font-medium text-sm transition-all duration-300 hover:text-primary ${
                  activeSection === item.id 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA and Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => window.open('https://wa.me/573145678900?text=Hola, me gustaría consultar sobre reservas en Casa Mosaiko Sonsón', '_blank')}
              className={`flex items-center space-x-2 transition-all duration-300 hover:text-primary ${
                isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
              }`}
            >
              <Icon name="MessageCircle" size={18} />
              <span className="text-sm font-inter">WhatsApp</span>
            </button>
            
            <Button
              variant="default"
              onClick={handleBookingClick}
              className={`font-inter font-semibold shadow-lg transition-all duration-300 ${
                isScrolled 
                  ? 'bg-primary hover:bg-primary/90 text-white' 
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
              }`}
            >
              Reservar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'hover:bg-gray-100 text-gray-700' 
                : 'hover:bg-white/20 text-white'
            }`}
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left py-3 px-4 rounded-lg font-inter font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary/10 text-primary border-l-4 border-primary' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <button
                onClick={() => {
                  window.open('https://wa.me/573145678900?text=Hola, me gustaría consultar sobre reservas en Casa Mosaiko Sonsón', '_blank');
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-3 w-full py-3 px-4 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-100 transition-all duration-300"
              >
                <Icon name="MessageCircle" size={20} />
                <span className="font-inter">Contactar por WhatsApp</span>
              </button>
              
              <Button
                variant="default"
                onClick={handleBookingClick}
                fullWidth
                className="bg-primary hover:bg-primary/90 text-white font-inter font-semibold shadow-lg"
              >
                Reservar Ahora
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;