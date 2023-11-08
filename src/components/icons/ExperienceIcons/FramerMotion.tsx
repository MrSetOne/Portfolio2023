import React from "react";

interface Props {
  color?: string;
  size?: string;
}

const FramerMotion = ({ color = "white", size = "1rem" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      fill={color}
    >
      <path fill="none" d="M0 0H48V48H0z"></path>
      <path d="M9.3 2h29.4v14.7H24zm0 14.7H24l14.7 14.6H9.3zm0 14.6H24V46z"></path>
    </svg>
  );
};

export default FramerMotion;
