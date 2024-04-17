"use client";

import { BtnProps } from "@/utils/types/component_types";
import { Button } from "@mantine/core";
import clsx from "clsx";
import React from "react";

const Btn = ({
  label,
  onclick,
  size = "small",
  custom,
  variant = "primary",
  disabled,
  icon,
}: BtnProps) => {
  const class_name = clsx(
    "flex gap-1 items-center",
    !custom && "border px-8 py-3 rounded-lg",
    size === "small" ? "w-fit" : "w-full",
    disabled && "bg-app-gray cursor-not-allowed bg-opacity-50 border-none",
    variant === "primary"
      ? "bg-app-purple text-white border-app-purple"
      : "bg-white text-app-gray border-app-gray",
    custom,
  );

  return (
    <Button disabled={disabled} onClick={onclick} className={class_name}>
      {icon} {label}
    </Button>
  );
};

export { Btn };
