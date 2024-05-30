import React from "react";

interface AccountFooterProps {
  total: number;
}

const AccountFooter: React.FC<AccountFooterProps> = ({ total }) => {
  return (
    <div className="flex border-t py-2 px-4 text-sm">
      <div className="w-[20%]"></div>
      <div className="w-[50%]"></div>
      <div className="w-[10%]"></div>
      <div className="w-[20%] font-semibold">{total}</div>
    </div>
  );
};

export default AccountFooter;
