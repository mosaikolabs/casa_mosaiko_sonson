import React, { useState } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const QuickContactIntegration = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const contactOptions = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: 'MessageCircle',
      description: 'Instant booking assistance',
      action: () => window.open('https://wa.me/573001234567?text=Hello, I would like to inquire about booking at Casa Mosaiko Sonsón', '_blank'),
      color: 'text-success'
    },
    {
      id: 'email',
      label: 'Email',
      icon: 'Mail',
      description: 'reservas@casamosaiko.com',
      action: () => window.open('mailto:reservas@casamosaiko.com?subject=Booking Inquiry - Casa Mosaiko Sonsón', '_blank'),
      color: 'text-primary'
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: 'Instagram',
      description: '@casamosaiko_sonson',
      action: () => window.open('https://instagram.com/casamosaiko_sonson', '_blank'),
      color: 'text-accent'
    },
    {
      id: 'phone',
      label: 'Phone',
      icon: 'Phone',
      description: '+57 300 123 4567',
      action: () => window.open('tel:+573001234567', '_blank'),
      color: 'text-secondary'
    }
  ];

  const handleBookingAssistance = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in booking at Casa Mosaiko Sonsón. Could you help me with:
      
• Available dates
• Room options and pricing
• Local experiences
• Transportation arrangements

Thank you!`
    );
    window.open(`https://wa.me/573001234567?text=${message}`, '_blank');
    setIsContactOpen(false);
  };

  return (
    <div className="relative">
      {/* Desktop Integration - Part of Header */}
      <div className="hidden lg:block">
        <div className="relative">
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-heritage px-3 py-2 rounded-lg hover:bg-muted/50"
          >
            <Icon name="MessageSquare" size={18} />
            <span className="text-sm font-inter">Contact</span>
            <Icon 
              name="ChevronDown" 
              size={16} 
              className={`transition-heritage ${isContactOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Desktop Dropdown */}
          {isContactOpen && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-card rounded-lg shadow-card border border-border p-4 fade-in">
              <div className="space-y-4">
                <div className="border-b border-border pb-3">
                  <h3 className="font-playfair font-semibold text-foreground">
                    Get Instant Assistance
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Our heritage concierge is ready to help
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {contactOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={option.action}
                      className="flex flex-col items-center p-3 rounded-lg hover:bg-muted transition-heritage group"
                    >
                      <Icon 
                        name={option.icon} 
                        size={24} 
                        className={`${option.color} group-hover:scale-110 transition-heritage`}
                      />
                      <span className="text-sm font-inter font-medium text-foreground mt-2">
                        {option.label}
                      </span>
                      <span className="text-xs text-muted-foreground text-center mt-1">
                        {option.description}
                      </span>
                    </button>
                  ))}
                </div>

                <Button
                  variant="default"
                  onClick={handleBookingAssistance}
                  fullWidth
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-semibold"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Get Booking Assistance
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Integration - Part of Mobile Menu */}
      <div className="lg:hidden">
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-muted-foreground mb-3">
            <Icon name="MessageSquare" size={18} />
            <span className="text-sm font-inter font-medium">Quick Contact</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {contactOptions.slice(0, 2).map((option) => (
              <button
                key={option.id}
                onClick={option.action}
                className="flex items-center space-x-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-heritage"
              >
                <Icon name={option.icon} size={18} className={option.color} />
                <div className="text-left">
                  <div className="text-sm font-inter font-medium text-foreground">
                    {option.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {option.description}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={handleBookingAssistance}
            fullWidth
            className="font-inter"
            iconName="MessageCircle"
            iconPosition="left"
          >
            WhatsApp Booking Help
          </Button>
        </div>
      </div>

      {/* Click outside to close */}
      {isContactOpen && (
        <div 
          className="fixed inset-0 z-50"
          onClick={() => setIsContactOpen(false)}
        />
      )}
    </div>
  );
};

export default QuickContactIntegration;