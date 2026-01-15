import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

/**
 * Projects Section Component
 * Design: Minimalismo Corporativo - Grid de proyectos con filtrado por categoría
 * - Botones de categoría (Exteriores, Interiores, Corporativos)
 * - Grid responsivo con espaciado generoso
 * - Overlay rojo al hover
 * - Animaciones suaves
 */

interface Project {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'corporativo';
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Casa Moderna Lo Barnechea',
    category: 'exterior',
    image: '/images/project-exterior-1.jpg',
    description: 'Remodelación completa de fachada con materiales premium',
  },
  {
    id: '2',
    title: 'Departamento Chicureo',
    category: 'interior',
    image: '/images/project-interior-1.jpg',
    description: 'Renovación integral de espacios interiores',
  },
  {
    id: '3',
    title: 'Oficinas Corporativas',
    category: 'corporativo',
    image: '/images/project-corporate-1.jpg',
    description: 'Diseño y construcción de espacio de trabajo moderno',
  },
  {
    id: '4',
    title: 'Casa Contemporánea Las Condes',
    category: 'exterior',
    image: '/images/project-exterior-2.jpg',
    description: 'Transformación de residencia con arquitectura contemporánea',
  },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'exterior' | 'interior' | 'corporativo'>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'Todos', icon: '🏢' },
    { id: 'exterior', label: 'Exteriores', icon: '🏠' },
    { id: 'interior', label: 'Interiores', icon: '🛋️' },
    { id: 'corporativo', label: 'Corporativos', icon: '🏢' },
  ];

  return (
    <section id="proyectos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Proyectos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada proyecto es una historia única de transformación. Explora nuestro portafolio de trabajos realizados en casas, departamentos y espacios corporativos.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-8 delay-100">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              className={`rounded-lg px-6 py-2 font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/50'
                  : 'border-border text-foreground hover:border-accent hover:text-accent'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group animate-in fade-in slide-in-from-bottom-8 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-xl aspect-square md:aspect-video bg-card shadow-lg">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                  <button className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300">
                    Ver más
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                  {categories.find(c => c.id === project.category)?.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No hay proyectos en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}
