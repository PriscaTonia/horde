"use client";

import React, { useMemo, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Bell,
  CalendarColored,
  ImportantColored,
  Profile,
  SettingsColored,
} from "@/icons";
import Image from "next/image";
import clsx from "clsx";
import { useClickAway } from "react-use";
import { demo_notifications } from "@/app/dashboard/notifications/page";
// import { useMedia } from "react-use";

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
    path: "/dashboard/budgets/view-budget",
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
  {
    id: 7,
    path: "/dashboard/notifications",
    title: "Notifications",
    text: "Alerts and notifications.",
  },
  {
    id: 8,
    path: "/dashboard/support",
    title: "Support",
    text: "FAQs & 24/7 support.",
  },
  {
    id: 9,
    path: "/dashboard/settings",
    title: "Settings",
    text: "Modify your settings.",
  },
];

const DashNavbar = () => {
  const ref = useRef(null);
  const pathname = usePathname();
  const params = useSearchParams();
  const name = params.get("name");

  const [showNotifications, setShowNotifications] = useState(false);

  useClickAway(ref, () => {
    setShowNotifications(false);
  });

  const activePath = useMemo(() => {
    if (pathname.includes("/dashboard/budgets/view-budget")) {
      return { title: name, text: "View your budget" };
    }

    return path_titles.find((p) => p?.path === pathname) || path_titles[0];
  }, [pathname, name]);

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
        <div
          onClick={() => setShowNotifications(!showNotifications)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#EFEFEFCC]"
        >
          <Bell />
        </div>

        {/* show filter calendar */}
        {showNotifications && (
          <div
            ref={ref}
            className="absolute right-6 top-20 flex flex-col rounded-lg border border-[#F2F4F7] bg-white py-[14px] shadow-lg drop-shadow lg:w-[284px]"
          >
            <h5 className="border-b border-[#EAECF0] pb-[14px] text-[15px] font-semibold text-[#404040] ">
              <span className="px-5">Notifications</span>
            </h5>

            {demo_notifications?.map((n) => {
              return (
                <div
                  key={n.id}
                  className="relative flex items-center gap-3 px-5 py-3"
                >
                  <span>
                    {" "}
                    {n.type === "profile" ? (
                      <Profile />
                    ) : n.type === "settings" ? (
                      <SettingsColored />
                    ) : n.type === "reminder" ? (
                      <CalendarColored />
                    ) : (
                      <ImportantColored />
                    )}
                  </span>

                  <p className="flex flex-col text-sm font-medium text-[#202224]">
                    <span className="line-clamp-1">{n.text}</span>
                    <span className="text-xs text-[#B5B5B5]">{n.date}</span>
                  </p>
                </div>
              );
            })}

            <p className="w-full cursor-pointer border-t border-[#EAECF0] px-5 py-3 text-center text-[13px] font-medium text-[#585A5D]">
              See all notifications
            </p>
          </div>
        )}

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
