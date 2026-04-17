export default function ProyectosExteriores() {
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
      image: '/images/project-exterior-3.jpg',
    },
    {
      id: 4,
      title: 'Proyecto Vitacura',
      image: '/images/project-exterior-4.jpg',
    },
    {
      id: 5,
      title: 'Terraza Moderna',
      image: '/images/project-exterior-5.jpg',
    },
    {
      id: 6,
      title: 'Fachada Contemporánea',
      image: '/images/project-exterior-6.jpg',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
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

                {/* Imagen */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-6">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition">
                    Ver proyecto →
                  </span>
                </div>

              </div>

              {/* Título */}
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {project.title}
              </h3>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <h3 className="text-2xl font-bold mb-4">
            ¿Quieres transformar tu espacio exterior?
          </h3>
          <a
            href="#contacto"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition"
          >
            Cotizar proyecto
          </a>
        </div>

      </div>
    </section>
  );
}