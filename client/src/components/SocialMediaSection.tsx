import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Social Media Section Component
 * Design: Minimalismo Corporativo - Sección de redes sociales estilo Bildit.cl
 * - Grid de imágenes de Instagram
 * - CTA para seguir en Instagram
 * - Animaciones suaves
 */

const instagramPosts = [
  {
    id: '1',
    image: '/images/project-exterior-1.jpg',
    caption: 'Transformación exterior completa en Lo Barnechea',
  },
  {
    id: '2',
    image: '/images/project-interior-1.jpg',
    caption: 'Renovación interior moderna y elegante',
  },
  {
    id: '3',
    image: '/images/project-corporate-1.jpg',
    caption: 'Oficinas corporativas de clase mundial',
  },
  {
    id: '4',
    image: '/images/project-exterior-2.jpg',
    caption: 'Casa contemporánea con arquitectura premium',
  },
  {
    id: '5',
    image: '/images/hero-main.jpg',
    caption: 'Proyecto de lujo con iluminación profesional',
  },
  {
    id: '6',
    image: '/images/project-interior-1.jpg',
    caption: 'Diseño interior minimalista y sofisticado',
  },
];

export default function SocialMediaSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Síguenos en nuestras redes sociales
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Descubre nuestros últimos proyectos y transformaciones en Instagram. Sigue nuestro trabajo diario.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {instagramPosts.map((post, index) => (

            
            <a
              key={post.id}
              href="https://www.instagram.com/somosacuadrado/"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-lg aspect-square bg-card shadow-lg animate-in fade-in slide-in-from-bottom-8 hover-lift block"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-sm font-medium line-clamp-2">{post.caption}</p>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-3 right-3 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram size={16} className="text-white" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-8 delay-300">
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-white rounded-lg px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 flex items-center gap-2"
          >
            <a
  href="https://www.instagram.com/somosacuadrado/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Instagram size={20} />
  Seguir en Instagram
  <ExternalLink size={16} />
</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
