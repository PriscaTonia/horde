"use clinet";
import { CloseIcon } from "@/icons";
import { TransactionsModalProps } from "@/utils/types/component_types";
import React from "react";

const CreateTransactionsModal = ({ onClose }: TransactionsModalProps) => {
  return (
    <div className="modal_wrapper">
      <section className="flex w-[40%] flex-col gap-[26px] rounded-xl bg-white p-6 font-inter shadow-xl">
        {/* header */}
        <div className="flex w-full items-center justify-between">
          <h3 className="flex flex-col gap-1 text-lg font-semibold text-[#101828]">
            Add Transaction
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
      </section>
    </div>
  );
};

export { CreateTransactionsModal };
