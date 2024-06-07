import React, { useContext } from "react";
import NavButton from "./nav-button";
import NavAccordian from "./nav-accordian";
import { ScrollArea } from "../../../ui/scroll-area";
import { ProjectContext } from "../nav-body";

const NavScrollable = () => {
  const selectedProject = useContext(ProjectContext);

  return (
    <ScrollArea className="h-[800px] dark">
      <div
        className={`${
          selectedProject === "" ? "hidden" : "flex"
        } flex-col gap-3 px-4`}
      >
        <NavButton primary path="" label="Dashboard" />

        <NavAccordian primary label="Financial Statements">
          <NavButton
            secondary
            path="income-statement"
            label="Income Statement"
          />
          <NavButton secondary path="balance-sheet" label="Balance Sheet" />
        </NavAccordian>

        <NavAccordian primary label="Ledgers">
          <NavAccordian secondary label="General">
            <NavButton tertiary path="cash" label="Cash" />
            <NavButton tertiary path="bank" label="Bank" />
          </NavAccordian>

          <NavAccordian secondary label="Purchases">
            <NavButton
              tertiary
              path="credit-supplier"
              label="Credit Supplier"
            />
          </NavAccordian>

          <NavAccordian secondary label="Sales">
            <NavButton
              tertiary
              path="credit-customer"
              label="Credit Customer"
            />
          </NavAccordian>
        </NavAccordian>
      </div>
    </ScrollArea>
  );
};

export default NavScrollable;
