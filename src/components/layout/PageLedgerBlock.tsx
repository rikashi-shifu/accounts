import React, { ReactNode, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";

interface PageLedgerBlockProps {
  children?: ReactNode;
  name: string;
}

const PageLedgerBlock: React.FC<PageLedgerBlockProps> = ({
  children,
  name,
}) => {
  const [hideChildren, setHideChildren] = useState(false);

  return (
    <div className="flex flex-col p-2 pb-3 gap-2 rounded-md bg-[#1f1f1f] ps-4">
      <div className="flex justify-between">
        <div className="text-neutral-300">{name}</div>
        <button
          onClick={() => {
            if (hideChildren) {
              setHideChildren(false);
            } else {
              setHideChildren(true);
            }
          }}
          className="text-white hover:bg-[#2c2c2c] w-6 h-6 rounded-md flex justify-center items-center"
        >
          {hideChildren ? <IoIosAdd /> : <FiMinus />}
        </button>
      </div>
      <div className={`${hideChildren && "hidden"} flex flex-col gap-2`}>
        <div className="flex flex-col gap-2">{children}</div>
        <div className="rounded-md text-neutral-300 items-center hover:border-neutral-500 border border-transparent flex justify-center bg-[#2c2c2c] p-1 opacity-50 hover:opacity-100">
          <IoIosAdd />
        </div>
      </div>
    </div>
  );
};

export default PageLedgerBlock;
