"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Account = () => {
  const { account } = useParams();

  useEffect(() => {
    void (async () => {
      await fetch("/data/transaction.json");
    });
  });

  return (
    <div className="border w-full h-full flex flex-col gap-5 p-6">
      <h1 className="text-3xl font-bold">
        {account
          .toString()
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())}
      </h1>
      <div className="border"></div>
    </div>
  );
};

export default Account;
