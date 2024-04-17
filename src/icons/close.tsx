import React from "react";

const CloseIcon = ({ ...rest }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M16.6589 5.34175L15.4839 4.16675L10.8255 8.82508L6.16719 4.16675L4.99219 5.34175L9.65052 10.0001L4.99219 14.6584L6.16719 15.8334L10.8255 11.1751L15.4839 15.8334L16.6589 14.6584L12.0005 10.0001L16.6589 5.34175Z"
        fill="black"
      />
    </svg>
  );
};

export { CloseIcon };
