import { useEffect } from "react";
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import Footer from '@/components/Footer';

/**
 * Home Page
 
 */

export default function Home() {

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);
  
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
