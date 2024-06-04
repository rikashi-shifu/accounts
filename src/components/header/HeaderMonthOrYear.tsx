import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface HeaderMonthOrYearProps {
  showMonth: boolean;
  setShowMonth: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMonthOrYear: React.FC<HeaderMonthOrYearProps> = ({
  showMonth,
  setShowMonth,
}) => {
  return (
    <ToggleButtonGroup
      value={showMonth}
      onChange={(_, isMonth) => {
        if (isMonth !== null) {
          setShowMonth(isMonth);
        }
      }}
      exclusive
      className="rounded-xl"
    >
      <ToggleButton
        value={true}
        style={{ textTransform: "none" }}
        className="text-xs w-20 rounded-lg text-neutral-600"
      >
        Month
      </ToggleButton>
      <ToggleButton
        value={false}
        style={{ textTransform: "none" }}
        className="text-xs w-20 rounded-lg text-neutral-600"
      >
        Year
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default HeaderMonthOrYear;
