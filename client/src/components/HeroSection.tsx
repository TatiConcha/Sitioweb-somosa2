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
    className="relative min-h-screen bg-background pt-20"
  >

    {/* CONTENEDOR GENERAL */}
    <div className="container mx-auto px-4 h-[calc(100vh-80px)]">

      {/* HERO BOX */}
      <div className="relative w-full h-full overflow-hidden rounded-none md:rounded-2xl">

        {/* IMAGEN */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: 'url(/images/hero-main.jpg)',
            backgroundPosition: '40% center',
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENIDO */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

          <div className="max-w-4xl mx-auto">

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-none mb-6">
              Hacemos realidad tus espacios con remodelación y construcción de calidad
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Especialistas en remodelación y construcción de casas y departamentos en Chile.
              Calidad, precisión y resultados que superan expectativas.
            </p>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">

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
      </div>
    </div>
  </section>
);

}