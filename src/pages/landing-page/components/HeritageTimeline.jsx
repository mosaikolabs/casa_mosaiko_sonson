import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeritageTimeline = () => {
  const [activeYear, setActiveYear] = useState(0);

  const timelineData = [
    {
      year: "1892",
      title: "Fundación de la Casa",
      description: `La familia Mosaiko establece su hogar en el corazón de Sonsón, construyendo esta hermosa casa colonial que se convertiría en el centro de generaciones de historias familiares.\n\nCon arquitectura tradicional antioqueña y materiales locales, la casa fue diseñada para resistir el paso del tiempo mientras acogía a la creciente familia.`,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      highlight: "Casa Colonial Original"
    },
    {
      year: "1920",
      title: "Era de Prosperidad",
      description: `Durante la bonanza cafetera, la familia Mosaiko expandió la propiedad, añadiendo los jardines interiores y las habitaciones que hoy conocemos como El Refugio y La Contemplación.\n\nEsta época marcó el apogeo de la hospitalidad familiar, recibiendo comerciantes y viajeros de toda la región.`,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      highlight: "Expansión y Jardines"
    },
    {
      year: "1965",
      title: "Tradición Artesanal",
      description: `La tercera generación introduce las tradiciones artesanales que definen nuestra identidad. Los talleres de cerámica y tejido se establecen en los patios traseros.\n\nEsta época consolida nuestra conexión con los artesanos locales y las técnicas tradicionales que aún preservamos.`,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      highlight: "Talleres Artesanales"
    },
    {
      year: "2018",
      title: "Restauración Contemporánea",
      description: `Iniciamos un cuidadoso proceso de restauración que respeta la arquitectura original mientras incorpora comodidades modernas y prácticas sostenibles.\n\nCada detalle fue pensado para honrar nuestro pasado mientras creamos experiencias memorables para nuestros huéspedes.`,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      highlight: "Renovación Sostenible"
    },
    {
      year: "2024",
      title: "Casa Mosaiko Hoy",
      description: `Hoy, Casa Mosaiko Sonsón representa la perfecta armonía entre tradición y modernidad, ofreciendo a nuestros huéspedes una experiencia auténtica de hospitalidad colombiana.\n\nContinuamos escribiendo nuestra historia, ahora con visitantes de todo el mundo que se convierten en parte de nuestra familia extendida.`,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
      highlight: "Hospitalidad Moderna"
    }
  ];

  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Nuestra Historia Familiar
          </h2>
          <p className="font-inter text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Más de 130 años de tradición, hospitalidad y amor por nuestra tierra se reflejan en cada rincón de Casa Mosaiko
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline Navigation */}
          <div className="space-y-6">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 p-6 rounded-lg ${
                  activeYear === index 
                    ? 'bg-white shadow-heritage border-l-4 border-[var(--color-primary)]' 
                    : 'hover:bg-white/50'
                }`}
                onClick={() => setActiveYear(index)}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
                    activeYear === index 
                      ? 'bg-[var(--color-primary)] text-white' 
                      : 'bg-[var(--color-muted)] text-[var(--color-text-secondary)]'
                  }`}>
                    {item.year.slice(-2)}
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-[var(--color-foreground)]">
                      {item.year}
                    </h3>
                    <p className="text-[var(--color-primary)] font-medium">
                      {item.highlight}
                    </p>
                  </div>
                </div>
                
                <h4 className="font-playfair text-lg font-semibold mb-2 text-[var(--color-foreground)]">
                  {item.title}
                </h4>
                
                {activeYear === index && (
                  <p className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Active Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-card">
              <Image
                src={timelineData[activeYear].image}
                alt={timelineData[activeYear].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  {timelineData[activeYear].year}
                </h3>
                <p className="font-inter text-lg opacity-90">
                  {timelineData[activeYear].title}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveYear(activeYear > 0 ? activeYear - 1 : timelineData.length - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
            >
              <Icon name="ChevronLeft" size={20} color="var(--color-primary)" />
            </button>
            
            <button
              onClick={() => setActiveYear(activeYear < timelineData.length - 1 ? activeYear + 1 : 0)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
            >
              <Icon name="ChevronRight" size={20} color="var(--color-primary)" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageTimeline;