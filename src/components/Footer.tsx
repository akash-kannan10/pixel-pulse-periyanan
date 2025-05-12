
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-100 py-12 relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMDIwMjAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2U9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZT0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDIiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzAgMGgzMHYzMEgzMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZT0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDIiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <a href="#hero" className="text-3xl font-heading font-bold text-gradient">
              Periyanan P
            </a>
            <p className="text-white/60 mt-2 text-sm">
              Full-Stack Developer | AI Integrator | UI Engineer
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-dark-300 flex items-center justify-center hover:bg-neon-purple/20 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-dark-300 flex items-center justify-center hover:bg-neon-purple/20 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            
            <a 
              href="mailto:itzmeperi@gmail.com" 
              className="h-10 w-10 rounded-full bg-dark-300 flex items-center justify-center hover:bg-neon-purple/20 hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Periyanan P. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#hero" className="text-white/70 text-sm hover:text-neon-purple transition-colors">Home</a>
            <a href="#experience" className="text-white/70 text-sm hover:text-neon-purple transition-colors">Experience</a>
            <a href="#skills" className="text-white/70 text-sm hover:text-neon-purple transition-colors">Skills</a>
            <a href="#projects" className="text-white/70 text-sm hover:text-neon-purple transition-colors">Projects</a>
            <a href="#contact" className="text-white/70 text-sm hover:text-neon-purple transition-colors">Contact</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 h-12 w-12 rounded-full bg-neon-purple/80 text-white flex items-center justify-center shadow-lg hover:bg-neon-purple transition-all duration-300 ${
          isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
