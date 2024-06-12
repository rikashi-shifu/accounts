import React from "react";

const AccountBalance = ({ balance }: { balance: number }) => {
  return (
    <div className="w-full flex p-4 gap-4 hover:bg-[#f9f9fa] text-neutral-500 text-sm font-semibold border-t">
      <div className="w-[15%]"></div>
      <div className="w-[50%]"></div>
      <div className="w-[5%]"></div>
      <div className="w-[25%] text-end">{balance}</div>
      <div className="w-[5%]"></div>
    </div>
  );
};

export default AccountBalance;
