import React from "react";
import HeaderTitle from "./header-title";

const Header = () => {
  return (
    <div className="h-16 border flex">
      <div className="border w-full flex justify-between items-center px-4">
        <HeaderTitle />
      </div>
      <div className="border p-5 flex justify-center items-center">
        <button className="border px-4 py-2 rounded-md hover:bg-secondary">
          Today
        </button>
      </div>
    </div>
  );
};

export default Header;
