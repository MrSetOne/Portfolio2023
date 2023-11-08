import { color } from "framer-motion";
import React from "react";
interface Props {
  color?: string;
  size?: string;
}
const NodeJs = ({ color = "white", size = "1rem" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      viewBox="0 0 48 48"
    >
      <g data-name="Layer 2">
        <path fill="none" d="M0 0H48V48H0z" data-name="invisible box"></path>
        <path d="M24 4L7 16v16l17 12 17-12V16z" data-name="Q3 icons"></path>
      </g>
    </svg>
  );
};

export default NodeJs;
