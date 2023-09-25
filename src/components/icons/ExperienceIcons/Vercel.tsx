import React from 'react'
interface Props {
  color?: string;
  size?: string;
}
const Vercel = ({ color='white', size='1rem' }:Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path d="M12 1l12 21H0L12 1z"></path>
    </svg>
  )
}

export default Vercel