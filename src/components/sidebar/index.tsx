"use client";
import {
  BudgetIcon,
  DashHamburger,
  NotificationsIcon,
  SettingsIcon,
  SignoutIcon,
  TransactionsIcon,
} from "@/icons";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import { Logo } from "@/modules";
import { OverviewIcon } from "@/icons/overview";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SupportIcon from "@/icons/support";
import Image from "next/image";

interface Props {
  onCloseSidebar: () => void;
  isOpen: boolean;
  isMobileSize: boolean;
}

const variants = {
  open: { width: "284px" },
  closed: { width: "100px" },
};

const text_variants = {
  open: { display: "flex" },
  closed: { display: "none" },
};

const Sidebar = ({ onCloseSidebar, isOpen, isMobileSize }: Props) => {
  const pathname = usePathname();

  const links = [
    {
      id: 1,
      title: "Overview",
      icon:
        pathname === "/dashboard/overview" ? (
          <OverviewIcon fill="#FFFFFF" />
        ) : (
          <OverviewIcon />
        ),
      path: "/dashboard/overview",
    },
    {
      id: 2,
      title: "Budgets",
      icon:
        pathname === "/dashboard/budgets" ? (
          <BudgetIcon fill="#FFFFFF" />
        ) : (
          <BudgetIcon />
        ),
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      title: "Transactions",
      icon:
        pathname === "/dashboard/transactions" ? (
          <TransactionsIcon fill="#FFFFFF" />
        ) : (
          <TransactionsIcon />
        ),
      path: "/dashboard/transactions",
    },
    {
      id: 4,
      title: "Notifications",
      icon:
        pathname === "/dashboard/notifications" ? (
          <NotificationsIcon fill="#FFFFFF" />
        ) : (
          <NotificationsIcon />
        ),
      path: "/dashboard/notifications",
    },
  ];

  const lower_links = [
    {
      id: 1,
      title: "Support",
      icon:
        pathname === "/dashboard/support" ? (
          <SupportIcon fill="#FFFFFF" />
        ) : (
          <SupportIcon />
        ),
      path: "/dashboard/support",
    },
    {
      id: 2,
      title: "Settings",
      icon:
        pathname === "/dashboard/settings" ? (
          <SettingsIcon fill="#FFFFFF" />
        ) : (
          <SettingsIcon />
        ),
      path: "/dashboard/setting",
    },
  ];

  return (
    <motion.aside
      animate={
        (isMobileSize && !isOpen) || (!isMobileSize && !isOpen)
          ? "closed"
          : "open"
      }
      transition={{ duration: 0.8 }}
      variants={variants}
      className={clsx(
        "relative  flex flex-col gap-6 border-r border-[#E0E0E0] bg-white py-6",
        (isMobileSize && !isOpen) || (!isMobileSize && !isOpen)
          ? "w-[100px]"
          : "w-[284px]",
      )}
    >
      <DashHamburger
        onClick={onCloseSidebar}
        className="absolute -right-[35px] top-[15px] cursor-pointer"
      />

      {/* logo */}
      <div className="px-3">
        <Logo textSize="small" />
      </div>

      {/* main links */}
      <div className="flex flex-col gap-3">
        {links?.map((c) => {
          return (
            <div key={c?.id} className="flex gap-3">
              <span
                className={clsx(
                  "h-full min-w-2 rounded-br-md rounded-tr-md bg-app-purple",
                  pathname === c?.path ? "bg-app-purple" : "bg-transparent",
                )}
              ></span>

              <Link
                href={c?.path}
                className={clsx(
                  "ml-3 mr-6 flex w-full items-center gap-3 rounded-md px-3 py-2 text-base font-semibold hover:bg-app-purple hover:bg-opacity-20 ",
                  pathname === c?.path
                    ? "bg-app-purple text-white"
                    : "bg-white",
                  isMobileSize && !isOpen && "justify-center",
                  !isMobileSize && !isOpen && "justify-center",
                )}
              >
                <span>{c?.icon}</span>

                <motion.span
                  animate={!isOpen ? "closed" : "open"}
                  transition={{ duration: 0.3 }}
                  variants={text_variants}
                >
                  {c?.title}
                </motion.span>
              </Link>
            </div>
          );
        })}
      </div>

      {/* lower links */}
      <div className="mb-11 flex h-full flex-col justify-end gap-6">
        <div className="flex flex-col gap-3">
          {lower_links?.map((c) => {
            return (
              <div key={c?.id} className=" flex gap-3 ">
                <span
                  className={clsx(
                    "h-full min-w-2 rounded-br-md rounded-tr-md bg-app-purple",
                    pathname === c?.path ? "bg-app-purple" : "bg-transparent",
                  )}
                ></span>

                <Link
                  href={c?.path}
                  className={clsx(
                    "ml-3 mr-6 flex  w-full items-center gap-3 rounded-md px-3 py-2 text-base font-semibold hover:bg-app-purple hover:bg-opacity-20 ",
                    pathname === c?.path
                      ? "bg-app-purple text-white"
                      : "bg-white",
                    isMobileSize && !isOpen && "justify-center",
                    !isMobileSize && !isOpen && "justify-center",
                  )}
                >
                  <span>{c?.icon}</span>
                  <motion.span
                    animate={!isOpen ? "closed" : "open"}
                    transition={{ duration: 0.3 }}
                    variants={text_variants}
                  >
                    {c?.title}
                  </motion.span>
                </Link>
              </div>
            );
          })}
        </div>

        <hr />

        {/* profile and signout section */}
        <div className="relative flex flex-col gap-2 px-3 md:px-6 lg:flex-row">
          <Image
            src="/sidebar/Avatar.png"
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          {((!isMobileSize && isOpen) || (isMobileSize && isOpen)) && (
            <p className="test-sm flex flex-col font-bold text-[#1C1C1C]">
              John Saint
              <span className="text-xs font-normal">JohnS@emailyyy.com</span>
            </p>
          )}

          <p className="absolute -top-1 right-0 ">
            <SignoutIcon className="cursor-pointer" />
          </p>
        </div>
      </div>
    </motion.aside>
  );
};

export { Sidebar };
