import React from "react";

interface AccountBalanceProps {
  date: string;
  folio: string;
  amount: number;
}

const AccountBalance: React.FC<AccountBalanceProps> = ({
  date,
  folio,
  amount,
}) => {
  return (
    <div
      className={`${
        folio === "b/d" ? "border-b" : "border-t"
      } flex py-2 px-4 text-xs text-neutral-500 hover:bg-[#f4f4f4]`}
    >
      <div className="w-[20%]">{date}</div>
      <div className="w-[50%]">Balance</div>
      <div className="w-[10%]">{folio}</div>
      <div className="w-[20%]">{amount}</div>
    </div>
  );
};

export default AccountBalance;
