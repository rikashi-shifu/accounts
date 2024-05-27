import { useParams, useRouter } from "next/navigation";
import React from "react";

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

interface ProjectBlockProps {
  formattedProjectName: string;
  project: Project;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  formattedProjectName,
  project,
}) => {
  const router = useRouter();
  const param = useParams();

  return (
    <button
      onClick={() => {
        router.push(`/${formattedProjectName}`);
      }}
      className={`${
        param.project === formattedProjectName
          ? "rounded-xl border-neutral-500"
          : "rounded-full border-transparent"
      } bg-[#2c2c2c] text-white hover:border-neutral-500 duration-150 border flex justify-center items-center w-14 h-14`}
    >
      {project.name.slice(0, 1)}
    </button>
  );
};

export default ProjectBlock;
