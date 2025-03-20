
import React, { useEffect, useRef, useState } from "react";
import { CameraIcon, TimerIcon } from "lucide-react";

const Production = ({ onView }: { onView: () => void }) => {
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
                if (prev >= 85) {
                  clearInterval(interval);
                  return 85;
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
          <CameraIcon className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      <h2 className="text-2xl md:text-4xl font-display mb-10 text-gradient-gold">Production</h2>
      
      <div className="glass rounded-lg p-8 max-w-4xl w-full mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-float opacity-30"></div>
        
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse mr-2"></div>
              <p className="text-sm font-medium">RECORDING</p>
            </div>
            
            <div className="flex items-center">
              <TimerIcon className="w-4 h-4 mr-1 text-muted-foreground" />
              <p className="text-sm font-medium">TAKE 3</p>
            </div>
          </div>
          
          <div className="w-full aspect-video bg-cinematic-blue glass rounded-lg mb-6 flex items-center justify-center relative opacity-0 animate-fade-in animate-delay-300 animate-fill-forwards">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass rounded-lg px-6 py-3">
                <p className="font-display text-xl text-primary">ACTION!</p>
              </div>
            </div>
            
            <div className="absolute top-4 left-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-1"></div>
              <p className="text-xs">Cam A</p>
            </div>
            
            <div className="absolute top-4 right-4">
              <p className="text-xs">00:03:45</p>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="w-full h-1 bg-black/30 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center mb-8 opacity-0 animate-fade-in animate-delay-500 animate-fill-forwards">
            <div className="text-center">
              <div className="flex items-center">
                <div className="h-2 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
                <p className="mx-4 font-medium text-xl">{progress}%</p>
                <div className="h-2 w-24 bg-gradient-to-l from-primary to-primary/30 rounded-full"></div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Production Completed</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl w-full opacity-0 animate-fade-in animate-delay-700 animate-fill-forwards">
        <div className="glass rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <p className="text-primary font-medium mb-1">Director</p>
          <p className="text-xs text-muted-foreground">Orchestrating the vision</p>
        </div>
        
        <div className="glass rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <p className="text-primary font-medium mb-1">Camera Crew</p>
          <p className="text-xs text-muted-foreground">Capturing every moment</p>
        </div>
        
        <div className="glass rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <p className="text-primary font-medium mb-1">Sound Team</p>
          <p className="text-xs text-muted-foreground">Perfecting the audio</p>
        </div>
        
        <div className="glass rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <p className="text-primary font-medium mb-1">Art Department</p>
          <p className="text-xs text-muted-foreground">Creating the world</p>
        </div>
      </div>
    </div>
  );
};

export default Production;
