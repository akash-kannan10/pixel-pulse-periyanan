
import { useTypewriter, useRotatingText } from '../lib/animations';

const Hero = () => {
  const { displayText } = useTypewriter("Turning Complex Ideas into Stunning Web Experiences", 70, 500);
  const { currentText, isAnimating } = useRotatingText([
    "Full-Stack Developer", 
    "AI Integrator", 
    "UI Engineer"
  ], 3000);
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full filter blur-3xl animate-pulse-glow animate-delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-neon-pink/20 rounded-full filter blur-3xl animate-pulse-glow animate-delay-500"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMDIwMjAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2U9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZT0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDIiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzAgMGgzMHYzMEgzMHoiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZT0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDIiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')] opacity-10 bg-fixed"></div>
      
      <div className="container px-4 md:px-0 mx-auto flex flex-col items-center text-center">
        {/* Welcome text with animated appearance */}
        <p className="text-neon-cyan uppercase tracking-wider text-sm mb-3 font-medium animate-slide-down">
          Welcome to my portfolio
        </p>
        
        {/* Name heading with gradient */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 animate-scale-in">
          Hi, I'm <span className="text-gradient">Periyanan P</span>
        </h1>
        
        {/* Rotating roles with fade animation */}
        <div className="h-8 mb-6">
          <p 
            className={`text-lg md:text-xl transition-opacity duration-500 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className="text-white/70">I'm a </span>
            <span className="text-neon-purple font-semibold">{currentText}</span>
          </p>
        </div>
        
        {/* Typewriter effect subtitle */}
        <p className="text-lg md:text-xl max-w-2xl mb-10 text-white/80 h-16">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a 
            href="/resume.pdf" 
            className="btn-secondary"
            download="Periyanan_P_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in">
          <p className="text-white/50 text-sm mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 bg-white/80 rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
