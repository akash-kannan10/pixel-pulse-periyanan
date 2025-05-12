
import { useInView } from '../lib/animations';

const Resume = () => {
  const [ref, isInView] = useInView({ threshold: 0.5 });
  
  return (
    <section id="resume" className="py-20 md:py-28 relative overflow-hidden">
      {/* Animated background blob */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 rounded-full animate-pulse-glow filter blur-[80px]"></div>
      </div>
      
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 md:px-0 text-center max-w-3xl transition-all duration-700 ${
          isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 neon-glow">My Resume</h2>
        
        <p className="text-xl md:text-2xl mb-12 text-white/80">
          Want to know more about my qualifications, experience, and education?
        </p>
        
        <div className="glass-morphism p-10 md:p-12 rounded-xl">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center mb-6 rounded-full border-2 border-neon-purple bg-dark-200 relative animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              
              {/* Glowing effects */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-full blur-md opacity-70 -z-10 animate-pulse-glow"></div>
            </div>
            
            <h3 className="text-2xl font-heading font-bold mb-6">My Detailed Curriculum Vitae</h3>
            
            <p className="text-white/70 mb-8 max-w-lg">
              Get a comprehensive overview of my professional journey, educational background, certifications, and technical expertise.
            </p>
            
            <a 
              href="/resume.pdf" 
              download="Periyanan_P_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
