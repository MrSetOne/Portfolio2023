import React from 'react'
interface Props {
  color?: string;
  size?: string;
}
const Git = ({ color='white', size='1rem' }:Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0H24V24H0z"></path>
      <path d="M2.6 10.59L8.38 4.8l1.69 1.7A2 2 0 0011 8.73v5.54A2 2 0 0010 16a2 2 0 004 0 2 2 0 00-1-1.73V9.41l2.07 2.09a1.17 1.17 0 00-.07.5 2 2 0 102-2 1.17 1.17 0 00-.5.07L13.93 7.5a2 2 0 00-1.15-2.34 2.1 2.1 0 00-1.28-.09L9.8 3.38l.79-.78a2 2 0 012.82 0l8 8a2 2 0 010 2.82l-8 8a2 2 0 01-2.82 0l-8-8a2 2 0 01.01-2.83z"></path>
    </svg>
  )
}

export default Git