
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
      
      <section id="landing">
        <Landing />
      </section>
      
      <section id="development">
        <Development onView={() => handleStageView("development")} />
      </section>
      
      <section id="preproduction">
        <PreProduction onView={() => handleStageView("preproduction")} />
      </section>
      
      <section id="production">
        <Production onView={() => handleStageView("production")} />
      </section>
      
      <section id="postproduction">
        <PostProduction onView={() => handleStageView("postproduction")} />
      </section>
      
      <section id="distribution">
        <Distribution onView={() => handleStageView("distribution")} />
      </section>
      
      <footer className="py-12 bg-cinematic-blue/20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img 
              src="/lovable-uploads/adffc72f-c8d5-4651-b3ae-98a044c55685.png" 
              alt="Eonverse Logo" 
              className="h-10 w-10 object-contain mr-2"
            />
            <p className="text-cinematic-blue font-display text-xl">Eonverse</p>
          </div>
          <p className="text-sm text-white">Orchestrating the Film Industry</p>
          <p className="text-xs text-white/70 mt-4">&copy; {new Date().getFullYear()} Eonverse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
