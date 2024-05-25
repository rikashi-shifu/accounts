import React from "react";

interface PageStatementBlockProps {
  name: string;
}

const PageStatementBlock: React.FC<PageStatementBlockProps> = ({ name }) => {
  return (
    <div className="p-2 rounded-md bg-[#1f1f1f] hover:border-neutral-600 border border-transparent ps-4 text-neutral-300">
      {name}
    </div>
  );
};

export default PageStatementBlock;
