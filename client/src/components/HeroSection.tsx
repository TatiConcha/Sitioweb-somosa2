import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * Hero Section Component
 * Design: Minimalismo Corporativo - Imagen de fondo con overlay y texto centrado
 * - Imagen de proyecto premium como fondo
 * - Overlay oscuro para legibilidad
 * - CTA prominente en rojo
 * - Animación de entrada suave
 */
export default function HeroSection() {
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
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Transformamos tus espacios
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Remodelación y construcción de casas, departamentos y espacios corporativos con calidad y precisión.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-lg px-8 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 flex items-center gap-2"
              asChild
            >
              <a href="#proyectos">
                Ver Proyectos
                <ArrowRight size={20} />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-lg px-8 py-6 text-lg font-semibold transition-all duration-300"
              asChild
            >
              <a href="#contacto">Solicitar Cotización</a>
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
