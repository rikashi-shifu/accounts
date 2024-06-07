"use client";
import SelectProject from "./select-project";
import NavScrollable from "./nav-scrollable/nav-scrollable";
import { createContext, useState } from "react";

export const ProjectContext = createContext("");

const NavBody = () => {
  const [selectedProject, setSelectedProject] = useState("");

  return (
    <div className="flex flex-col gap-3">
      <ProjectContext.Provider value={selectedProject}>
        <div className="flex justify-center items-center px-1">
          <SelectProject setSelectedProject={setSelectedProject} />
        </div>
        <NavScrollable />
      </ProjectContext.Provider>
    </div>
  );
};

export default NavBody;
