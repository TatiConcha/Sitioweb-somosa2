import { Link } from "wouter";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Proyectos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada proyecto es una historia única de transformación. Explora nuestro portafolio de remodelación de casas y departamentos en Santiago, con trabajos en interiores y exteriores realizados con diseño moderno y materiales de alta calidad.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

          {/* EXTERIORES */}
          <Link href="/proyectos/exteriores">
            <div className="group cursor-pointer relative overflow-hidden rounded-xl h-[400px] md:h-[500px] shadow-lg">

              <img
                src="/images/project-exterior.png"
                alt="Remodelación de exteriores en Santiago de Chile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Exteriores
                </h3>

                <span className="bg-accent text-white px-6 py-2 rounded-lg font-semibold shadow-lg">
                  Ver proyectos
                </span>
              </div>

            </div>
          </Link>

          {/* INTERIORES */}
          <Link href="/proyectos/interiores">
  <div className="group cursor-pointer relative overflow-hidden rounded-xl h-[400px] md:h-[500px] shadow-lg">

    <img
      src="/images/project-interior.png"
      alt="Remodelación de interiores en Santiago de Chile"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Interiores
      </h3>

      <span className="bg-accent text-white px-6 py-2 rounded-lg font-semibold shadow-lg">
        Ver proyectos
      </span>
    </div>

  </div>
</Link>

        </div>
      </div>
    </section>
  );
}