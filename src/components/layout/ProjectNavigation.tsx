"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";

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

const ProjectNavigation = () => {
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
    <div className="w-20 flex flex-col items-center bg-[#151515]">
      <div className="flex flex-col pb-4">
        <div className="w-full flex justify-center py-6 items-center">
          <div className="bg-white rounded-full w-14 h-14 flex justify-center items-center">
            Logo
          </div>
        </div>
        <div className="rounded-2xl bg-[#c8a1d6] w-14 h-14 flex justify-center font-semibold text-3xl items-center">
          8
        </div>
      </div>
      <hr className="w-1/2 border-[#323232]" />
      <div className="h-full flex pt-4 flex-col gap-4">
        {projects.map((project, key) => {
          return (
            <Link
              key={key}
              href={"/"}
              className="bg-[#2c2c2c] text-white flex justify-center items-center rounded-full w-14 h-14"
            >
              {project.name.slice(0, 1)}
            </Link>
          );
        })}
        <button className="bg-[#2c2c2c] text-2xl text-white flex justify-center items-center rounded-full w-14 h-14">
          <IoIosAdd />
        </button>
      </div>
    </div>
  );
};

export default ProjectNavigation;
