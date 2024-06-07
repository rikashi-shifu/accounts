"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext } from "react";
import { ProjectContext } from "../nav-body";

interface NavButtonProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  path: string;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  primary,
  secondary,
  tertiary,
  path,
  label,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const selectedProject = useContext(ProjectContext);

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
            ? "border-neutral-500 text-neutral-300"
            : "border-transparent"
        } bg-[#151515] font-semibold text-neutral-400 h-14`
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
        } bg-[#3b3b3b] text-neutral-300 text-sm`
      }
       h-10 px-4 transition-all duration-300 w-full text-start rounded-md border hover:border-neutral-500`}
    >
      {label}
    </button>
  );
};

export default NavButton;
