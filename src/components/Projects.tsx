import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Urban Bridge Renovation",
    description: "Led the structural analysis and renovation of a century-old bridge, implementing modern safety standards while preserving historical elements.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80",
    category: "Infrastructure"
  },
  {
    title: "Eco-Friendly Office Complex",
    description: "Designed sustainable foundation and structural systems for a LEED-certified commercial building complex.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    category: "Commercial"
  },
  {
    title: "Coastal Protection System",
    description: "Developed innovative coastal defense structures to protect shoreline communities from erosion and flooding.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
    category: "Environmental"
  }
];

const ProjectCard: React.FC<Project> = ({ title, description, image, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="text-sm text-blue-600 font-semibold mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;