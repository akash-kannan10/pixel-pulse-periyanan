
import { useState } from 'react';
import { useInView } from '../lib/animations';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "MindTrek",
    description: "AI-powered startup idea validation platform that analyzes business concepts and provides comprehensive feedback and roadmaps.",
    image: "/lovable-uploads/0a71a8ba-ff52-4c5d-b53c-903635c865ca.png",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "AWS"],
    liveUrl: "https://mindtrek.example.com",
    githubUrl: "https://github.com/periyanan/mindtrek",
    featured: true
  },
  {
    title: "RupeeRadar",
    description: "Personal finance management app with AI-powered financial advice and investment recommendations tailored to Indian audiences.",
    image: "/lovable-uploads/dd893917-6e9e-46b0-b13f-c730fb65a897.png",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Firebase", "Chart.js"],
    liveUrl: "https://rupeeradar.example.com",
    githubUrl: "https://github.com/periyanan/rupeeradar"
  },
  {
    title: "UrbanFix",
    description: "Civic issue reporting platform that empowers citizens to improve their neighborhoods using AI-powered image classification.",
    image: "/lovable-uploads/f62f18e2-d34a-4eec-bf58-8132ce497979.png",
    technologies: ["React", "Express", "PostgreSQL", "TensorFlow", "Google Maps API"],
    liveUrl: "https://urbanfix.example.com",
    githubUrl: "https://github.com/periyanan/urbanfix",
    featured: true
  },
  {
    title: "DevPortfolio",
    description: "Customizable developer portfolio template with dark mode, animations, and content management system.",
    image: "/placeholder.svg",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify CMS"],
    githubUrl: "https://github.com/periyanan/devportfolio"
  },
  {
    title: "ChatAnalyzer",
    description: "Tool that uses NLP to analyze conversation sentiment and provides insights for customer service improvement.",
    image: "/placeholder.svg",
    technologies: ["Python", "Flask", "NLTK", "Hugging Face", "D3.js"],
    githubUrl: "https://github.com/periyanan/chatanalyzer"
  },
  {
    title: "TaskFlow",
    description: "Drag-and-drop task management system with time tracking and productivity analytics.",
    image: "/placeholder.svg",
    technologies: ["Vue.js", "Vuex", "Express", "MongoDB", "Socket.io"],
    liveUrl: "https://taskflow.example.com",
    githubUrl: "https://github.com/periyanan/taskflow"
  }
];

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 md:py-28 bg-dark-100">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <p className="text-neon-pink uppercase tracking-wider text-sm mb-2 font-medium">What I've built</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold neon-glow-pink">Featured Projects</h2>
          
          <div className="mt-6 flex justify-center space-x-4">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-neon-pink text-white shadow-[0_0_15px_rgba(254,83,187,0.4)]' 
                  : 'bg-dark-200 text-white/70 hover:bg-dark-300'
              }`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'featured' 
                  ? 'bg-neon-pink text-white shadow-[0_0_15px_rgba(254,83,187,0.4)]' 
                  : 'bg-dark-200 text-white/70 hover:bg-dark-300'
              }`}
              onClick={() => setFilter('featured')}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-dark-200 rounded-lg overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image with Overlay */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-neon-pink/90 text-white text-xs font-bold px-2 py-1 rounded-md z-20">
                    Featured
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2 text-gradient">
                  {project.title}
                </h3>
                
                <p className="text-white/70 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-dark-300 text-neon-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-dark-300 text-white/60">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Action Links */}
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 rounded bg-neon-purple text-white text-sm font-medium hover:bg-opacity-80 transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 rounded bg-dark-300 text-white text-sm font-medium hover:bg-opacity-80 transition-all"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
