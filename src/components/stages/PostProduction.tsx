
import React, { useEffect, useRef, useState } from "react";
import { ScissorsIcon, WandIcon, WavesIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "../ui/progress";
import { Card, CardContent } from "../ui/card";

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
              setProgress((prev) => {
                if (prev >= 95) {
                  clearInterval(interval);
                  return 95;
                }
                return prev + 1;
              });
            }, 20);

            return () => clearInterval(interval);
          }, 500);

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
              <p className="text-sm font-medium">RENDERING</p>
            </div>

            <div className="flex items-center">
              <p className="text-sm font-medium">Version 4</p>
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
                    "0 0 0 rgba(214, 173, 96, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="font-display text-xl text-primary">
                  Finalizing Cuts
                </p>
              </motion.div>
            </motion.div>

            <div className="absolute top-4 left-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-1"></div>
              <p className="text-xs">Render Farm</p>
            </div>

            <div className="absolute top-4 right-4">
              <p className="text-xs">01:12:53</p>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <Progress value={progress} className="h-1 bg-black/30" />
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
              <p className="mt-2 text-sm text-muted-foreground">
                Post-Production Completed
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Post-Production Team Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        viewport={{ once: true }}
      >
        {/* VFX Artists Card - Enhanced */}
        <motion.div
          className="relative overflow-hidden"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="glass border-primary/20 h-full">
            <CardContent className="p-6">
              <div className="relative z-10">
                <motion.div 
                  className="mb-4 flex justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <WandIcon className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>
                
                <motion.h3 
                  className="text-lg font-display text-primary text-center mb-2"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  VFX Artists
                </motion.h3>
                
                <motion.p 
                  className="text-sm text-center text-muted-foreground"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Adding the magic touches
                </motion.p>
                
                <motion.div 
                  className="mt-4 grid grid-cols-3 gap-2"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div 
                      key={i}
                      className="aspect-square rounded-md bg-gradient-to-br from-primary/20 to-primary/5"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 0 10px rgba(214, 173, 96, 0.3)" 
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(214, 173, 96, 0)",
                          "0 0 8px rgba(214, 173, 96, 0.3)",
                          "0 0 0px rgba(214, 173, 96, 0)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse", 
                        delay: i * 0.2 
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Editors Card - Enhanced */}
        <motion.div
          className="relative overflow-hidden"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="glass border-primary/20 h-full">
            <CardContent className="p-6">
              <div className="relative z-10">
                <motion.div 
                  className="mb-4 flex justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <ScissorsIcon className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>
                
                <motion.h3 
                  className="text-lg font-display text-primary text-center mb-2"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Editors
                </motion.h3>
                
                <motion.p 
                  className="text-sm text-center text-muted-foreground"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Weaving the final narrative
                </motion.p>
                
                <motion.div 
                  className="mt-4 relative h-20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 right-0 h-1 top-[50%] transform -translate-y-1/2 bg-primary/30" />
                  
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      className="absolute w-6 h-16 bg-gradient-to-b from-primary/20 to-transparent rounded-sm"
                      style={{ left: `${i * 20}%` }}
                      initial={{ height: 0 }}
                      animate={{ 
                        height: ["0.5rem", "3rem", "1rem", "2rem", "0.5rem"],
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        repeatType: "mirror", 
                        delay: i * 0.2 
                      }}
                    />
                  ))}
                  
                  <motion.div 
                    className="absolute left-0 w-1 h-full bg-primary rounded-full"
                    animate={{ left: ['0%', '100%', '0%'] }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/5 to-transparent"
                animate={{
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Sound Designers Card - Similar to previous animation */}
        <motion.div
          className="relative overflow-hidden"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="glass border-primary/20 h-full">
            <CardContent className="p-6">
              <div className="relative z-10">
                <motion.div 
                  className="mb-4 flex justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <WavesIcon className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>
                
                <motion.h3 
                  className="text-lg font-display text-primary text-center mb-2"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Sound Designers
                </motion.h3>
                
                <motion.p 
                  className="text-sm text-center text-muted-foreground"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Crafting the auditory landscape
                </motion.p>
                
                <motion.div 
                  className="mt-4 flex justify-center space-x-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <motion.div 
                      key={i}
                      className="w-4 bg-primary/40 rounded-full"
                      style={{ height: `${(i % 4 + 1) * 8}px` }}
                      animate={{ 
                        height: [
                          `${(i % 4 + 1) * 8}px`, 
                          `${(i % 4 + 3) * 8}px`, 
                          `${(i % 4 + 1) * 8}px`
                        ],
                        backgroundColor: [
                          'rgba(214, 173, 96, 0.4)',
                          'rgba(214, 173, 96, 0.6)',
                          'rgba(214, 173, 96, 0.4)'
                        ]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: i * 0.1,
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-primary/5"
                animate={{
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Final touches animation */}
      <motion.div
        className="w-full max-w-lg flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: progress >= 95 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center gap-3"
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: progress >= 95 ? 0 : -50,
            opacity: progress >= 95 ? 1 : 0,
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="glass p-3 rounded-lg"
            animate={{
              y: [0, -5, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <WandIcon className="w-6 h-6 text-primary" />
          </motion.div>
          <p className="text-sm text-muted-foreground">
            Final touches being applied
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PostProduction;
