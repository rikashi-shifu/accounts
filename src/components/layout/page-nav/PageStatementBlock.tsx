"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

interface PageStatementBlockProps {
  name: string;
}

const PageStatementBlock: React.FC<PageStatementBlockProps> = ({ name }) => {
  const router = useRouter();
  const { project } = useParams();
  const pathname = usePathname();
  const formattedName = name.toLowerCase().replace(/ /g, "-");

  return (
    <button
      onClick={() => router.push(`/${project}/${formattedName}`)}
      className={`${
        pathname.includes(formattedName) && !pathname.includes("account")
          ? "border-neutral-500"
          : "border-transparent"
      } p-2 text-start text-sm rounded-md bg-[#1f1f1f] hover:border-neutral-500 border ps-3 text-neutral-300`}
    >
      {name}
    </button>
  );
};

export default PageStatementBlock;
