import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsCarousel = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "María Elena Rodríguez",
      location: "Bogotá, Colombia",
      profession: "Arquitecta",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      date: "Marzo 2024",
      review: `Casa Mosaiko no es solo un lugar para hospedarse, es una experiencia transformadora. Cada rincón cuenta una historia y la calidez de la familia anfitriona te hace sentir como en casa.\n\nLa atención a los detalles arquitectónicos y la conexión con los artesanos locales hacen de este lugar algo verdaderamente especial. Volveré sin duda.`,
      highlight: "Una experiencia transformadora",
      verified: true
    },
    {
      id: 2,
      name: "James Mitchell",
      location: "Toronto, Canadá",
      profession: "Fotógrafo",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      date: "Febrero 2024",
      review: `As a photographer, I'm always looking for authentic places with character. Casa Mosaiko exceeded all my expectations. The heritage architecture, combined with the family's storytelling, created the perfect backdrop for my Colombian series.\n\nThe sustainable practices and community involvement make you feel good about your travel choices. This is responsible tourism at its finest.`,
      highlight: "Authentic places with character",
      verified: true
    },
    {
      id: 3,
      name: "Ana Sofía Herrera",
      location: "Medellín, Colombia",
      profession: "Diseñadora",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      date: "Enero 2024",
      review: `Llegué a Casa Mosaiko buscando inspiración para mi próximo proyecto y encontré mucho más. La fusión entre tradición y modernidad es perfecta, y la historia familiar que envuelve cada espacio es fascinante.\n\nLos talleres con artesanos locales fueron el punto culminante de mi estadía. Aprendí técnicas ancestrales que ahora incorporo en mi trabajo.`,
      highlight: "Fusión perfecta entre tradición y modernidad",
      verified: true
    },
    {
      id: 4,
      name: "Roberto Silva",
      location: "São Paulo, Brasil",
      profession: "Chef",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
      rating: 5,
      date: "Diciembre 2023",
      review: `Como chef, siempre busco experiencias gastronómicas auténticas. En Casa Mosaiko no solo disfruté de ingredientes locales frescos, sino que también aprendí sobre las tradiciones culinarias de la región.\n\nLa conexión con productores locales y la filosofía de sostenibilidad se refleja en cada comida. Una experiencia culinaria inolvidable.`,
      highlight: "Experiencias gastronómicas auténticas",
      verified: true
    },
    {
      id: 5,
      name: "Isabella Martínez",
      location: "Valencia, España",
      profession: "Escritora",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      rating: 5,
      date: "Noviembre 2023",
      review: `Vine a Colombia investigando para mi próxima novela y Casa Mosaiko se convirtió en la inspiración principal. La riqueza histórica del lugar y las historias familiares que compartieron conmigo fueron invaluables.\n\nEl ambiente de tranquilidad y la belleza arquitectónica crearon el espacio perfecto para escribir. Terminé tres capítulos durante mi estadía.`,
      highlight: "Inspiración invaluable para mi novela",
      verified: true
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Historias de Nuestros Huéspedes
          </h2>
          <p className="font-inter text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Cada huésped se convierte en parte de nuestra historia. Estas son algunas de las experiencias que han compartido con nosotros
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white rounded-lg shadow-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar and Info */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="relative inline-block">
                  <Image
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  {testimonials[activeTestimonial].verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[var(--color-success)] rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} color="white" />
                    </div>
                  )}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-[var(--color-foreground)] mt-4 mb-1">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-1">
                  {testimonials[activeTestimonial].profession}
                </p>
                <p className="text-[var(--color-text-secondary)] text-sm mb-3">
                  {testimonials[activeTestimonial].location}
                </p>
                
                {/* Rating */}
                <div className="flex justify-center md:justify-start gap-1 mb-2">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} color="var(--color-primary)" />
                  ))}
                </div>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {testimonials[activeTestimonial].date}
                </p>
              </div>

              {/* Review Content */}
              <div className="flex-1">
                <div className="mb-4">
                  <Icon name="Quote" size={32} color="var(--color-primary)" className="opacity-50" />
                </div>
                
                <blockquote className="text-[var(--color-text-secondary)] leading-relaxed mb-6 whitespace-pre-line">
                  {testimonials[activeTestimonial].review}
                </blockquote>
                
                <div className="bg-[var(--color-muted)] rounded-lg p-4">
                  <p className="font-playfair text-[var(--color-primary)] font-semibold">
                    "{testimonials[activeTestimonial].highlight}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white hover:bg-[var(--color-muted)] rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
          >
            <Icon name="ChevronLeft" size={20} color="var(--color-primary)" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white hover:bg-[var(--color-muted)] rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
          >
            <Icon name="ChevronRight" size={20} color="var(--color-primary)" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'bg-[var(--color-primary)] w-8' 
                  : 'bg-[var(--color-border)] hover:bg-[var(--color-primary)]/50'
              }`}
            />
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">4.9/5</div>
            <div className="text-[var(--color-text-secondary)]">Calificación Promedio</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">500+</div>
            <div className="text-[var(--color-text-secondary)]">Reseñas Verificadas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">98%</div>
            <div className="text-[var(--color-text-secondary)]">Recomendarían</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">45%</div>
            <div className="text-[var(--color-text-secondary)]">Huéspedes Recurrentes</div>
          </div>
        </div>

        {/* Instagram Integration */}
        <div className="mt-16 text-center">
          <h3 className="font-playfair text-2xl font-bold text-[var(--color-foreground)] mb-4">
            Síguenos en Instagram
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Descubre más momentos especiales de nuestros huéspedes
          </p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200">
              <Icon name="Instagram" size={20} />
              <span>@casamosaikosonsón</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;