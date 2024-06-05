"use client";
import AccountAddTransaction from "@/components/account/AccountAddTransaction";
import AccountBalance from "@/components/account/AccountBalance";
import AccountBlock from "@/components/account/AccountBlock";
import AccountFooter from "@/components/account/AccountFooter";
import AccountHeader from "@/components/account/AccountHeader";
import { useDateContext } from "@/components/layout/Layout";
import moment from "moment";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

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
  const { project, account } = useParams();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState(0);
  const [total, setTotal] = useState(0);
  const { selectedDate, showMonth } = useDateContext();

  const filterTransactions = useCallback(
    (transactions: Transaction[], type: "debit" | "credit") => {
      return transactions.filter((transaction) => {
        const filteredProject =
          transaction.project.toLowerCase().replace(/ /g, "-") === project;
        const filteredAccount =
          transaction[type].toLowerCase().replace(/ /g, "-") === account;
        const filteredYear =
          moment(transaction.date).year() === selectedDate.year();
        const filteredMonth =
          !showMonth ||
          moment(transaction.date).month() === selectedDate.month();

        return (
          filteredProject && filteredAccount && filteredYear && filteredMonth
        );
      });
    },
    [project, account, selectedDate, showMonth]
  );

  useEffect(() => {
    let debitTotal = 0;
    filterTransactions(transactions, "debit").forEach((transaction) => {
      debitTotal += transaction.amount;
    });

    let creditTotal = 0;
    filterTransactions(transactions, "credit").forEach((transaction) => {
      creditTotal += transaction.amount;
    });

    setBalance(debitTotal - creditTotal);
    setTotal(Math.max(debitTotal, creditTotal));
  }, [transactions, filterTransactions]);

  return (
    <div className="flex rounded-lg">
      {/* left */}
      <div className="w-1/2 flex flex-col justify-between border border-[#dbdbdb] rounded-s-lg overflow-hidden">
        <div>
          <AccountHeader />
          {/* TODO: Balance b/d */}
          {/* <AccountBalance
              date="May 1"
              show={show}
              folio="b/d"
              amount={balance}
            /> */}
          {filterTransactions(transactions, "debit")
            .sort((a, b) => {
              return Number(new Date(a.date)) - Number(new Date(b.date));
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
              date={
                showMonth
                  ? selectedDate.endOf("month").format("MMM D")
                  : "Dec 31"
              }
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
          {/* TODO: Balance b/d */}
          {/* <AccountBalance
              date="May 1"
              show={!show}
              folio="b/d"
              amount={100}
            /> */}
          {filterTransactions(transactions, "credit")
            .sort((a, b) => {
              return Number(new Date(a.date)) - Number(new Date(b.date));
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
              date={
                showMonth
                  ? selectedDate.endOf("month").format("MMM D")
                  : "Dec 31"
              }
              folio="c/d"
              amount={Math.abs(balance)}
            />
          )}
          {/*  */}
          <AccountFooter total={total} />
        </div>
      </div>
    </div>
  );
};

export default Account;
