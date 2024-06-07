import React from "react";
import NavHeader from "./nav-header";
import NavBody from "./nav-body/nav-body";
import NavFooter from "./nav-footer";

const Navigation = () => {
  return (
    <div className="w-96 bg-[#09090b] relative">
      <NavHeader />
      <NavBody />
      <NavFooter />
    </div>
  );
};

export default Navigation;
