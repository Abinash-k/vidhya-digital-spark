
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <div className="relative py-20">
        <AboutSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-8">
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Learn More About Me
          </Link>
        </div>
      </div>
      
      <div className="relative py-20">
        <SkillsSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-8">
          <Link
            to="/skills"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            View All Skills
          </Link>
        </div>
      </div>
      
      <div className="relative py-20">
        <ProjectsSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Explore All Projects
          </Link>
        </div>
      </div>
      
      <div className="relative py-20">
        <ExperienceSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-8">
          <Link
            to="/experience"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            View Full Experience
          </Link>
        </div>
      </div>
      
      <TestimonialsSection />
      
      <div className="relative py-20">
        <ContactSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;

