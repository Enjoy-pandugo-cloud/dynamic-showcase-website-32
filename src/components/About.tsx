
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
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );
    
    const fadeElements = sectionRef.current?.querySelectorAll('.fade-up');
    fadeElements?.forEach((el) => observer.observe(el));
    
    return () => {
      fadeElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="section-container">
        <div className="mb-16 fade-up hidden">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-up hidden">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-tr from-secondary to-muted rounded-2xl overflow-hidden glass">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/20">YS</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-lg"></div>
            </div>
          </div>
          
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed fade-up hidden">
              I'm a passionate software developer committed to crafting clean, efficient code 
              and creating exceptional digital experiences. With a focus on modern technologies 
              and best practices, I bring ideas to life through intuitive and responsive applications.
            </p>
            
            <p className="text-lg text-gray-300 mb-10 leading-relaxed fade-up hidden">
              My journey in tech is driven by continuous learning and problem-solving. 
              I enjoy tackling complex challenges and finding elegant solutions that enhance 
              user experiences while maintaining code quality and performance.
            </p>
            
            <div className="fade-up hidden">
              <h3 className="text-xl font-medium mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-muted rounded-full text-sm text-gray-200 hover:bg-primary/20 transition-colors duration-300"
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
