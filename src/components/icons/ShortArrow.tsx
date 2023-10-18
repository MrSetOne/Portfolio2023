import React, { useMemo } from 'react'

interface Props {
  direction?: 'up' | 'down' | 'left' | 'right'
  size?: string
  color?: string
}

const ShortArrow = ({direction='right', size='.5rem', color='#fca311'}:Props) => {

  const rotation = useMemo(() => {
    switch (direction) {
      case 'up':
        return 'rotate(-90deg)'
      case 'down':
        return 'rotate(90deg)'
      case 'left':
        return 'rotate(180deg)'
      case 'right':
        return 'rotate(0)'
      default:
        return 'rotate(0)'
    }
  }, [direction])

  return (
    <svg 
      id="Capa_1" 
      data-name="Capa 1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 77.21 134.36"
      width={size}
      height={size}
      style={{transform: rotation}}
    >
      <polyline 
        points="5.21 4.95 67.31 67.05 4.95 129.41" 
        fill="transparent"
        stroke={color}
        strokeWidth="15"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

export default ShortArrow
