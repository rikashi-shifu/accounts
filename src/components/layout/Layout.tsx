"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
import ProjectNavigation from "./project-nav/ProjectNavigation";
import PageNavigation from "./page-nav/PageNavigation";
import { usePathname } from "next/navigation";
import Header from "../header/Header";

interface NavContextType {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavContext.Provider");
  }
  return context;
};

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="flex w-full">
      <NavContext.Provider value={{ showNav, setShowNav }}>
        <nav className={`${pathname === "/" ? "hidden" : "flex"} z-10`}>
          <ProjectNavigation />
          <PageNavigation />
        </nav>
      </NavContext.Provider>
      <main
        className={`${
          !showNav && "-ms-72"
        } w-full bg-[#fbfbfb] duration-300 flex flex-col justify-center items-center h-full`}
      >
        <div
          className={`${
            pathname === "/" ? "hidden" : "flex p-6"
          } justify-between items-center w-full`}
        >
          <Header />
        </div>
        <div
          className={`${
            pathname !== "/" && "w-full h-full flex flex-col gap-5 px-6"
          }`}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
