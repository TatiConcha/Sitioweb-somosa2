import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

/**
 * Testimonials Section Component
 * Design: Minimalismo Corporativo - Carrusel de testimonios escritos
 * - Testimonios en tarjetas con estrellas
 * - Navegación con flechas
 * - Transiciones suaves
 * - Auto-rotate cada 6 segundos
 */

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Pablo Álamos',
    role: 'Propietaria - Casa La Reina',
    text: 'Tuvimos una experiencia excelente. Nunca tuvimos un problema en la comunicación, si algo debía sumarse o cambiarse, siempre una pregunta antes. La verdad que muy felices, la postventa debe ser única... Parece que fueran amigos. Recomendadísimos.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Hernán Correa',
    role: 'Propietaria - Departamento Los Acantos',
    text: 'Excelente trabajo. Nos encantó la cercanía, compromiso y profesionalismo de Ángel y su equipo durante todo el proceso de remodelación. Cumplieron con los plazos, siempre atentos a los detalles y dispuestos a resolver cualquier duda o ajuste incluso después de terminado el proyecto. Se nota que les importa la satisfacción del cliente. ¡Muy recomendados!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Andrea Martínez',
    role: 'Propietaria - Departamento Chicureo',
    text: 'La renovación interior de nuestro departamento superó nuestras expectativas. Muy satisfechos con el resultado y el trato recibido.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Roberto Silva',
    role: 'Director - Centro Educativo',
    text: 'Confiamos en Somos A Cuadrado para remodelar nuestras instalaciones. Entregaron un trabajo de calidad superior con total profesionalismo.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoRotate]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoRotate(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoRotate(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nuestros clientes confían en nosotros porque cumplimos lo que prometemos. Cada proyecto es una oportunidad para demostrar compromiso, calidad y dedicación en cada detalle.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom-8 shadow-lg hover-lift">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-foreground font-light leading-relaxed mb-8 italic text-gray-200">
              &quot;{currentTestimonial.text}&quot;
            </blockquote>

            {/* Author Info */}
            <div className="border-t border-border pt-6">
              <p className="text-lg font-semibold text-foreground">{currentTestimonial.name}</p>
              <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoRotate(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-8'
                    : 'bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
