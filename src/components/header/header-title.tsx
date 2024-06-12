"use client";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const HeaderTitle = () => {
  const pathname = usePathname();
  const { project, account } = useParams();

  let formattedTitle = "";
  if (project) {
    if (account) {
      formattedTitle = account
        .toString()
        .split("-")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    } else {
      if (pathname.includes("income-statement")) {
        formattedTitle = "Income Statement";
      } else if (pathname.includes("balance-sheet")) {
        formattedTitle = "Balance Sheet";
      } else {
        formattedTitle = "Dashboard";
      }
    }
  } else {
    formattedTitle = "Project";
  }

  return <h1 className="font-bold text-2xl">{formattedTitle}</h1>;
};

export default HeaderTitle;
