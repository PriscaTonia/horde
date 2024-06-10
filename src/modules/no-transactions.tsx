"use client";
import { Btn } from "@/components";
import { AddTask } from "@/icons";
import { NoTransactionsProps } from "@/utils/types/component_types";
import { useRouter } from "next/navigation";
import React from "react";

const NoTransactions = ({ setShowTransactionsModal }: NoTransactionsProps) => {
  const { push } = useRouter();

  return (
    <div className="flex h-full min-h-[75vh] w-full flex-col items-center justify-center gap-8">
      <AddTask />
      <h6 className="text-lg font-semibold text-[#1C1C1C]">
        Record your first transaction
      </h6>

      <Btn
        label="Add Transactions"
        onclick={() => setShowTransactionsModal(true)}
      />
    </div>
  );
};

export { NoTransactions };
