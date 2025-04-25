import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="text-2xl font-bold text-gradient">SV</Link>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          <li><Link to="/about" className="nav-link font-medium">About</Link></li>
          <li><Link to="/skills" className="nav-link font-medium">Skills</Link></li>
          <li><Link to="/projects" className="nav-link font-medium">Projects</Link></li>
          <li><Link to="/experience" className="nav-link font-medium">Experience</Link></li>
          <li><Link to="/contact" className="nav-link font-medium">Contact</Link></li>
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
            <li><Link to="/about" className="nav-link font-medium" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/skills" className="nav-link font-medium" onClick={toggleMenu}>Skills</Link></li>
            <li><Link to="/projects" className="nav-link font-medium" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/experience" className="nav-link font-medium" onClick={toggleMenu}>Experience</Link></li>
            <li><Link to="/contact" className="nav-link font-medium" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
