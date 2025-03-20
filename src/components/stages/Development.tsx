
import React, { useEffect, useRef } from "react";
import { PencilIcon } from "lucide-react";

const Development = ({ onView }: { onView: () => void }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          if (textRef.current) {
            textRef.current.classList.add("animate-typing");
            textRef.current.classList.add("after:animate-cursor-blink");
          }
          onView();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [onView]);

  return (
    <div 
      ref={sectionRef} 
      className="min-h-screen flex flex-col items-center justify-center py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="glass p-1 rounded-full mb-6">
        <div className="bg-primary/20 p-3 rounded-full">
          <PencilIcon className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      <h2 className="text-2xl md:text-4xl font-display mb-10 text-gradient-gold">Development</h2>
      
      <div className="max-w-2xl w-full glass rounded-lg p-8 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-float opacity-30"></div>
        
        <div className="typewriter mb-6">
          <h1 ref={textRef} className="text-lg md:text-xl font-mono after:content-['|'] after:ml-1 after:text-primary whitespace-pre-wrap sm:whitespace-nowrap overflow-hidden w-full">
            FADE IN:
          </h1>
        </div>
        
        <div className="mb-4 opacity-0 animate-fade-in animate-delay-300 animate-fill-forwards">
          <p className="text-sm md:text-base font-mono mb-2">INT. OFFICE - DAY</p>
          <p className="text-sm md:text-base font-mono mb-2">A creative's workspace. Dimly lit with a warm glow.</p>
        </div>
        
        <div className="mb-4 opacity-0 animate-fade-in animate-delay-600 animate-fill-forwards">
          <p className="text-sm md:text-base font-mono mb-2">A SCREENWRITER sits hunched over a desk, fingers dancing across a keyboard.</p>
        </div>
        
        <div className="opacity-0 animate-fade-in animate-delay-900 animate-fill-forwards">
          <p className="text-sm md:text-base font-mono">The birth of a story begins with a single idea...</p>
        </div>
      </div>
      
      <div className="text-center max-w-md opacity-0 animate-fade-in animate-delay-800 animate-fill-forwards">
        <p className="text-muted-foreground text-sm md:text-base">
          The Development stage is where ideas take shape, concepts are refined,
          and scriptwriting brings characters and worlds to life.
        </p>
      </div>
    </div>
  );
};

export default Development;
