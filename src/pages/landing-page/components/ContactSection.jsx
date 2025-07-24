import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const subjectOptions = [
    { value: 'reservation', label: 'Consulta de Reserva' },
    { value: 'events', label: 'Eventos Especiales' },
    { value: 'experiences', label: 'Experiencias Locales' },
    { value: 'transportation', label: 'Transporte' },
    { value: 'general', label: 'Información General' },
    { value: 'other', label: 'Otro' }
  ];

  const contactOptions = [
    { value: 'email', label: 'Correo Electrónico' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'phone', label: 'Llamada Telefónica' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Teléfono',
      value: '+57 314 567 8900',
      description: 'Lunes a Domingo, 7:00 AM - 9:00 PM',
      action: 'tel:+573145678900',
      color: 'text-green-600'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      value: '+57 314 567 8900',
      description: 'Respuesta inmediata, 24/7',
      action: 'https://wa.me/573145678900',
      color: 'text-green-600'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'hola@casamosaikosonsón.com',
      description: 'Respuesta en menos de 2 horas',
      action: 'mailto:hola@casamosaikosonsón.com',
      color: 'text-blue-600'
    },
    {
      icon: 'Instagram',
      title: 'Instagram',
      value: '@casamosaikosonsón',
      description: 'Síguenos para contenido diario',
      action: 'https://instagram.com/casamosaikosonsón',
      color: 'text-pink-600'
    }
  ];

  const operatingHours = [
    { day: 'Lunes - Viernes', hours: '7:00 AM - 9:00 PM' },
    { day: 'Sábados', hours: '7:00 AM - 10:00 PM' },
    { day: 'Domingos', hours: '8:00 AM - 8:00 PM' },
    { day: 'Check-in', hours: '3:00 PM - 8:00 PM' },
    { day: 'Check-out', hours: '7:00 AM - 12:00 PM' }
  ];

  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Contáctanos
          </h2>
          <p className="font-inter text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Estamos aquí para ayudarte a planear tu experiencia perfecta en Casa Mosaiko. Contáctanos por el medio que prefieras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-card p-8">
            <h3 className="font-playfair text-2xl font-bold text-[var(--color-foreground)] mb-6">
              Envíanos un Mensaje
            </h3>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-green-800">
                  <Icon name="CheckCircle" size={20} />
                  <span className="font-semibold">¡Mensaje enviado exitosamente!</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Te responderemos dentro de las próximas 2 horas.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Nombre Completo"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Tu nombre"
                  required
                />
                <Input
                  label="Correo Electrónico"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Teléfono"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+57 300 123 4567"
                />
                <Select
                  label="Asunto"
                  options={subjectOptions}
                  value={formData.subject}
                  onChange={(value) => handleInputChange('subject', value)}
                  placeholder="Selecciona un tema"
                  required
                />
              </div>

              <Select
                label="Método de Contacto Preferido"
                description="¿Cómo prefieres que te contactemos?"
                options={contactOptions}
                value={formData.preferredContact}
                onChange={(value) => handleInputChange('preferredContact', value)}
              />

              <div>
                <label className="block text-sm font-medium text-[var(--color-foreground)] mb-2">
                  Mensaje *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={5}
                  required
                  className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                disabled={!formData.name || !formData.email || !formData.message}
                iconName="Send"
                iconPosition="left"
                fullWidth
                className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-lg shadow-card p-8">
              <h3 className="font-playfair text-2xl font-bold text-[var(--color-foreground)] mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : '_self'}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-[var(--color-muted)] transition-colors duration-200 group"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${method.color} bg-opacity-10 group-hover:bg-opacity-20 transition-colors`}>
                      <Icon name={method.icon} size={24} color="currentColor" className={method.color} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--color-foreground)] mb-1">
                        {method.title}
                      </h4>
                      <p className="text-[var(--color-primary)] font-medium mb-1">
                        {method.value}
                      </p>
                      <p className="text-[var(--color-text-secondary)] text-sm">
                        {method.description}
                      </p>
                    </div>
                    <Icon name="ExternalLink" size={16} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-lg shadow-card p-8">
              <h3 className="font-playfair text-2xl font-bold text-[var(--color-foreground)] mb-6">
                Horarios de Atención
              </h3>
              <div className="space-y-3">
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-[var(--color-border)] last:border-b-0">
                    <span className="text-[var(--color-text-secondary)]">{schedule.day}</span>
                    <span className="font-semibold text-[var(--color-foreground)]">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-[var(--color-muted)] rounded-lg">
                <div className="flex items-start gap-2">
                  <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[var(--color-foreground)] mb-1">Nota Importante:</p>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      Para check-in fuera de horario, por favor contáctanos con 24 horas de anticipación. 
                      Nuestro servicio de WhatsApp está disponible 24/7 para emergencias.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="AlertTriangle" size={20} color="#DC2626" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Contacto de Emergencia</h4>
                  <p className="text-red-700 text-sm mb-2">
                    Para emergencias durante tu estadía, contáctanos inmediatamente:
                  </p>
                  <div className="space-y-1">
                    <p className="text-red-800 font-medium">WhatsApp: +57 314 567 8900</p>
                    <p className="text-red-800 font-medium">Teléfono: +57 314 567 8900</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-[var(--color-primary)] rounded-lg p-8 text-center text-white">
          <h3 className="font-playfair text-2xl font-bold mb-4">
            Mantente Conectado
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín para recibir ofertas especiales, eventos culturales y noticias de Casa Mosaiko
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 bg-white"
            />
            <Button
              variant="secondary"
              iconName="Mail"
              iconPosition="left"
              className="bg-white text-[var(--color-primary)] hover:bg-gray-100"
            >
              Suscribirse
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;