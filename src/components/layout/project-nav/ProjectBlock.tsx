import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useNavContext } from "../Layout";
import { Tooltip } from "@mui/material";

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
  project: Project;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ project }) => {
  const router = useRouter();
  const param = useParams();
  const { setShowNav } = useNavContext();

  const formattedProjectName = project.name.toLowerCase().replace(/ /g, "-");
  return (
    <Tooltip title={project.name} placement="right" arrow>
      <button
        onClick={() => {
          setShowNav(true);
          if (param.project !== formattedProjectName) {
            router.push(`/${formattedProjectName}`);
          }
        }}
        className={`${
          param.project === formattedProjectName
            ? "rounded-xl border-neutral-500"
            : "rounded-full border-transparent"
        } bg-[#2c2c2c] text-white hover:border-neutral-500 duration-150 border flex justify-center items-center w-14 h-14`}
      >
        {project.name.slice(0, 1)}
      </button>
    </Tooltip>
  );
};

export default ProjectBlock;
