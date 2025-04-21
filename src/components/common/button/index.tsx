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
  loading,
  type,
  icon,
  ...rest
}: BtnProps) => {
  const class_name = clsx(
    "flex gap-1 items-center justify-center font-semibold",
    !custom && "border px-8 py-[10px] rounded-lg",
    size === "small" ? "w-fit" : "w-full",
    disabled && "bg-app-gray cursor-not-allowed bg-opacity-50 border-none",
    variant === "primary"
      ? "bg-app-purple text-white border-app-purple"
      : "bg-white text-[#344054] border-app-gray",
    custom,
  );

  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onclick}
      className={class_name}
      loading={loading}
      unstyled
      {...rest}
    >
      <span className="flex items-center gap-2">
        {icon}
        {label}
      </span>
    </Button>
  );
};

export { Btn };
