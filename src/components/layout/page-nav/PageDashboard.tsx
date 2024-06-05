import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const PageDashboard = () => {
  const pathname = usePathname();
  const router = useRouter();
  const param = useParams();

  return (
    <div className="w-full flex justify-center items-center">
      <button
        onClick={() => router.push(`/${param.project}`)}
        className={`${
          pathname === `/${param.project}`
            ? "border-neutral-500 text-neutral-300 bg-[#1f1f1f]"
            : "border-transparent text-neutral-400 bg-[#151515]"
        } duration-300 border hover:border-neutral-500 text-sm font-semibold w-11/12 py-4 rounded-md text-start ps-5`}
      >
        Dashboard
      </button>
    </div>
  );
};

export default PageDashboard;
