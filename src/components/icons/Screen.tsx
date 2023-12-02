import React from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from '../../hooks/useWindowsSize'

const Screen = () => {

  const {width} = useWindowSize()

  const variants = {
    desktop:{
      height:[98, 90, 98, 90, 98,98,98,80,98],
      x:[0,-20, 0,-20,0,0,0,0,0],
      y:[0, -5, 0, -5, 0, 0,0,18,0],
      transition:{repeat: Infinity, duration:2, repeatType:'loop', repeatDelay:5, delay:1}
    },
    mobile:{
      height:[98, 45, 45, 45, 98,98,98,80,98],
      x:[0, -20, 0, 20, 0,0,0,0,0],
      y:[0, -20, -20, -20, 0,0,0,18,0],
      transition:{repeat: Infinity, duration:3, repeatType:'loop', repeatDelay:1, delay:1}
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="280"
      height="214"
      fill="none"
      viewBox="0 0 280 214"
    >
      <rect
        width="268"
        height="203"
        x="6"
        y="5.5"
        stroke="#fff"
        strokeWidth="11"
        rx="34.5"
      ></rect>
      <motion.rect 
        variants={variants}
        animate={width > 650 ? 'desktop' : 'mobile'} 
        // transition={{repeat: Infinity, duration:3, repeatType:'loop', repeatDelay:1}}
        // transition={{repeat: Infinity, duration:2, repeatType:'loop', repeatDelay:5}} 
        width="25" 
        height="98" 
        x="72.5" 
        y="58" 
        fill="#fff" 
        rx="16.5"/>
      <motion.rect
        variants={variants}
        animate={width > 650 ? 'desktop' : 'mobile'}
        transition={{repeat: Infinity, duration:3, repeatType:'loop', repeatDelay:1}}
        // transition={{repeat: Infinity, duration:2, repeatType:'loop', repeatDelay:5}} 
        width="25"
        height="98"
        x="174.5"
        y="58"
        fill="#fff"
        rx="16.5"
      ></motion.rect>
    </svg>
  )
}

export default Screen