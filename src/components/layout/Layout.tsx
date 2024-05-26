"use client";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import Navigation from "./Navigation";
import { usePathname } from "next/navigation";

export const NavContext = createContext<(showNav: boolean) => void>(() => {});

const Layout = ({ children }: { children: ReactNode }) => {
  const [showNav, setShowNav] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [pathname]);

  return (
    <div className="flex w-full">
      <NavContext.Provider value={setShowNav}>
        <Navigation showNav={showNav} />
      </NavContext.Provider>
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
