"use client";
import React, { createContext, useState } from "react";

interface ProjectContextType {
  selectedProject: string;
  setSelectedProject: (selectedProject: string) => void;
}

export const ProjectContext = createContext<ProjectContextType>({
  selectedProject: "",
  setSelectedProject: () => {},
});

interface ProjectContextProviderProps {
  children: React.ReactNode;
}

const ProjectContextProvider: React.FC<ProjectContextProviderProps> = ({
  children,
}) => {
  const [selectedProject, setSelectedProject] = useState("");

  return (
    <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
