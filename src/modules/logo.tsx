import { DotIcon } from "@/icons";
import React from "react";

const Logo = () => {
  return (
    <h1 className="font-open_sans text-app-purple flex w-full max-w-[50%] text-[35px] font-bold xl:max-w-[20%]">
      HORDE
      <span>
        <DotIcon />
      </span>
    </h1>
  );
};

export { Logo };
