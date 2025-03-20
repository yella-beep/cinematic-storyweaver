
import React, { useEffect, useRef } from "react";
import { PencilIcon, FileTextIcon } from "lucide-react";
import { motion } from "framer-motion";

const Development = ({ onView }: { onView: () => void }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLDivElement>(null);
  
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
      <motion.div 
        className="glass p-1 rounded-full mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-primary/20 p-3 rounded-full">
          <PencilIcon className="w-8 h-8 text-primary" />
        </div>
      </motion.div>
      
      <motion.h2 
        className="text-2xl md:text-4xl font-display mb-10 text-gradient-gold"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Development
      </motion.h2>
      
      <motion.div 
        ref={scriptRef}
        className="max-w-2xl w-full glass rounded-lg p-8 mb-12 relative overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-float opacity-30"></div>
        
        <div className="typewriter mb-6">
          <h1 ref={textRef} className="text-lg md:text-xl font-mono after:content-['|'] after:ml-1 after:text-primary whitespace-pre-wrap sm:whitespace-nowrap overflow-hidden w-full">
            FADE IN:
          </h1>
        </div>
        
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base font-mono mb-2">INT. OFFICE - DAY</p>
          <p className="text-sm md:text-base font-mono mb-2">A creative's workspace. Dimly lit with a warm glow.</p>
        </motion.div>
        
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base font-mono mb-2">A SCREENWRITER sits hunched over a desk, fingers dancing across a keyboard.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm md:text-base font-mono">The birth of a story begins with a single idea...</p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="w-full max-w-md flex items-center justify-center mb-12"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="p-1 rounded-full glass mr-8"
          animate={{ 
            y: [0, -10, 0],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="bg-primary/20 p-3 rounded-full">
            <PencilIcon className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
        
        <motion.div
          className="flex-1 h-0.5 bg-gradient-to-r from-primary/80 to-transparent"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 2.8 }}
          viewport={{ once: true }}
        />
        
        <motion.div 
          className="p-1 rounded-full glass ml-8"
          animate={{ 
            y: [0, -10, 0],
            transition: { duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="bg-primary/20 p-3 rounded-full">
            <FileTextIcon className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="text-center max-w-md"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 3 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground text-sm md:text-base">
          The Development stage is where ideas take shape, concepts are refined,
          and scriptwriting brings characters and worlds to life.
        </p>
      </motion.div>
    </div>
  );
};

export default Development;
