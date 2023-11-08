import React from 'react'

interface Props{
  size?:string
  strokeWidth?:number
}

const Code = ({size='1rem', strokeWidth=1}:Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      fill="none"
      viewBox="1 2 22 20"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M7 8l-4 3.692L7 16m10-8l4 3.692L17 16M14 4l-4 16"
      ></path>
    </svg>
  )
}

export default Code