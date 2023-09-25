import React, { useRef, useEffect, useState, useMemo } from 'react'
import FatCap from '../icons/FatCap'
import {motion, useAnimationFrame, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform, useVelocity, wrap} from 'framer-motion'
import { useScreen, useWindowSize } from 'usehooks-ts'
import ExperiencieRow from './ExperiencieRow'

const Experiencie = () => {
  const ref = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  
  const { width:screenWidth } = useWindowSize()
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        backgroundColor:'white',
        overflow:'hidden',
        display:'flex',
        flexDirection:'column',
        gap:'5rem',
      }}
    >
      <ExperiencieRow screenWidth={screenWidth} scrollRef={scrollRef} scrollYProgress={scrollYProgress} dir='right' />
      <ExperiencieRow screenWidth={screenWidth} scrollRef={scrollRef} scrollYProgress={scrollYProgress} dir='left' />
      <ExperiencieRow screenWidth={screenWidth} scrollRef={scrollRef} scrollYProgress={scrollYProgress} dir='right' />
      <ExperiencieRow screenWidth={screenWidth} scrollRef={scrollRef} scrollYProgress={scrollYProgress} dir='left' />
      <ExperiencieRow screenWidth={screenWidth} scrollRef={scrollRef} scrollYProgress={scrollYProgress} dir='right' />
      <ExperiencieRow screenWidth={screenWidth} scrollRef={scrollRef} scrollYProgress={scrollYProgress} dir='left' />
    </div>
  )
}

export default Experiencie