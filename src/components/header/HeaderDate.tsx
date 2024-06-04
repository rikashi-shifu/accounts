import React from "react";
import { Button } from "@mui/material";
import { GrNext, GrPrevious } from "react-icons/gr";

interface HeaderDateProps {
  selectedDate: moment.Moment;
  setSelectedDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
  showMonth: boolean;
}

const HeaderDate: React.FC<HeaderDateProps> = ({
  selectedDate,
  setSelectedDate,
  showMonth,
}) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Button
        color="inherit"
        onClick={() =>
          setSelectedDate((prev) =>
            prev.clone().subtract(1, showMonth ? "months" : "years")
          )
        }
        className="rounded-full min-w-10 min-h-10 max-w-10 max-h-10"
      >
        <GrPrevious className="text-neutral-600" />
      </Button>
      <p className="text-sm text-neutral-600 truncate">
        {showMonth ? selectedDate.format("MMM yyyy") : selectedDate.year()}
      </p>
      <Button
        color="inherit"
        onClick={() =>
          setSelectedDate((prev) =>
            prev.clone().add(1, showMonth ? "months" : "years")
          )
        }
        className="rounded-full min-w-10 min-h-10 max-w-10 max-h-10"
      >
        <GrNext className="text-neutral-600" />
      </Button>
    </div>
  );
};

export default HeaderDate;
