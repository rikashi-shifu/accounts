import Header from "@/components/header/Header";
import React from "react";

const IncomeStatement = () => {
  return (
    <div className="border w-full h-full flex flex-col gap-5 p-6">
      <Header name="Income Statement" />
      <div className="border"></div>
    </div>
  );
};

export default IncomeStatement;
