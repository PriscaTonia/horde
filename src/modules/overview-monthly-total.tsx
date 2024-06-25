"use client";

import { Btn } from "@/components";
import { GreenCheck } from "@/icons";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React from "react";

const OverviewMonthlyTotal = () => {
  const { push } = useRouter();

  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl bg-white p-4 shadow-md md:p-6 xl:w-[40%]">
      <div className="flex justify-between gap-6">
        <h4 className="rounded-lg border border-[#D0D5DD] px-[14px] py-2 font-inter text-sm font-semibold text-[#585A5D]">
          This month
        </h4>

        <Btn
          label="View"
          custom="border px-[14px] py-2 rounded-lg"
          onclick={() => push("/dashboard/budgets")}
        />
      </div>

      <div className="flex flex-col gap-7">
        <h6 className={h6Styles}>
          Total Budget <span>$100,000</span>
        </h6>
        <h6 className={h6Styles}>
          Total Expenses
          <span className={clsx(spanStyles, "text-app-red")}>$90,000</span>
        </h6>
        <h6 className={h6Styles}>
          Total Balance{" "}
          <span className={clsx(spanStyles, "text-app-purple")}>$10,000</span>
        </h6>

        <h6 className="flex w-full items-center justify-end gap-[6px] text-base font-bold text-app-green">
          <GreenCheck /> On track
        </h6>
      </div>
    </div>
  );
};

export { OverviewMonthlyTotal };

const h6Styles =
  "text-app-black-200 flex items-center justify-between gap-2 text-base font-semibold";
const spanStyles = "text-[22px] font-bold";
