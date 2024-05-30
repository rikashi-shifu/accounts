"use client";
import { useRouter } from "next/navigation";
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
  accounts: Account[];
}

const Home = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    void (async () => {
      await fetch("/data/project.json", { method: "GET" }).then(
        async (resource) =>
          resource.json().then(async (project) => {
            setProjects(project);
            console.log("data: ", project);
          })
      );
    })();
  }, []);

  return (
    <div className="p-6 border flex flex-col gap-5 w-full z-10 h-full">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project, key) => {
          return (
            <button
              key={key}
              onClick={() =>
                router.push(`/${project.name.toLowerCase().replace(/ /g, "-")}`)
              }
              className="border-2 flex border-transparent rounded-xl bg-[#e9e9e9] h-32 hover:border-neutral-400 p-5"
            >
              <h1 className="text-sm font-semibold text-neutral-500">
                {project.name}
              </h1>
            </button>
          );
        })}
        <button
          onClick={() => console.log("TODO: add new project")}
          className="rounded-lg h-fit bg-neutral-400 text-white items-center flex justify-center p-1 opacity-50 hover:opacity-100"
        >
          <IoIosAdd />
        </button>
      </div>
    </div>
  );
};

export default Home;
