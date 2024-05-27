"use client";
import React, { ReactNode, useState } from "react";
import ProjectNavigation from "./project-nav/ProjectNavigation";
import PageNavigation from "./page-nav/PageNavigation";

const Layout = ({ children }: { children: ReactNode }) => {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="flex w-full">
      <nav className="flex z-10">
        <ProjectNavigation />
        <PageNavigation />
      </nav>

      <main
        className={`${
          !showNav && "-ms-72"
        } w-full bg-[#fbfbfb] duration-300 flex justify-center items-center h-full`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
