import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Design: Minimalismo Corporativo Sofisticado
 * - Navegación sticky
 * - Hero section con imagen de fondo
 * - Sección de proyectos con filtrado
 * - Testimonios en carrusel
 * - Formulario de contacto
 * - Footer con información
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <SocialMediaSection />
      <Footer />
    </div>
  );
}
