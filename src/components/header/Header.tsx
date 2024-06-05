"use client";
import React from "react";

import { useParams, usePathname } from "next/navigation";
import HeaderDate from "./HeaderDate";
import HeaderMonthOrYear from "./HeaderMonthOrYear";
import HeaderToday from "./HeaderToday";

interface HeaderProps {
  today: moment.Moment;
  selectedDate: moment.Moment;
  setSelectedDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
  showMonth: boolean;
  setShowMonth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  today,
  selectedDate,
  setSelectedDate,
  showMonth,
  setShowMonth,
}) => {
  const { project, account } = useParams();
  const pathname = usePathname();

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
