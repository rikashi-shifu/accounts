"use client";
import React, { useContext } from "react";
import NavButton from "./nav-button";
import NavAccordian from "./nav-accordian";
import { ScrollArea } from "../../../ui/scroll-area";
import { ProjectContext } from "../project-context-provider";
import { Account } from "@/types/types";

interface NavScrollableProps {
  accounts: Account[];
}

const NavScrollable: React.FC<NavScrollableProps> = ({ accounts }) => {
  const { selectedProject } = useContext(ProjectContext);

  return (
    <ScrollArea className="h-[79dvh] dark">
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
            {accounts
              .filter((account) => {
                return (
                  account.project.name.toLowerCase().replace(/ /g, "-") ===
                    selectedProject && account.ledger === "General"
                );
              })
              .map((account, key) => {
                return (
                  <NavButton
                    key={key}
                    tertiary
                    path={account.name.toLowerCase().replace(/ /g, "-")}
                    label={account.name}
                    category={account.category}
                  />
                );
              })}
          </NavAccordian>

          <NavAccordian secondary label="Purchases">
            {accounts
              .filter((account) => {
                return (
                  account.project.name.toLowerCase().replace(/ /g, "-") ===
                    selectedProject && account.ledger === "Purchases"
                );
              })
              .map((account, key) => {
                return (
                  <NavButton
                    key={key}
                    tertiary
                    path={account.name.toLowerCase().replace(/ /g, "-")}
                    label={account.name}
                    category={account.category}
                  />
                );
              })}
          </NavAccordian>

          <NavAccordian secondary label="Sales">
            {accounts
              .filter((account) => {
                return (
                  account.project.name.toLowerCase().replace(/ /g, "-") ===
                    selectedProject && account.ledger === "Sales"
                );
              })
              .map((account, key) => {
                return (
                  <NavButton
                    key={key}
                    tertiary
                    path={account.name.toLowerCase().replace(/ /g, "-")}
                    label={account.name}
                    category={account.category}
                  />
                );
              })}
          </NavAccordian>
        </NavAccordian>
      </div>
    </ScrollArea>
  );
};

export default NavScrollable;
