
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
          
          elements?.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('animate-fade-in');
            }, index * 200);
          });
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="video-background"
      >
        <source 
          src="https://github.com/user-attachments/assets/e270eaa6-584b-4976-94b5-9eb15651b7bc" 
          type="video/mp4" 
        />
      </video>
      <div className="video-overlay"></div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="glass-card p-10 rounded-2xl">
          <h2 className="text-lg sm:text-xl md:text-2xl text-primary opacity-0 animate-on-scroll mb-4">
            Hello, I'm
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight opacity-0 animate-on-scroll text-gradient">
            Yejju Sathya Sai
          </h1>
          <div className="h-px w-40 mx-auto my-8 opacity-0 animate-on-scroll bg-gradient-to-r from-primary via-accent to-primary/50"></div>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-2xl mx-auto opacity-0 animate-on-scroll mb-4">
            Student at Government Institute of Electronics
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto opacity-0 animate-on-scroll mb-12">
            Specializing in Artificial Intelligence and Machine Learning
          </p>
          
          <a
            href="#about"
            className="inline-block opacity-0 animate-on-scroll"
            aria-label="Scroll to About section"
          >
            <div className="glass border border-primary/20 p-3 rounded-full hover:border-primary transition-colors duration-300 hover:scale-110 animate-float hover:shadow-glow">
              <ArrowDown className="w-6 h-6 text-primary" />
            </div>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
