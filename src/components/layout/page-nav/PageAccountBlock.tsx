import { useParams, useRouter } from "next/navigation";
import React from "react";

interface PageAccountBlockProps {
  name: string;
  category?: string;
}

const PageAccountBlock: React.FC<PageAccountBlockProps> = ({
  name,
  category,
}) => {
  const router = useRouter();
  const { project, account } = useParams();
  const formattedName = name.toLowerCase().replace(/ /g, "-");

  return (
    <button
      onClick={() => router.push(`/${project}/account/${formattedName}`)}
      className={`${
        account === formattedName ? "border-neutral-500" : "border-transparent"
      } rounded-md items-center flex justify-between gap-1 hover:border-neutral-500 border bg-[#2c2c2c] p-2 px-3`}
    >
      <div className="text-neutral-300 truncate text-xs">{name}</div>
      <div className="text-xs text-neutral-400">{category}</div>
    </button>
  );
};

export default PageAccountBlock;
