import AccountBalance from "@/components/account/account-balance";
import AccountHeader from "@/components/account/account-header";
import AccountTransaction from "@/components/account/account-transaction";
import AddTransaction from "@/components/account/add-transaction";
import { fetchTransactions } from "@/lib/fetch-transactions";
import React from "react";

const Account = async () => {
  const transaction = await fetchTransactions();
  const initialBalanceIsPositive = true;
  const finalBalanceIsPositive = true;
  console.log(transaction);

  return (
    <div className="p-10">
      <div className="border rounded-md flex overflow-hidden">
        {/* left */}
        <div className="w-1/2 flex flex-col justify-between">
          <div className="w-full flex flex-col justify-center items-center">
            <AccountHeader />
            {/* b/d */}
            {initialBalanceIsPositive && (
              <AccountTransaction
                date="Jan 1"
                details="Balance"
                folio="b/d"
                amount={100}
              />
            )}
            {/* other */}
            <AccountTransaction
              date="Jan 1"
              details="Sales"
              folio=""
              amount={100}
            />
            <AccountTransaction
              date="Jan 1"
              details="Sales"
              folio=""
              amount={100}
            />
            <AccountTransaction
              date="Jan 1"
              details="Sales"
              folio=""
              amount={100}
            />
            {/* c/d */}
            {!finalBalanceIsPositive && (
              <AccountTransaction
                date="Jan 31"
                details="Balance"
                folio="c/d"
                amount={100}
              />
            )}
            <AddTransaction />
          </div>
          <AccountBalance balance={400} />
        </div>
        {/* right */}
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
            <AccountTransaction
              date="Jan 1"
              details="Purchases"
              folio=""
              amount={100}
            />
            <AccountTransaction
              date="Jan 1"
              details="Purchases"
              folio=""
              amount={100}
            />
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
      </div>
    </div>
  );
};

export default Account;
