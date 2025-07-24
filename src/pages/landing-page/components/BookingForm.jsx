import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const BookingForm = ({ selectedRoom, onClose, onBookingComplete }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: selectedRoom?.id || '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    contactPreference: 'email'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const roomOptions = [
    { value: 'el-refugio', label: 'El Refugio - COP 280,000/noche' },
    { value: 'el-ritual', label: 'El Ritual - COP 220,000/noche' },
    { value: 'la-contemplacion', label: 'La Contemplación - COP 180,000/noche' }
  ];

  const guestOptions = [
    { value: 1, label: '1 Huésped' },
    { value: 2, label: '2 Huéspedes' },
    { value: 3, label: '3 Huéspedes' },
    { value: 4, label: '4 Huéspedes' }
  ];

  const contactOptions = [
    { value: 'email', label: 'Correo Electrónico' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'phone', label: 'Llamada Telefónica' }
  ];

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));

    // Calculate price when dates or room change
    if (field === 'checkIn' || field === 'checkOut' || field === 'roomType') {
      calculatePrice({ ...bookingData, [field]: value });
    }
  };

  const calculatePrice = (data) => {
    if (data.checkIn && data.checkOut && data.roomType) {
      const checkIn = new Date(data.checkIn);
      const checkOut = new Date(data.checkOut);
      const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      
      const roomPrices = {
        'el-refugio': 280000,
        'el-ritual': 220000,
        'la-contemplacion': 180000
      };
      
      const basePrice = roomPrices[data.roomType] || 0;
      setTotalPrice(basePrice * nights);
    }
  };

  const checkAvailability = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockAvailableRooms = [
        {
          id: bookingData.roomType,
          name: roomOptions.find(r => r.value === bookingData.roomType)?.label.split(' - ')[0],
          available: true,
          price: totalPrice
        }
      ];
      setAvailableRooms(mockAvailableRooms);
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  const submitBooking = async () => {
    setIsLoading(true);
    
    // Simulate booking submission
    setTimeout(() => {
      setIsLoading(false);
      onBookingComplete({
        ...bookingData,
        totalPrice,
        confirmationNumber: 'CM' + Math.random().toString(36).substr(2, 9).toUpperCase()
      });
    }, 2000);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMinCheckOutDate = () => {
    if (bookingData.checkIn) {
      const checkIn = new Date(bookingData.checkIn);
      checkIn.setDate(checkIn.getDate() + 1);
      return checkIn.toISOString().split('T')[0];
    }
    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    return dayAfterTomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[var(--color-foreground)]">
              {step === 1 ? 'Verificar Disponibilidad' : 'Completar Reserva'}
            </h2>
            <p className="text-[var(--color-text-secondary)] mt-1">
              {step === 1 ? 'Paso 1 de 2' : 'Paso 2 de 2'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--color-muted)] transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              {/* Date Selection */}
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Fecha de Llegada"
                  type="date"
                  value={bookingData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  min={getTomorrowDate()}
                  required
                />
                <Input
                  label="Fecha de Salida"
                  type="date"
                  value={bookingData.checkOut}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  min={getMinCheckOutDate()}
                  required
                />
              </div>

              {/* Room and Guests */}
              <div className="grid md:grid-cols-2 gap-4">
                <Select
                  label="Tipo de Habitación"
                  options={roomOptions}
                  value={bookingData.roomType}
                  onChange={(value) => handleInputChange('roomType', value)}
                  required
                />
                <Select
                  label="Número de Huéspedes"
                  options={guestOptions}
                  value={bookingData.guests}
                  onChange={(value) => handleInputChange('guests', value)}
                  required
                />
              </div>

              {/* Price Preview */}
              {totalPrice > 0 && (
                <div className="bg-[var(--color-muted)] rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-text-secondary)]">Precio Total:</span>
                    <div className="text-right">
                      <div className="text-xl font-bold text-[var(--color-primary)]">
                        COP {totalPrice.toLocaleString()}
                      </div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        USD {Math.round(totalPrice / 4000)}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <Button
                variant="default"
                size="lg"
                onClick={checkAvailability}
                loading={isLoading}
                disabled={!bookingData.checkIn || !bookingData.checkOut || !bookingData.roomType}
                iconName="Search"
                iconPosition="left"
                fullWidth
                className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white"
              >
                {isLoading ? 'Verificando...' : 'Verificar Disponibilidad'}
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              {/* Availability Confirmation */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-green-800 mb-2">
                  <Icon name="CheckCircle" size={20} />
                  <span className="font-semibold">¡Habitación Disponible!</span>
                </div>
                <p className="text-green-700 text-sm">
                  Tu habitación está disponible para las fechas seleccionadas.
                </p>
              </div>

              {/* Guest Information */}
              <div>
                <h3 className="font-playfair text-lg font-semibold mb-4 text-[var(--color-foreground)]">
                  Información del Huésped
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Nombre"
                    type="text"
                    value={bookingData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Tu nombre"
                    required
                  />
                  <Input
                    label="Apellido"
                    type="text"
                    value={bookingData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Tu apellido"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <Input
                    label="Correo Electrónico"
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="tu@email.com"
                    required
                  />
                  <Input
                    label="Teléfono"
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+57 300 123 4567"
                    required
                  />
                </div>
              </div>

              {/* Contact Preference */}
              <Select
                label="Preferencia de Contacto"
                description="¿Cómo prefieres que te contactemos?"
                options={contactOptions}
                value={bookingData.contactPreference}
                onChange={(value) => handleInputChange('contactPreference', value)}
              />

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                  Solicitudes Especiales (Opcional)
                </label>
                <textarea
                  value={bookingData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  placeholder="¿Hay algo especial que podamos preparar para tu estadía?"
                  rows={3}
                  className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                />
              </div>

              {/* Booking Summary */}
              <div className="bg-[var(--color-muted)] rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-[var(--color-foreground)]">Resumen de Reserva</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Habitación:</span>
                    <span>{roomOptions.find(r => r.value === bookingData.roomType)?.label.split(' - ')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fechas:</span>
                    <span>{bookingData.checkIn} - {bookingData.checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Huéspedes:</span>
                    <span>{bookingData.guests}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-[var(--color-primary)] pt-2 border-t">
                    <span>Total:</span>
                    <span>COP {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  iconName="ArrowLeft"
                  iconPosition="left"
                  className="flex-1"
                >
                  Volver
                </Button>
                <Button
                  variant="default"
                  onClick={submitBooking}
                  loading={isLoading}
                  disabled={!bookingData.firstName || !bookingData.lastName || !bookingData.email || !bookingData.phone}
                  iconName="Check"
                  iconPosition="left"
                  className="flex-1 bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white"
                >
                  {isLoading ? 'Procesando...' : 'Confirmar Reserva'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;