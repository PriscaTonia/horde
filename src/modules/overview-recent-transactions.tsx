import { Btn } from "@/components";
import { PlusIcon } from "@/icons";
import React from "react";

const OverviewRecentTransactions = () => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl bg-white p-4 shadow-md md:p-6 xl:w-[60%]">
      <div className="flex items-center justify-between gap-6">
        <h4 className="font-inter text-base font-bold text-[#1C1C1C] md:text-lg">
          Recent Transactions
        </h4>

        <Btn
          label={"Add"}
          icon={<PlusIcon />}
          custom="border px-[14px] py-2 rounded-lg w-fit"
        />
      </div>

      <div className="flex flex-col ">
        {demo_transactions?.map((c) => {
          return (
            <div
              key={c?.id}
              className="line-clamp-2 flex flex-col flex-wrap justify-between gap-3 border-b border-[#EAECF0] py-[26px] font-inter text-sm text-[#101828] md:flex-row md:items-center"
            >
              <p>{c?.category}</p>
              <p>{c?.label}</p>
              <p className="text-[#E8464C]">{c?.price}</p>
              <p>{c?.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { OverviewRecentTransactions };

const demo_transactions = [
  {
    id: 1,
    category: "Food",
    label: "Pie",
    price: "$500",
    date: "5th Nov, 2024",
  },
  {
    id: 2,
    category: "Light",
    label: "Pie",
    price: "$500",
    date: "5th Nov, 2024",
  },
  {
    id: 3,
    category: "Data",
    label: "Pie",
    price: "$500",
    date: "5th Nov, 2024",
  },
];
