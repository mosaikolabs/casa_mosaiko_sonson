import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const [activeTab, setActiveTab] = useState('philosophy');

  const tabs = [
    {
      id: 'philosophy',
      label: 'Nuestra Filosofía',
      icon: 'Heart'
    },
    {
      id: 'sustainability',
      label: 'Sostenibilidad',
      icon: 'Leaf'
    },
    {
      id: 'community',
      label: 'Comunidad',
      icon: 'Users'
    }
  ];

  const content = {
    philosophy: {
      title: "Hospitalidad con Alma",
      subtitle: "Más que un lugar para dormir, una experiencia transformadora",
      description: `En Casa Mosaiko creemos que la verdadera hospitalidad va más allá de ofrecer una cama cómoda. Cada huésped que cruza nuestro umbral se convierte en parte de nuestra historia familiar.\n\nNuestra filosofía se basa en tres pilares fundamentales: autenticidad, conexión humana y respeto por nuestras tradiciones. No somos un hotel convencional; somos guardianes de la memoria y creadores de nuevos recuerdos.`,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop",
      features: [
        "Experiencias personalizadas para cada huésped",
        "Conexión auténtica con la cultura local",
        "Preservación de tradiciones familiares",
        "Hospitalidad cálida y genuina"
      ]
    },
    sustainability: {
      title: "Compromiso con el Futuro",
      subtitle: "Turismo responsable que protege nuestro patrimonio",
      description: `Nuestro compromiso con la sostenibilidad no es una tendencia, es una responsabilidad. Cada decisión que tomamos considera el impacto en nuestra comunidad y medio ambiente.\n\nDesde el uso de materiales locales en nuestra restauración hasta el apoyo a productores regionales, Casa Mosaiko es un ejemplo de cómo el turismo puede ser una fuerza positiva para el desarrollo local.`,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      features: [
        "100% energía renovable",
        "Gestión responsable del agua",
        "Productos locales y orgánicos",
        "Cero residuos al relleno sanitario"
      ]
    },
    community: {
      title: "Tejiendo Comunidad",
      subtitle: "Fortaleciendo lazos con artesanos y productores locales",
      description: `Casa Mosaiko es más que un negocio familiar; somos un puente entre nuestros huéspedes y la rica cultura de Sonsón. Trabajamos directamente con más de 50 artesanos locales.\n\nCada compra, cada experiencia y cada recomendación que hacemos está diseñada para generar un impacto positivo en nuestra comunidad, creando un círculo virtuoso de desarrollo local.`,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      features: [
        "Alianzas con 50+ artesanos locales",
        "Programas de capacitación comunitaria",
        "Compras directas a productores",
        "Promoción del talento regional"
      ]
    }
  };

  const impactMetrics = [
    {
      number: "50+",
      label: "Artesanos Aliados",
      icon: "Palette"
    },
    {
      number: "100%",
      label: "Energía Renovable",
      icon: "Zap"
    },
    {
      number: "85%",
      label: "Productos Locales",
      icon: "MapPin"
    },
    {
      number: "0",
      label: "Residuos al Relleno",
      icon: "Recycle"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Nuestros Valores
          </h2>
          <p className="font-inter text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Cada aspecto de Casa Mosaiko refleja nuestro compromiso con la autenticidad, sostenibilidad y el desarrollo comunitario
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[var(--color-muted)] rounded-lg p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]'
                }`}
              >
                <Icon name={tab.icon} size={20} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-[var(--color-foreground)] mb-2">
                {content[activeTab].title}
              </h3>
              <p className="text-[var(--color-primary)] font-medium text-lg mb-4">
                {content[activeTab].subtitle}
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                {content[activeTab].description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {content[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={14} color="white" />
                  </div>
                  <span className="text-[var(--color-text-secondary)]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Video Testimonial Button */}
            <div className="pt-4">
              <button className="flex items-center gap-3 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group">
                <div className="w-12 h-12 bg-[var(--color-primary)] group-hover:bg-[var(--color-accent)] rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Play" size={20} color="white" />
                </div>
                <span className="font-medium">Ver testimonios de artesanos locales</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-card">
              <Image
                src={content[activeTab].image}
                alt={content[activeTab].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-heritage p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">4.9/5</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Impacto Social</div>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={12} color="var(--color-primary)" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-[var(--color-muted)] rounded-lg p-8">
          <h3 className="font-playfair text-2xl font-bold text-center text-[var(--color-foreground)] mb-8">
            Nuestro Impacto en Números
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric.icon} size={24} color="white" />
                </div>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  {metric.number}
                </div>
                <div className="text-[var(--color-text-secondary)] text-sm">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;