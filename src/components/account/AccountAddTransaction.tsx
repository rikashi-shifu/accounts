import React from "react";
import { IoIosAdd } from "react-icons/io";

// TODO: Automatically create non-existent account created from a new transaction

const AccountAddTransaction = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <button className="flex w-[98%] justify-center items-center my-1 py-1 text-sm text-neutral-500 bg-[#e9e9e9] rounded-md opacity-50 hover:opacity-100">
        <IoIosAdd />
      </button>
    </div>
  );
};

export default AccountAddTransaction;
