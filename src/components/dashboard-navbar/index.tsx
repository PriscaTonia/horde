"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Bell } from "@/icons";
import Image from "next/image";
import clsx from "clsx";
import { useMedia } from "react-use";

const path_titles = [
  {
    id: 1,
    path: "/dashboard/overview",
    title: "Welcome back, John.",
    text: "Track and manage your expenses today!",
  },
  {
    id: 2,
    path: "/dashboard/budgets",
    title: "Budgets",
    text: "Customize and save your budget.",
  },
  {
    id: 3,
    path: "/dashboard/budgets/create-budget",
    title: "Create Budget",
    text: "Customize and save your budget.",
  },
  {
    id: 4,
    path: "/dashboard/view-budget",
    title: "Budgets",
    text: "View your budgets.",
  },
  {
    id: 5,
    path: "/dashboard/transactions",
    title: "Transactions",
    text: "Record your transactions.",
  },
  {
    id: 6,
    path: "/dashboard/budgets/create-budget/success",
    title: "Create Budget",
    text: "Customize and save your budget.",
  },
];

const DashNavbar = () => {
  const pathname = usePathname();

  const activePath = useMemo(() => {
    return path_titles.find((p) => p?.path === pathname) || path_titles[0];
  }, [pathname]);

  return (
    <div
      className={clsx(
        "sticky top-0 z-20 flex w-full items-center justify-between border-b border-[#E0E0E0] bg-white px-9 py-2",
      )}
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-inter text-lg font-medium text-[#101828] md:text-2xl">
          {activePath.title}
        </h3>
        <p className="font-inter text-xs text-[#667085] md:text-sm">
          {activePath.text}
        </p>
      </div>

      <div className="hidden gap-5 md:flex">
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#EFEFEFCC]">
          <Bell />
        </div>

        <Image
          src="/sidebar/Avatar.png"
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export { DashNavbar };
