import React from "react";
import { IoIosMore } from "react-icons/io";

interface AccountTransactionProps {
  date: string;
  details: string;
  folio: string;
  amount: number;
}

const AccountTransaction: React.FC<AccountTransactionProps> = ({
  date,
  details,
  folio,
  amount,
}) => {
  return (
    <div className="text-neutral-500 text-sm w-full flex p-4 gap-4 hover:bg-[#f9f9fa] border-b">
      <div className="w-[15%]">{date}</div>
      <div className="w-[50%]">{details}</div>
      <div className="w-[10%]">{folio}</div>
      <div className="w-[20%]">{amount}</div>
      <div className="w-[5%] flex justify-end">
        <button className="px-2 py-1 rounded hover:bg-[#ececed]">
          <IoIosMore />
        </button>
      </div>
    </div>
  );
};

export default AccountTransaction;
