import React from "react";

interface Props {
  color?: string;
  size?: string;
}

const Illustrator = ({ color = "white", size = "1rem" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      viewBox="0 0 512 512"
    >
      <path d="M227.593 217.991l19.188 60.091h-62.627l18.825-60.091c4.346-14.48 7.964-31.493 11.582-45.611h.724c3.621 14.119 7.601 30.769 12.308 45.611zM511.5 85.667v340.667c0 46.842-38.325 85.167-85.167 85.167H85.667C38.825 511.5.5 473.175.5 426.333V85.667C.5 38.825 38.825.5 85.667.5h340.667C473.175.5 511.5 38.825 511.5 85.667zM324.246 380.885l-79.279-243.977h-56.83l-78.189 243.977h45.973l20.997-69.14h77.465l22.082 69.14h47.781zm75.274-176.288h-44.888v176.288h44.888V204.597zm2.532-49.229c-.362-13.756-9.772-24.252-24.977-24.252-14.842 0-24.976 10.496-24.976 24.252 0 13.395 9.772 23.891 24.614 23.891 15.566-.001 25.339-10.497 25.339-23.891z"></path>
    </svg>
  );
};

export default Illustrator;
