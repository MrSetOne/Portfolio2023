import React from "react";
interface Props {
  color?: string;
  size?: string;
}
const MateriaUI = ({ color = "white", size = "1rem" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474z"></path>
    </svg>
  );
};

export default MateriaUI;
