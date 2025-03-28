
import React, { useEffect, useState } from "react";

type FilmStage = "idle" | "development" | "preproduction" | "production" | "postproduction" | "distribution";

interface ProgressIndicatorProps {
  currentStage: FilmStage;
}

const stages = [
  { id: "development", label: "Development" },
  { id: "preproduction", label: "Pre-Production" },
  { id: "production", label: "Production" },
  { id: "postproduction", label: "Post-Production" },
  { id: "distribution", label: "Distribution" },
];

const ProgressIndicator = ({ currentStage }: ProgressIndicatorProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stageIndex = stages.findIndex((stage) => stage.id === currentStage);
    if (stageIndex === -1) {
      setProgress(0);
    } else {
      setProgress(((stageIndex + 1) / stages.length) * 100);
    }
  }, [currentStage]);

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center">
        <div className="h-64 w-1 bg-white/30 relative">
          <div
            className="absolute bottom-0 left-0 w-1 bg-cinematic-blue transition-all duration-700 ease-in-out"
            style={{ height: `${progress}%` }}
          ></div>
          
          {stages.map((stage, index) => {
            const stagePosition = (index / (stages.length - 1)) * 100;
            const isActive = stages.findIndex((s) => s.id === currentStage) >= index;
            
            return (
              <div
                key={stage.id}
                className="absolute w-8 h-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                style={{ bottom: `calc(${stagePosition}% - 16px)` }}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    isActive ? "bg-cinematic-blue scale-100" : "bg-white/30 scale-75"
                  }`}
                ></div>
                <div
                  className={`absolute left-6 pl-2 whitespace-nowrap text-xs transition-all duration-300 ${
                    currentStage === stage.id
                      ? "opacity-100 text-cinematic-blue font-medium"
                      : isActive
                      ? "opacity-70 text-white"
                      : "opacity-40 text-white/60"
                  }`}
                >
                  {stage.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
