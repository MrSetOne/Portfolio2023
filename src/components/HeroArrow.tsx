import React from 'react'
import { motion } from 'framer-motion'


const HeroArrow = () => {
  return (
    <svg 
      style={{height:'100vh'}}
      xmlns="http://www.w3.org/2000/svg" 
      width="80" 
      fill="none" 
      viewBox="0 0 14 100"
    >
      <motion.path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{d:'M7 0v12m0 0l5-5m-5 5l-5-5'}}
        animate={{d:'M7 0v89m0 0l5-5m-5 5l-5-5'}}
      ></motion.path>
    </svg>
  )
}

export default HeroArrow