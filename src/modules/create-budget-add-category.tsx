"use client";
import { Btn } from "@/components";
import { PlusIcon } from "@/icons";
import { CreateBudgetAddCategoryProps } from "@/utils/types/component_types";
import clsx from "clsx";
import React, { useState } from "react";

const CreateBudgetAddCategory = ({
  handleAdd,
}: CreateBudgetAddCategoryProps) => {
  const [item, setItem] = useState<{
    id: number;
    name: string;
    amount: null | number;
    edit: boolean;
  }>({
    id: Math.round(Math.random() * 100),
    name: "",
    amount: null,
    edit: false,
  });

  return (
    <section className="flex w-full flex-col gap-[14px]">
      <h3 className="text-lg font-semibold text-[#101828] ">Add category</h3>

      <div className="flex w-full flex-col gap-4 text-[#1c1c1c] md:flex-row md:items-end lg:max-w-[70%]">
        <label htmlFor="name" className="flex flex-col gap-[6px] md:w-[60%]">
          Name
          <input
            type="text"
            id="name"
            value={item?.name}
            onChange={(e) => setItem((c) => ({ ...c, name: e.target.value }))}
            className={clsx(inputStyles)}
          />
        </label>

        <label htmlFor="amount" className="flex flex-col gap-[6px] md:w-[20%]">
          Amount
          <input
            type="number"
            onChange={(e) =>
              setItem((c) => ({ ...c, amount: +e.target.value }))
            }
            value={item?.amount || ""}
            id="amount"
            className={clsx(inputStyles)}
          />
        </label>

        <Btn
          label={"Add"}
          icon={<PlusIcon />}
          onclick={() => {
            handleAdd(item);

            setItem({
              id: Math.round(Math.random() * 100),
              name: "",
              amount: null,
              edit: false,
            });
          }}
        />
      </div>
    </section>
  );
};

export { CreateBudgetAddCategory };

const inputStyles =
  "rounded-lg border border-[#D0D5DD] bg-white px-[14px] py-[10px] outline-none focus:ring-0";
