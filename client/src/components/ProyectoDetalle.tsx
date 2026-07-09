import { useRoute } from "wouter";
import { projects } from "@/data/projects";

export default function ProyectoDetalle() {

  const [match, params] = useRoute("/proyectos/:slug");

  // BUSCA EL PROYECTO SEGÚN EL SLUG
  const project = projects.find(
    (p) => p.slug === params?.slug
  );

  // SI NO EXISTE
  if (!project) {
    return (
      <div className="p-20">
        Proyecto no encontrado
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-background text-foreground py-20">

    <div className="container mx-auto px-4">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-16">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {project.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p>

      </div>

      {/* HERO IMAGE */}
      <div className="mb-16">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full max-w-6xl mx-auto rounded-2xl shadow-xl object-cover max-h-[700px]"
        />
      </div>

      
   {/* GALERÍA */}

{project.slug === "fachada-la-reina" ? (

  <div className="max-w-6xl mx-auto mb-20">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {project.gallery.map((image, index) => (

        <div
          key={index}
          className="overflow-hidden rounded-2xl shadow-lg aspect-[3/4]"
        >
          <img
            src={image}
            alt={`${project.title} ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

      ))}

    </div>

  </div>

) : (

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">

    {project.gallery.map((image, index) => (

      <div
        key={index}
        className="overflow-hidden rounded-2xl shadow-lg aspect-[4/5]"
      >

        <img
          src={image}
          alt={`${project.title} ${index + 1}`}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />

      </div>

    ))}

  </div>

)}

      {/* VIDEOS */}
{project.videos.length > 0 && (

  <div className="space-y-10">

    <h2 className="text-3xl font-bold">
      Videos del proyecto
    </h2>

    {project.videos.map((video, index) => (

      <div
        key={index}
        className="aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl"
      >

        <iframe
          src={video}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </div>

    ))}

  </div>

)}

    </div>

  </div>
);
}