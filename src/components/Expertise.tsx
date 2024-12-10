import React from 'react';

// Replace these with the actual paths to your images
const expertiseAreas = [
  {
    image: "./images/image1.png", // Image path for Structural Engineering
    title: "Structural Engineering",
    description: "Specialized in designing and analyzing complex structural systems for commercial and residential buildings."
  },
  {
    image: "/path/to/infrastructure-design-image.png", // Image path for Infrastructure Design
    title: "Infrastructure Design",
    description: "Expert in bridge design, highway systems, and urban infrastructure development."
  },
  {
    image: "/path/to/safety-compliance-image.png", // Image path for Safety Compliance
    title: "Safety Compliance",
    description: "Ensuring all projects meet or exceed safety standards and building codes."
  },
  {
    image: "/path/to/sustainable-design-image.png", // Image path for Sustainable Design
    title: "Sustainable Design",
    description: "Implementing eco-friendly solutions and sustainable engineering practices."
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={area.image} alt={area.title} className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
