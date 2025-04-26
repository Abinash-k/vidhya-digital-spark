import { useState, useEffect, useRef } from 'react';
import { ProjectBadge } from "@/components/ui/project-badge";
import { Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "MSK Travels",
      summary: "Strategic Meta & Instagram ad campaigns for bus services with high ROI",
      badges: [
        { label: "Meta Ads", variant: "meta" },
        { label: "Instagram", variant: "default" },
        { label: "Digital Marketing", variant: "default" }
      ],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "On Time Tourism",
      summary: "Complete web presence for Shirdi flight booking services",
      badges: [
        { label: "Hostinger", variant: "hostinger" },
        { label: "Web Design", variant: "default" },
        { label: "Canva", variant: "canva" }
      ],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
    },
    {
      title: "Future Astro",
      summary: "Comprehensive social media marketing for astrology business",
      badges: [
        { label: "Instagram", variant: "default" },
        { label: "Meta Ads", variant: "meta" },
        { label: "Content Creation", variant: "default" }
      ],
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2013&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-padding bg-gray-50/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden transition-all duration-500 transform 
                        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
                        hover:-translate-y-2 bg-white/80 backdrop-blur-sm
                        border border-gray-100 rounded-xl shadow-sm
                        hover:shadow-lg hover:border-purple-100
                        ${isVisible ? `transition-delay-${index * 200}` : ''}`}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <ProjectBadge
                      key={badge.label}
                      label={badge.label}
                      variant={badge.variant as any}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
