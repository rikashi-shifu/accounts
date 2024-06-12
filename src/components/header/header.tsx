import React from "react";
import HeaderTitle from "./header-title";
import MonthPicker from "./month-picker";

const Header = () => {
  return (
    <div className="h-20 border flex">
      <div className="w-full flex justify-between items-center px-4">
        <HeaderTitle />
      </div>
      <div className="p-5 flex justify-center items-center">
        <MonthPicker />
      </div>
    </div>
  );
};

export default Header;
