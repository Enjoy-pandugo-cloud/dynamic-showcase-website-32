
import React, { useEffect, useRef } from "react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "HTML/CSS",
  "Git",
  "AWS",
  "Docker",
  "Artificial Intelligence",
  "Machine Learning",
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const fadeElements = entry.target.querySelectorAll('.fade-up');
            fadeElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
                el.classList.remove('hidden');
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center fade-up hidden transition-all duration-500 transform translate-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-gradient">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-up hidden transition-all duration-500 transform translate-y-8">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card hover:shadow-glow transition-all duration-300">
                <img 
                  src="https://github.com/user-attachments/assets/4b3aec50-e518-4ed8-895c-0fc3ea5c3083" 
                  alt="Yejju Sathya Sai" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent rounded-lg"></div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-2xl">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed fade-up hidden transition-all duration-500 transform translate-y-8">
              I'm a passionate student specializing in Artificial Intelligence and Machine Learning 
              at the Government Institute of Electronics, East Maredapally, Secunderabad. I'm devoted to 
              creating innovative solutions through clean, efficient code and cutting-edge technologies.
            </p>
            
            <p className="text-lg text-gray-300 mb-10 leading-relaxed fade-up hidden transition-all duration-500 transform translate-y-8">
              My journey in tech is driven by continuous learning and problem-solving. 
              I enjoy tackling complex challenges and finding elegant solutions that enhance 
              user experiences while maintaining code quality and performance.
            </p>
            
            <div className="fade-up hidden transition-all duration-500 transform translate-y-8">
              <h3 className="text-xl font-medium mb-4 text-gradient-primary">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 glass rounded-full text-sm text-gray-200 hover:shadow-glow transition-all duration-300 hover:bg-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
