import React from "react";

const AccountHeader = () => {
  return (
    <div className="flex border-b py-3 px-4 bg-[#eeeeee] text-sm font-semibold">
      <div className="w-[20%]">Date</div>
      <div className="w-[50%]">Details</div>
      <div className="w-[10%]">Folio</div>
      <div className="w-[20%]">Amount</div>
    </div>
  );
};

export default AccountHeader;
