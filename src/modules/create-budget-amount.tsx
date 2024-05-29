import { SelectDropdown } from "@/components";
import classes from "../components/styles/Select.module.css";
import { CreateBudgetAmountProps } from "@/utils/types/component_types";
import React from "react";

const CreateBudgetAmount = ({
  selectedCurrency,
  budgetAmount,
  handleSetBudgetAmount,
  currencies,
  setSelectedCurrency,
}: CreateBudgetAmountProps) => {
  return (
    <section className="flex w-full flex-col gap-[14px]">
      <h3 className="text-lg font-semibold text-[#101828] ">Budget amount</h3>

      <div className="flex w-full items-center gap-2 rounded-lg border border-[#D0D5DD] bg-white px-[14px] py-[10px] md:w-[50%]">
        <p>{selectedCurrency}</p>

        <input
          type="number"
          value={budgetAmount || ""}
          onChange={handleSetBudgetAmount}
          placeholder="1,000.00"
          className="w-full border-none bg-white outline-none placeholder:opacity-25 focus:ring-0"
        />

        <SelectDropdown
          data={currencies}
          classNames={{
            dropdown: classes.dropdown,
          }}
          styles={{
            input: {
              border: "none",
              padding: "0px 0px 0px 0px",
              minHeight: "unset",
              lineHeight: "unset",
              height: "unset",
              width: "100px",
              cursor: "pointer",
            },
            options: {
              width: "100px",
              BackgroundColor: "#ffffff",
            },
            option: {
              width: "90px",
              BackgroundColor: "#ffffff",
            },
          }}
          withCheckIcon={false}
          allowDeselect={false}
          placeholder="USD"
          searchable={true}
          selectedValue={selectedCurrency}
          setSelectedvalue={setSelectedCurrency}
        />
      </div>
    </section>
  );
};

export { CreateBudgetAmount };
