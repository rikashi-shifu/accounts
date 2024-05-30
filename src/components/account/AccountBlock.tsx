import React from "react";
import { IoIosMore } from "react-icons/io";

interface AccountBlockProps {
  date: string;
  details: string;
  folio?: string;
  amount: number;
}

const AccountBlock: React.FC<AccountBlockProps> = ({
  date,
  details,
  folio,
  amount,
}) => {
  return (
    <div className="relative flex items-center border-b py-2 px-4 text-xs text-neutral-500 hover:bg-[#f4f4f4]">
      <div className="w-[20%]">{date}</div>
      {/* TODO: Ctrl click navigate to page */}
      <div className="w-[50%]">{details}</div>
      <div className="w-[10%]">{folio}</div>
      <div className="w-[20%]">{amount}</div>
      <button className="absolute right-1 rounded-md hover:bg-[#e9e9e9] px-2 py-1 flex justify-center items-center">
        <IoIosMore />
      </button>
    </div>
  );
};

export default AccountBlock;
