import AccountTable from "@/components/account/account-table";
import { getTransactions } from "@/lib/get-transactions";
import { Transaction } from "@/types/types";
import React from "react";

const Account = async () => {
  const transactions: Transaction[] = await getTransactions();

  return (
    <div className="p-10">
      <AccountTable transactions={transactions} />
    </div>
  );
};

export default Account;
