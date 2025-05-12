
import { useState, useEffect } from 'react';
import { useScrollProgress } from '../lib/animations';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-dark/80 backdrop-blur-md border-b border-white/10' : 'py-5'
      }`}
    >
      <div className="relative mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-heading font-bold text-gradient z-10"
          aria-label="Periyanan P"
        >
          Periyanan P
        </a>

        {/* Progress bar */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white transition-colors relative group overflow-hidden"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-neon-purple group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-20 relative w-10 h-10 flex flex-col justify-center items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
              isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-dark-100 flex flex-col justify-center items-center transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="text-xl text-white font-medium hover:text-neon-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
