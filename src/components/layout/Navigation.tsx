"use client";
import React from "react";
import ProjectNavigation from "@/components/layout/ProjectNavigation";
import PageNavigation from "@/components/layout/PageNavigation";

interface NavigationProps {
  showNav: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ showNav }) => {
  return (
    <nav className="flex z-10">
      <ProjectNavigation />
      <PageNavigation showNav={showNav} />
    </nav>
  );
};

export default Navigation;
