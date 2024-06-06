import React from "react";
import SelectProject from "./select-project";
import NavigationButton from "./navigation-button";

const accounts = [
  { path: "/cash", label: "Cash" },
  { path: "/bank", label: "Bank" },
  { path: "/allowance", label: "Allowance" },
  { path: "/transport", label: "Transport" },
];

const Navigation = () => {
  return (
    <div className="w-96 border">
      {/* nav-header */}
      <div className="h-16 border"></div>
      {/* nav-body */}
      <div className="border">
        <div className="flex justify-center items-center border py-3">
          <SelectProject />
        </div>
        <div className="border p-3 flex flex-col gap-3">
          <NavigationButton path="" label="Dashboard" />
          <NavigationButton path="/income-statement" label="Income Statement" />
          <NavigationButton path="/balance-sheet" label="Balance Sheet" />
        </div>
        <div className="border p-3 flex flex-col gap-3">
          {accounts.map((account, key) => {
            return (
              <NavigationButton
                key={key}
                path={account.path}
                label={account.label}
                isAccount
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
