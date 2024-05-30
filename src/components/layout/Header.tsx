"use client";
import React, { useEffect, useState } from "react";
import HeaderDate from "../header/HeaderDate";
import moment from "moment";

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today);

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
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <button
          onClick={() => setSelectedDate(today)}
          className="bg-[#eaeaea] rounded-lg h-10 w-20 text-xs"
        >
          Today
        </button>
        <button className="bg-black text-white rounded-lg h-10 w-20 text-xs">
          Export
        </button>
      </div>
    </div>
  );
};

export default Header;
