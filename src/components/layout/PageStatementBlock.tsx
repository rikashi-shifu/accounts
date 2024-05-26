"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface PageStatementBlockProps {
  name: string;
  project: string;
}

const PageStatementBlock: React.FC<PageStatementBlockProps> = ({
  name,
  project,
}) => {
  const router = useRouter();

  return (
    <button
      onClick={() =>
        router.push(`/${project}/${name.toLowerCase().replace(/ /g, "-")}`)
      }
      className="p-2 rounded-md bg-[#1f1f1f] hover:border-neutral-600 border border-transparent ps-4 text-neutral-300"
    >
      {name}
    </button>
  );
};

export default PageStatementBlock;
