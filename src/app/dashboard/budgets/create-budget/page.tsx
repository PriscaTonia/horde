"use client";

import { Btn } from "@/components";
import {
  CreateBudgetAddCategory,
  CreateBudgetAmount,
  CreateBudgetBreadcrumbs,
} from "@/modules";
import CreateBudgetTable from "@/modules/create-budget-table";
import { useNotify } from "@/utils/hooks/useNotify";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateBudget = () => {
  const notify = useNotify();
  const { push } = useRouter();
  const [selectedCurrency, setSelectedCurrency] = useState("$");
  const [budgetAmount, setBudgetAmount] = useState<null | number>(null);
  const [categories, setCategories] = useState<any[]>([]);

  const handleSetBudgetAmount = (e: any) => {
    setBudgetAmount(e.target.value);
  };

  const handleAddCategory = (item: any) => {
    if (!item.name) {
      notify("Please add a category name!");
      return;
    }

    if (!item.amount) {
      notify("Please add a category amount!");
      return;
    }

    if (categories?.find((c) => c.name === item.name)) {
      notify("A category with that name has already been added!");
      return;
    }

    setCategories((c) => {
      return [...(c as any[]), item];
    });
  };

  console.log(categories);

  return (
    <div className="px-5 py-8 font-inter md:px-9">
      <CreateBudgetBreadcrumbs />

      <div className="mb-5 flex flex-col gap-9">
        <CreateBudgetAmount
          handleSetBudgetAmount={handleSetBudgetAmount}
          budgetAmount={budgetAmount as number}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          currencies={currencies}
        />

        <CreateBudgetAddCategory handleAdd={handleAddCategory} />

        {categories && (
          <CreateBudgetTable
            currency={selectedCurrency}
            data={categories}
            setCategories={setCategories}
          />
        )}
      </div>

      <div className="absolute bottom-3 w-full bg-[#f5f6fa] py-3">
        <Btn
          label={"Save"}
          onclick={() => {
            push("/dashboard/budgets/create-budget/success");
          }}
        />
      </div>
    </div>
  );
};

export default CreateBudget;

const currencies = [
  { value: "$", label: "USD" },
  { value: "₦", label: "NGN" },
];
