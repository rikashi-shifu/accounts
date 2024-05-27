"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="flex w-full">
      <Navigation />

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
