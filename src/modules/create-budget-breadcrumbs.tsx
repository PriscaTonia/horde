import { ArrowRight, Edit, Home } from "@/icons";
import Link from "next/link";
import React from "react";

const CreateBudgetBreadcrumbs = () => {
  return (
    <div className="mb-10 flex items-center gap-[6px] font-inter text-sm">
      <Link
        href="/dashboard/overview"
        className="flex items-center gap-[6px] text-[#667085]"
      >
        <Home /> Home
      </Link>

      <ArrowRight />

      <p className="flex items-center gap-[6px] text-[#010564]">
        <Edit /> Create Budget
      </p>
    </div>
  );
};

export { CreateBudgetBreadcrumbs };
