"use client";
import Header from "@/components/layout/Header";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { IoIosAdd, IoIosMore } from "react-icons/io";

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
      <div className="w-[50%]">{details}</div>
      <div className="w-[10%]">{folio}</div>
      <div className="w-[20%]">{amount}</div>
      <button className="absolute right-1 rounded-md hover:bg-[#e9e9e9] px-2 py-1 flex justify-center items-center">
        <IoIosMore />
      </button>
    </div>
  );
};

const AccountAddTransaction = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <button className="flex w-[98%] justify-center items-center my-1 py-1 text-sm text-neutral-500 bg-[#e9e9e9] rounded-md opacity-50 hover:opacity-100">
        <IoIosAdd />
      </button>
    </div>
  );
};

interface AccountFooterProps {
  total: number;
}

const AccountFooter: React.FC<AccountFooterProps> = ({ total }) => {
  return (
    <div className="flex border-t py-2 px-4 text-xs">
      <div className="w-[20%]"></div>
      <div className="w-[50%]"></div>
      <div className="w-[10%]"></div>
      <div className="w-[20%] font-semibold">{total}</div>
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
      } flex py-2 px-4 text-xs text-neutral-500 hover:bg-[#f4f4f4]`}
    >
      <div className="w-[20%]">{date}</div>
      <div className="w-[50%]">Balance</div>
      <div className="w-[10%]">{folio}</div>
      <div className="w-[20%]">{amount}</div>
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
        <div className="w-1/2 flex flex-col justify-between border border-[#dbdbdb] rounded-s-lg overflow-hidden">
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
        <div className="w-1/2 flex flex-col justify-between border border-[#dbdbdb] border-s-0 rounded-e-lg overflow-hidden">
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
