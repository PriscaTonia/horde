"use client";

import { CreateBudgetAmount, CreateBudgetBreadcrumbs } from "@/modules";
import React, { useState } from "react";

const CreateBudget = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("$");
  const [budgetAmount, setBudgetAmount] = useState(0);

  const handleSetBudgetAmount = (e: any) => {
    setBudgetAmount(e.target.value);
  };

  return (
    <div className="px-5 py-8 font-inter md:px-9">
      <CreateBudgetBreadcrumbs />

      <CreateBudgetAmount
        handleSetBudgetAmount={handleSetBudgetAmount}
        budgetAmount={budgetAmount}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        currencies={currencies}
      />
    </div>
  );
};

export default CreateBudget;

const currencies = [
  { value: "$", label: "USD" },
  { value: "₦", label: "NGN" },
];
