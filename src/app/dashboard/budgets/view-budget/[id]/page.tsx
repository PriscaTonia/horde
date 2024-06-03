"use client";
import { ViewBudgetTotal } from "@/modules";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const ViewBudget = () => {
  const { id } = useParams();

  // console.log(id);

  return (
    <div className="flex w-full flex-col gap-[30px] px-5 py-10 font-inter md:px-9">
      <ViewBudgetTotal />
    </div>
  );
};

export default ViewBudget;
