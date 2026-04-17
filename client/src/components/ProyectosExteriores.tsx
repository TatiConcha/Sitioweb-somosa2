import { useEffect } from "react";
import Navbar from "@/components/Navigation"
import Footer from "@/components/Footer";

export default function ProyectosExteriores() {

     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const projects = [
    {
      id: 1,
      title: 'Casa Valle - Lo Barnechea',
      image: '/images/project-exterior-1.jpg',
    },
    {
      id: 2,
      title: 'Condominio Chicureo',
      image: '/images/project-exterior-2.jpg',
    },
    {
      id: 3,
      title: 'Casa Las Condes',
      image: '/images/project-exterior-1.jpg',
    },
    {
      id: 4,
      title: 'Proyecto Vitacura',
      image: '/images/project-exterior-2.jpg',
    },
  ];

  // ✅ TU CONFIGURACIÓN ORIGINAL DE WHATSAPP
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero cotizar un proyecto de exterior.'
  );

  const whatsappLink = `https://wa.me/56967261907?text=${whatsappMessage}`;

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">

          {/* HEADER CENTRADO */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proyectos de Exteriores
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Descubre nuestros proyectos de remodelación de exteriores en Santiago de Chile. 
              Diseñamos espacios exteriores modernos, funcionales y duraderos, cuidando cada detalle.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">

                <div className="relative overflow-hidden rounded-xl aspect-[4/5] shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-6">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition">
                      Ver proyecto →
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>

              </div>
            ))}
          </div>

          {/* CTA CON TU LINK DE WHATSAPP */}
          <div className="text-center mt-24">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres transformar tu espacio exterior?
            </h3>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Cotizar proyecto
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}