"use client";

import React, { useState, useRef, useMemo, useEffect } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import clsx from "clsx";
import styles from "../components/styles/ResponsiveTable.module.css";
import { Bin, Pencil, Save } from "@/icons";

interface TableProps {
  data: {
    id: number;
    name: string;
    amount: number;
    edit: boolean;
  }[];
  currency: string;
  setCategories: React.Dispatch<React.SetStateAction<any[]>>;
}

const columnHelper = createColumnHelper<any>();

const CreateBudgetTable = ({ data, currency, setCategories }: TableProps) => {
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data);
  }, [data]);

  const inputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

  const handleEditChange = (
    id: number,
    field: "name" | "amount",
    value: string | number,
  ) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

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

              {item.edit ? (
                <input
                  ref={(el) => {
                    inputRefs.current[item.id] = el;
                  }}
                  type="text"
                  value={item.name}
                  className="h-full w-full outline-none focus:ring-0"
                  onChange={(e) =>
                    handleEditChange(item.id, "name", e.target.value)
                  }
                />
              ) : (
                <span className="w-full">{item.name}</span>
              )}
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

              {item.edit ? (
                <input
                  type="number"
                  value={item.amount}
                  className="h-full w-full outline-none focus:ring-0"
                  onChange={(e) =>
                    handleEditChange(item.id, "amount", +e.target.value)
                  }
                />
              ) : (
                <span className="w-full">{item.amount}</span>
              )}
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
                {item.edit ? (
                  <div
                    onClick={() => {
                      setItems((prevItems) =>
                        prevItems.map((cat) =>
                          cat.id === item.id ? { ...cat, edit: false } : cat,
                        ),
                      );

                      setCategories((prevCategories) =>
                        prevCategories.map((cat) =>
                          cat.id === item.id
                            ? {
                                ...cat,
                                name: item.name,
                                amount: item.amount,
                                edit: false,
                              }
                            : cat,
                        ),
                      );
                    }}
                    className="cursor-pointer rounded-bl-md rounded-tl-md border border-[#D5D5D5] bg-[#FAFBFD] px-4 py-2"
                  >
                    <Save />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setItems((prevItems) =>
                        prevItems.map((cat) =>
                          cat.id === item.id ? { ...item, edit: true } : cat,
                        ),
                      );

                      setTimeout(() => {
                        if (inputRefs.current[item.id]) {
                          inputRefs?.current?.[item.id]?.focus();
                        }
                      }, 0);
                    }}
                    className="cursor-pointer rounded-bl-md rounded-tl-md border border-[#D5D5D5] bg-[#FAFBFD] px-4 py-2"
                  >
                    <Pencil />
                  </div>
                )}

                <div
                  onClick={() => {
                    setItems((prevItems) =>
                      prevItems.filter((cat) => cat.id !== item.id),
                    );

                    setCategories((prevCategories) =>
                      prevCategories.filter((cat) => cat.id !== item.id),
                    );
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
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full">
      <table className={clsx("w-full rounded-lg text-left", styles.table)}>
        <thead className="bg-white capitalize text-zinc-700 ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="w-full border-b border-[#EAECF0]"
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-6 py-[10px]">
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
                <td key={cell.id} className="px-6 py-[10px] lg:w-[30%]">
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

export default CreateBudgetTable;
