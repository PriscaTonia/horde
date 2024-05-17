import React from "react";

const DashHamburger = ({ ...rest }) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g filter="url(#filter0_d_696_10014)">
        <circle cx="37" cy="33" r="21" fill="white" />
        <circle cx="37" cy="33" r="20.5" stroke="#E7E7ED" />
      </g>
      <path
        d="M46 27.75H33C32.586 27.75 32.25 27.414 32.25 27C32.25 26.586 32.586 26.25 33 26.25H46C46.414 26.25 46.75 26.586 46.75 27C46.75 27.414 46.414 27.75 46 27.75ZM46.75 33C46.75 32.586 46.414 32.25 46 32.25H28C27.586 32.25 27.25 32.586 27.25 33C27.25 33.414 27.586 33.75 28 33.75H46C46.414 33.75 46.75 33.414 46.75 33ZM46.75 39C46.75 38.586 46.414 38.25 46 38.25H37C36.586 38.25 36.25 38.586 36.25 39C36.25 39.414 36.586 39.75 37 39.75H46C46.414 39.75 46.75 39.414 46.75 39Z"
        fill="#525183"
      />
      <defs>
        <filter
          id="filter0_d_696_10014"
          x="0"
          y="0"
          width="74"
          height="74"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0941176 0 0 0 0 0.00784314 0 0 0 0 0.160784 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_696_10014"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_696_10014"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export { DashHamburger };
