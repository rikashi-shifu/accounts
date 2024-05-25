import React, { ReactNode, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";

interface PageCategoryBlockProps {
  children?: ReactNode;
  name: string;
}

const PageCategoryBlock: React.FC<PageCategoryBlockProps> = ({
  children,
  name,
}) => {
  const [hideChildren, setHideChildren] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#151515] rounded-md flex flex-col gap-4 w-11/12 p-4">
        <div className="flex justify-between">
          <h1 className="text-[#c8a1d6] font-semibold">{name}</h1>
          <button
            onClick={() => {
              if (hideChildren) {
                setHideChildren(false);
              } else {
                setHideChildren(true);
              }
            }}
            className="text-white hover:bg-[#242424] w-6 h-6 rounded-md flex justify-center items-center"
          >
            {hideChildren ? <IoIosAdd /> : <FiMinus />}
          </button>
        </div>
        <div className={`${hideChildren && "hidden"}`}>{children}</div>
      </div>
    </div>
  );
};

export default PageCategoryBlock;
