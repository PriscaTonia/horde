"use client";

import { Btn } from "@/components";
import { AddTask } from "@/icons";
import { useRouter } from "next/navigation";
import React from "react";

const BudgetsPage = () => {
  const { push } = useRouter();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-5 py-8 md:px-9">
      <AddTask />
      <h6 className="text-lg font-semibold text-[#1C1C1C]">
        Get started with your first budget
      </h6>

      <Btn
        label="Create Budget"
        onclick={() => push("/dashboard/budgets/create-budget")}
      />
    </div>
  );
};

export default BudgetsPage;
