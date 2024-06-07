"use client";
import React, { useState, type ReactNode } from "react";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

interface NavigationAccordianProps {
  primary?: boolean;
  secondary?: boolean;
  label: string;
  children: ReactNode;
}

const NavigationAccordian: React.FC<NavigationAccordianProps> = ({
  primary,
  secondary,
  label,
  children,
}) => {
  const [showChildren, setShowChildren] = useState(true);

  return (
    <div
      className={`${primary && "bg-[#151515]"} 
      ${secondary && "bg-[#2c2c2c]"} rounded-md flex flex-col gap-4 p-4`}
    >
      <div className="flex justify-between">
        <h1
          className={`${
            primary && showChildren ? "text-[#c8a1d6]" : "text-neutral-400"
          } 
          ${
            secondary && showChildren ? "text-neutral-300" : "text-neutral-400"
          } font-semibold transition-all duration-300`}
        >
          {label}
        </h1>
        <button
          onClick={() => {
            if (showChildren) {
              setShowChildren(false);
            } else {
              setShowChildren(true);
            }
          }}
          className={`${primary && "hover:bg-[#2c2c2c]"} 
        ${
          secondary && "hover:bg-[#3b3b3b]"
        } rounded-md w-6 h-6 flex justify-center items-center`}
        >
          {showChildren ? (
            <FiMinus className="text-neutral-300 w-5 h-5" />
          ) : (
            <IoIosAdd className="text-neutral-300 w-5 h-5" />
          )}
        </button>
      </div>

      <div className={`${showChildren ? "flex" : "hidden"} flex-col gap-2`}>
        {children}
      </div>
    </div>
  );
};

export default NavigationAccordian;
