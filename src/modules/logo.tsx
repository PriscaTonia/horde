import { DotIcon } from "@/icons";
import clsx from "clsx";
import React from "react";

interface Props {
  textSize?: "small" | "big" | "extra-small";
}

const Logo = ({ textSize = "big" }: Props) => {
  return (
    <h1
      className={clsx(
        "flex w-full max-w-[50%] font-open_sans  font-bold text-app-purple xl:max-w-[20%]",
        textSize === "big" && "text-[35px]",
        textSize === "small" && "text-lg",
        textSize === "extra-small" && "text-xs",
      )}
    >
      HORDE
      <span>
        <DotIcon />
      </span>
    </h1>
  );
};

export { Logo };
