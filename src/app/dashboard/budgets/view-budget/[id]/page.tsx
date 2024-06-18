"use client";

import { Btn } from "@/components";
import { PlusIcon } from "@/icons";
import {
  TransactionsTable,
  ViewActualBudgetCategory,
  ViewBudgetTotal,
  ViewPlannedBudgetCategory,
} from "@/modules";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const ViewBudget = () => {
  const { id } = useParams();
  const [selectedValue1, setSelectedValue1] = useState("%");
  const [selectedValue2, setSelectedValue2] = useState("%");
  const [transactions, setTransactions] = useState<any[]>(all_transactions);

  // console.log(id);

  return (
    <div className="flex w-full flex-col gap-[30px] px-5 py-10 font-inter md:px-9">
      <ViewBudgetTotal />

      <section className="flex flex-col gap-5 md:flex-row">
        <ViewPlannedBudgetCategory
          selectedValue={selectedValue1}
          setSelectedValue={setSelectedValue1}
        />
        <ViewActualBudgetCategory
          selectedValue={selectedValue2}
          setSelectedValue={setSelectedValue2}
        />
      </section>

      <section className="flex w-full flex-col gap-5 rounded-lg border border-[#EAECF0] bg-white px-6 py-5 shadow-md ">
        <div className="flex items-center justify-between gap-6">
          <h4 className="font-inter text-base font-medium text-[#101828] md:text-lg">
            Transactions
          </h4>

          <Btn
            label={"Add"}
            icon={<PlusIcon />}
            custom="border px-[14px] py-2 rounded-lg w-fit"
          />
        </div>

        {transactions?.length > 0 && (
          <TransactionsTable
            setTransactions={setTransactions}
            data={transactions}
          />
        )}
      </section>
    </div>
  );
};

export default ViewBudget;

const all_transactions = [
  {
    id: 1,
    category: "Food",
    description: "Pie",
    amount: 2000,
    date: "2024-06-18",
  },
  {
    id: 2,
    category: "Light",
    description: "Pie",
    amount: 800,
    date: "2024-06-18",
  },
  {
    id: 3,
    category: "Data",
    description: "Pie",
    amount: 3000,
    date: "2024-06-18",
  },
  {
    id: 4,
    category: "Fuel",
    description: "Pie",
    amount: 2000,
    date: "2024-06-18",
  },
];
