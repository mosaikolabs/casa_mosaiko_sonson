import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onCheckAvailability, onExploreStory }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const heroVideos = [
    "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
    "https://videos.pexels.com/video-files/4662438/4662438-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/3773567/3773567-uhd_2560_1440_30fps.mp4"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          key={currentVideoIndex}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experience Authentic
            <span className="block text-[var(--color-accent)]">Colombian Heritage</span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Where Family History Meets Contemporary Elegance in the Heart of Sonsón
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={onCheckAvailability}
              iconName="Calendar"
              iconPosition="left"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white px-8 py-4 text-lg font-semibold"
            >
              Check Availability
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={onExploreStory}
              iconName="ChevronDown"
              iconPosition="right"
              className="border-white text-white hover:bg-white hover:text-[var(--color-primary)] px-8 py-4 text-lg"
            >
              Explore Our Story
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Icon name="Award" size={20} />
              <span>Heritage Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Star" size={20} />
              <span>4.9/5 Guest Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              <span>500+ Happy Guests</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Leaf" size={20} />
              <span>Sustainable Tourism</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-2">
          {heroVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex 
                  ? 'bg-[var(--color-primary)]' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <Icon name="ChevronDown" size={32} color="white" />
      </div>
    </section>
  );
};

export default HeroSection;