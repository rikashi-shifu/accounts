import React from "react";
import { DataTable } from "./data";
import { Payment, columns } from "./columns";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const Account = async () => {
  const data = await getData();

  return (
    <div className="p-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Account;
