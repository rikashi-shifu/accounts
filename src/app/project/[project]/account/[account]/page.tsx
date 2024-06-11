import AccountBalance from "@/components/account/account-balance";
import AccountHeader from "@/components/account/account-header";
import AccountTransaction from "@/components/account/account-transaction";
import AddTransaction from "@/components/account/add-transaction";
import CreditSide from "@/components/account/credit-side";
import DebitSide from "@/components/account/debit-side";
import { getTransactions } from "@/lib/get-transactions";
import Transaction from "@/types/transaction";
import moment from "moment";
import React from "react";

const Account = async () => {
  const transactions: Transaction[] = await getTransactions();
  if (transactions) {
    console.log(transactions);
  }

  const initialBalanceIsPositive = true;
  const finalBalanceIsPositive = true;

  return (
    <div className="p-10">
      <div className="border rounded-md flex overflow-hidden">
        <DebitSide
          transactions={transactions}
          initialBalanceIsPositive={initialBalanceIsPositive}
          finalBalanceIsPositive={finalBalanceIsPositive}
        />
        <CreditSide
          transactions={transactions}
          initialBalanceIsPositive={initialBalanceIsPositive}
          finalBalanceIsPositive={finalBalanceIsPositive}
        />
      </div>
    </div>
  );
};

export default Account;
