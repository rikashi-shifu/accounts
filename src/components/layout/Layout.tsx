"use client";
import React, { useState } from "react";
import ProjectNavigation from "@/components/layout/ProjectNavigation";
import PageNavigation from "@/components/layout/PageNavigation";

const Layout = () => {
  const [currentProject, setCurrentProject] = useState("");

  return (
    <nav className="flex">
      <ProjectNavigation setCurrentProject={setCurrentProject} />
      <PageNavigation currentProject={currentProject} />
    </nav>
  );
};

export default Layout;
