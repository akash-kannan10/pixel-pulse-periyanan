
import { useState } from 'react';
import { useInView } from '../lib/animations';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'languages';
}

const skills: Skill[] = [
  { name: "React", icon: "⚛️", level: 95, category: "frontend" },
  { name: "TypeScript", icon: "🔷", level: 90, category: "languages" },
  { name: "Node.js", icon: "🟢", level: 85, category: "backend" },
  { name: "MongoDB", icon: "🍃", level: 80, category: "backend" },
  { name: "GraphQL", icon: "⬡", level: 75, category: "backend" },
  { name: "Docker", icon: "🐳", level: 70, category: "devops" },
  { name: "AWS", icon: "☁️", level: 75, category: "devops" },
  { name: "Next.js", icon: "▲", level: 90, category: "frontend" },
  { name: "TailwindCSS", icon: "🌊", level: 95, category: "frontend" },
  { name: "Python", icon: "🐍", level: 80, category: "languages" },
  { name: "Git", icon: "📂", level: 90, category: "tools" },
  { name: "UI/UX", icon: "🎨", level: 85, category: "frontend" },
  { name: "SQL", icon: "📊", level: 75, category: "backend" },
  { name: "GSAP", icon: "🎭", level: 80, category: "frontend" },
  { name: "Figma", icon: "🖌️", level: 85, category: "tools" },
];

const categoryNames = {
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
  tools: "Tools",
  languages: "Languages",
};

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));
  
  const filteredSkills = selectedCategory 
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <p className="text-neon-cyan uppercase tracking-wider text-sm mb-2 font-medium">What I'm good at</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold neon-glow">Technical Skills</h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === null 
                ? 'bg-neon-purple text-white shadow-[0_0_15px_rgba(123,92,255,0.4)]'
                : 'bg-dark-200 text-white/70 hover:bg-dark-300'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category 
                  ? 'bg-neon-purple text-white shadow-[0_0_15px_rgba(123,92,255,0.4)]'
                  : 'bg-dark-200 text-white/70 hover:bg-dark-300'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {categoryNames[category as keyof typeof categoryNames]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="glass-morphism p-5 rounded-lg hover:border-neon-purple/40 transition-all duration-300 group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-medium">{skill.name}</h3>
              </div>
              
              {/* Progress bar */}
              <div className="h-2 w-full bg-dark-300 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-1000 ease-out"
                  style={{ 
                    width: isInView ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                ></div>
              </div>
              
              <div className="mt-2 flex justify-between items-center">
                <span className="text-xs text-white/60 capitalize">
                  {categoryNames[skill.category as keyof typeof categoryNames]}
                </span>
                <span className="text-sm font-medium text-neon-purple">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
