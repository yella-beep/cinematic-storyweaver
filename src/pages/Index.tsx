
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Development from "../components/stages/Development";
import PreProduction from "../components/stages/PreProduction";
import Production from "../components/stages/Production";
import PostProduction from "../components/stages/PostProduction";
import Distribution from "../components/stages/Distribution";
import ProgressIndicator from "../components/ProgressIndicator";

type FilmStage = "idle" | "development" | "preproduction" | "production" | "postproduction" | "distribution";

const Index = () => {
  const [currentStage, setCurrentStage] = useState<FilmStage>("idle");

  const handleStageView = (stage: FilmStage) => {
    setCurrentStage(stage);
  };

  return (
    <div className="min-h-screen bg-cinematic-dark text-white">
      <Header />
      <ProgressIndicator currentStage={currentStage} />
      
      <section id="landing" className="min-h-screen relative">
        <Landing />
      </section>
      
      <section id="development" className="min-h-screen pt-24 pb-16">
        <Development onView={() => handleStageView("development")} />
      </section>
      
      <section id="preproduction" className="min-h-screen pt-24 pb-16">
        <PreProduction onView={() => handleStageView("preproduction")} />
      </section>
      
      <section id="production" className="min-h-screen pt-24 pb-16">
        <Production onView={() => handleStageView("production")} />
      </section>
      
      <section id="postproduction" className="min-h-screen pt-24 pb-16">
        <PostProduction onView={() => handleStageView("postproduction")} />
      </section>
      
      <section id="distribution" className="min-h-screen pt-24 pb-16">
        <Distribution onView={() => handleStageView("distribution")} />
      </section>
      
      <footer className="py-12 bg-cinematic-blue/20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img 
              src="/lovable-uploads/51af723e-d40a-4d3c-97b3-4ff3fb42d57b.png" 
              alt="Eonverse Logo" 
              className="h-10 w-auto object-contain mr-2"
            />
            <p className="text-cinematic-blue font-openSauce text-xl">Eonverse</p>
          </div>
          <p className="text-sm text-white font-openSauce">Orchestrating the Film Industry</p>
          <p className="text-xs text-white/70 mt-4 font-openSauce">&copy; {new Date().getFullYear()} Eonverse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
