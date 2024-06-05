import { useRouter } from "next/navigation";
import React from "react";
import { GrMoney } from "react-icons/gr";

const ProjectHeader = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col py-3">
      <div className="w-full flex justify-center items-center">
        <button
          onClick={() => router.push(`/`)}
          className="text-[#c8a1d6] text-3xl rounded-full w-14 h-14 flex justify-center items-center"
        >
          <GrMoney />
        </button>
      </div>
    </div>
  );
};

export default ProjectHeader;
