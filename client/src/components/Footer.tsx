import { Instagram, MessageCircle } from 'lucide-react'

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
              Especialistas en remodelación de espacios interiores y exteriores en Santiago, combinando diseño, calidad y ejecución precisa en cada proyecto.
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
                <a href="mailto:hola@somosa2.cl" className="text-sm text-muted-foreground hover:text-accent transition-colors">
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
          
          {/* Copyright + Crédito */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Somos A Cuadrado. Todos los derechos reservados.
            </p>

            <p className="text-sm text-muted-foreground mt-1">
              Diseño & Desarrollo Web —
              <a
                href="https://wa.me/56984301071?text=Hola%2C%20vi%20tu%20dise%C3%B1o%20y%20desarrollo%20web%20y%20me%20gustar%C3%ADa%20cotizar%20una%20p%C3%A1gina%20web%20contigo."
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground ml-1 hover:underline hover:text-accent transition-colors"
              >
                La Rubia Digital
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://wa.me/56967261907?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20proyecto%20de%20remodelaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-background border border-border hover:border-accent hover:text-accent transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>

            <a
              href="https://www.instagram.com/somosacuadrado/"
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