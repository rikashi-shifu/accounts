import React from "react";

interface PageAccountBlockProps {
  name: string;
  category?: string;
}

const PageAccountBlock: React.FC<PageAccountBlockProps> = ({
  name,
  category,
}) => {
  return (
    <div className="rounded-md items-center flex justify-between hover:border-neutral-500 border border-transparent bg-[#2c2c2c] p-2 px-3">
      <div className="text-neutral-300 text-sm">{name}</div>
      <div className="text-xs text-neutral-400">{category}</div>
    </div>
  );
};

export default PageAccountBlock;
