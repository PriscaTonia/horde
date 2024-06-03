import { TotalBalance, TotalExpenses, TotalInput } from "@/icons";
import clsx from "clsx";
import React from "react";

const ViewBudgetTotal = () => {
  return (
    <section className="flex flex-col flex-wrap items-center justify-between gap-5 font-inter md:flex-row md:items-start md:gap-[35px] lg:flex-nowrap">
      <div className={clsx("bg-[#E3F5FF] ", contstyles)}>
        <h4 className={h4styles}>
          <span className={spanstyles}>Budget Amount</span>
          $100,000
          <span className="mt-[10px] rounded-md bg-[#DEFFEE] px-2 py-[2px] text-[10px] font-bold text-[#027A48]">
            100%
          </span>
        </h4>

        <TotalInput />
      </div>

      <div className={clsx("bg-[#E5ECF6]", contstyles)}>
        <h4 className={h4styles}>
          <span className={spanstyles}>Amount Spent</span>
          $60,000
          <span className="mt-[10px] rounded-md bg-[#FFDEDE] px-2 py-[2px] text-[10px] font-bold text-[#E8464C]">
            -60%
          </span>
        </h4>

        <TotalExpenses />
      </div>

      <div className={clsx("bg-[#E5F6F6]", contstyles)}>
        <h4 className={h4styles}>
          <span className={spanstyles}>Date Created</span>
          5th March, 2024
          <span className="mt-[10px] flex items-center gap-[6px] rounded-2xl bg-[#DEFFEE] px-2 py-[2px] text-[12px] font-bold text-[#027A48]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#12B76A]"></span>
            Active
          </span>
        </h4>

        <TotalBalance />
      </div>
    </section>
  );
};

export { ViewBudgetTotal };

const contstyles =
  "flex max-w-[350px] lg:max-w-full w-full flex-col-reverse items-center justify-between gap-3 rounded-[16px] border border-[#EAECF0] shadow-md px-6 py-7 sm:flex-row";

const h4styles =
  "flex flex-col items-center font-inter text-xl font-semibold text-[#27272E] sm:items-start";

const spanstyles = "text-sm text-[#7A7A9D]";
