
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
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out alternate`,
            }}
          ></div>
        ))}
      </div>
      
      {stages.map((stage, index) => (
        <motion.div
          key={stage.name}
          className="absolute glass px-4 py-2 rounded-full text-sm md:text-base"
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
        <motion.div 
          className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/20 flex items-center justify-center glass relative"
          animate={{ 
            boxShadow: animateRotation 
              ? ['0 0 10px rgba(214, 173, 96, 0.3)', '0 0 20px rgba(214, 173, 96, 0.5)', '0 0 10px rgba(214, 173, 96, 0.3)'] 
              : '0 0 0px transparent' 
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-primary flex items-center justify-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/30"></div>
          </div>
          
          {animateRotation && (
            <>
              <motion.div 
                className="absolute -inset-6 border border-dashed border-primary/30 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              <motion.div 
                className="absolute -inset-12 border border-dotted border-primary/20 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
            </>
          )}
        </motion.div>
      </motion.div>
      
      <motion.div
        className="z-10 text-center relative max-w-2xl px-6"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display mb-6 text-gradient-gold">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
          >
            Orchestrating the Film Industry
          </motion.span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Journey through the five stages of filmmaking with immersive storytelling.
        </p>
        <motion.a
          href="#development"
          className="glass px-6 py-3 rounded-full text-primary border border-primary/20 hover:bg-primary/10 transition-colors duration-300 inline-block"
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
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-float"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
