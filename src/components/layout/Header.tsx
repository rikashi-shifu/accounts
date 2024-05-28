import React from "react";
import HeaderDate from "../header/HeaderDate";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-semibold text-2xl">
        {name
          .toString()
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())}
      </h1>
      <div className="flex gap-3">
        <HeaderDate />
        <button className="bg-[#eaeaea] rounded-lg h-10 w-20 text-xs">
          Today
        </button>
        <button className="bg-black text-white rounded-lg h-10 w-20 text-xs">
          Share
        </button>
      </div>
    </div>
  );
};

export default Header;
