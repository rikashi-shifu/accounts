"use client";
import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import ProjectBlock from "./ProjectBlock";
import ProjectHeader from "./ProjectHeader";

interface Account {
  name: string;
  category: string;
  ledger: string;
}

interface Project {
  id: string;
  name: string;
  user: string;
  account: Account;
}

const ProjectNavigation = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    void (async () => {
      await fetch("/data/project.json", { method: "GET" }).then(
        async (response) =>
          response.json().then(async (projects) => {
            await setProjects(projects);
          })
      );
    })();
  }, []);

  return (
    <div className="w-20 flex flex-col items-center bg-[#151515] z-10">
      <ProjectHeader />
      <hr className="w-1/2 border-[#323232]" />
      <div className="h-full flex pt-4 flex-col gap-4">
        {projects.map((project, key) => {
          const formattedProjectName = project.name
            .toLowerCase()
            .replace(/ /g, "-");
          return (
            <ProjectBlock
              key={key}
              formattedProjectName={formattedProjectName}
              project={project}
            />
          );
        })}
        <button className="bg-[#2c2c2c] opacity-50 hover:opacity-100 text-2xl text-white flex justify-center items-center rounded-full w-14 h-14">
          <IoIosAdd />
        </button>
      </div>
    </div>
  );
};

export default ProjectNavigation;
