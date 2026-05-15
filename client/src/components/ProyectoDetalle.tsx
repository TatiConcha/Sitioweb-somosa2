import { useRoute } from "wouter";

export default function ProyectoDetalle() {

  const [match, params] = useRoute("/proyectos/:slug");

  return (
    <div className="min-h-screen bg-black text-white p-20">

      <h1 className="text-5xl font-bold mb-6">
        {params?.slug}
      </h1>

      <p>
        Aquí irá el proyecto completo.
      </p>

    </div>
  );
}