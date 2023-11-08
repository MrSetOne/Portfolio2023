import React from "react";
interface Props {
  color?: string;
  size?: string;
}
const Jira = ({ color = "white", size = "1rem" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      viewBox="0 0 32 32"
    >
      <path d="M31.099 15.104L16 0 .896 15.104a1.273 1.273 0 000 1.797L16 32l15.099-15.099c.5-.49.5-1.302 0-1.797zM16 20.734L11.266 16 16 11.271 20.729 16z"></path>
    </svg>
  );
};

export default Jira;
