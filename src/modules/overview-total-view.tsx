import { TotalBalance, TotalExpenses, TotalInput } from "@/icons";
import clsx from "clsx";
import React from "react";

const OverviewTotalView = () => {
  return (
    <section className="flex flex-col flex-wrap items-center justify-between gap-5 md:flex-row md:items-start md:gap-[35px] lg:flex-nowrap">
      <div className={clsx("bg-[#E3F5FF] ", contstyles)}>
        <h4 className={h4styles}>
          <span className={spanstyles}>Total Input</span>
          $100,000
        </h4>

        <TotalInput />
      </div>

      <div className={clsx("bg-[#E5ECF6]", contstyles)}>
        <h4 className={h4styles}>
          <span className={spanstyles}>Total Expenses</span>
          $90,000
        </h4>

        <TotalExpenses />
      </div>

      <div className={clsx("bg-[#E5F6F6]", contstyles)}>
        <h4 className={h4styles}>
          <span className={spanstyles}>Total Balance</span>
          $10,000
        </h4>

        <TotalBalance />
      </div>
    </section>
  );
};

export { OverviewTotalView };

const contstyles =
  "flex max-w-[350px] lg:max-w-full w-full flex-col-reverse items-center justify-between gap-3 rounded-[10px] border border-[#EAECF0] shadow-md px-6 py-7 sm:flex-row";

const h4styles =
  "flex flex-col items-center font-inter text-xl font-semibold text-[#27272E] sm:items-start";

const spanstyles = "text-sm text-[#7A7A9D]";
