
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface StageProps {
  name: string;
  x: number;
  y: number;
  delay: number;
}

const stageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

const Stage = ({ name, x, y, delay }: StageProps) => {
  return (
    <motion.div
      className="absolute glass px-4 py-2 rounded-full text-sm md:text-base"
      style={{ 
        left: `${50 + x}%`, 
        top: `${50 + y}%`, 
        transform: 'translate(-50%, -50%)'
      }}
      initial="initial"
      animate="animate"
      custom={delay}
      whileHover="hover"
      variants={stageVariants}
    >
      {name}
    </motion.div>
  );
};

const stages = [
  { name: "Development", x: -20, y: -15, delay: 1 },
  { name: "Pre-Production", x: 25, y: -25, delay: 2 },
  { name: "Production", x: -30, y: 10, delay: 3 },
  { name: "Post-Production", x: 15, y: 25, delay: 4 },
  { name: "Distribution", x: 35, y: 0, delay: 5 }
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: 0.5, 
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96]
    } 
  }
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      delay: 0.3, 
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96]
    } 
  },
  rotate: {
    rotate: 360,
    transition: { 
      delay: 6, 
      duration: 30,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinematic-dark to-cinematic-blue/70 z-0"></div>
      
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-white/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          ></div>
        ))}
      </div>
      
      {stages.map((stage, index) => (
        <Stage
          key={stage.name}
          name={stage.name}
          x={scrollY > 100 ? 0 : stage.x}
          y={scrollY > 100 ? 0 : stage.y}
          delay={stage.delay}
        />
      ))}
      
      <motion.div 
        className="z-10 mb-8 relative"
        initial="hidden"
        animate={scrollY > 100 ? "rotate" : "visible"}
        variants={logoVariants}
      >
        <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/20 flex items-center justify-center glass relative ${scrollY > 100 ? 'animate-rotate-slow' : ''}`}>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-primary flex items-center justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/30"></div>
          </div>
          
          {scrollY > 100 && (
            <div className="absolute -inset-6 border border-dashed border-primary/30 rounded-full"></div>
          )}
        </div>
      </motion.div>
      
      <motion.div
        className="z-10 text-center relative max-w-2xl px-6"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display mb-6 text-gradient-gold">
          Orchestrating the Film Industry
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Journey through the five stages of filmmaking with immersive storytelling.
        </p>
        <a
          href="#development"
          className="glass px-6 py-3 rounded-full text-primary border border-primary/20 hover:bg-primary/10 transition-colors duration-300 inline-block"
        >
          Begin the Journey
        </a>
      </motion.div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-float"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
