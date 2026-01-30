import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/Logo.png';


/**
 * Navigation Component
 * Design: Minimalismo Corporativo - Sticky header con logo rojo y menú limpio
 * - Fondo negro con logo prominente
 * - Menú horizontal en desktop, hamburguesa en móvil
 * - Transiciones suaves al scroll
 */


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
  src={logo}
  alt="Somos A Cuadrado"
  className="h-14 w-auto"
/>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-foreground">Somos A Cuadrado</h1>
            <p className="text-xs text-muted-foreground">Remodelación & Construcción</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
            aria-label="WhatsApp"
            title="Contactar por WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-in fade-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=56967261907"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all duration-300 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle size={24} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
