"use client";
import { OverviewReportView, OverviewTotalView } from "@/modules";
import React, { useState } from "react";
import { Btn } from "../button";

const Overview = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* section one */}
      <OverviewTotalView />

      {/* section two */}
      <section className="flex flex-col gap-9 md:flex-row">
        <OverviewReportView />

        <div className="flex w-full flex-col rounded-2xl bg-white p-6 md:w-[40%]">
          <div className="flex justify-between gap-6">
            <h4 className="rounded-lg border border-[#D0D5DD] px-[14px] py-2 font-inter text-sm font-semibold text-[#585A5D]">
              This month
            </h4>

            <Btn label="View" custom="border px-[14px] py-2 rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export { Overview };
