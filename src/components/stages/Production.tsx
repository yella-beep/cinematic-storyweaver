
import React, { useEffect, useRef, useState } from "react";
import { CameraIcon, TimerIcon, MemoryStickIcon } from "lucide-react";
import { motion } from "framer-motion";

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
      <motion.div 
        className="glass p-1 rounded-full mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-primary/20 p-3 rounded-full">
          <CameraIcon className="w-8 h-8 text-primary" />
        </div>
      </motion.div>
      
      <motion.h2 
        className="text-2xl md:text-4xl font-display mb-10 text-gradient-gold"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Production
      </motion.h2>
      
      <motion.div 
        className="glass rounded-lg p-8 max-w-4xl w-full mb-12 relative overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
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
          
          <motion.div 
            className="w-full aspect-video bg-cinematic-blue glass rounded-lg mb-6 flex items-center justify-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="glass rounded-lg px-6 py-3"
                animate={{ 
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0 rgba(214, 173, 96, 0.3)",
                    "0 0 15px rgba(214, 173, 96, 0.5)",
                    "0 0 0 rgba(214, 173, 96, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="font-display text-xl text-primary">ACTION!</p>
              </motion.div>
            </motion.div>
            
            <div className="absolute top-4 left-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-1"></div>
              <p className="text-xs">Cam A</p>
            </div>
            
            <div className="absolute top-4 right-4">
              <p className="text-xs">00:03:45</p>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="w-full h-1 bg-black/30 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  style={{ width: `${progress}%` }}
                  initial={{ width: "0%" }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="flex items-center">
                <div className="h-2 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
                <p className="mx-4 font-medium text-xl">{progress}%</p>
                <div className="h-2 w-24 bg-gradient-to-l from-primary to-primary/30 rounded-full"></div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Production Completed</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl w-full mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="glass rounded-lg p-4 flex flex-col items-center justify-center text-center"
          whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-primary font-medium mb-1">Director</p>
          <p className="text-xs text-muted-foreground">Orchestrating the vision</p>
        </motion.div>
        
        <motion.div 
          className="glass rounded-lg p-4 flex flex-col items-center justify-center text-center"
          whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-primary font-medium mb-1">Camera Crew</p>
          <p className="text-xs text-muted-foreground">Capturing every moment</p>
        </motion.div>
        
        <motion.div 
          className="glass rounded-lg p-4 flex flex-col items-center justify-center text-center"
          whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-primary font-medium mb-1">Sound Team</p>
          <p className="text-xs text-muted-foreground">Perfecting the audio</p>
        </motion.div>
        
        <motion.div 
          className="glass rounded-lg p-4 flex flex-col items-center justify-center text-center"
          whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-primary font-medium mb-1">Art Department</p>
          <p className="text-xs text-muted-foreground">Creating the world</p>
        </motion.div>
      </motion.div>
      
      {/* Memory stick animation */}
      <motion.div 
        className="w-full max-w-lg flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: progress >= 85 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="flex items-center gap-3"
          initial={{ x: -50, opacity: 0 }}
          animate={{ 
            x: progress >= 85 ? 0 : -50, 
            opacity: progress >= 85 ? 1 : 0 
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="glass p-3 rounded-lg"
            animate={{
              y: [0, -5, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <MemoryStickIcon className="w-6 h-6 text-primary" />
          </motion.div>
          <p className="text-sm text-muted-foreground">Footage Ready for Post-Production</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Production;
