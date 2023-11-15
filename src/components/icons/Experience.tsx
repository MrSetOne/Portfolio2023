import React from "react";

interface Props {
  size?: string;
  strokeWidth?: number;
}

const Experience = ({ size = "1rem", strokeWidth = 1 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      fill="none"
      viewBox="0 0 50 49"
    >
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      >
        <path d="M47.54 21.683A22.823 22.823 0 0027.858 2.19 22.808 22.808 0 005.262 13.23M2.46 27.317a22.822 22.822 0 0042.264 8.453"></path>
        <path d="M41.905 35.771a2.818 2.818 0 105.636 0 2.818 2.818 0 00-5.636 0zM2.46 13.231a2.817 2.817 0 105.635 0 2.817 2.817 0 00-5.635 0zM16.547 24.5a8.453 8.453 0 1016.906 0 8.453 8.453 0 00-16.906 0z"></path>
      </g>
    </svg>
  );
};

export default Experience;
