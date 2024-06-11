import React from "react";

const AccountHeader = () => {
  return (
    <div className="font-semibold text-neutral-500 text-sm w-full flex p-4 gap-4 hover:bg-[#f9f9fa] border-b">
      <div className="w-[15%]">Date</div>
      <div className="w-[50%]">Details</div>
      <div className="w-[5%] text-center">Folio</div>
      <div className="w-[25%] text-end">Amount</div>
      <div className="w-[5%] flex justify-end"></div>
    </div>
  );
};

export default AccountHeader;
