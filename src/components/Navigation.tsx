"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { GoHomeFill } from "react-icons/go";
import { MdAccountBalance, MdAccountBalanceWallet } from "react-icons/md";
import { PiMoneyWavyFill } from "react-icons/pi";

interface NavigationBlockProps {
  path: string;
  name: string;
  children: ReactNode;
}

const NavigationBlock: React.FC<NavigationBlockProps> = ({
  path,
  name,
  children,
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={`${
        pathname === path && "bg-[#31363f]"
      } flex items-center gap-4 text-sm px-4 py-3 text-white rounded-lg`}
    >
      {children}
      {name}
    </Link>
  );
};

const Navigation = () => {
  return (
    <div className="fixed p-6 h-full flex pt-12 gap-8 flex-col items-center w-[240px]">
      <Link href={"/"} className="text-white text-8xl">
        $
      </Link>
      <div className="h-full flex flex-col gap-4">
        <NavigationBlock path={"/"} name={"Home"}>
          <GoHomeFill />
        </NavigationBlock>

        <NavigationBlock path={"/ledger"} name={"General Ledger"}>
          <MdAccountBalanceWallet />
        </NavigationBlock>

        <NavigationBlock path={"/income"} name={"Income Statement"}>
          <PiMoneyWavyFill />
        </NavigationBlock>

        <NavigationBlock path={"/balance"} name={"Balance Sheet"}>
          <MdAccountBalance />
        </NavigationBlock>
      </div>
    </div>
  );
};

export default Navigation;
