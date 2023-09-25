import React from 'react'
interface Props {
  color?: string;
  size?: string;
}
const I18n = ({ color='white', size='1rem' }:Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
      overflow="hidden"
      viewBox="0 0 1024 1024"
    >
      <path
        d="M547.797 638.208L443.392 535.04l1.237-1.28A720.17 720.17 0 00597.12 265.387h120.448v-82.304H429.824v-82.176h-82.219v82.218H59.82v82.262h459.178a648.235 648.235 0 01-130.304 219.946 643.243 643.243 0 01-94.976-137.728h-82.176A722.048 722.048 0 00333.995 535.04L124.8 741.419l58.368 58.368L388.693 594.26l127.872 127.83 31.232-83.84m231.424-208.427h-82.218l-184.96 493.312h82.218L640.3 799.829H835.54l46.464 123.307h82.219L779.221 429.824m-107.69 287.744l66.56-178.005 66.602 178.005z"
      ></path>
    </svg>
  )
}

export default I18n