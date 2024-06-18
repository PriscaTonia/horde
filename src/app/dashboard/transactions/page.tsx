"use client";
import { Btn } from "@/components";
import { Filter, PlusIcon, Search } from "@/icons";
import {
  CreateTransactionsModal,
  NoTransactions,
  TransactionsTable,
} from "@/modules";
import { TextInput } from "@mantine/core";
import React, { useMemo, useState } from "react";

const TransactionsPage = () => {
  const [showTransactionsModal, setShowTransactionsModal] = useState(false);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");

  // filter transactions using search value
  const filteredTransactions = useMemo(() => {
    if (searchValue) {
      return transactions.filter(
        (t) =>
          t.category.toLowerCase().includes(searchValue.toLowerCase()) ||
          t.description.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }

    return transactions;
  }, [searchValue, transactions]);

  return (
    <div className="flex w-full flex-col gap-[30px] px-5 py-10 font-inter md:px-9">
      {/* For when there are no transactions yet */}
      {transactions?.length < 1 && (
        <NoTransactions setShowTransactionsModal={setShowTransactionsModal} />
      )}

      {/* create transaction modal */}
      {showTransactionsModal && (
        <CreateTransactionsModal
          onClose={() => setShowTransactionsModal(false)}
          setTransactions={setTransactions}
        />
      )}

      {/* for when there are transactions */}
      {transactions?.length > 0 && (
        <section className="flex flex-col rounded-lg shadow-md">
          <div className="flex flex-col items-center gap-3 rounded-lg bg-white px-6 py-5 md:flex-row md:justify-between">
            <div className="flex w-full items-center gap-5 md:max-w-[50%] lg:max-w-[45%]">
              <TextInput
                value={searchValue}
                onChange={(event) => setSearchValue(event.currentTarget.value)}
                placeholder="Search for transaction, amount or name"
                leftSection={<Search />}
                styles={{
                  input: {
                    cursor: "pointer",
                    // maxWidth: "80%",
                    borderRadius: "8px",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    paddingRight: "14px",
                    paddingLeft: "32px",
                  },
                  root: {
                    width: "100%",
                  },
                }}
              />

              <Btn
                icon={<PlusIcon />}
                label="Add "
                onclick={() => setShowTransactionsModal(true)}
                custom="py-2 px-4 md:px-8 rounded-lg"
              />
            </div>

            <Btn
              icon={<Filter />}
              label="Filter "
              variant="secondary"
              onclick={() => setShowTransactionsModal(true)}
              custom="py-2 px-4 md:px-8 rounded-lg border border-[#D0D5DD] shadow-xs text-[#344054]"
            />
          </div>

          {/* table */}
          {filteredTransactions?.length > 0 && (
            <TransactionsTable
              data={filteredTransactions}
              setTransactions={setTransactions}
            />
          )}

          {/* no transactions after filtering by search value */}
          {filteredTransactions?.length < 1 && (
            <p className="w-full bg-white py-7 text-center text-lg capitalize">
              No Transactions Found!
            </p>
          )}
        </section>
      )}
    </div>
  );
};

export default TransactionsPage;
