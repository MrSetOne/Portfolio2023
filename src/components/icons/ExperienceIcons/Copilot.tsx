import React from "react";
interface Props {
  color?: string;
  size?: string;
}
const Copilot = ({ color = "white", size = "1rem" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="icon icon-tabler icon-tabler-brand-github-copilot"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path fill={color} d="M4 18v-5.5c0-.667.167-1.333.5-2"></path>
      <path
        fill={color}
        d="M12 7.5c0-1-.01-4.07-4-3.5-3.5.5-4 2.5-4 3.5 0 1.5.002 4 3 4 4 0 5-2.5 5-4zM4 12c-1.333.667-2 1.333-2 2 0 1 0 3 1.5 4 3.001 2 6.5 3 8.5 3s5.499-1 8.5-3c1.5-1 1.5-3 1.5-4 0-.667-.667-1.333-2-2"
      ></path>
      <path fill={color} d="M20 18v-5.5c0-.667-.167-1.333-.5-2"></path>
      <path
        fill={color}
        d="M12 7.5l.003-.297.01-.269.027-.298.013-.105.033-.215c.014-.073.029-.146.046-.22l.06-.223C12.528 4.755 13.454 3.636 16 4c2.838.405 3.703 1.797 3.93 2.842l.036.204c.005.033.01.066.013.098l.016.185L20 7.5l-.003.49-.015.394-.02.271C19.84 10.021 19.307 11.5 17 11.5c-3.256 0-4.524-1.656-4.883-3.081l-.053-.242a3.865 3.865 0 01-.036-.235l-.021-.227A3.518 3.518 0 0112 7.5zM10 15v2M14 15v2"
      ></path>
    </svg>
  );
};

export default Copilot;
