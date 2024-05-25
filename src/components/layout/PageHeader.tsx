import React from "react";
import { IoIosAdd } from "react-icons/io";

interface PageHeaderProps {
  name: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ name }) => {
  return (
    <div className="py-6 flex justify-between items-center px-4">
      <h1 className="text-white text-lg font-semibold">{name}</h1>
      <button className="text-white bg-[#242424] w-6 h-6 rounded-md flex justify-center items-center">
        <IoIosAdd />
      </button>
    </div>
  );
};

export default PageHeader;
