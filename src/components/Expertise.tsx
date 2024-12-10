import React from 'react';

interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Structural Engineering",
    description: "Specialized in designing and analyzing complex structural systems for buildings and infrastructure.",
    icon: "🏗️"
  },
  {
    title: "Sustainable Design",
    description: "Expert in implementing eco-friendly solutions and LEED certification requirements.",
    icon: "🌱"
  },
  {
    title: "Project Management",
    description: "Experienced in leading multi-disciplinary teams and managing large-scale construction projects.",
    icon: "📊"
  }
];

const ExpertiseCard: React.FC<ExpertiseItem> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Expertise: React.FC = () => {
  return (
    <section className="py-16" id="expertise">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <ExpertiseCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
