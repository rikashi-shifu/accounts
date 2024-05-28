"use client";
import Header from "@/components/layout/Header";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { IoIosAdd } from "react-icons/io";

const AccountHeader = () => {
  return (
    <div className="flex overflow-hidden border-b py-2 px-4 text-sm font-semibold">
      <div className="w-[20%]">Date</div>
      <div className="w-[40%]">Details</div>
      <div className="w-[10%]">Folio</div>
      <div className="w-[30%]">Amount</div>
    </div>
  );
};

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
    <div className="flex overflow-hidden border-b py-2 px-4 text-xs text-neutral-500 hover:bg-[#f4f4f4]">
      <div className="w-[20%]">{date}</div>
      <div className="w-[40%]">{details}</div>
      <div className="w-[10%]">{folio}</div>
      <div className="w-[30%]">{amount}</div>
    </div>
  );
};

const AccountAddTransaction = () => {
  return (
    <button className="flex w-full justify-center items-center my-1 py-1 text-sm text-neutral-400 hover:bg-[#f4f4f4] border-y">
      <IoIosAdd />
    </button>
  );
};

interface AccountFooterProps {
  total: number;
}

const AccountFooter: React.FC<AccountFooterProps> = ({ total }) => {
  return (
    <div className="flex overflow-hidden border-t py-2 px-4 text-xs">
      <div className="w-[20%]"></div>
      <div className="w-[40%]"></div>
      <div className="w-[10%]"></div>
      <div className="w-[30%] font-semibold">{180}</div>
    </div>
  );
};

interface AccountBalanceProps {
  date: string;
  show: boolean;
  folio: string;
  amount: number;
}

const AccountBalance: React.FC<AccountBalanceProps> = ({
  date,
  show,
  folio,
  amount,
}) => {
  return (
    <div
      className={`${!show && "hidden"} ${
        folio === "b/d" ? "border-b" : "border-t"
      } flex overflow-hidden py-2 px-4 text-xs text-neutral-500 hover:bg-[#f4f4f4]`}
    >
      <div className="w-[20%]">{date}</div>
      <div className="w-[40%]">Balance</div>
      <div className="w-[10%]">{folio}</div>
      <div className="w-[30%]">{amount}</div>
    </div>
  );
};

const show = true;
const total = 180;

const Account = () => {
  const { account } = useParams();

  useEffect(() => {
    void (async () => {
      await fetch("/data/transaction.json");
    });
  });

  return (
    <div className="w-full h-full flex flex-col gap-5 p-6">
      <Header name={account.toString()} />
      <div className="flex rounded-lg">
        {/* left */}
        <div className="w-1/2 flex flex-col justify-between border-2 rounded-s-lg">
          <div>
            <AccountHeader />
            <AccountBalance date="May 1" show={show} folio="b/d" amount={100} />
            <AccountBlock date="May 28" details="Allowance" amount={80} />
            <AccountAddTransaction />
          </div>
          <div>
            <AccountBalance
              date="May 31"
              show={!show}
              folio="c/d"
              amount={90}
            />
            <AccountFooter total={total} />
          </div>
        </div>
        {/* right */}
        <div className="w-1/2 flex flex-col justify-between border-2 border-s-0 rounded-e-lg">
          <div>
            <AccountHeader />
            <AccountBalance
              date="May 1"
              show={!show}
              folio="b/d"
              amount={100}
            />
            <AccountBlock date="May 28" details="Food" amount={30} />
            <AccountBlock date="May 28" details="Transport" amount={50} />
            <AccountBlock date="May 28" details="Tithe" amount={10} />
            <AccountAddTransaction />
          </div>
          <div>
            <AccountBalance date="May 31" show={show} folio="c/d" amount={90} />
            <AccountFooter total={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
