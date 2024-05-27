import React from "react";
import ProjectNavigation from "@/components/layout/project-nav/ProjectNavigation";
import PageNavigation from "@/components/layout/page-nav/PageNavigation";

const Navigation = () => {
  return (
    <nav className="flex z-10">
      <ProjectNavigation />
      <PageNavigation />
    </nav>
  );
};

export default Navigation;
