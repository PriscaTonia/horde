"use client";

import { Btn } from "@/components";
import { AddTask, Food, LongArrowRight } from "@/icons";
import { CurrentBudget, NoBudgets } from "@/modules";
import { useRouter } from "next/navigation";
import React from "react";

const BudgetsPage = () => {
  const { push } = useRouter();
  return (
    <div className="flex h-full w-full flex-col px-5 py-8 font-inter md:px-9">
      {/* For when there are no budgets yet */}
      {/* <NoBudgets /> */}

      <section className="flex w-full flex-col gap-9 lg:flex-row">
        <CurrentBudget />

        <div className="flex w-full flex-col  rounded-2xl bg-white p-6 lg:w-[50%]">
          Categories
        </div>
      </section>
    </div>
  );
};

export default BudgetsPage;
