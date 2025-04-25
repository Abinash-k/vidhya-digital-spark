
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-gradient">SV</a>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          <li><a href="#about" className="nav-link font-medium">About</a></li>
          <li><a href="#skills" className="nav-link font-medium">Skills</a></li>
          <li><a href="#projects" className="nav-link font-medium">Projects</a></li>
          <li><a href="#experience" className="nav-link font-medium">Experience</a></li>
          <li><a href="#contact" className="nav-link font-medium">Contact</a></li>
        </ul>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
          <ul className="flex flex-col items-center gap-4">
            <li><a href="#about" className="nav-link font-medium" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" className="nav-link font-medium" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" className="nav-link font-medium" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#experience" className="nav-link font-medium" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#contact" className="nav-link font-medium" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
