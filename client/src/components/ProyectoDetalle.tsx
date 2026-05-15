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
    <div className="min-h-screen bg-black text-white p-20">

      {/* TÍTULO */}
      <h1 className="text-5xl font-bold mb-6">
        {project.title}
      </h1>

      {/* DESCRIPCIÓN */}
      <p className="text-lg text-white/70 mb-10 max-w-3xl">
        {project.description}
      </p>

      {/* IMAGEN PRINCIPAL */}
      <img
        src={project.heroImage}
        alt={project.title}
        className="w-full max-w-5xl rounded-xl"
      />

    </div>
  );
}