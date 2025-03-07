
import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const fullName = "Yejju Sathya Sai";
  const [typeIndex, setTypeIndex] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0);
  
  // Typing animation effect - optimized for performance
  useEffect(() => {
    if (typeIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullName.charAt(typeIndex));
        setTypeIndex(prev => prev + 1);
      }, 150);
      
      return () => clearTimeout(timeout);
    } else {
      // Restart typing after a delay
      const restartTimeout = setTimeout(() => {
        setTypedText("");
        setTypeIndex(0);
      }, 5000);
      
      return () => clearTimeout(restartTimeout);
    }
  }, [typeIndex]);
  
  // Optimized pulsating border glow effect with RAF for better performance
  useEffect(() => {
    let animationFrameId: number;
    let direction = 1;
    let intensity = 0;
    
    const animate = () => {
      intensity += direction * 0.5;
      
      if (intensity >= 100) {
        intensity = 100;
        direction = -1;
      } else if (intensity <= 0) {
        intensity = 0;
        direction = 1;
      }
      
      setGlowIntensity(intensity);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  // Optimized intersection observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            
            elements.forEach((element, index) => {
              requestAnimationFrame(() => {
                setTimeout(() => {
                  element.classList.add('animate-fade-in');
                }, index * 100); // Reduced delay for faster animations
              });
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden will-change-transform"
    >
      {/* Background Video with better overlay - hardware accelerated */}
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
      
      {/* Optimized overlay with subtle blur for better performance */}
      <div className="video-overlay bg-black/60 backdrop-blur-[2px]"></div>
      
      {/* Reduced number of decorative elements for better performance */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-10 will-change-transform"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <div className="glass-card p-8 md:p-10 rounded-2xl transition-transform duration-500 hover:shadow-[0_0_30px_rgba(88,85,251,0.3)]">
          <h2 className="text-lg sm:text-xl md:text-2xl text-primary opacity-0 animate-on-scroll mb-4">
            Hello, I'm
          </h2>
          
          {/* Futuristic glowing border with optimized animations */}
          <div 
            className="relative rounded-xl p-1 inline-block will-change-transform"
            style={{
              background: `linear-gradient(90deg, rgba(88,85,251,${0.2 + (glowIntensity / 200)}), rgba(163,91,255,${0.2 + (glowIntensity / 200)}))`,
              boxShadow: `0 0 ${10 + (glowIntensity / 10)}px rgba(88,85,251,${0.3 + (glowIntensity / 300)})`,
              transition: 'box-shadow 0.5s ease-out'
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold p-4 tracking-tight opacity-0 animate-on-scroll text-white bg-black rounded-lg">
              {typedText}<span className="animate-pulse">|</span>
            </h1>
          </div>
          
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
      
      {/* Gradient fade to next section - seamless transition with reduced opacity */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
    </section>
  );
};

export default Hero;
