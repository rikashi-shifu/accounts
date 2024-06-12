"use client";
import moment from "moment";
import React from "react";
import AccountBalance from "./account-balance";
import AccountHeader from "./account-header";
import AccountTransaction from "./account-transaction";
import AddTransaction from "./add-transaction";
import { useParams } from "next/navigation";
import { Transaction } from "@/types/types";

interface CreditSideProps {
  transactions: Transaction[];
  balanceCarriedDown: number;
  balance: number;
}

const CreditSide: React.FC<CreditSideProps> = ({
  transactions,
  balanceCarriedDown,
  balance,
}) => {
  const { project, account } = useParams();

  return (
    <div className="w-1/2 flex flex-col justify-between border-s">
      <div className="w-full flex flex-col justify-center items-center">
        <AccountHeader />
        {/* b/d */}
        {/* {!initialBalanceIsPositive && (
          <AccountTransaction
            date="Jan 1"
            details="Balance"
            folio="b/d"
            amount={100}
          />
        )} */}
        {transactions
          .filter((transaction) => {
            return (
              transaction.project.name.toLowerCase().replace(/ /g, "-") ===
                project &&
              transaction.credit.name.toLowerCase().replace(/ /g, "-") ===
                account
            );
          })
          .map((transaction, key) => {
            return (
              <AccountTransaction
                key={key}
                date={moment(transaction.date).format("MMM D")}
                details={transaction.debit.name}
                folio={transaction.folio}
                amount={transaction.amount}
              />
            );
          })}
        {/* c/d */}
        {balanceCarriedDown > 0 && (
          <AccountTransaction
            date="Jan 31"
            details="Balance"
            folio="c/d"
            amount={balanceCarriedDown}
          />
        )}
        <AddTransaction />
      </div>
      <AccountBalance balance={balance} />
    </div>
  );
};

export default CreditSide;
