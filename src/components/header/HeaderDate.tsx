import React from "react";
import { Moment } from "moment";
import { GrNext, GrPrevious } from "react-icons/gr";

interface HeaderDateProps {
  selectedDate: Moment;
  setSelectedDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
}

const HeaderDate: React.FC<HeaderDateProps> = ({
  selectedDate,
  setSelectedDate,
}) => {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-lg overflow-hidden w-44">
      <button
        onClick={() =>
          setSelectedDate((prev) => prev.clone().subtract(1, "months"))
        }
        className="flex justify-center items-center h-full px-3 hover:bg-[#f4f4f4] text-sm"
      >
        <GrPrevious />
      </button>
      <p className="text-sm truncate">{selectedDate.format("MMM yyyy")}</p>
      <button
        onClick={() => setSelectedDate((prev) => prev.clone().add(1, "months"))}
        className="flex justify-center items-center h-full px-3 hover:bg-[#f4f4f4] text-sm"
      >
        <GrNext />
      </button>
    </div>
  );
};

export default HeaderDate;
