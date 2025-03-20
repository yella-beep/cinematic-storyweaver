
import React, { useEffect, useRef } from "react";
import { ShareIcon } from "lucide-react";

const Distribution = ({ onView }: { onView: () => void }) => {
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
          <ShareIcon className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      <h2 className="text-2xl md:text-4xl font-display mb-10 text-gradient-gold">Distribution</h2>
      
      <div className="glass rounded-lg p-8 max-w-4xl w-full mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-float opacity-30"></div>
        
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-display mb-6">The Final Journey</h3>
          
          <div className="w-full aspect-video bg-cinematic-blue glass rounded-lg mb-10 flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass px-6 py-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer transform hover:scale-105 transition-transform">
                <div className="flex items-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent mr-2"></div>
                  <p className="text-sm font-medium">Watch Teaser</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          
          <div className="w-full flex items-center justify-center mb-8">
            <div className="text-center">
              <div className="flex items-center">
                <div className="h-2 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
                <p className="mx-4 font-medium text-xl">100%</p>
                <div className="h-2 w-24 bg-gradient-to-l from-primary to-primary/30 rounded-full"></div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Film Completed</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full opacity-0 animate-fade-in animate-delay-500 animate-fill-forwards">
        <div className="glass rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105">
          <div className="w-12 h-12 rounded-full bg-cinematic-blue flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 rounded-sm bg-primary"></div>
          </div>
          <p className="text-sm font-medium">Theaters</p>
        </div>
        
        <div className="glass rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105">
          <div className="w-12 h-12 rounded-full bg-cinematic-blue flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 rounded-full border-2 border-primary"></div>
          </div>
          <p className="text-sm font-medium">Streaming</p>
        </div>
        
        <div className="glass rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105">
          <div className="w-12 h-12 rounded-full bg-cinematic-blue flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 transform rotate-45 bg-primary"></div>
          </div>
          <p className="text-sm font-medium">Digital</p>
        </div>
        
        <div className="glass rounded-lg p-6 text-center transform transition-all duration-500 hover:scale-105">
          <div className="w-12 h-12 rounded-full bg-cinematic-blue flex items-center justify-center mx-auto mb-4">
            <div className="w-3 h-6 bg-primary mr-1"></div>
            <div className="w-3 h-6 bg-primary"></div>
          </div>
          <p className="text-sm font-medium">Physical</p>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
