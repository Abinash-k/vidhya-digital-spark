
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedProjectCard from "@/components/AnimatedProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      title: "MSK Travels",
      description: "Led a comprehensive Meta Ads campaign for bus services, achieving exceptional results with minimal budget through strategic audience targeting and creative optimization.",
      achievements: [
        "200% increase in booking conversions",
        "Reduced cost per acquisition by 40%",
        "Improved ad engagement rates by 150%"
      ]
    },
    {
      title: "On Time Tourism",
      description: "Complete digital presence development including website creation, domain setup, and promotional material design for Shirdi flight booking services.",
      achievements: [
        "Website development and optimization",
        "Brand identity and promotional materials",
        "Online booking system implementation"
      ]
    },
    {
      title: "Future Astro",
      description: "Developed and executed a comprehensive social media strategy, including Instagram presence development and engaging content creation.",
      achievements: [
        "300% increase in Instagram followers",
        "High engagement rates on Reels content",
        "Successful Meta Ads campaigns"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-grow relative overflow-hidden">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        
        <div className="space-y-12 relative">
          {/* Background animation waves */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full animate-wave-slow">
              <svg viewBox="0 0 1024 1024" className="w-full h-full transform scale-150" preserveAspectRatio="none">
                <path d="M0,64 C320,96 480,0 640,0 C800,0 960,96 1280,64 L1280,1024 L0,1024 Z" fill="url(#gradient1)"></path>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Project cards */}
          {projects.map((project, index) => (
            <AnimatedProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              achievements={project.achievements}
              index={index}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
