"use client";
import moment from "moment";
import React from "react";
import AccountBalance from "./account-balance";
import AccountHeader from "./account-header";
import AccountTransaction from "./account-transaction";
import AddTransaction from "./add-transaction";
import Transaction from "@/types/transaction";
import { useParams } from "next/navigation";

interface CreditSideProps {
  transactions: Transaction[];
  initialBalanceIsPositive: boolean;
  finalBalanceIsPositive: boolean;
}

const CreditSide: React.FC<CreditSideProps> = ({
  transactions,
  initialBalanceIsPositive,
  finalBalanceIsPositive,
}) => {
  const { account } = useParams();

  return (
    <div className="w-1/2 flex flex-col justify-between border-s">
      <div className="w-full flex flex-col justify-center items-center">
        <AccountHeader />
        {/* b/d */}
        {!initialBalanceIsPositive && (
          <AccountTransaction
            date="Jan 1"
            details="Balance"
            folio="b/d"
            amount={100}
          />
        )}
        {/* other */}
        {transactions
          .filter((transaction) => {
            return (
              transaction.credit.toLowerCase().replace(/ /g, "-") === account
            );
          })
          .map((transaction, key) => {
            return (
              <AccountTransaction
                key={key}
                date={moment(transaction.date).format("MMM D")}
                details={transaction.debit}
                folio={transaction.folio}
                amount={transaction.amount}
              />
            );
          })}
        {/* c/d */}
        {finalBalanceIsPositive && (
          <AccountTransaction
            date="Jan 31"
            details="Balance"
            folio="c/d"
            amount={200}
          />
        )}
        <AddTransaction />
      </div>
      <AccountBalance balance={400} />
    </div>
  );
};

export default CreditSide;
