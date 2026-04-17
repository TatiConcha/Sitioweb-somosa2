import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero cotizar un proyecto de remodelación.'
  );
  const whatsappLink = `https://wa.me/56967261907?text=${whatsappMessage}`;

  return (
    <section
      id="inicio"
      className="relative w-full h-screen bg-background overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-main.jpg)',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center container mx-auto px-4 text-center">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* H1 */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hacemos realidad tus espacios con remodelación y construcción de calidad
          </h1>

          {/* Párrafo */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Especialistas en remodelación y construcción de casas y departamentos en Chile. Calidad, precisión y resultados que superan expectativas.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">

            {/* CTA PRINCIPAL */}
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-lg px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 flex items-center gap-2"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Solicitar Cotización
                <ArrowRight size={20} />
              </a>
            </Button>

            {/* CTA SECUNDARIO */}
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-lg px-8 py-6 text-lg font-semibold transition-all duration-300"
              asChild
            >
              <a href="#proyectos">Ver Proyectos</a>
            </Button>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
