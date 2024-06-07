import React from "react";
import SelectProject from "./select-project";
import NavigationButton from "./navigation-button";
import NavigationAccordian from "./navigation-accordian";
import NavigationHeader from "./navigation-header";

// const accounts = [
//   { path: "/cash", label: "Cash" },
//   { path: "/bank", label: "Bank" },
//   { path: "/allowance", label: "Allowance" },
//   { path: "/transport", label: "Transport" },
// ];

const Navigation = () => {
  return (
    <div className="w-96 bg-[#09090b]">
      {/* nav-header */}
      <NavigationHeader />
      {/* nav-body */}
      <div className="">
        <div className="flex justify-center items-center py-3 px-1">
          <SelectProject />
        </div>
        {/* scrollable area */}
        <div className="flex flex-col gap-3 px-4">
          <NavigationButton primary path="" label="Dashboard" />

          <NavigationAccordian primary label="Financial Statements">
            <NavigationButton
              secondary
              path="income-statement"
              label="Income Statement"
            />
            <NavigationButton
              secondary
              path="balance-sheet"
              label="Balance Sheet"
            />
          </NavigationAccordian>

          <NavigationAccordian primary label="Ledgers">
            <NavigationAccordian secondary label="General">
              <NavigationButton tertiary path="cash" label="Cash" />
              <NavigationButton tertiary path="bank" label="Bank" />
            </NavigationAccordian>

            <NavigationAccordian secondary label="Purchases">
              <NavigationButton
                tertiary
                path="credit-supplier"
                label="Credit Supplier"
              />
            </NavigationAccordian>

            <NavigationAccordian secondary label="Sales">
              <NavigationButton
                tertiary
                path="credit-customer"
                label="Credit Customer"
              />
            </NavigationAccordian>
          </NavigationAccordian>
        </div>
      </div>

      {/* nav-footer */}
      <div></div>
    </div>
  );
};

export default Navigation;
