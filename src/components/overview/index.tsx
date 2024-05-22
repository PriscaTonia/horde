"use client";
import {
  OverviewMonthlyTotal,
  OverviewReportView,
  OverviewTotalView,
} from "@/modules";
import React, { useState } from "react";
import { Btn } from "../button";

const Overview = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* section one */}
      <OverviewTotalView />

      {/* section two */}
      <section className="flex w-full flex-col gap-9 md:flex-row">
        <OverviewReportView />
        <OverviewMonthlyTotal />
      </section>
    </div>
  );
};

export { Overview };
