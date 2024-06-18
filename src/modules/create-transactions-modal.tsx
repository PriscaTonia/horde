"use client";

import { Btn, SelectDropdown } from "@/components";
import { Calendar, CloseIcon } from "@/icons";
import { useNotify } from "@/utils/hooks/useNotify";
import { TransactionsModalProps } from "@/utils/types/component_types";
import { DateInput } from "@mantine/dates";
import React, { useEffect, useState } from "react";

const CreateTransactionsModal = ({
  onClose,
  setTransactions,
  item,
}: TransactionsModalProps) => {
  const notify = useNotify();

  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (item) {
      setAmount(item?.amount);
      setDescription(item?.description);
      setSelectedBudget(item.budget);
      setSelectedCategory(item.category);
      setSelectedDate(new Date(item.date));
    }
  }, [item]);

  const validate = (body: any) => {
    if (body.budget === "") {
      notify("Please select a budget");
      return false;
    }

    if (body.category === "") {
      notify("Please select a category");
      return false;
    }

    if (body.description === "") {
      notify("Please add a description");
      return false;
    }

    if (body.amount === 0) {
      notify("Please add an amount");
      return false;
    }

    if (!body.date) {
      notify("Please select a date");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      id: Math.floor(Math.random() * 100),
      budget: selectedBudget,
      category: selectedCategory,
      amount: amount,
      description: description,
      date: selectedDate?.toISOString(),
    };

    const isValidBody = validate(body);

    if (isValidBody) {
      if (item) {
        setTransactions((c) => {
          let newT = c.filter((t) => t.id !== item?.id);

          return [...newT, body];
        });
      } else {
        setTransactions((c) => {
          return [...c, body];
        });
      }

      onClose();
    }
  };

  return (
    <div className="modal_wrapper">
      <section className="flex w-[90%] flex-col gap-[26px] rounded-xl bg-white p-6 font-inter shadow-xl md:w-[65%] lg:w-[55%] xl:w-[40%]">
        {/* header */}
        <div className="flex w-full items-center justify-between">
          <h3 className="flex flex-col gap-1 text-lg font-semibold text-[#101828]">
            {item ? "Update Transaction" : " Add Transaction"}
            <span className="text-sm font-normal text-[#667085]">
              Record and save your transaction
            </span>
          </h3>

          <span
            className="cursor-pointer rounded-full border border-[#888888] p-[10.92px]"
            onClick={onClose}
          >
            <CloseIcon />
          </span>
        </div>

        {/* form */}
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex w-full flex-col gap-5"
        >
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <SelectDropdown
              data={demo_budgets}
              placeholder="Select budget"
              searchable={true}
              styles={{
                input: {
                  cursor: "pointer",
                  width: "100%",
                },
                root: {
                  width: "100%",
                },
              }}
              selectedValue={selectedBudget}
              setSelectedvalue={setSelectedBudget}
            />
            <SelectDropdown
              data={demo_categories}
              placeholder="Select category"
              searchable={true}
              styles={{
                input: {
                  cursor: "pointer",
                },
                root: {
                  width: "100%",
                },
              }}
              selectedValue={selectedCategory}
              setSelectedvalue={setSelectedCategory}
            />
          </div>

          <label
            htmlFor="description"
            className="flex flex-col gap-[6px] text-sm font-medium text-[#344054]"
          >
            Description
            <textarea
              className="min-h-[78px] rounded-lg border border-[#D0D5DD] px-[14px] py-[10px] text-sm font-normal text-[#667085] outline-none focus:ring-0"
              placeholder="Enter a description..."
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <span className="text-sm font-normal text-[#667085]">
              This is a hint text to help user.
            </span>
          </label>

          {/* last section */}
          <div className="ite flex w-full flex-col gap-4 md:flex-row md:items-end">
            <label
              htmlFor="amount"
              className="flex w-full flex-col gap-[6px] text-sm font-medium text-[#344054] md:w-[33%]"
            >
              Amount
              <input
                type="number"
                className="rounded-lg border border-[#D0D5DD] px-[14px] py-2 text-sm font-normal text-[#101828] outline-none focus:ring-0"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(+e.target.value)}
              />
            </label>
            <label
              htmlFor="amount"
              className="relative flex flex-col gap-[6px] text-sm font-medium text-[#344054]"
            >
              Date
              <DateInput
                value={selectedDate}
                onChange={setSelectedDate}
                rightSection={<Calendar />}
                styles={{
                  input: {
                    cursor: "pointer",
                    width: "100%",
                    padding: "10px 16px 10px 16px",
                  },
                  root: {
                    width: "100%",
                  },
                }}
              />
            </label>

            <Btn label={item ? "Update" : "Save"} type="submit" />
          </div>
        </form>
      </section>
    </div>
  );
};

export { CreateTransactionsModal };

const demo_budgets = [
  { value: "jan", label: "January" },
  { value: "feb", label: "February" },
  { value: "mar", label: "March" },
  { value: "apr", label: "April" },
];

const demo_categories = [
  { value: "food", label: "Food" },
  { value: "transport", label: "Transportation" },
  { value: "utility", label: "Utility" },
  { value: "pie", label: "Pie" },
];
