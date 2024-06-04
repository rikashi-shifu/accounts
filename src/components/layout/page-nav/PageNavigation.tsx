"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import PageHeader from "./PageHeader";
import PageCategoryBlock from "./PageCategoryBlock";
import PageLedgerBlock from "./PageLedgerBlock";
import PageAccountBlock from "./PageAccountBlock";
import PageStatementBlock from "./PageStatementBlock";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useNavContext } from "../Layout";

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

const PageNavigation = () => {
  const param = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const { showNav } = useNavContext();
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project>();
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

  useMemo(() => {
    const selectedProject = projects.filter(
      (project) =>
        project.name.toLowerCase().replace(/ /g, "-") === param.project
    )[0];
    setSelectedProject(selectedProject);
  }, [param.project, projects]);

  return (
    <div
      className={`${
        !showNav && "-translate-x-72"
      } w-72 bg-black duration-300 overflow-y-scroll pb-3 relative`}
      onMouseOver={() => setShowCloseNavBtn(true)}
      onMouseLeave={() => setShowCloseNavBtn(false)}
    >
      <PageHeader
        name={selectedProject?.name}
        showCloseNavBtn={showCloseNavBtn}
      />

      <div className="flex flex-col gap-2 pt-20">
        <div className="w-full flex justify-center items-center">
          <button
            onClick={() => router.push(`/${param.project}`)}
            className={`${
              pathname === `/${param.project}`
                ? "border-neutral-500 text-neutral-300 bg-[#1f1f1f]"
                : "border-transparent text-neutral-400 bg-[#151515]"
            } duration-300 border  text-sm font-semibold w-11/12 py-4 rounded-md text-start ps-5`}
          >
            Dashboard
          </button>
        </div>

        <PageCategoryBlock name="Financial Statement">
          <div className="flex flex-col gap-2">
            <PageStatementBlock name="Income Statement" />
            <PageStatementBlock name="Balance Sheet" />
          </div>
        </PageCategoryBlock>

        <PageCategoryBlock name="Ledger">
          <div className="flex flex-col gap-2">
            <PageLedgerBlock name="General Ledger">
              {selectedProject?.accounts
                .filter((account) => account.ledger === "General")
                .map((account, key) => {
                  return (
                    <PageAccountBlock
                      key={key}
                      name={account.name}
                      category={account.category}
                    />
                  );
                })}
            </PageLedgerBlock>

            <PageLedgerBlock name="Purchases Ledger">
              {selectedProject?.accounts
                .filter((account) => account.ledger === "Purchases")
                .map((account, key) => {
                  return (
                    <PageAccountBlock
                      key={key}
                      name={account.name}
                      category={account.category}
                    />
                  );
                })}
            </PageLedgerBlock>

            <PageLedgerBlock name="Sales Ledger">
              {selectedProject?.accounts
                .filter((account) => account.ledger === "Sales")
                .map((account, key) => {
                  return (
                    <PageAccountBlock
                      key={key}
                      name={account.name}
                      category={account.category}
                    />
                  );
                })}
            </PageLedgerBlock>
          </div>
        </PageCategoryBlock>
      </div>
    </div>
  );
};

export default PageNavigation;
