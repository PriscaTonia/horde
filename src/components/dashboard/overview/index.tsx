"use client";

import {
  OverviewCategoriesChart,
  OverviewMonthlyTotal,
  OverviewRecentTransactions,
  OverviewReportView,
  OverviewTotalView,
} from "@/modules";
import { useHydrationState } from "@/utils/hooks/useHydrationState";
import React from "react";

const Overview = () => {
  const isHydrated = useHydrationState();

  return (
    <div className="flex w-full flex-col gap-6">
      {/* section one */}
      <OverviewTotalView />

      {/* section two */}
      <section className="flex w-full flex-col gap-9 lg:flex-row">
        {isHydrated ? (
          <OverviewReportView />
        ) : (
          <div className="animate-pulse text-black md:w-[60%]">Loading...</div>
        )}

        <OverviewMonthlyTotal />
      </section>

      {/* section three */}
      <section className="flex w-full flex-col gap-9 lg:flex-row">
        <OverviewRecentTransactions />
        {isHydrated ? (
          <OverviewCategoriesChart />
        ) : (
          <div className="animate-pulse text-black md:w-[60%]">Loading...</div>
        )}
      </section>
    </div>
  );
};

export { Overview };
