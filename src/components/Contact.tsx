
import React, { useRef, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Twitter, FileText } from "lucide-react";

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
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center fade-up hidden transition-all duration-500 transform translate-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-gradient">Get In Touch</h2>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 fade-up hidden transition-all duration-500 transform translate-y-8">
          <p className="text-lg text-center text-gray-300 mb-8">
            Have a project in mind or want to collaborate? Feel free to reach out through any of the platforms below.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a 
              href="https://github.com/ysathyasai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 glass rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-glow"
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
              className="flex flex-col items-center gap-3 p-6 glass rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <Linkedin className="w-8 h-8 text-primary" />
              <span className="text-lg">LinkedIn</span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <ExternalLink size={12} /> ysathyasai
              </span>
            </a>
            
            <a 
              href="mailto:contact@ysathyasai.com" 
              className="flex flex-col items-center gap-3 p-6 glass rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <Mail className="w-8 h-8 text-primary" />
              <span className="text-lg">Email</span>
              <span className="text-xs text-gray-400">contact@ysathyasai.com</span>
            </a>
            
            <a 
              href="https://x.com/ysathyasai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 glass rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <Twitter className="w-8 h-8 text-primary" />
              <span className="text-lg">Twitter/X</span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <ExternalLink size={12} /> ysathyasai
              </span>
            </a>
            
            <a 
              href="https://medium.com/@ysathyasai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 glass rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <FileText className="w-8 h-8 text-primary" />
              <span className="text-lg">Medium</span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <ExternalLink size={12} /> @ysathyasai
              </span>
            </a>
            
            <a 
              href="https://openprofile.dev/ysathyasai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 glass rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <ExternalLink className="w-8 h-8 text-primary" />
              <span className="text-lg">OpenProfile</span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <ExternalLink size={12} /> ysathyasai
              </span>
            </a>
          </div>
          
          <div className="mt-12 fade-up hidden transition-all duration-500 transform translate-y-8">
            <div className="p-6 glass rounded-lg border border-primary/20">
              <h3 className="text-xl font-medium mb-4 text-center text-gradient-primary">Let's Work Together</h3>
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
