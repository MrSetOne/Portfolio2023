import React from "react";

interface Props {
  color?: string;
  size?: string;
}

const Multer = ({ color = "white", size = "1rem" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 -1.5 35 35"
      fill={color}
    >
      <path d="M29.426 15.535s.649-8.743-7.361-9.74c-6.865-.701-8.955 5.679-8.955 5.679s-2.067-1.988-4.872-.364c-2.511 1.55-2.067 4.388-2.067 4.388S.595 16.582.595 22.266C.719 27.943 6.649 28 6.649 28H16v-6h-3l5-5 5 5h-3v6h8.467s5.52.006 6.295-5.395c.369-5.906-5.336-7.07-5.336-7.07z"></path>
    </svg>
  );
};

export default Multer;
