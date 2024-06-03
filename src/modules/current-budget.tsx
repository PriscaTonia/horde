import { Food, LongArrowRight } from "@/icons";
import React from "react";

const CurrentBudget = () => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-md lg:w-[50%]">
      <h3 className="flex flex-col gap-2 text-sm text-[#2C2C2C]">
        Current Budget
        <span className="flex items-center justify-between rounded-lg bg-app-black-200 px-5 py-2 text-xl text-white">
          March 2024
          <span className="cursor-pointer rounded bg-app-purple p-2">
            <LongArrowRight />
          </span>
        </span>
      </h3>

      {/* most used category */}
      <div className="flex w-full flex-col gap-[6px]">
        <p className="text-xs text-[#838383]">Most Used category</p>
        <p className="flex w-full items-center justify-between text-xs">
          <span className="flex items-center gap-[6px] text-[#2C2C2C]">
            <Food />
            Food
          </span>
          <span className="text-[#E8464C]">-17.63</span>
        </p>
      </div>

      {/* budget prices */}
      <div className="flex flex-wrap justify-between gap-3 lg:flex-nowrap">
        <p className="flex flex-col gap-1 text-xs text-[#838383]">
          Budget Amount <span className="text-sm text-[#2C2C2C]">$29.34</span>
        </p>

        <p className="flex flex-col gap-1 text-xs text-[#838383]">
          Amount Spent <span className="text-sm text-[#2C2C2C]">$19.34</span>
        </p>

        <p className="flex flex-col gap-1 text-xs text-[#838383]">
          Current Balance <span className="text-sm text-[#2C2C2C]">$10</span>
        </p>
      </div>
    </div>
  );
};

export { CurrentBudget };
