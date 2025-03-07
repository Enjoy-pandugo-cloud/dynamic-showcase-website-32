
import React, { useRef, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact: React.FC = () => {
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
    <section id="contact" ref={sectionRef} className="py-24">
      <div className="section-container">
        <div className="mb-16 fade-up hidden">
          <h2 className="section-title">Get In Touch</h2>
        </div>
        
        <div className="max-w-3xl mx-auto glass rounded-2xl p-8 border border-white/5 fade-up hidden">
          <p className="text-lg text-center text-gray-300 mb-8">
            Have a project in mind or want to collaborate? Feel free to reach out through any of the platforms below.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
            <a 
              href="https://github.com/ysathyasai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <Github className="w-5 h-5 text-primary" />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ysathyasai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="mailto:contact@ysathyasai.com" 
              className="flex items-center justify-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
