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
import { useMedia } from "react-use";

interface Props {
  onCloseSidebar: () => void;
  isOpen: boolean;
  isMobileSize: boolean;
}

const Sidebar = ({ onCloseSidebar, isOpen, isMobileSize }: Props) => {
  const pathname = usePathname();
  const isScreenSmall = useMedia("(max-width: 420px)", false);

  const variants = {
    open: { width: "284px" },
    closed: { width: isScreenSmall ? "70px" : "100px" },
  };

  const text_variants = {
    open: { display: "flex" },
    closed: { display: "none" },
  };

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
      icon: pathname.includes("/dashboard/budgets") ? (
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
      path: "/dashboard/settings",
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
        "sticky bottom-0 left-0 top-0 z-40 flex h-screen flex-col gap-6 border-r border-[#E0E0E0] bg-white py-6",
        (!isMobileSize && isOpen) || (isMobileSize && isOpen)
          ? "w-[284px]"
          : isScreenSmall
            ? "w-[70px]"
            : "w-[100px]",
      )}
    >
      <DashHamburger
        onClick={onCloseSidebar}
        className={clsx(
          "absolute -right-[35px] z-30 cursor-pointer",
          isScreenSmall ? "top-[25px]" : "top-[15px]",
        )}
      />

      {/* logo */}
      <div className="px-1 sm:px-3">
        <Logo textSize={isScreenSmall ? "extra-small" : "small"} />
      </div>

      {/* main links */}
      <div className="flex flex-col gap-3">
        {links?.map((c) => {
          return (
            <div key={c?.id} className="flex sm:gap-3">
              <span
                className={clsx(
                  "h-full min-w-2 rounded-br-md rounded-tr-md bg-app-purple",
                  pathname === c?.path || pathname.includes(c?.path)
                    ? "bg-app-purple"
                    : "bg-transparent",
                  isScreenSmall ? "hidden" : "flex",
                )}
              ></span>

              <Link
                href={c?.path}
                className={clsx(
                  "ml-3 mr-6 flex w-full items-center gap-3 rounded-md px-3 py-2 text-base font-semibold hover:bg-app-purple hover:bg-opacity-20 ",
                  pathname === c?.path || pathname.includes(c?.path)
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
              <div key={c?.id} className=" flex sm:gap-3 ">
                <span
                  className={clsx(
                    "h-full min-w-2 rounded-br-md rounded-tr-md bg-app-purple",
                    pathname === c?.path || pathname.includes(c?.path)
                      ? "bg-app-purple"
                      : "bg-transparent",
                    isScreenSmall ? "hidden" : "flex",
                  )}
                ></span>

                <Link
                  href={c?.path}
                  className={clsx(
                    "ml-3 mr-6 flex  w-full items-center gap-3 rounded-md px-3 py-2 text-base font-semibold hover:bg-app-purple hover:bg-opacity-20 ",
                    pathname === c?.path || pathname.includes(c?.path)
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
            className={clsx("rounded-full", isScreenSmall ? "hidden" : "flex")}
          />

          {((!isMobileSize && isOpen) || (isMobileSize && isOpen)) && (
            <p className="test-sm flex flex-col font-bold text-[#1C1C1C]">
              John Saint
              <span className="text-xs font-normal">JohnS@emailyyy.com</span>
            </p>
          )}

          <p
            className={clsx(
              "absolute -top-1  ",
              isScreenSmall ? "right-4" : "right-0",
            )}
          >
            <SignoutIcon className="cursor-pointer" />
          </p>
        </div>
      </div>
    </motion.aside>
  );
};

export { Sidebar };
