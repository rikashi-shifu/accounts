"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

interface NavigationButtonProps {
  path: string;
  label: string;
  isAccount?: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  path,
  label,
  isAccount,
}) => {
  const router = useRouter();
  const { account } = useParams();
  const pathname = usePathname();

  return (
    <button
      onClick={() => {
        router.push(`/project/personal${isAccount ? "/account" : ""}${path}`);
      }}
      className={`${
        isAccount
          ? `/${account}` === path && "bg-secondary"
          : `${pathname}` === `/project/personal${path}` && "bg-secondary"
      } px-3 py-2 rounded-lg w-full text-start hover:bg-secondary`}
    >
      {label}
    </button>
  );
};

export default NavigationButton;
