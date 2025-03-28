
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
  },
  scroll: (i: number) => ({
    x: 0,
    y: 0,
    rotate: i * 30,
    scale: 0.9,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  })
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
  const [animateRotation, setAnimateRotation] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 100 && !animateRotation) {
        setAnimateRotation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animateRotation]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cinematic-dark to-cinematic-blue/30 z-0"></div>
      
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-white/60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out alternate`,
            }}
          ></div>
        ))}
      </div>
      
      {stages.map((stage, index) => (
        <motion.div
          key={stage.name}
          className="absolute glass px-4 py-2 rounded-full text-sm md:text-base text-white"
          style={{ 
            left: `${50 + stage.x}%`, 
            top: `${50 + stage.y}%`, 
            transform: 'translate(-50%, -50%)'
          }}
          initial="initial"
          animate={scrollY > 100 ? "scroll" : "animate"}
          custom={(index + 1) * 0.5}
          whileHover="hover"
          variants={stageVariants}
        >
          {stage.name}
        </motion.div>
      ))}
      
      <motion.div 
        className="z-10 mb-8 relative"
        initial="hidden"
        animate={animateRotation ? "rotate" : "visible"}
        variants={logoVariants}
      >
        <img 
          src="/lovable-uploads/adffc72f-c8d5-4651-b3ae-98a044c55685.png" 
          alt="Eonverse Logo" 
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />
      </motion.div>
      
      <motion.div
        className="z-10 text-center relative max-w-2xl px-6"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display mb-6 text-gradient-blue">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
          >
            Orchestrating the Film Industry
          </motion.span>
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Journey through the five stages of filmmaking with immersive storytelling.
        </p>
        <motion.a
          href="#development"
          className="glass px-6 py-3 rounded-full text-white border border-primary/20 hover:bg-primary/10 transition-colors duration-300 inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Begin the Journey
        </motion.a>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-float"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
