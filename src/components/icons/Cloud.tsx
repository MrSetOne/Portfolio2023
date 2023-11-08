import React from 'react'

interface Props{
  size?:string
  strokeWidth?:number
}

const Cloud = ({ size, strokeWidth }:Props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    fill="none"
    viewBox="0 4 24 16"
  >
    <g>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M15 11l-4 4-2-2m14 2a4 4 0 00-4.07-4A7.002 7.002 0 005.669 9.01 5 5 0 006 19h13a4 4 0 004-4z"
      ></path>
    </g>
  </svg>
  )
}

export default Cloud