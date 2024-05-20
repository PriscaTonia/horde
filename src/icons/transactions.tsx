import React from "react";

interface Props {
  fill?: string;
}

const TransactionsIcon = ({ fill = "#606060" }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6.75H19.1M15.3 2L20.05 6.75L15.3 11.5M21 16.25H3.9M7.7 11.5L2.95 16.25L7.7 21"
        stroke={fill}
        strokeWidth="2"
      />
    </svg>
  );
};

export { TransactionsIcon };
