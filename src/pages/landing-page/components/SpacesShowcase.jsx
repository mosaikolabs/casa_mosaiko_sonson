import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SpacesShowcase = ({ onBookRoom }) => {
  const [activeSpace, setActiveSpace] = useState(0);

  const spaces = [
    {
      id: "el-refugio",
      name: "El Refugio",
      subtitle: "Habitación Principal",
      description: `Nuestra suite principal combina la elegancia colonial con comodidades contemporáneas. Con vista a los jardines interiores y decorada con piezas artesanales locales.\n\nIncluye cama king size, baño privado con tina de inmersión, área de estar y balcón privado con vista a las montañas.`,
      price: "COP 280,000",
      priceUSD: "USD 70",
      capacity: "2 huéspedes",
      size: "45 m²",
      amenities: ["Wi-Fi gratuito", "Aire acondicionado", "Minibar", "Balcón privado", "Baño con tina", "Desayuno incluido"],
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop"
      ],
      features: ["Vista a jardines", "Decoración artesanal", "Cama king size"]
    },
    {
      id: "el-ritual",
      name: "El Ritual",
      subtitle: "Habitación Ceremonial",
      description: `Inspirada en las tradiciones ancestrales de la región, esta habitación ofrece una experiencia única de conexión con la cultura local.\n\nDecorada con textiles tradicionales y cerámica artesanal, incluye área de meditación y acceso directo al jardín de hierbas aromáticas.`,
      price: "COP 220,000",
      priceUSD: "USD 55",
      capacity: "2 huéspedes",
      size: "35 m²",
      amenities: ["Wi-Fi gratuito", "Ventilador de techo", "Área de meditación", "Jardín privado", "Baño ecológico", "Desayuno incluido"],
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
      ],
      features: ["Textiles tradicionales", "Área de meditación", "Jardín de hierbas"]
    },
    {
      id: "la-contemplacion",
      name: "La Contemplación",
      subtitle: "Habitación Zen",
      description: `Un espacio diseñado para la reflexión y el descanso profundo. Con arquitectura minimalista que respeta los elementos originales de la casa.\n\nPerfecta para viajeros que buscan tranquilidad, con vista panorámica a las montañas y acceso a la terraza de contemplación.`,
      price: "COP 180,000",
      priceUSD: "USD 45",
      capacity: "1-2 huéspedes",
      size: "28 m²",
      amenities: ["Wi-Fi gratuito", "Ventilación natural", "Terraza compartida", "Vista a montañas", "Baño compartido", "Desayuno incluido"],
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop"
      ],
      features: ["Diseño minimalista", "Vista panorámica", "Terraza de contemplación"]
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === spaces[activeSpace].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? spaces[activeSpace].images.length - 1 : prev - 1
    );
  };

  const handleSpaceChange = (index) => {
    setActiveSpace(index);
    setCurrentImageIndex(0);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Nuestros Espacios
          </h2>
          <p className="font-inter text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Cada habitación cuenta una historia única, diseñada para ofrecer experiencias auténticas y memorables
          </p>
        </div>

        {/* Space Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[var(--color-muted)] rounded-lg p-2">
            {spaces.map((space, index) => (
              <button
                key={space.id}
                onClick={() => handleSpaceChange(index)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeSpace === index
                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]'
                }`}
              >
                {space.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Space Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-card">
              <Image
                src={spaces[activeSpace].images[currentImageIndex]}
                alt={`${spaces[activeSpace].name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
              >
                <Icon name="ChevronLeft" size={20} color="var(--color-primary)" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
              >
                <Icon name="ChevronRight" size={20} color="var(--color-primary)" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-2">
                  {spaces[activeSpace].images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white' :'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 360° View Button */}
            <Button
              variant="outline"
              size="sm"
              iconName="RotateCcw"
              iconPosition="left"
              className="absolute top-4 right-4 bg-white/90 hover:bg-white border-[var(--color-primary)] text-[var(--color-primary)]"
            >
              Vista 360°
            </Button>
          </div>

          {/* Space Details */}
          <div className="space-y-6">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-[var(--color-foreground)] mb-2">
                {spaces[activeSpace].name}
              </h3>
              <p className="text-[var(--color-primary)] font-medium text-lg mb-4">
                {spaces[activeSpace].subtitle}
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                {spaces[activeSpace].description}
              </p>
            </div>

            {/* Room Info */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-[var(--color-border)]">
              <div className="text-center">
                <Icon name="Users" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                <p className="text-sm text-[var(--color-text-secondary)]">Capacidad</p>
                <p className="font-semibold text-[var(--color-foreground)]">{spaces[activeSpace].capacity}</p>
              </div>
              <div className="text-center">
                <Icon name="Home" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                <p className="text-sm text-[var(--color-text-secondary)]">Tamaño</p>
                <p className="font-semibold text-[var(--color-foreground)]">{spaces[activeSpace].size}</p>
              </div>
              <div className="text-center">
                <Icon name="DollarSign" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                <p className="text-sm text-[var(--color-text-secondary)]">Por noche</p>
                <p className="font-semibold text-[var(--color-foreground)]">{spaces[activeSpace].price}</p>
                <p className="text-xs text-[var(--color-text-secondary)]">{spaces[activeSpace].priceUSD}</p>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-3 text-[var(--color-foreground)]">
                Comodidades Incluidas
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {spaces[activeSpace].amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Icon name="Check" size={16} color="var(--color-success)" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-3 text-[var(--color-foreground)]">
                Características Especiales
              </h4>
              <div className="flex flex-wrap gap-2">
                {spaces[activeSpace].features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[var(--color-muted)] text-[var(--color-text-secondary)] rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Booking Button */}
            <Button
              variant="default"
              size="lg"
              onClick={() => onBookRoom(spaces[activeSpace])}
              iconName="Calendar"
              iconPosition="left"
              fullWidth
              className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white mt-8"
            >
              Reservar {spaces[activeSpace].name}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacesShowcase;