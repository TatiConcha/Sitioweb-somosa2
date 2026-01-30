import { MessageCircle, Mail, Phone } from 'lucide-react';
const whatsappLink = 'https://api.whatsapp.com/send?phone=56967261907';

/**
 * Contact Section Component
 * Design: Minimalismo Corporativo - CTA con opciones de contacto directo
 * - Opciones de WhatsApp, email y teléfono
 * - Sin formulario (solo contacto directo)
 * - Animaciones suaves
 */

export default function ContactSection() {
  const whatsappMessage = encodeURIComponent('Hola, me gustaría solicitar una cotización para un proyecto de remodelación.');
  const whatsappLink = `https://wa.me/+56 9 6721 907?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Solicita tu cotización
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos listos para transformar tu espacio. Contáctanos hoy y comencemos a trabajar juntos en tu proyecto.
          </p>
        </div>

        {/* Contact Options */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-8"
            >
              <div className="p-4 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                <MessageCircle size={32} className="text-green-500" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">WhatsApp</h3>
                
                <p className="text-sm text-green-500 font-semibold">Respuesta durante el día hábil</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:hola@somosa2.cl"
              className="flex flex-col items-center gap-4 p-8 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-8 delay-100"
            >
              <div className="p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                <Mail size={32} className="text-accent" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground mb-3">hola@somosa2.cl</p>
                <p className="text-sm text-accent font-semibold">Respuesta en 24 horas hábiles</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+56 9 6726 1907"
              className="flex flex-col items-center gap-4 p-8 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-8 delay-200"
            >
              <div className="p-4 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                <Phone size={32} className="text-blue-500" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">Teléfono</h3>
                <p className="text-muted-foreground mb-3">+56 9 6726 1907</p>
                <p className="text-sm text-blue-500 font-semibold">Lun-Vie 9:00-18:00</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
