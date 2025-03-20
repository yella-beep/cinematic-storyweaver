
import React, { useEffect, useRef, useState } from "react";
import { ScissorsIcon } from "lucide-react";

const PostProduction = ({ onView }: { onView: () => void }) => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          setProgress(0);
          const timer = setTimeout(() => {
            const interval = setInterval(() => {
              setProgress(prev => {
                if (prev >= 100) {
                  clearInterval(interval);
                  return 100;
                }
                return prev + 1;
              });
            }, 30);
            
            return () => clearInterval(interval);
          }, 800);
          
          onView();
          return () => clearTimeout(timer);
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
          <ScissorsIcon className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      <h2 className="text-2xl md:text-4xl font-display mb-10 text-gradient-gold">Post-Production</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
        <div className="glass rounded-lg p-6 transform transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in animate-delay-300 animate-fill-forwards">
          <h3 className="text-xl font-display mb-3 text-primary">Editing</h3>
          <div className="h-28 bg-cinematic-blue glass rounded-lg mb-4 flex items-center justify-center">
            <div className="w-3/4 h-4 bg-black/30 rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: `${Math.min(progress * 1.2, 100)}%` }}></div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Crafting the narrative through sequencing and pacing.</p>
        </div>
        
        <div className="glass rounded-lg p-6 transform transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in animate-delay-500 animate-fill-forwards">
          <h3 className="text-xl font-display mb-3 text-primary">Sound Design</h3>
          <div className="h-28 bg-cinematic-blue glass rounded-lg mb-4 flex items-center justify-center">
            <div className="w-3/4 h-12 flex items-end gap-1">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 bg-primary rounded-t-sm"
                  style={{ 
                    height: `${Math.min(Math.random() * 100, 100)}%`,
                    opacity: progress > i * 5 ? '1' : '0.2'
                  }}
                ></div>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Enhancing the auditory experience with sound effects and music.</p>
        </div>
        
        <div className="glass rounded-lg p-6 transform transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in animate-delay-700 animate-fill-forwards">
          <h3 className="text-xl font-display mb-3 text-primary">Visual Effects</h3>
          <div className="h-28 bg-cinematic-blue glass rounded-lg mb-4 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-t-primary border-r-primary/70 border-b-primary/40 border-l-primary/10"
              style={{ 
                transform: `rotate(${progress * 3.6}deg)`,
                transition: 'transform 0.2s ease'
              }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground">Adding digital magic to create stunning visual elements.</p>
        </div>
      </div>
      
      <div className="glass rounded-lg p-8 max-w-4xl w-full relative overflow-hidden mb-12 opacity-0 animate-fade-in animate-delay-500 animate-fill-forwards">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-float opacity-30"></div>
        
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-display mb-6">Teaser Countdown</h3>
          
          <div className="flex gap-4 mb-8">
            <div className="glass p-4 w-16 text-center">
              <p className="text-2xl font-bold text-primary">00</p>
              <p className="text-xs text-muted-foreground">Days</p>
            </div>
            <div className="glass p-4 w-16 text-center">
              <p className="text-2xl font-bold text-primary">00</p>
              <p className="text-xs text-muted-foreground">Hours</p>
            </div>
            <div className="glass p-4 w-16 text-center">
              <p className="text-2xl font-bold text-primary">00</p>
              <p className="text-xs text-muted-foreground">Minutes</p>
            </div>
            <div className="glass p-4 w-16 text-center">
              <p className="text-2xl font-bold text-primary">00</p>
              <p className="text-xs text-muted-foreground">Seconds</p>
            </div>
          </div>
          
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center mb-2">
              <div className="h-2 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
              <p className="mx-4 font-medium text-xl">{progress}%</p>
              <div className="h-2 w-24 bg-gradient-to-l from-primary to-primary/30 rounded-full"></div>
            </div>
            <p className="text-sm text-muted-foreground">Post-Production Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProduction;
