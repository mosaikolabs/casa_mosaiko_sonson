import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const [activeTransport, setActiveTransport] = useState('car');

  const transportOptions = [
    {
      id: 'car',
      name: 'En Automóvil',
      icon: 'Car',
      duration: '2.5 horas',
      distance: '120 km',
      description: 'Ruta escénica por la autopista Medellín-Bogotá',
      instructions: [
        'Tomar la Autopista Norte desde Medellín',
        'Continuar por la vía hacia Barbosa',
        'Desviarse hacia Sonsón por la vía departamental',
        'Seguir señalización hasta el centro histórico'
      ],
      cost: 'COP 80,000 - 120,000',
      tips: 'Recomendamos salir temprano para disfrutar del paisaje'
    },
    {
      id: 'bus',
      name: 'En Bus',
      icon: 'Bus',
      duration: '3.5 horas',
      distance: '120 km',
      description: 'Servicio directo desde Terminal del Norte',
      instructions: [
        'Dirigirse al Terminal del Norte de Medellín',
        'Buscar la empresa Rápido Ochoa o Flota Magdalena',
        'Comprar tiquete a Sonsón (salidas cada 2 horas)',
        'Descender en el terminal de Sonsón'
      ],
      cost: 'COP 25,000 - 35,000',
      tips: 'Reservamos transporte desde el terminal hasta Casa Mosaiko'
    },
    {
      id: 'transfer',
      name: 'Transfer Privado',
      icon: 'Users',
      duration: '2.5 horas',
      distance: '120 km',
      description: 'Servicio puerta a puerta con guía turístico',
      instructions: [
        'Recogida en tu hotel o aeropuerto',
        'Vehículo privado con conductor certificado',
        'Paradas opcionales en miradores panorámicos',
        'Llegada directa a Casa Mosaiko'
      ],
      cost: 'COP 350,000 - 450,000',
      tips: 'Incluye paradas fotográficas y refrigerios'
    }
  ];

  const nearbyAttractions = [
    {
      name: 'Páramo de Sonsón',
      distance: '15 km',
      type: 'Naturaleza',
      description: 'Ecosistema único con flora y fauna endémica'
    },
    {
      name: 'Cascada La Chorrera',
      distance: '8 km',
      type: 'Aventura',
      description: 'Caída de agua de 80 metros en medio del bosque'
    },
    {
      name: 'Centro Histórico',
      distance: '500 m',
      type: 'Cultura',
      description: 'Arquitectura colonial y museos locales'
    },
    {
      name: 'Mirador Alto de la Cruz',
      distance: '2 km',
      type: 'Paisaje',
      description: 'Vista panorámica del valle de Sonsón'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Cómo Llegar
          </h2>
          <p className="font-inter text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Ubicados en el corazón de Sonsón, Antioquia, a solo 2.5 horas de Medellín por una ruta llena de paisajes espectaculares
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Map */}
          <div className="space-y-6">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-card">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Casa Mosaiko Sonsón Location"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=5.7081,-75.3117&z=14&output=embed"
                className="border-0"
              />
            </div>

            {/* Location Details */}
            <div className="bg-[var(--color-muted)] rounded-lg p-6">
              <h3 className="font-playfair text-xl font-semibold text-[var(--color-foreground)] mb-4">
                Nuestra Ubicación
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[var(--color-foreground)]">Dirección</p>
                    <p className="text-[var(--color-text-secondary)]">Calle 14 #15-23, Centro Histórico<br />Sonsón, Antioquia, Colombia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[var(--color-foreground)]">Desde Medellín</p>
                    <p className="text-[var(--color-text-secondary)]">2.5 horas en automóvil<br />3.5 horas en transporte público</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mountain" size={20} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[var(--color-foreground)]">Altitud</p>
                    <p className="text-[var(--color-text-secondary)]">2,500 metros sobre el nivel del mar<br />Clima fresco todo el año (16-22°C)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transportation Options */}
          <div className="space-y-6">
            {/* Transport Tabs */}
            <div className="flex bg-[var(--color-muted)] rounded-lg p-2">
              {transportOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveTransport(option.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-md font-medium transition-all duration-300 flex-1 justify-center ${
                    activeTransport === option.id
                      ? 'bg-[var(--color-primary)] text-white shadow-md'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  <Icon name={option.icon} size={20} />
                  <span className="hidden sm:inline">{option.name}</span>
                </button>
              ))}
            </div>

            {/* Active Transport Details */}
            <div className="bg-white border border-[var(--color-border)] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
                  <Icon name={transportOptions.find(t => t.id === activeTransport)?.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-[var(--color-foreground)]">
                    {transportOptions.find(t => t.id === activeTransport)?.name}
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {transportOptions.find(t => t.id === activeTransport)?.description}
                  </p>
                </div>
              </div>

              {/* Transport Info */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-[var(--color-muted)] rounded-lg">
                <div className="text-center">
                  <Icon name="Clock" size={20} color="var(--color-primary)" className="mx-auto mb-1" />
                  <p className="text-sm text-[var(--color-text-secondary)]">Duración</p>
                  <p className="font-semibold text-[var(--color-foreground)]">
                    {transportOptions.find(t => t.id === activeTransport)?.duration}
                  </p>
                </div>
                <div className="text-center">
                  <Icon name="MapPin" size={20} color="var(--color-primary)" className="mx-auto mb-1" />
                  <p className="text-sm text-[var(--color-text-secondary)]">Distancia</p>
                  <p className="font-semibold text-[var(--color-foreground)]">
                    {transportOptions.find(t => t.id === activeTransport)?.distance}
                  </p>
                </div>
                <div className="text-center">
                  <Icon name="DollarSign" size={20} color="var(--color-primary)" className="mx-auto mb-1" />
                  <p className="text-sm text-[var(--color-text-secondary)]">Costo</p>
                  <p className="font-semibold text-[var(--color-foreground)] text-xs">
                    {transportOptions.find(t => t.id === activeTransport)?.cost}
                  </p>
                </div>
              </div>

              {/* Instructions */}
              <div className="mb-6">
                <h4 className="font-semibold text-[var(--color-foreground)] mb-3">Instrucciones:</h4>
                <ol className="space-y-2">
                  {transportOptions.find(t => t.id === activeTransport)?.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-[var(--color-text-secondary)]">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tips */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-2">
                  <Icon name="Lightbulb" size={20} color="#3B82F6" className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-blue-800 mb-1">Consejo:</p>
                    <p className="text-blue-700 text-sm">
                      {transportOptions.find(t => t.id === activeTransport)?.tips}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                fullWidth
                className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white"
              >
                Solicitar Asistencia de Transporte
              </Button>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-16">
          <h3 className="font-playfair text-2xl font-bold text-center text-[var(--color-foreground)] mb-8">
            Qué Hacer Cerca de Casa Mosaiko
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-white border border-[var(--color-border)] rounded-lg p-6 hover:shadow-heritage transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-[var(--color-muted)] text-[var(--color-text-secondary)] rounded-full text-sm">
                    {attraction.type}
                  </span>
                  <span className="text-[var(--color-primary)] font-semibold text-sm">
                    {attraction.distance}
                  </span>
                </div>
                <h4 className="font-playfair text-lg font-semibold text-[var(--color-foreground)] mb-2">
                  {attraction.name}
                </h4>
                <p className="text-[var(--color-text-secondary)] text-sm">
                  {attraction.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;