"use client";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const HeaderTitle = () => {
  const pathname = usePathname();
  const { account } = useParams();

  let formattedTitle = "";
  if (account) {
    formattedTitle = account
      .toString()
      .replace(/^./, (match) => match.toUpperCase());
  } else {
    if (pathname.includes("balance-sheet")) {
      formattedTitle = "Balance Sheet";
    } else if (pathname.includes("income-statement")) {
      formattedTitle = "Income Statement";
    } else {
      formattedTitle = "Dashboard";
    }
  }
  return <h1 className="font-bold text-2xl">{formattedTitle}</h1>;
};

export default HeaderTitle;
