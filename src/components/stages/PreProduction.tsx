
import React, { useEffect, useRef } from "react";
import { UsersIcon } from "lucide-react";

const PreProduction = ({ onView }: { onView: () => void }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          onView();
        }
      },
      { threshold: 0.4 }
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
          <UsersIcon className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      <h2 className="text-2xl md:text-4xl font-display mb-10 text-gradient-gold">Pre-Production</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full mb-12">
        <div className="glass rounded-lg p-6 transform transition-all duration-500 hover:translate-y-[-10px] opacity-0 animate-fade-in animate-delay-300 animate-fill-forwards">
          <div className="rounded-full bg-secondary w-12 h-12 flex items-center justify-center mb-4">
            <span className="text-primary font-bold">01</span>
          </div>
          <h3 className="text-xl font-display mb-3">Casting</h3>
          <p className="text-sm text-muted-foreground">Finding the perfect actors to bring characters from page to screen.</p>
        </div>
        
        <div className="glass rounded-lg p-6 transform transition-all duration-500 hover:translate-y-[-10px] opacity-0 animate-fade-in animate-delay-500 animate-fill-forwards">
          <div className="rounded-full bg-secondary w-12 h-12 flex items-center justify-center mb-4">
            <span className="text-primary font-bold">02</span>
          </div>
          <h3 className="text-xl font-display mb-3">Location Scouting</h3>
          <p className="text-sm text-muted-foreground">Exploring real-world settings that align with the director's vision.</p>
        </div>
        
        <div className="glass rounded-lg p-6 transform transition-all duration-500 hover:translate-y-[-10px] opacity-0 animate-fade-in animate-delay-700 animate-fill-forwards">
          <div className="rounded-full bg-secondary w-12 h-12 flex items-center justify-center mb-4">
            <span className="text-primary font-bold">03</span>
          </div>
          <h3 className="text-xl font-display mb-3">Storyboarding</h3>
          <p className="text-sm text-muted-foreground">Visualizing scenes frame by frame to plan the visual narrative.</p>
        </div>
      </div>
      
      <div className="glass rounded-lg p-8 max-w-4xl w-full relative overflow-hidden opacity-0 animate-fade-in animate-delay-500 animate-fill-forwards">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-float opacity-30"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-display mb-4">The Blueprint Phase</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Pre-production transforms abstract concepts into concrete plans. Every detail is meticulously arranged
              before a single frame is shot.
            </p>
            <div className="w-full h-1 bg-secondary overflow-hidden rounded-full">
              <div className="progress-loader active"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 h-48 bg-cinematic-blue glass rounded-lg flex items-center justify-center">
            <p className="font-display text-xl text-primary">Script Reading Session</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreProduction;
