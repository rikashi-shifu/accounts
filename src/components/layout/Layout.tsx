"use client";
import React from "react";
import ProjectNavigation from "@/components/layout/ProjectNavigation";
import PageNavigation from "@/components/layout/PageNavigation";

const Layout = () => {
  return (
    <nav className="flex">
      <ProjectNavigation />
      <PageNavigation />
    </nav>
  );
};

export default Layout;
