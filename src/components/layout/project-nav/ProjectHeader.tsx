import React from "react";
import { GrMoney } from "react-icons/gr";

const ProjectHeader = () => {
  return (
    <div className="flex flex-col">
      <div className="py-4 w-full flex justify-center items-center">
        <button
          onClick={() => {}}
          className="text-[#c8a1d6] text-3xl rounded-full w-14 h-14 flex justify-center items-center"
        >
          <GrMoney />
        </button>
      </div>
      {/* <div className="border w-14 h-14 text-white text-2xl p-1 flex justify-center items-center border-neutral-500 rounded-full">
        <RiHomeLine />
      </div> */}
      {/* <div className="rounded-2xl bg-[#c8a1d6] w-14 h-14 flex justify-center font-semibold text-3xl items-center">
        8
      </div> */}
    </div>
  );
};

export default ProjectHeader;
