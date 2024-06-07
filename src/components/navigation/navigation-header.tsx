import React from "react";
import { GrMoney } from "react-icons/gr";

const NavigationHeader = () => {
  return (
    <div className="h-16 px-6 py-3 flex">
      <div className="flex items-end gap-4">
        <GrMoney className="text-[#c8a1d6] w-7 h-7" />
        <h1 className="text-xl font-semibold text-white">Accounts</h1>
      </div>
    </div>
  );
};

export default NavigationHeader;
