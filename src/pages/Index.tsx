
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
      
      <footer className="py-12 bg-cinematic-blue/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-display text-xl mb-4">Eonverse</p>
          <p className="text-sm text-muted-foreground">Orchestrating the Film Industry</p>
          <p className="text-xs text-muted-foreground mt-4">&copy; {new Date().getFullYear()} Eonverse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
