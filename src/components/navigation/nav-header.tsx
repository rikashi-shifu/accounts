import React from "react";
import { GrMoney } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";

const NavHeader = () => {
  return (
    <div className="h-20 px-4 flex justify-between items-center">
      <div className="flex gap-4 ps-2">
        <GrMoney className="text-[#c8a1d6] w-7 h-7" />
        <h1 className="text-xl font-semibold text-white">Accounts</h1>
      </div>
      <button
        className={
          "bg-[#2c2c2c] hover:bg-[#3b3b3b] text-neutral-300 rounded-md w-6 h-6 flex justify-center items-center"
        }
      >
        <IoIosAdd className="w-5 h-5" />
      </button>
    </div>
  );
};

export default NavHeader;
