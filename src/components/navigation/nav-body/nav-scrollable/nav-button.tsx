"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext } from "react";
import { ProjectContext } from "../project-context-provider";

interface NavButtonProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  path: string;
  label: string;
  category?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  primary,
  secondary,
  tertiary,
  path,
  label,
  category,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { selectedProject } = useContext(ProjectContext);

  return (
    <button
      onClick={() =>
        router.push(
          primary
            ? `/project/${selectedProject}`
            : secondary
            ? `/project/${selectedProject}/${path}`
            : `/project/${selectedProject}/account/${path}`
        )
      }
      className={`${
        primary &&
        `      ${
          pathname.toString() === `/project/${selectedProject}`
            ? "border-neutral-500 text-neutral-200"
            : "border-transparent text-neutral-400"
        } bg-[#151515] font-semibold  h-14`
      } 
      ${
        secondary &&
        `${
          pathname.toString() === `/project/${selectedProject}/${path}`
            ? "border-neutral-500"
            : "border-transparent"
        } bg-[#2c2c2c] text-neutral-300 h-12 text-sm`
      }
      ${
        tertiary &&
        `${
          pathname.toString() === `/project/${selectedProject}/account/${path}`
            ? "border-neutral-500"
            : "border-transparent"
        } bg-[#3b3b3b] text-neutral-300 text-sm flex items-center justify-between`
      }
       h-10 px-4 transition-all duration-300 w-full text-start rounded-md border hover:border-neutral-500`}
    >
      {label}
      {tertiary && <div className="text-xs text-neutral-400">{category}</div>}
    </button>
  );
};

export default NavButton;
