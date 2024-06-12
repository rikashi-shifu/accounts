import React from "react";
import { IoIosAdd } from "react-icons/io";

const AddTransaction = () => {
  return (
    <button className="flex justify-center items-center w-[99%] p-1 my-1 rounded bg-[#f1f1f1] opacity-50 hover:opacity-100">
      <IoIosAdd className="text-neutral-500" />
    </button>
  );
};

export default AddTransaction;
