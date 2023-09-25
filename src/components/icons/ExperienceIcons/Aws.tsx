import React from 'react'
interface Props {
  color?: string;
  size?: string;
}
const Aws = ({ color='white', size='1rem' }:Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      data-name="Flat Line"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.54 15A9.23 9.23 0 0021 10.28 8.05 8.05 0 0017 9"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 12.51a15.19 15.19 0 01-7.37 1.43A14.62 14.62 0 013 11"
        data-name="primary"
      ></path>
    </svg>
  )
}

export default Aws