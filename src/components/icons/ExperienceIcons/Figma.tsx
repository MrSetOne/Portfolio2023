import React from "react";
interface Props {
  color?: string;
  size?: string;
}
const Figma = ({ color = "white", size = "1rem" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M8.667 9.417a2.583 2.583 0 100 5.166h2.583v-2.531a4.511 4.511 0 010-.104V9.417H8.667zm2.583-1.5H8.667a2.583 2.583 0 010-5.167h2.583v5.167zm1.5-5.167v5.167h2.583a2.584 2.584 0 000-5.167H12.75zm2.583 6.666a2.583 2.583 0 00-2.583 2.542v.083a2.583 2.583 0 102.583-2.625zm-6.666 6.667a2.584 2.584 0 102.583 2.584v-2.584H8.667z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Figma;
