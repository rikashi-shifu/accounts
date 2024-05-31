"use client";
import React, { useState } from "react";
import HeaderDate from "./HeaderDate";
import HeaderButton from "./HeaderButton";
import moment from "moment";

interface HeaderProps {
  name: string;
  selectedDate: moment.Moment;
  setSelectedDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
  showMonth: boolean;
  setShowMonth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  name,
  selectedDate,
  setSelectedDate,
  showMonth,
  setShowMonth,
}) => {
  const today = moment();

  return (
    <div className="flex items-center justify-between">
      <h1 className="font-semibold text-2xl">
        {name
          .toString()
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())}
      </h1>
      <div className="flex gap-3">
        <HeaderDate
          showMonth={showMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <HeaderButton
          onClick={() => setShowMonth((prev) => !prev)}
          content={showMonth ? "Month" : "Year"}
        />
        <HeaderButton
          onClick={() => {
            setShowMonth(true);
            setSelectedDate(today);
          }}
          content="Today"
        />
        <HeaderButton
          onClick={() => console.log("hit")}
          content="Export"
          dark={true}
        />
      </div>
    </div>
  );
};

export default Header;
