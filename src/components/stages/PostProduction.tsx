
import React, { useEffect, useRef, useState } from "react";
import { ScissorsIcon, WandIcon, WaveformIcon } from "lucide-react";
import { motion } from "framer-motion";

const PostProduction = ({ onView }: { onView: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showTeaser, setShowTeaser] = useState(false);
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
                  setShowTeaser(true);
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
      <motion.div 
        className="glass p-1 rounded-full mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-primary/20 p-3 rounded-full">
          <ScissorsIcon className="w-8 h-8 text-primary" />
        </div>
      </motion.div>
      
      <motion.h2 
        className="text-2xl md:text-4xl font-display mb-10 text-gradient-gold"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Post-Production
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="glass rounded-lg p-6 transform transition-all duration-500"
          whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-display mb-3 text-primary">Editing</h3>
          <div className="h-28 bg-cinematic-blue glass rounded-lg mb-4 flex items-center justify-center">
            <motion.div 
              className="w-3/4 h-4 bg-black/30 rounded-full overflow-hidden"
              initial={{ width: "0%" }}
            >
              <motion.div 
                className="h-full bg-primary" 
                animate={{ width: `${Math.min(progress * 1.2, 100)}%` }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </motion.div>
          </div>
          <p className="text-sm text-muted-foreground">Crafting the narrative through sequencing and pacing.</p>
        </motion.div>
        
        <motion.div 
          className="glass rounded-lg p-6 transform transition-all duration-500"
          whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-3">
            <h3 className="text-xl font-display text-primary">Sound Design</h3>
            <WaveformIcon className="w-5 h-5 ml-2 text-primary/70" />
          </div>
          <div className="h-28 bg-cinematic-blue glass rounded-lg mb-4 flex items-center justify-center">
            <div className="w-3/4 h-12 flex items-end gap-1">
              {[...Array(20)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="w-2 bg-primary rounded-t-sm"
                  initial={{ height: "5%" }}
                  animate={{ 
                    height: progress > i * 5 ? `${Math.min(Math.random() * 100, 100)}%` : "5%",
                    opacity: progress > i * 5 ? 1 : 0.2
                  }}
                  transition={{ 
                    duration: 0.5,
                    repeat: progress > i * 5 ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                ></motion.div>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Enhancing the auditory experience with sound effects and music.</p>
        </motion.div>
        
        <motion.div 
          className="glass rounded-lg p-6 transform transition-all duration-500"
          whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-3">
            <h3 className="text-xl font-display text-primary">Visual Effects</h3>
            <WandIcon className="w-5 h-5 ml-2 text-primary/70" />
          </div>
          <div className="h-28 bg-cinematic-blue glass rounded-lg mb-4 flex items-center justify-center">
            <motion.div 
              className="w-16 h-16 rounded-full border-4 border-t-primary border-r-primary/70 border-b-primary/40 border-l-primary/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ 
                rotate: `${progress * 3.6}deg`
              }}
            ></motion.div>
          </div>
          <p className="text-sm text-muted-foreground">Adding digital magic to create stunning visual elements.</p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="glass rounded-lg p-8 max-w-4xl w-full relative overflow-hidden mb-12"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-float opacity-30"></div>
        
        <div className="flex flex-col items-center">
          <motion.h3 
            className="text-xl font-display mb-6"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            viewport={{ once: true }}
          >
            Teaser {showTeaser ? "Ready!" : "Countdown"}
          </motion.h3>
          
          {!showTeaser ? (
            <motion.div 
              className="flex gap-4 mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="glass p-4 w-16 text-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 rgba(214, 173, 96, 0)",
                    "0 0 10px rgba(214, 173, 96, 0.3)",
                    "0 0 0 rgba(214, 173, 96, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-2xl font-bold text-primary">00</p>
                <p className="text-xs text-muted-foreground">Days</p>
              </motion.div>
              <motion.div 
                className="glass p-4 w-16 text-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 rgba(214, 173, 96, 0)",
                    "0 0 10px rgba(214, 173, 96, 0.3)",
                    "0 0 0 rgba(214, 173, 96, 0)"
                  ]
                }}
                transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
              >
                <p className="text-2xl font-bold text-primary">00</p>
                <p className="text-xs text-muted-foreground">Hours</p>
              </motion.div>
              <motion.div 
                className="glass p-4 w-16 text-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 rgba(214, 173, 96, 0)",
                    "0 0 10px rgba(214, 173, 96, 0.3)",
                    "0 0 0 rgba(214, 173, 96, 0)"
                  ]
                }}
                transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
              >
                <p className="text-2xl font-bold text-primary">00</p>
                <p className="text-xs text-muted-foreground">Minutes</p>
              </motion.div>
              <motion.div 
                className="glass p-4 w-16 text-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 rgba(214, 173, 96, 0)",
                    "0 0 10px rgba(214, 173, 96, 0.3)",
                    "0 0 0 rgba(214, 173, 96, 0)"
                  ]
                }}
                transition={{ duration: 2, delay: 0.9, repeat: Infinity }}
              >
                <p className="text-2xl font-bold text-primary">00</p>
                <p className="text-xs text-muted-foreground">Seconds</p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              className="flex flex-col items-center justify-center bg-cinematic-blue glass rounded-lg p-4 mb-8 w-full max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass p-1 rounded-full mb-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity, 
                      ease: "linear"
                    }}
                  >
                    <WandIcon className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
              </div>
              <p className="text-primary font-medium mb-2">Teaser Preview Ready</p>
              <p className="text-xs text-muted-foreground text-center">Your cinematic journey is ready to be unveiled</p>
            </motion.div>
          )}
          
          <motion.div 
            className="w-full flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-2">
              <div className="h-2 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
              <p className="mx-4 font-medium text-xl">{progress}%</p>
              <div className="h-2 w-24 bg-gradient-to-l from-primary to-primary/30 rounded-full"></div>
            </div>
            <p className="text-sm text-muted-foreground">Post-Production Completed</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PostProduction;
