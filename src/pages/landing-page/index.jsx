import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Component imports
import Header from 'components/ui/Header';
import HeroSection from './components/HeroSection';
import HeritageTimeline from './components/HeritageTimeline';
import SpacesShowcase from './components/SpacesShowcase';
import PhotoGallery from './components/PhotoGallery';
import BookingForm from './components/BookingForm';
import PhilosophySection from './components/PhilosophySection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import LocationMap from './components/LocationMap';
import ContactSection from './components/ContactSection';
import BookingSuccess from './components/BookingSuccess';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle booking flow
  const handleCheckAvailability = () => {
    setSelectedRoom(null);
    setShowBookingForm(true);
  };

  const handleBookRoom = (room) => {
    setSelectedRoom(room);
    setShowBookingForm(true);
  };

  const handleBookingComplete = (data) => {
    setBookingData(data);
    setShowBookingForm(false);
    setShowBookingSuccess(true);
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
    setSelectedRoom(null);
  };

  const handleCloseBookingSuccess = () => {
    setShowBookingSuccess(false);
    setBookingData(null);
  };

  const handleNewBooking = () => {
    setShowBookingSuccess(false);
    setBookingData(null);
    setSelectedRoom(null);
    setShowBookingForm(true);
  };

  // Handle explore story scroll
  const handleExploreStory = () => {
    scrollToSection('heritage');
  };

  // Scroll to top on mount and listen for booking form events
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleOpenBookingForm = () => {
      handleCheckAvailability();
    };
    
    window.addEventListener('openBookingForm', handleOpenBookingForm);
    
    return () => {
      window.removeEventListener('openBookingForm', handleOpenBookingForm);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection 
        onCheckAvailability={handleCheckAvailability}
        onExploreStory={handleExploreStory}
      />

      {/* Heritage Timeline Section */}
      <div id="heritage">
        <HeritageTimeline />
      </div>

      {/* Spaces Showcase Section */}
      <div id="spaces">
        <SpacesShowcase onBookRoom={handleBookRoom} />
      </div>

      {/* Photo Gallery Section */}
      <div id="gallery">
        <PhotoGallery />
      </div>

      {/* Philosophy & Sustainability Section */}
      <div id="experience">
        <PhilosophySection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsCarousel />
      </div>

      {/* Location & Map Section */}
      <div id="location">
        <LocationMap />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm
          selectedRoom={selectedRoom}
          onClose={handleCloseBookingForm}
          onBookingComplete={handleBookingComplete}
        />
      )}

      {/* Booking Success Modal */}
      {showBookingSuccess && bookingData && (
        <BookingSuccess
          bookingData={bookingData}
          onClose={handleCloseBookingSuccess}
          onNewBooking={handleNewBooking}
        />
      )}

      {/* Floating Action Button for Quick Booking */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleCheckAvailability}
          className="w-14 h-14 bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white rounded-full shadow-heritage flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Quick booking"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>

      {/* Live Booking Activity Notifications */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="bg-white rounded-lg shadow-heritage p-4 max-w-sm animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm font-medium text-[var(--color-foreground)]">
                María Elena acaba de reservar
              </p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                El Refugio • Hace 2 minutos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Intent Offer (would be triggered by mouse movement) */}
      {/* This would typically be controlled by exit-intent detection */}
      
      {/* WhatsApp Chat Widget */}
      <div className="fixed bottom-24 right-6 z-40">
        <a
          href="https://wa.me/573145678900"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <span className="text-sm font-medium">Chat</span>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;