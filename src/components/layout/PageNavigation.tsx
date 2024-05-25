"use client";
import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import PageCategoryBlock from "./PageCategoryBlock";
import PageLedgerBlock from "./PageLedgerBlock";
import PageAccountBlock from "./PageAccountBlock";
import PageStatementBlock from "./PageStatementBlock";

interface Account {
  name: string;
  category: string;
  ledger: string;
}

interface Project {
  id: string;
  name: string;
  user: string;
  account: Account;
}

const PageNavigation = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    void (async () => {
      await fetch("/data/project.json", { method: "GET" }).then(
        async (response) =>
          response.json().then(async (projects) => {
            await setProjects(projects);
          })
      );
    })();
  }, []);

  return (
    <div className="w-72 bg-black">
      {projects
        .filter((project) => project.name === "Personal")
        .map((project) => {
          return (
            <>
              <PageHeader name={project.name} />

              <div className="flex flex-col gap-2">
                <PageCategoryBlock name="Financial Statement">
                  <div className="flex flex-col gap-2">
                    <PageStatementBlock name="Income Statement" />
                    <PageStatementBlock name="Balance Sheet" />
                  </div>
                </PageCategoryBlock>

                <PageCategoryBlock name="Ledger">
                  <div className="flex flex-col gap-2">
                    <PageLedgerBlock name="General Ledger">
                      <PageAccountBlock name="Cash" category="Asset" />
                      <PageAccountBlock name="Allowance" category="Income" />
                      <PageAccountBlock name="Capital" />
                    </PageLedgerBlock>

                    <PageLedgerBlock name="Purchases Ledger"></PageLedgerBlock>

                    <PageLedgerBlock name="Sales Ledger"></PageLedgerBlock>
                  </div>
                </PageCategoryBlock>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default PageNavigation;
