"use client";
import React from "react";
import AccountHeader from "./account-header";
import AccountTransaction from "./account-transaction";
import moment from "moment";
import AddTransaction from "./add-transaction";
import AccountBalance from "./account-balance";
import { useParams } from "next/navigation";
import { Transaction } from "@/types/types";

interface DebitSideProps {
  transactions: Transaction[];
  balanceCarriedDown: number;
  balance: number;
}

const DebitSide: React.FC<DebitSideProps> = ({
  transactions,
  balanceCarriedDown,
  balance,
}) => {
  const { project, account } = useParams();

  return (
    <div className="w-1/2 flex flex-col justify-between">
      <div className="w-full flex flex-col justify-center items-center">
        <AccountHeader />
        {/* b/d */}
        {/* {initialBalanceIsPositive && (
          <AccountTransaction
            date="Jan 1"
            details="Balance"
            folio="b/d"
            amount={100}
          />
        )} */}
        {/* other */}
        {transactions
          .filter((transaction) => {
            return (
              transaction.project.name.toLowerCase().replace(/ /g, "-") ===
                project &&
              transaction.debit.name.toLowerCase().replace(/ /g, "-") ===
                account
            );
          })
          .map((transaction, key) => {
            return (
              <AccountTransaction
                key={key}
                date={moment(transaction.date).format("MMM D")}
                details={transaction.credit.name}
                folio={transaction.folio}
                amount={transaction.amount}
              />
            );
          })}
        {/* c/d */}
        {balanceCarriedDown < 0 && (
          <AccountTransaction
            date="Jan 31"
            details="Balance"
            folio="c/d"
            amount={Math.abs(balanceCarriedDown)}
          />
        )}
        <AddTransaction />
      </div>
      <AccountBalance balance={balance} />
    </div>
  );
};

export default DebitSide;
