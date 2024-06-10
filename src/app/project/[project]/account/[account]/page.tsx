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
      <div className="border p-5 rounded-md flex">
        {/* left */}
        <div className="w-1/2 border">
          {/* header */}
          <div className="w-full flex">
            <div className="w-[10%] border">
              <input type="checkbox" />
            </div>
            <div className="w-[10%] border">Date</div>
            <div className="w-[10%] border">Details</div>
            <div className="w-[10%] border">Folio</div>
            <div className="w-[10%] border">Amount</div>
            <div className="w-[10%] border"></div>
          </div>
        </div>
        {/* right */}
        <div className="w-1/2 p-5 border">
          {/* header */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Account;
