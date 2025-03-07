
import React, { useRef, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Contact: React.FC = () => {
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
                el.classList.add('opacity-100');
                el.classList.remove('opacity-0');
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
    <section id="contact" ref={sectionRef} className="py-24">
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 fade-up hidden transition-all duration-500 transform translate-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">Get In Touch</h2>
        </div>
        
        <div className="max-w-3xl mx-auto glass rounded-2xl p-8 border border-white/5 fade-up hidden transition-all duration-500 transform translate-y-8">
          <p className="text-lg text-center text-gray-300 mb-8">
            Have a project in mind or want to collaborate? Feel free to reach out through any of the platforms below.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a 
              href="https://github.com/ysathyasai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300 hover:scale-105 transform"
            >
              <Github className="w-8 h-8 text-primary" />
              <span className="text-lg">GitHub</span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <ExternalLink size={12} /> ysathyasai
              </span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ysathyasai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300 hover:scale-105 transform"
            >
              <Linkedin className="w-8 h-8 text-primary" />
              <span className="text-lg">LinkedIn</span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <ExternalLink size={12} /> ysathyasai
              </span>
            </a>
            
            <a 
              href="mailto:contact@ysathyasai.com" 
              className="flex flex-col items-center gap-3 p-6 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300 hover:scale-105 transform sm:col-span-2 md:col-span-1"
            >
              <Mail className="w-8 h-8 text-primary" />
              <span className="text-lg">Email</span>
              <span className="text-xs text-gray-400">contact@ysathyasai.com</span>
            </a>
          </div>
          
          <div className="mt-12 fade-up hidden transition-all duration-500 transform translate-y-8">
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-medium mb-4 text-center">Let's Work Together</h3>
              <p className="text-gray-300 text-center">
                Looking for a dedicated AI and ML specialist for your next project? I'm always open to exciting opportunities and collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
