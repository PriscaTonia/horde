"use client";
import { Btn } from "@/components";
import { BudgetStars, BudgetSuccess } from "@/icons";
import { useRouter } from "next/navigation";
import React from "react";

const Success = () => {
  const { push } = useRouter();

  return (
    <div className="flex h-full flex-col items-center gap-5 px-5 py-8 pt-[136px] font-inter md:px-9">
      <div className="relative flex flex-col">
        <BudgetStars />
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <BudgetSuccess />
        </p>
      </div>

      <p className="text-app-black-200 text-[31px] font-semibold">
        Your budget has been saved.
      </p>

      <Btn
        label={"View budget"}
        onclick={() => {
          push("/dashboard/budgets/create-budget/success");
        }}
      />
    </div>
  );
};

export default Success;
