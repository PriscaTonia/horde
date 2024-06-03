"use client";

import { SelectDropdown } from "@/components";
import clsx from "clsx";
import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const BudgetCategoriesChart = () => {
  const data = [
    { name: "Food", value: 800 },
    { name: "Rent", value: 400 },
    { name: "Light", value: 200 },
    { name: "Transport", value: 50 },
  ];

  const COLORS = ["#47566D", "#A2DBFB", "#A1E3E3", "#A2C2F1"];

  return (
    <div className="flex w-full flex-col gap-5 bg-white">
      <div className="flex w-full flex-col justify-center gap-10 md:flex-row">
        <div className="h-[270px] w-full lg:h-[300px] lg:max-w-[50%] ">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx={90}
                cy={150}
                innerRadius={40}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={3}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col gap-3 md:mt-[80px] md:w-[50%]">
          {data?.map((c, i) => {
            return (
              <div
                key={c?.name}
                className="flex w-full max-w-[80%] items-center justify-between lg:max-w-full"
              >
                <div className="flex items-center gap-1">
                  <span
                    style={{
                      backgroundColor: `${COLORS[i]}`,
                    }}
                    className={clsx(`flex h-2 w-2 rounded-full`)}
                  ></span>
                  {c?.name}
                </div>{" "}
                <span>{c?.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { BudgetCategoriesChart };
