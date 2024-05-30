"use client";
import AccountAddTransaction from "@/components/account/AccountAddTransaction";
import AccountBalance from "@/components/account/AccountBalance";
import AccountBlock from "@/components/account/AccountBlock";
import AccountFooter from "@/components/account/AccountFooter";
import AccountHeader from "@/components/account/AccountHeader";
import Header from "@/components/layout/Header";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const show = true;

interface Transaction {
  id: string;
  date: string;
  debit: string;
  debit_category: string;
  credit: string;
  credit_category: string;
  folio: string;
  amount: number;
  user: string;
  project: string;
  ledger: string;
}

const Account = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState(0);
  const [total, setTotal] = useState(0);
  const { project, account } = useParams();

  useEffect(() => {
    void (async () => {
      await fetch("/data/transaction.json").then(async (response) =>
        response.json().then(async (transactions) => {
          setTransactions(transactions);
        })
      );
    })();
  }, []);

  useEffect(() => {
    let debitTotal = 0;
    transactions
      .filter((transaction) => {
        return (
          transaction.project.toLowerCase().replace(/ /g, "-") === project &&
          transaction.debit.toLowerCase().replace(/ /g, "-") === account
        );
      })
      .forEach((transaction) => {
        debitTotal += transaction.amount;
      });

    let creditTotal = 0;
    transactions
      .filter((transaction) => {
        return (
          transaction.project.toLowerCase().replace(/ /g, "-") === project &&
          transaction.credit.toLowerCase().replace(/ /g, "-") === account
        );
      })
      .forEach((transaction) => {
        creditTotal += transaction.amount;
      });

    setBalance(debitTotal - creditTotal);

    if (debitTotal > creditTotal) {
      setTotal(debitTotal);
    } else {
      setTotal(creditTotal);
    }
  }, [transactions, project, account]);

  return (
    <div className="w-full h-full flex flex-col gap-5 p-6">
      <Header name={account.toString()} />
      <div className="flex rounded-lg">
        {/* left */}
        <div className="w-1/2 flex flex-col justify-between border border-[#dbdbdb] rounded-s-lg overflow-hidden">
          <div>
            <AccountHeader />
            {/* <AccountBalance
              date="May 1"
              show={show}
              folio="b/d"
              amount={balance}
            /> */}
            {transactions
              .filter((transaction) => {
                return (
                  transaction.project.toLowerCase().replace(/ /g, "-") ===
                    project &&
                  transaction.debit.toLowerCase().replace(/ /g, "-") === account
                );
              })
              .map((transaction, key) => {
                return (
                  <AccountBlock
                    key={key}
                    date={transaction.date}
                    details={transaction.credit}
                    amount={transaction.amount}
                  />
                );
              })}
            <AccountAddTransaction />
          </div>
          <div>
            {balance < 0 && (
              <AccountBalance
                date="May 31"
                folio="c/d"
                amount={Math.abs(balance)}
              />
            )}
            <AccountFooter total={total} />
          </div>
        </div>
        {/* right */}
        <div className="w-1/2 flex flex-col justify-between border border-[#dbdbdb] border-s-0 rounded-e-lg overflow-hidden">
          <div>
            <AccountHeader />
            {/* <AccountBalance
              date="May 1"
              show={!show}
              folio="b/d"
              amount={100}
            /> */}
            {transactions
              .filter((transaction) => {
                return (
                  transaction.project.toLowerCase().replace(/ /g, "-") ===
                    project &&
                  transaction.credit.toLowerCase().replace(/ /g, "-") ===
                    account
                );
              })
              .map((transaction, key) => {
                return (
                  <AccountBlock
                    key={key}
                    date={transaction.date}
                    details={transaction.debit}
                    amount={transaction.amount}
                  />
                );
              })}
            <AccountAddTransaction />
          </div>
          <div>
            {balance > 0 && (
              <AccountBalance
                date="May 31"
                folio="c/d"
                amount={Math.abs(balance)}
              />
            )}
            <AccountFooter total={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
