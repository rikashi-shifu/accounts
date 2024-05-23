"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";

interface LedgerBlockProps {
  name: string;
  type: string;
}

const LedgerBlock: React.FC<LedgerBlockProps> = ({ name, type }) => {
  return (
    <Link
      href={`/account/${name.toLowerCase().trim().replace(/ /g, "-")}`}
      className="rounded-lg hover:shadow bg-white p-6 h-[100px] flex flex-col"
    >
      <h1 className="truncate">{name}</h1>
      <p className="text-neutral-500 text-[10px]">{type}</p>
    </Link>
  );
};

interface Account {
  name: string;
  type: string;
}

const Ledger = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    (async () => {
      await fetch("/data/account.json")
        .then(async (res) =>
          res
            .json()
            .then(async (data) => {
              setAccounts(data);
            })
            .catch((error) => console.error(error))
        )
        .catch((error) => console.error(error));
    })();
  }, []);

  return (
    <div className="h-full flex flex-col gap-6">
      <h1 className="font-semibold text-4xl">General Ledger</h1>
      <div className="grid grid-cols-4 gap-4">
        {accounts.map((account, i) => {
          return (
            <LedgerBlock key={i} name={account.name} type={account.type} />
          );
        })}
        <button className="rounded-lg h-fit bg-white flex justify-center items-center p-2 opacity-50 hover:opacity-100">
          <IoIosAdd />
        </button>
      </div>
    </div>
  );
};

export default Ledger;
