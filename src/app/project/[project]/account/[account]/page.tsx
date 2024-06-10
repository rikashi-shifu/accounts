import AccountBalance from "@/components/account/account-balance";
import AccountHeader from "@/components/account/account-header";
import AccountTransaction from "@/components/account/account-transaction";
import AddTransaction from "@/components/account/add-transaction";
import React from "react";

const Account = async () => {
  // const data = await getData();
  const initialBalanceIsPositive = false;
  const finalBalanceIsPositive = true;

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
              details="Allowance"
              folio=""
              amount={100}
            />
            <AccountTransaction
              date="Jan 1"
              details="Allowance"
              folio=""
              amount={100}
            />
            <AccountTransaction
              date="Jan 1"
              details="Allowance"
              folio=""
              amount={100}
            />
            {/* c/d */}
            {!finalBalanceIsPositive && (
              <AccountTransaction
                date="Jan 1"
                details="Balance"
                folio="c/d"
                amount={100}
              />
            )}
            <AddTransaction />
          </div>
          <AccountBalance balance={100} />
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
              details="Allowance"
              folio=""
              amount={100}
            />
            <AccountTransaction
              date="Jan 1"
              details="Allowance"
              folio=""
              amount={100}
            />
            {/* c/d */}
            {finalBalanceIsPositive && (
              <AccountTransaction
                date="Jan 1"
                details="Balance"
                folio="c/d"
                amount={100}
              />
            )}
            <AddTransaction />
          </div>
          <AccountBalance balance={100} />
        </div>
      </div>
    </div>
  );
};

export default Account;
