"use client";
import React, { useState } from "react";
import moment from "moment";

import { useParams, usePathname } from "next/navigation";
import HeaderDate from "./HeaderDate";
import HeaderMonthOrYear from "./HeaderMonthOrYear";
import HeaderToday from "./HeaderToday";

const Header = () => {
  const { project, account } = useParams();
  const pathname = usePathname();

  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today);
  const [showMonth, setShowMonth] = React.useState<boolean>(true);

  return (
    <>
      <h1 className="font-semibold text-3xl">
        {account
          ? account
              .toString()
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())
          : pathname === `/${project}`
          ? "Dashboard"
          : pathname.includes("income-statement")
          ? "Income Statement"
          : "Balance Sheet"}
      </h1>
      <div className="flex gap-4">
        <HeaderDate
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          showMonth={showMonth}
        />
        <HeaderMonthOrYear showMonth={showMonth} setShowMonth={setShowMonth} />
        {/* Today Button */}
        <HeaderToday
          today={today}
          setSelectedDate={setSelectedDate}
          setShowMonth={setShowMonth}
        />
      </div>
    </>
  );
};

export default Header;
