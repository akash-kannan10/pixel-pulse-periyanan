
import { useInView } from '../lib/animations';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Innova Solutions",
    period: "Jan 2023 - Present",
    description: [
      "Led development of a scalable e-commerce platform using React, Node.js, and MongoDB",
      "Implemented CI/CD pipelines reducing deployment time by 30%",
      "Optimized database queries improving application performance by 40%"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS"]
  },
  {
    title: "AI Integration Specialist",
    company: "TechVision",
    period: "Mar 2022 - Dec 2022",
    description: [
      "Integrated OpenAI APIs into existing web applications",
      "Developed natural language processing features for customer service portals",
      "Created custom machine learning models for content recommendation"
    ],
    technologies: ["Python", "TensorFlow", "OpenAI API", "FastAPI", "AWS Lambda"]
  },
  {
    title: "Frontend Developer",
    company: "WebCreators",
    period: "Jun 2021 - Mar 2022",
    description: [
      "Developed responsive UI components using React and Tailwind CSS",
      "Optimized web performance achieving 95+ Lighthouse scores",
      "Collaborated with designers to implement pixel-perfect interfaces"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "GraphQL", "Figma"]
  }
];

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <p className="text-neon-purple uppercase tracking-wider text-sm mb-2 font-medium">My professional journey</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold neon-glow">Work Experience</h2>
        </div>

        {/* Experience Timeline */}
        <div 
          ref={ref as React.RefObject<HTMLDivElement>} 
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink transform md:-translate-x-1/2"></div>
          
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-12 md:ml-1/2'
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 left-0 md:left-1/2 w-5 h-5 rounded-full bg-neon-purple transform -translate-x-1/2 shadow-[0_0_15px_rgba(123,92,255,0.7)] animate-pulse-glow"></div>
              
              {/* Content card */}
              <div className="glass-morphism p-6 rounded-lg card-hover ml-8 md:ml-0">
                <div className="flex items-center mb-3">
                  {/* Mobile timeline dot */}
                  <div className="md:hidden absolute -left-8 top-0 w-4 h-4 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(123,92,255,0.7)]"></div>
                  
                  <h3 className="text-xl font-heading font-bold text-gradient">{experience.title}</h3>
                </div>
                
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <p className="text-white text-lg font-medium">{experience.company}</p>
                  <p className="text-white/60 text-sm">{experience.period}</p>
                </div>
                
                <ul className="mb-4 text-white/80">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="mb-2">• {item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-dark-300 text-neon-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
