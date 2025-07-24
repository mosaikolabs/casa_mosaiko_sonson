import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const BookingSuccess = ({ bookingData, onClose, onNewBooking }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-CO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateNights = () => {
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    return Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  };

  const recommendations = [
    {
      title: "Prepara tu Llegada",
      items: [
        "Revisa las opciones de transporte desde Medellín",
        "Empaca ropa abrigada (clima fresco de montaña)",
        "Trae cámara para capturar los paisajes",
        "Descarga mapas offline por si hay poca señal"
      ]
    },
    {
      title: "Experiencias Recomendadas",
      items: [
        "Taller de cerámica con artesanos locales",
        "Caminata al Páramo de Sonsón",
        "Visita a la Cascada La Chorrera",
        "Tour gastronómico por el centro histórico"
      ]
    },
    {
      title: "Qué Incluye tu Estadía",
      items: [
        "Desayuno tradicional antioqueño",
        "Wi-Fi gratuito en todas las áreas",
        "Acceso a jardines y áreas comunes",
        "Concierge personalizado"
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[var(--color-primary)] text-white p-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={40} color="white" />
          </div>
          <h2 className="font-playfair text-3xl font-bold mb-2">
            ¡Reserva Confirmada!
          </h2>
          <p className="text-lg opacity-90">
            Tu experiencia en Casa Mosaiko está asegurada
          </p>
        </div>

        <div className="p-8">
          {/* Booking Details */}
          <div className="bg-[var(--color-muted)] rounded-lg p-6 mb-8">
            <h3 className="font-playfair text-xl font-bold text-[var(--color-foreground)] mb-4">
              Detalles de tu Reserva
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Hash" size={20} color="var(--color-primary)" />
                  <div>
                    <p className="text-sm text-[var(--color-text-secondary)]">Número de Confirmación</p>
                    <p className="font-bold text-[var(--color-primary)] text-lg">
                      {bookingData.confirmationNumber}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="User" size={20} color="var(--color-primary)" />
                  <div>
                    <p className="text-sm text-[var(--color-text-secondary)]">Huésped Principal</p>
                    <p className="font-semibold text-[var(--color-foreground)]">
                      {bookingData.firstName} {bookingData.lastName}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} color="var(--color-primary)" />
                  <div>
                    <p className="text-sm text-[var(--color-text-secondary)]">Email</p>
                    <p className="font-semibold text-[var(--color-foreground)]">
                      {bookingData.email}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Calendar" size={20} color="var(--color-primary)" />
                  <div>
                    <p className="text-sm text-[var(--color-text-secondary)]">Fechas de Estadía</p>
                    <p className="font-semibold text-[var(--color-foreground)]">
                      {formatDate(bookingData.checkIn)}
                    </p>
                    <p className="font-semibold text-[var(--color-foreground)]">
                      hasta {formatDate(bookingData.checkOut)}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      ({calculateNights()} {calculateNights() === 1 ? 'noche' : 'noches'})
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="Home" size={20} color="var(--color-primary)" />
                  <div>
                    <p className="text-sm text-[var(--color-text-secondary)]">Habitación</p>
                    <p className="font-semibold text-[var(--color-foreground)]">
                      {bookingData.roomType === 'el-refugio' && 'El Refugio'}
                      {bookingData.roomType === 'el-ritual' && 'El Ritual'}
                      {bookingData.roomType === 'la-contemplacion' && 'La Contemplación'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="DollarSign" size={20} color="var(--color-primary)" />
                  <div>
                    <p className="text-sm text-[var(--color-text-secondary)]">Total Pagado</p>
                    <p className="font-bold text-[var(--color-primary)] text-lg">
                      COP {bookingData.totalPrice?.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-8">
            <h3 className="font-playfair text-xl font-bold text-[var(--color-foreground)] mb-6">
              Próximos Pasos
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {recommendations.map((section, index) => (
                <div key={index} className="bg-white border border-[var(--color-border)] rounded-lg p-6">
                  <h4 className="font-semibold text-[var(--color-foreground)] mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <Icon name="Check" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Icon name="MessageCircle" size={24} color="#3B82F6" className="flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">
                  Estamos Aquí para Ayudarte
                </h4>
                <p className="text-blue-700 mb-3">
                  Nuestro equipo de concierge está disponible para ayudarte con cualquier pregunta o solicitud especial.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/573145678900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <Icon name="MessageCircle" size={16} />
                    WhatsApp: +57 314 567 8900
                  </a>
                  <a
                    href="mailto:hola@casamosaikosonsón.com"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <Icon name="Mail" size={16} />
                    hola@casamosaikosonsón.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              onClick={onNewBooking}
              iconName="Plus"
              iconPosition="left"
              className="flex-1"
            >
              Hacer Otra Reserva
            </Button>
            
            <Button
              variant="default"
              onClick={() => window.print()}
              iconName="Download"
              iconPosition="left"
              className="flex-1 bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white"
            >
              Descargar Confirmación
            </Button>
            
            <Button
              variant="secondary"
              onClick={onClose}
              iconName="X"
              iconPosition="left"
              className="flex-1"
            >
              Cerrar
            </Button>
          </div>

          {/* Social Sharing */}
          <div className="mt-8 text-center">
            <p className="text-[var(--color-text-secondary)] mb-4">
              ¡Comparte tu emoción por esta experiencia única!
            </p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Icon name="Facebook" size={16} />
                <span>Facebook</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors">
                <Icon name="Instagram" size={16} />
                <span>Instagram</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                <Icon name="Twitter" size={16} />
                <span>Twitter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;