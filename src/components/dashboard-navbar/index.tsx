"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Bell } from "@/icons";
import Image from "next/image";

const DashNavbar = () => {
  const pathname = usePathname();

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
      path: "/dashboard/create-budget",
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
  ];

  return (
    <div className="flex items-center justify-between border-b border-[#E0E0E0] bg-white px-9 py-2">
      {path_titles?.map((p) => {
        return (
          <div key={p?.id}>
            {p?.path === pathname && (
              <div className="flex flex-col gap-1">
                <h3 className="font-inter text-2xl font-medium text-[#101828]">
                  {p.title}
                </h3>
                <p className="font-inter text-sm text-[#667085]">{p.text}</p>
              </div>
            )}
          </div>
        );
      })}

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
