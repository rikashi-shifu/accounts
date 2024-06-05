"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
import ProjectNavigation from "./project-nav/ProjectNavigation";
import PageNavigation from "./page-nav/PageNavigation";
import { usePathname } from "next/navigation";
import Header from "../header/Header";
import moment from "moment";

interface NavContextType {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error(
      "useNavContext must be used within the NavContext.Provider"
    );
  }
  return context;
};

interface DateContextType {
  selectedDate: moment.Moment;
  showMonth: boolean;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export const useDateContext = () => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error(
      "useDateContext must be used within the DateContext.Provider"
    );
  }
  return context;
};

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(true);

  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today);
  const [showMonth, setShowMonth] = React.useState<boolean>(true);

  return (
    <div className="flex w-full">
      <nav className={`${pathname === "/" ? "hidden" : "flex"} z-10`}>
        <NavContext.Provider value={{ showNav, setShowNav }}>
          <ProjectNavigation />
          <PageNavigation />
        </NavContext.Provider>
      </nav>

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
          <Header
            today={today}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            showMonth={showMonth}
            setShowMonth={setShowMonth}
          />
        </div>
        <div
          className={`${
            pathname !== "/" && "w-full h-full flex flex-col gap-5 px-6"
          }`}
        >
          <DateContext.Provider value={{ selectedDate, showMonth }}>
            {children}
          </DateContext.Provider>
        </div>
      </main>
    </div>
  );
};

export default Layout;
