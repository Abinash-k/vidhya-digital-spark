
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      title: "MSK Travels",
      description: "Designed and executed Meta & Instagram ad campaigns for bus services, achieving high conversion rates with minimal budget through strategic audience targeting.",
      category: "Meta Ads, Instagram",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
      gradient: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      title: "On Time Tourism",
      description: "Created a complete website setup including domain purchase and implementation, designed promotional posters, and managed Shirdi flight booking services.",
      category: "Web Development, Design",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
      gradient: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      title: "Future Astro",
      description: "Established a full-scale Instagram presence, developed Meta ad campaigns, and created engaging Reels content that resulted in excellent client satisfaction and growth.",
      category: "Social Media, Meta Ads",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2013&auto=format&fit=crop",
      gradient: "bg-gradient-to-br from-purple-400 to-purple-600"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-12 rounded-full"></div>

        <div className="relative overflow-hidden">
          {/* Mobile Cards */}
          <div className="md:hidden">
            <div className="flex items-center justify-center mb-8">
              <button 
                onClick={prevProject}
                className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              >
                <ArrowLeft size={20} />
              </button>
              <span className="mx-4 font-medium">
                {currentIndex + 1} / {projects.length}
              </span>
              <button 
                onClick={nextProject}
                className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              >
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="w-full">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`w-full rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${
                    index === currentIndex ? "opacity-100" : "hidden opacity-0"
                  }`}
                >
                  <div className="h-48 w-full relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 opacity-60 ${project.gradient}`}></div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-purple-600 font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Cards */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-48 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 opacity-60 ${project.gradient}`}></div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-purple-600 font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
