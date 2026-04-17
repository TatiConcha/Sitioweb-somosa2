export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">

        {/* SEO */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proyectos de Remodelación de Casas y Departamentos en Santiago
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Descubre nuestros proyectos de remodelación de interiores y exteriores en Santiago de Chile.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

          {/* EXTERIORES */}
          <a href="/proyectos/exteriores" className="group block">
            <div className="relative overflow-hidden rounded-xl aspect-video shadow-lg">
              <img
                src="/images/project-exterior-1.jpg"
                alt="Remodelación de exteriores en Santiago"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Exteriores
                  </h3>
                  <span className="bg-accent text-white px-6 py-2 rounded-lg font-semibold">
                    Ver proyectos
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* INTERIORES */}
          <a href="/proyectos/interiores" className="group block">
            <div className="relative overflow-hidden rounded-xl aspect-video shadow-lg">
              <img
                src="/images/project-interior-1.jpg"
                alt="Remodelación de interiores en Santiago"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Interiores
                  </h3>
                  <span className="bg-accent text-white px-6 py-2 rounded-lg font-semibold">
                    Ver proyectos
                  </span>
                </div>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}