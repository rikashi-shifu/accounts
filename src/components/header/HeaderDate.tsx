import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const HeaderDate = () => {
  return (
    <div className="flex items-center justify-center gap-2 border rounded-lg overflow-hidden">
      <button className="flex justify-center items-center h-full px-3 hover:bg-[#f4f4f4] text-sm">
        <GrPrevious />
      </button>
      <p className="text-sm">May 2024</p>
      <button className="flex justify-center items-center h-full px-3 hover:bg-[#f4f4f4] text-sm">
        <GrNext />
      </button>
    </div>
  );
};

export default HeaderDate;
