"use client";

import {
  CreateBudgetAddCategory,
  CreateBudgetAmount,
  CreateBudgetBreadcrumbs,
} from "@/modules";
import CreateBudgetTable from "@/modules/create-budget-table";
import { useNotify } from "@/utils/hooks/useNotify";
import React, { useState } from "react";

const CreateBudget = () => {
  const notify = useNotify();
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

      <div className="flex flex-col gap-9">
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
    </div>
  );
};

export default CreateBudget;

const currencies = [
  { value: "$", label: "USD" },
  { value: "₦", label: "NGN" },
];
