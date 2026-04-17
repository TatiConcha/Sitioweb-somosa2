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
          <a href="/proyectos/exteriores" className="group block">
            <div className="flex flex-col h-full">

              {/* Título arriba */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Exteriores
              </h3>

              {/* Imagen grande */}
              <div className="relative overflow-hidden rounded-xl h-[400px] md:h-[500px] shadow-lg">
                <img
                  src="/images/project-exterior-1.jpg"
                  alt="Remodelación de exteriores en Santiago de Chile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
              </div>

            </div>
          </a>

          {/* INTERIORES */}
          <a href="/proyectos/interiores" className="group block">
            <div className="flex flex-col h-full">

              {/* Título arriba */}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Interiores
              </h3>

              {/* Imagen grande */}
              <div className="relative overflow-hidden rounded-xl h-[400px] md:h-[500px] shadow-lg">
                <img
                  src="/images/project-interior-1.jpg"
                  alt="Remodelación de interiores en Santiago de Chile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
              </div>

            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
