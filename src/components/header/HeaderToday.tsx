import React from "react";

import { Button } from "@mui/material";
import moment from "moment";

interface HeaderTodayProps {
  today: moment.Moment;
  setSelectedDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
  setShowMonth: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderToday: React.FC<HeaderTodayProps> = ({
  today,
  setSelectedDate,
  setShowMonth,
}) => {
  return (
    <Button
      variant="outlined"
      color="inherit"
      onClick={() => {
        setShowMonth(true);
        setSelectedDate(today);
      }}
      style={{ textTransform: "none" }}
      className="text-xs w-20 rounded-lg text-neutral-600 border-neutral-300"
    >
      Today
    </Button>
  );
};

export default HeaderToday;
