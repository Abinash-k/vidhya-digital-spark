
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-white pt-16">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-brand-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-brand-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm </span>
            <span className="text-gradient">Sri Vidhya</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">Freelance Digital Marketer</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            I help businesses grow online through smart digital marketing—SEO, PPC, Meta Ads, and creative content that converts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all font-medium">
              Get In Touch
            </a>
            <a href="#projects" className="btn px-8 py-3 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-all font-medium">
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 hover:text-purple-600 transition-colors"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
