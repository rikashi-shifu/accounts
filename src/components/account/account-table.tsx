"use client";
import React from "react";
import DebitSide from "./debit-side";
import CreditSide from "./credit-side";
import { Transaction } from "@/types/types";
import { useParams } from "next/navigation";

interface AccountTableProps {
  transactions: Transaction[];
}

const AccountTable: React.FC<AccountTableProps> = ({ transactions }) => {
  const { project, account } = useParams();

  const debitBalance = transactions
    .filter((transaction) => {
      return (
        transaction.project.name.toLowerCase().replace(/ /g, "-") === project &&
        transaction.debit.name.toLowerCase().replace(/ /g, "-") === account
      );
    })
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const creditBalance = transactions
    .filter((transaction) => {
      return (
        transaction.project.name.toLowerCase().replace(/ /g, "-") === project &&
        transaction.credit.name.toLowerCase().replace(/ /g, "-") === account
      );
    })
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const balanceCarriedDown = debitBalance - creditBalance;

  const balance = Math.max(debitBalance, creditBalance);

  //   if (debitBalance < creditBalance) {
  //     balance = creditBalance;
  //   } else if (debitBalance > creditBalance) {
  //     balance = debitBalance;
  //   } else {
  //     null;
  //   }

  return (
    <div className="border rounded-md flex overflow-hidden">
      <DebitSide
        transactions={transactions}
        balanceCarriedDown={balanceCarriedDown}
        balance={balance}
      />
      <CreditSide
        transactions={transactions}
        balanceCarriedDown={balanceCarriedDown}
        balance={balance}
      />
    </div>
  );
};

export default AccountTable;
