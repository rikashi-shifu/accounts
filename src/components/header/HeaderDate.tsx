"use client";
import React, { useState } from "react";
import moment, { Moment } from "moment";
import { GrNext, GrPrevious } from "react-icons/gr";

interface HeaderDateProps {
  showMonth: boolean;
  selectedDate: Moment;
  setSelectedDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
}

const HeaderDate: React.FC<HeaderDateProps> = ({
  showMonth,
  selectedDate,
  setSelectedDate,
}) => {
  const [active, setActive] = useState("");

  return (
    <div className="flex items-center justify-between gap-2 border border-neutral-300 rounded-lg overflow-hidden w-40">
      <button
        onClick={() =>
          setSelectedDate((prev) =>
            prev.clone().subtract(1, showMonth ? "months" : "years")
          )
        }
        onFocus={() => setActive("prev")}
        onBlur={() => setActive("")}
        className={`${
          active === "prev" && "bg-[#f4f4f4]"
        } flex justify-center items-center h-full px-3 hover:bg-[#eaeaea] text-sm`}
      >
        <GrPrevious />
      </button>
      <p className="text-sm truncate">
        {showMonth ? selectedDate.format("MMM yyyy") : selectedDate.year()}
      </p>
      <button
        onClick={() =>
          setSelectedDate((prev) =>
            prev.clone().add(1, showMonth ? "months" : "years")
          )
        }
        onFocus={() => setActive("next")}
        onBlur={() => setActive("")}
        className={`${
          active === "next" && "bg-[#f4f4f4]"
        } flex justify-center items-center h-full px-3 hover:bg-[#eaeaea] text-sm`}
      >
        <GrNext />
      </button>
    </div>
  );
};

export default HeaderDate;
