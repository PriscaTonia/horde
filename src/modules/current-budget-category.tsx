import { SelectDropdown } from "@/components";
import React from "react";
import { BudgetCategoriesChart } from "./budget-categories-chart";
import { CurrentBudgetCategoryProps } from "@/utils/types/component_types";

const CurrentBudgetCategory = ({
  selectedValue,
  setSelectedValue,
}: CurrentBudgetCategoryProps) => {
  return (
    <div className="flex w-full flex-col  rounded-2xl bg-white p-6 shadow-md lg:w-[50%]">
      <div className="flex w-full flex-col justify-between gap-3 sm:flex-row md:gap-6">
        <h4 className="font-inter text-lg font-bold text-[#1C1C1C]">
          Categories
        </h4>

        <SelectDropdown
          data={[
            { value: "%", label: "%" },
            { value: "₦", label: "₦" },
          ]}
          styles={{
            input: {
              cursor: "pointer",
            },
            wrapper: {
              width: "100px",
            },
          }}
          // placeholder="Select Period"
          searchable={true}
          selectedValue={selectedValue}
          setSelectedvalue={setSelectedValue}
        />
      </div>
      <BudgetCategoriesChart />
    </div>
  );
};

export { CurrentBudgetCategory };
