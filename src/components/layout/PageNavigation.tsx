"use client";
import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";
import PageCategoryBlock from "./PageCategoryBlock";
import PageLedgerBlock from "./PageLedgerBlock";
import PageAccountBlock from "./PageAccountBlock";
import PageStatementBlock from "./PageStatementBlock";
import { useParams } from "next/navigation";

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
  showNav: boolean;
}

const PageNavigation: React.FC<PageNavigationProps> = ({ showNav }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showCloseNavBtn, setShowCloseNavBtn] = useState(false);

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

  const param = useParams();

  return (
    <div
      className={`${!showNav && "-translate-x-72"} w-72 bg-black duration-300`}
      onMouseOver={() => setShowCloseNavBtn(true)}
      onMouseLeave={() => setShowCloseNavBtn(false)}
    >
      {projects
        .filter(
          (project) =>
            project.name.toLowerCase().replace(/ /g, "-") === param.project
        )
        .map((project) => {
          return (
            <>
              <PageHeader
                name={project.name}
                showCloseNavBtn={showCloseNavBtn}
              />

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
                      {project.accounts
                        .filter((account) => account.ledger === "General")
                        .map((account, i) => {
                          return (
                            <PageAccountBlock
                              key={i}
                              name={account.name}
                              category={account.category}
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
