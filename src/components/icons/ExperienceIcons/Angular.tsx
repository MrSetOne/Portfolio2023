import React from "react";
interface Props {
  color?: string;
  size?: string;
}
const Angular = ({ color = "white", size = "1rem" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      viewBox="0 0 32 32"
    >
      <path d="M24.826 23.885h-3.297l-1.777-4.377h-7.507l-1.777 4.379H7.169l8.83-19.571zM15.999 1.004L1.854 5.98l2.157 18.458L16 30.995l11.992-6.551 2.154-18.462-14.147-4.977zm-2.585 15.802h5.171l-2.587-6.133z"></path>
    </svg>
  );
};

export default Angular;
