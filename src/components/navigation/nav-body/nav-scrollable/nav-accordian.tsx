"use client";
import React, { useState, type ReactNode } from "react";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

interface NavAccordianProps {
  primary?: boolean;
  secondary?: boolean;
  label: string;
  children: ReactNode;
}

const NavAccordian: React.FC<NavAccordianProps> = ({
  primary,
  secondary,
  label,
  children,
}) => {
  const [showChildren, setShowChildren] = useState(true);

  return (
    <div
      className={`${primary && "bg-[#151515] p-4"} 
      ${
        secondary && "bg-[#2c2c2c] py-3 px-4 text-sm"
      } rounded-md flex flex-col gap-4`}
    >
      <div className="flex justify-between">
        <h1
          className={`${
            primary && (showChildren ? "text-[#c8a1d6]" : "text-neutral-400")
          } 
          ${
            secondary &&
            (showChildren ? "text-neutral-300" : "text-neutral-400")
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
        } text-neutral-400 hover:text-neutral-300 rounded-md w-6 h-6 flex justify-center items-center`}
        >
          {showChildren ? (
            <FiMinus className="w-5 h-5" />
          ) : (
            <IoIosAdd className="w-5 h-5" />
          )}
        </button>
      </div>

      <div
        className={`${showChildren ? "flex" : "hidden"} flex-col gap-2 pb-1`}
      >
        {children}
      </div>
    </div>
  );
};

export default NavAccordian;
