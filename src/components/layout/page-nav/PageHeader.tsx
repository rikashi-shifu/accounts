import React from "react";
import { IoIosAdd, IoIosArrowBack } from "react-icons/io";

interface PageHeaderProps {
  name: string | undefined;
  showCloseNavBtn: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ name, showCloseNavBtn }) => {
  return (
    <div className="py-6 flex justify-between items-center px-4">
      <h1 className="text-white text-lg font-semibold">{name}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => null}
          className={`${
            showCloseNavBtn ? "opacity-100" : "opacity-0"
          } text-white bg-[#1f1f1f] duration-150 hover:bg-[#2c2c2c] text-xs w-6 h-6 rounded-md flex justify-center items-center`}
        >
          <IoIosArrowBack />
        </button>
        <button className="text-white bg-[#1f1f1f] hover:bg-[#2c2c2c] w-6 h-6 rounded-md flex justify-center items-center">
          <IoIosAdd />
        </button>
      </div>
    </div>
  );
};

export default PageHeader;