import React, { useState, useRef, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PhotoGallery = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const scrollContainerRef = useRef(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=800&fit=crop",
      caption: "Donde cada amanecer\ndespierta nuevas historias",
      category: "Arquitectura"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=800&fit=crop",
      caption: "Espacios que abrazan\nel alma del viajero",
      category: "Interiores"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=800&fit=crop",
      caption: "Detalles que cuentan\nsiglos de tradición",
      category: "Detalles"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop",
      caption: "Artesanías que preservan\nnuestra identidad",
      category: "Artesanías"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=800&fit=crop",
      caption: "Jardines donde florece\nla tranquilidad",
      category: "Jardines"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=800&fit=crop",
      caption: "Rincones que invitan\na la contemplación",
      category: "Espacios"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=800&fit=crop",
      caption: "Ventanas al pasado\nque iluminan el presente",
      category: "Arquitectura"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=600&h=800&fit=crop",
      caption: "Experiencias que se graban\nen el corazón",
      category: "Experiencias"
    }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Momentos que Inspiran
          </h2>
          <p className="font-inter text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Cada imagen captura la esencia de Casa Mosaiko, donde la belleza arquitectónica se encuentra con la calidez humana
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
          >
            <Icon name="ChevronLeft" size={20} color="var(--color-primary)" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
          >
            <Icon name="ChevronRight" size={20} color="var(--color-primary)" />
          </button>

          {/* Scrollable Gallery */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="relative flex-shrink-0 w-80 h-96 group cursor-pointer"
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="w-full h-full rounded-lg overflow-hidden shadow-card">
                  <Image
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredImage === image.id ? 'opacity-100' : 'opacity-60'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className={`transition-all duration-300 ${
                      hoveredImage === image.id ? 'transform translate-y-0 opacity-100' : 'transform translate-y-2 opacity-80'
                    }`}>
                      <span className="inline-block px-3 py-1 bg-[var(--color-primary)]/80 rounded-full text-xs font-medium mb-3">
                        {image.category}
                      </span>
                      <p className="font-playfair text-lg leading-relaxed whitespace-pre-line">
                        {image.caption}
                      </p>
                    </div>
                  </div>

                  {/* Booking Prompt Overlay */}
                  {hoveredImage === image.id && (
                    <div className="absolute top-4 right-4 bg-white/90 rounded-lg px-3 py-2 text-sm text-[var(--color-primary)] font-medium animate-fade-in">
                      <Icon name="Calendar" size={16} className="inline mr-1" />
                      Reservar ahora
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">130+</div>
            <div className="text-[var(--color-text-secondary)]">Años de Historia</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">500+</div>
            <div className="text-[var(--color-text-secondary)]">Huéspedes Felices</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">50+</div>
            <div className="text-[var(--color-text-secondary)]">Artesanos Locales</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">4.9</div>
            <div className="text-[var(--color-text-secondary)]">Calificación Promedio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;