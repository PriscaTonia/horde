"use client";

import { CurrentBudget, CurrentBudgetCategory, NoBudgets } from "@/modules";
import PreviousBudgetsTable from "@/modules/previous-budgets-table";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BudgetsPage = () => {
  const { push } = useRouter();
  const [selectedValue, setSelectedValue] = useState("%");

  return (
    <div className="flex w-full flex-col gap-[30px] px-5 py-10 font-inter md:px-9">
      {/* For when there are no budgets yet */}
      {/* <NoBudgets /> */}

      <section className="flex w-full flex-col gap-9 lg:flex-row">
        <CurrentBudget />
        <CurrentBudgetCategory
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </section>

      <section className="flex w-full flex-col gap-5 rounded-lg border border-[#EAECF0] bg-white px-6 py-5 shadow-md">
        <h3 className="flex flex-col gap-2 text-base font-medium text-[#101828] lg:text-lg">
          Previous Budget
        </h3>

        {all_budgets?.length > 0 && <PreviousBudgetsTable data={all_budgets} />}
      </section>
    </div>
  );
};

export default BudgetsPage;

const all_budgets = [
  {
    id: 1,
    name: "February 2023 Budget",
    budget: 1000,
    amountSpent: 2000,
  },
  {
    id: 2,
    name: "March 2023 Budget",
    budget: 1000,
    amountSpent: 800,
  },
  {
    id: 3,
    name: "April 2023 Budget",
    budget: 1000,
    amountSpent: 3000,
  },
  {
    id: 4,
    name: "May 2023 Budget",
    budget: 10000,
    amountSpent: 2000,
  },
];
