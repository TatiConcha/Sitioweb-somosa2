import { useEffect } from "react";
import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function ProyectosInteriores() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      slug: 'departamento-la-capitania',
      title: 'Departamento La Capitania',
      image: '/images/la-capitania/03_cocina.png',
      description: 'Remodelación integral de cocina, baños y espacios interiores con mejoras en diseño, funcionalidad e iluminación.',
    },
    {
      id: 2,
      slug: 'cocina-roger-de-flor',
      title: 'Cocina Roger de Flor',
      image:  '/images/roger-de-flor/hero.jpg',
      description: 'Renovación integral de cocina con mejoras en diseño, funcionalidad e iluminación.',
    },
    {
      id: 3,
      slug: 'departamento-luisa-guzmán',
      title: 'Departamento Luisa Guzmán',
      image: '/images/luisa-guzman/01_luisag.jpeg',
    },
    {
      id: 4,
       slug: 'departamento-suecia',
      title: 'Departamento Suecia',
      image: '/images/project-interior-2.jpg',
    },
  ];

  const whatsappMessage = encodeURIComponent(
    'Hola, quiero cotizar un proyecto de interior.'
  );

  const whatsappLink = `https://wa.me/56967261907?text=${whatsappMessage}`;

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proyectos de Interiores
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Descubre nuestros proyectos de remodelación de interiores en Santiago de Chile.
              Diseñamos espacios funcionales, modernos y armónicos, cuidando cada detalle desde el diseño hasta la ejecución.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
       
 <Link
    href={`/proyectos/${project.slug}`}
    key={project.id}
    className="group cursor-pointer block"
  >
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
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
  {project.description}
</p>
           </Link>   
              
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-24">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres transformar tu espacio interior?
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