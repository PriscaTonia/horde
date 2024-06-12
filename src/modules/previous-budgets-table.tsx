"use client";

import React, { useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import styles from "../components/styles/ResponsiveTable.module.css";
import { useRouter } from "next/navigation";

interface TableProps {
  data: any[];
}

const columnHelper = createColumnHelper<any>();

const PreviousBudgetsTable = ({ data }: TableProps) => {
  const { push } = useRouter();

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: () => <div className="flex gap-[10px]">Name</div>,
        cell: ({ row }) => {
          const item = row.original;

          return (
            <p className="flex items-center justify-between ">
              <span className="font-semibold text-[#101828] md:hidden">
                Name
              </span>

              <span className="w-full">{item.name}</span>
            </p>
          );
        },
      }),
      columnHelper.accessor("budget", {
        header: () => <div className="flex gap-[10px]">Budget</div>,
        cell: ({ row }) => {
          const item = row.original;

          return (
            <p className="flex items-center justify-between ">
              <span className="font-semibold text-[#101828] md:hidden">
                Budget
              </span>

              <span className="w-full">{item.budget}</span>
            </p>
          );
        },
      }),
      columnHelper.accessor("amountSpent", {
        header: () => <div className="flex gap-[10px]">Amount Spent</div>,
        cell: ({ row }) => {
          const item = row.original;

          return (
            <p className="flex items-center justify-between ">
              <span className="font-semibold text-[#101828] md:hidden">
                Amount
              </span>

              <span
                className={clsx(
                  "w-full",
                  item?.amountSpent > item?.budget
                    ? "text-red-600"
                    : "text-green-600",
                )}
              >
                {item.amountSpent}
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

              <div
                onClick={() => {
                  push(
                    `/dashboard/budgets/view-budget/${item?.id}?name=${item?.name}`,
                  );
                }}
                className="cursor-pointer rounded-lg border border-[#D5D5D5] px-3 py-2 shadow-sm lg:px-6 lg:py-3"
              >
                View
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
    <div className="w-full">
      <table
        className={clsx(
          "w-full rounded-lg  text-left font-inter",
          styles.table,
        )}
      >
        <thead className="bg-white capitalize text-zinc-700 ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="w-full border-b border-[#EAECF0]"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-[10px] text-xs font-medium text-[#667085]"
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
                  className="px-6 py-[10px] text-sm text-[#101828] lg:w-[30%]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { PreviousBudgetsTable };
