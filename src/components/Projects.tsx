import React from 'react';

const projects = [
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

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;