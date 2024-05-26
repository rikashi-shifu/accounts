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
  accounts: Account[];
}

interface PageNavigationProps {
  currentProject: string;
}

const PageNavigation: React.FC<PageNavigationProps> = ({ currentProject }) => {
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
                    <PageStatementBlock
                      name="Income Statement"
                      project={currentProject}
                    />
                    <PageStatementBlock
                      name="Balance Sheet"
                      project={currentProject}
                    />
                  </div>
                </PageCategoryBlock>

                <PageCategoryBlock name="Ledger">
                  <div className="flex flex-col gap-2">
                    <PageLedgerBlock name="General Ledger">
                      {project.accounts
                        .filter((account) => account.ledger === "General")
                        .map((account, i) => {
                          return (
                            <PageAccountBlock
                              key={i}
                              name={account.name}
                              category={account.category}
                              project={currentProject}
                            />
                          );
                        })}
                    </PageLedgerBlock>

                    <PageLedgerBlock name="Purchases Ledger">
                      {project.accounts
                        .filter((account) => account.ledger === "Purchases")
                        .map((account, i) => {
                          return (
                            <PageAccountBlock
                              key={i}
                              name={account.name}
                              category={account.category}
                              project={currentProject}
                            />
                          );
                        })}
                    </PageLedgerBlock>

                    <PageLedgerBlock name="Sales Ledger">
                      {project.accounts
                        .filter((account) => account.ledger === "Sales")
                        .map((account, i) => {
                          return (
                            <PageAccountBlock
                              key={i}
                              name={account.name}
                              category={account.category}
                              project={currentProject}
                            />
                          );
                        })}
                    </PageLedgerBlock>
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
