"use client";

import { SelectDropdown } from "@/components";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const OverviewReportView = () => {
  const [selectedYear, setSelectedYear] = useState("");

  // hiding console error about Xaxis and Yaxis defaultProps which haven't been solved on recharts yet.
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <div className="flex w-full flex-col gap-5 rounded-2xl bg-white p-4 shadow-md md:p-6 xl:w-[60%] ">
      <div className="flex w-full flex-col justify-between gap-3 sm:flex-row md:gap-6">
        <h4 className="font-inter text-lg font-bold text-[#1C1C1C]">Reports</h4>

        <SelectDropdown
          data={[
            { value: "2024", label: "2024" },
            { value: "2023", label: "2023" },
            { value: "2022", label: "2022" },
            { value: "2021", label: "2021" },
          ]}
          placeholder="Select Year"
          searchable={true}
          styles={{
            input: {
              cursor: "pointer",
            },
          }}
          selectedValue={selectedYear}
          setSelectedvalue={setSelectedYear}
        />
      </div>

      <div className="w-full">
        <div className="h-[340px] w-full ">
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1c1c1c" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#1c1c1c" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                padding={{ left: 10, right: 10 }}
                tickMargin={5}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tickMargin={5}
                ticks={[5000, 10000]}
                tickCount={4}
                fontSize={"12px"}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#1c1c1c"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#A8C5DA"
                fillOpacity={1}
                fill="url(#colorPv)"
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export { OverviewReportView };

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 5000,
    pv: 8800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 6908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 7890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 5390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 2300,
    amt: 2100,
  },
];
