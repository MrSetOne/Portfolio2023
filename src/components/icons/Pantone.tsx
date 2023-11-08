import React from 'react'

interface Props{
  size?:string
}

const Pantone = ({size='1rem'}:Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        fillRule="evenodd"
        d="M1.25 6a4.75 4.75 0 019.5 0v.432l2.033-2.033a4.75 4.75 0 116.718 6.717l-2.134 2.134H18a4.75 4.75 0 110 9.5H6A4.75 4.75 0 011.25 18V6zm8.214 15.25H18a3.25 3.25 0 000-6.5h-2.133l-5.978 5.978a4.77 4.77 0 01-.425.522zm1.286-3.504l7.69-7.69a3.25 3.25 0 10-4.596-4.597L10.75 8.553v9.193zM6 2.75A3.25 3.25 0 002.75 6v12a3.25 3.25 0 006.5 0V6A3.25 3.25 0 006 2.75zm0 15a.25.25 0 100 .5.25.25 0 000-.5zM4.25 18a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Pantone