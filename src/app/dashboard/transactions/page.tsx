"use client";
import { CreateTransactionsModal, NoTransactions } from "@/modules";
import React, { useState } from "react";

const TransactionsPage = () => {
  const [showTransactionsModal, setShowTransactionsModal] = useState(false);
  const [transactions, setTransactions] = useState<any[]>([]);

  return (
    <div className="flex w-full flex-col gap-[30px] px-5 py-10 font-inter md:px-9">
      {/* For when there are no transactions yet */}
      <NoTransactions setShowTransactionsModal={setShowTransactionsModal} />

      {showTransactionsModal && (
        <CreateTransactionsModal
          onClose={() => setShowTransactionsModal(false)}
        />
      )}
    </div>
  );
};

export default TransactionsPage;
