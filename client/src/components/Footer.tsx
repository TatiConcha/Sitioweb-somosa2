import { Facebook, Instagram, MessageCircle } from 'lucide-react';

/**
 * Footer Component
 * Design: Minimalismo Corporativo - Footer limpio con información y redes sociales
 * - Links rápidos
 * - Información de contacto
 * - Redes sociales
 * - Copyright
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A²</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">Somos A Cuadrado</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformamos espacios con calidad, precisión y dedicación.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a href="#proyectos" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Proyectos Exteriores
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Proyectos Interiores
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Proyectos Corporativos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Cotizaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+56967261907" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  +56 9 6726 1907
                </a>
              </li>
              <li>
                <a href="mailto:info@somosacuadrado.cl" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  hola@somosa2.cl
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Santiago, Chile
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Somos A Cuadrado. Todos los derechos reservados.
          </p>

   {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://wa.me/56967261907"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-background border border-border hover:border-accent hover:text-accent transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-background border border-border hover:border-accent hover:text-accent transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-background border border-border hover:border-accent hover:text-accent transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
