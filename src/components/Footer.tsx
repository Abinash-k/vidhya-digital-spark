
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gradient mb-2">Sri Vidhya</h2>
            <p className="text-gray-400">Freelance Digital Marketer</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-gray-800 rounded-full text-white hover:bg-purple-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full text-white hover:bg-purple-600 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full text-white hover:bg-purple-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:srividhya00178@gmail.com" className="p-3 bg-gray-800 rounded-full text-white hover:bg-purple-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
          
          <p>&copy; {currentYear} Sri Vidhya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
