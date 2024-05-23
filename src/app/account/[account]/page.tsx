"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosAdd, IoIosArrowBack } from "react-icons/io";

interface AccountHeaderProps {
  router: AppRouterInstance;
  formattedAccount: string;
}

const AccountHeader: React.FC<AccountHeaderProps> = ({
  router,
  formattedAccount,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 text-4xl items-center">
        <button onClick={() => router.back()}>
          <IoIosArrowBack />
        </button>
        <h1 className="font-semibold">{formattedAccount}</h1>
      </div>
      <div>
        <p className="text-sm text-neutral-500">2023</p>
      </div>
    </div>
  );
};

const TransactionHeader = () => {
  return (
    <div className="flex font-semibold h-[40px] pb-2 gap-8 text-center items-center">
      <div className="flex justify-between w-1/2">
        <div className="flex w-[60%]">
          <p className="w-[30%]">Date</p>
          <p className="w-[70%]">Details</p>
        </div>
        <div className="flex w-[40%]">
          <p className="w-[30%]">Folio</p>
          <p className="w-[70%]">Amount</p>
        </div>
      </div>
      <div className="flex justify-between w-1/2">
        <div className="flex w-[60%]">
          <p className="w-[30%]">Date</p>
          <p className="w-[70%]">Details</p>
        </div>
        <div className="flex w-[40%]">
          <p className="w-[30%]">Folio</p>
          <p className="w-[70%]">Amount</p>
        </div>
      </div>
    </div>
  );
};

interface TransactionBlockProps {
  date: string;
  details: string;
  folio?: string;
  amount: number;
}

const TransactionBlock: React.FC<TransactionBlockProps> = ({
  date,
  details,
  folio,
  amount,
}) => {
  return (
    <div className="flex justify-between items-center rounded-lg text-center text-sm h-[40px] text-neutral-500">
      <div className="flex w-[60%]">
        <p className="w-[30%]">{date}</p>
        <p className="w-[70%]">{details}</p>
      </div>
      <div className="flex w-[40%]">
        <p className="w-[30%]">{folio}</p>
        <p className="w-[70%]">{amount}</p>
      </div>
    </div>
  );
};

interface AccountProps {
  params: {
    account: string;
  };
}

interface Transaction {
  date: string;
  debit: string;
  credit: string;
  folio?: string;
  amount: number;
}

const Account: React.FC<AccountProps> = ({ params }) => {
  const router = useRouter();
  const { account } = params;
  const formattedAccount = account
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    (async () => {
      await fetch("/data/transaction.json", { method: "get" })
        .then(async (res) =>
          res
            .json()
            .then(async (data) => {
              setTransactions(data);
            })
            .catch((error) => console.error(error))
        )
        .catch((error) => console.error(error));
    })();
  }, []);

  return (
    <div className="flex flex-col gap-6 h-full">
      <AccountHeader router={router} formattedAccount={formattedAccount} />
      <div className="bg-white rounded-lg h-full overflow-y-scroll p-4">
        <TransactionHeader />
        <div className="grid grid-cols-2 border-t">
          <div className="border-e flex flex-col gap-4 py-4 pe-4">
            {transactions
              .filter(
                (transaction) =>
                  transaction.debit.toLowerCase().trim().replace(/ /g, "-") ===
                  account.toString()
              )
              .map((transaction, i) => {
                return (
                  <TransactionBlock
                    key={i}
                    date={transaction.date}
                    details={transaction.credit}
                    amount={transaction.amount}
                  />
                );
              })}
            <button
              onClick={() => setShowForm(true)}
              className="rounded-lg h-fit border flex justify-center items-center p-2 opacity-50 hover:opacity-100"
            >
              <IoIosAdd />
            </button>
            <TransactionBlock
              date="May 31"
              details="Balance"
              folio="c/d"
              amount={300}
            />
          </div>
          <div className="flex flex-col gap-4 py-4 ps-4">
            {transactions
              .filter(
                (transaction) =>
                  transaction.credit.toLowerCase().trim().replace(/ /g, "-") ===
                  account.toString()
              )
              .map((transaction, i) => {
                return (
                  <TransactionBlock
                    key={i}
                    date={transaction.date}
                    details={transaction.debit}
                    amount={transaction.amount}
                  />
                );
              })}
            <button className="rounded-lg h-fit border flex justify-center items-center p-2 opacity-50 hover:opacity-100">
              <IoIosAdd />
            </button>
          </div>
        </div>
        <div className="flex items-center border-y gap-8 h-[40px] text-sm font-semibold text-center">
          <div className="w-1/2">
            <div className="w-[28%] float-end">400</div>
          </div>
          <div className="w-1/2">
            <div className="w-[28%] float-end">400</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
