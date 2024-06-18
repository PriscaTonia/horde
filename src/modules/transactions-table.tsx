"use client";

import React, { useState, useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import styles from "../components/styles/ResponsiveTable.module.css";
import { Bin, Pencil } from "@/icons";
import { CreateTransactionsModal } from "./create-transactions-modal";

interface TableProps {
  data: any[];
  setTransactions: any;
}

const columnHelper = createColumnHelper<any>();

const TransactionsTable = ({ data, setTransactions }: TableProps) => {
  const [selectedItem, setSelectedItem] = useState<null | any>(null);
  const [showTransactionsModal, setShowTransactionsModal] = useState(false);

  const columns = useMemo(
    () => [
      columnHelper.accessor("category", {
        header: () => <div className="flex gap-[10px]">Category</div>,
        cell: ({ row }) => {
          const item = row.original;

          return (
            <p className="flex items-center justify-between ">
              <span className="font-semibold text-[#101828] md:hidden">
                category
              </span>

              <span className="w-full">{item.category}</span>
            </p>
          );
        },
      }),
      columnHelper.accessor("description", {
        header: () => <div className="flex gap-[10px]">Description</div>,
        cell: ({ row }) => {
          const item = row.original;

          return (
            <p className="flex items-center justify-between ">
              <span className="font-semibold text-[#101828] md:hidden">
                Description
              </span>

              <span className="w-full">{item.description}</span>
            </p>
          );
        },
      }),
      columnHelper.accessor("amount", {
        header: () => <div className="flex gap-[10px]">Amount</div>,
        cell: ({ row }) => {
          const item = row.original;

          return (
            <p className="flex items-center justify-between ">
              <span className="font-semibold text-[#101828] md:hidden">
                Amount
              </span>

              <span className="w-full">{item.amount}</span>
            </p>
          );
        },
      }),
      columnHelper.accessor("date", {
        header: () => <div className="flex gap-[10px]">Date</div>,
        cell: ({ row }) => {
          const item = row.original;

          return (
            <p className="flex items-center justify-between ">
              <span className="font-semibold text-[#101828] md:hidden">
                Date
              </span>

              <span className="w-full">
                {new Date(item.date).toDateString()}
              </span>
            </p>
          );
        },
      }),
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => {
          const item = row.original;

          return (
            <div className="flex items-center justify-between ">
              <span className="font-semibold text-[#101828] md:hidden">
                Actions
              </span>

              <div className="flex w-full items-center justify-end">
                <div
                  onClick={() => {
                    setSelectedItem(item);
                    setShowTransactionsModal(true);
                  }}
                  className="cursor-pointer rounded-bl-md rounded-tl-md border border-[#D5D5D5] bg-[#FAFBFD] px-4 py-2"
                >
                  <Pencil />
                </div>

                <div
                  onClick={() => {
                    console.log("hello");
                  }}
                  className="cursor-pointer rounded-br-md rounded-tr-md border border-[#D5D5D5] bg-[#FAFBFD] px-4 py-2"
                >
                  <Bin />
                </div>
              </div>
            </div>
          );
        },
      }),
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {/* update transaction modal */}
      {showTransactionsModal && (
        <CreateTransactionsModal
          onClose={() => setShowTransactionsModal(false)}
          setTransactions={setTransactions}
          item={selectedItem}
        />
      )}

      <div className="w-full">
        <table className={clsx("w-full rounded-lg text-left", styles.table)}>
          <thead className="bg-white capitalize text-zinc-700 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="w-full border-b border-[#EAECF0]"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-[10px] text-xs text-[#667085]"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-[#EAECF0] bg-white">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-[10px] text-sm text-[#101828] lg:w-[20%]"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { TransactionsTable };
