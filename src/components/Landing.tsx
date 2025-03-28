
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

const stages = [
  { name: "Development", delay: 1, className: "float-random-1" },
  { name: "Pre-Production", delay: 2, className: "float-random-2" },
  { name: "Production", delay: 3, className: "float-random-3" },
  { name: "Post-Production", delay: 4, className: "float-random-4" },
  { name: "Distribution", delay: 5, className: "float-random-5" }
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
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20">
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
      
      {/* Floating Stage Labels - Updated positioning to avoid overlapping */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.name}
            className={`absolute glass px-4 py-2 rounded-full text-sm md:text-base text-white ${stage.className} pointer-events-auto`}
            style={{ 
              left: `${15 + ((index % 5) * 17)}%`, 
              top: `${20 + ((index % 3) * 25)}%`,
              transform: 'translate(-50%, -50%)'
            }}
            initial="initial"
            animate="animate"
            custom={(index + 1) * 0.5}
            whileHover="hover"
            variants={stageVariants}
          >
            {stage.name}
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="z-10 mb-8 relative"
        initial="hidden"
        animate={animateRotation ? "rotate" : "visible"}
        variants={logoVariants}
      >
        <img 
          src="/lovable-uploads/0278b8ec-692f-4fa6-935f-8a2e820a9a0b.png" 
          alt="Eonverse Logo" 
          className="w-24 h-auto md:w-32 lg:w-40 object-contain"
        />
      </motion.div>
      
      <motion.div
        className="z-10 text-center relative max-w-2xl px-6"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-openSauce mb-6 text-gradient-blue">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
          >
            Orchestrating the Film Industry
          </motion.span>
        </h1>
        <p className="text-lg md:text-xl text-white mb-12 font-openSauce">
          Journey through the five stages of filmmaking with immersive storytelling.
        </p>
        <motion.a
          href="#development"
          className="glass px-6 py-3 rounded-full text-white border border-primary/20 hover:bg-primary/10 transition-colors duration-300 inline-block font-openSauce"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Begin the Journey
        </motion.a>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
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
