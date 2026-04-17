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
    image: '/images/instagram-1.jpg',
    caption: 'Transformación exterior completa en Lo Barnechea',
    link: 'https://www.instagram.com/p/C_Jve20PsJM/?img_index=1',
    isVideo: true
  },
  {
    id: '2',
    image: '/images/instagram-2.jpg',
    caption: 'Renovación interior moderna y elegante',
    link: 'https://www.instagram.com/p/C-puTRvO0ej/?img_index=1',
    isVideo: false
  },
  {
    id: '3',
    image: '/images/instagram-3.jpg',
    caption: 'Oficinas corporativas de clase mundial',
    link: 'https://www.instagram.com/p/C48rlJ_RYaq/',
    isVideo: true
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
            Descubre nuestros últimos proyectos, transformaciones y avances en obra.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {instagramPosts.map((post, index) => (

            <a
              key={post.id}
              href={post.link}
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

{post.isVideo && (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="bg-black/50 rounded-full p-4">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
)}


              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white text-sm font-medium line-clamp-2">
                  {post.caption}
                </p>
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