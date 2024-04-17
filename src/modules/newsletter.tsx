import { Btn } from "@/components";
import React from "react";

const Newsletter = () => {
  return (
    <div className="font-inter order-2 flex flex-col justify-between gap-2 py-[18.5px] lg:order-1 lg:flex-row lg:px-8">
      <div className="flex flex-col gap-2 lg:w-[50%]">
        <h5 className="text-xl font-medium text-[#101828] ">
          Join our newsletter
        </h5>
        <p className="text-base text-[#667085]">
          We’ll send you a nice letter once per week. No spam.
        </p>
      </div>

      <form className="flex flex-wrap items-center gap-4 lg:w-[50%] xl:justify-end">
        <input
          type="email"
          className="rounded-lg border border-[#D0D5DD] px-[14px] py-[10px] text-base text-[#667085] outline-none focus:ring-0"
          placeholder="Enter your email"
        />

        <Btn label="Subscribe" />
      </form>
    </div>
  );
};

export { Newsletter };
