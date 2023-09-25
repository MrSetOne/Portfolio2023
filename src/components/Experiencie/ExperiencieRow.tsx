import { useSpring, type MotionValue, useMotionValueEvent, motion } from 'framer-motion'
import React, { useMemo, useRef } from 'react'
import FatCap from '../icons/FatCap'

interface Props {
  dir?: 'left' | 'right',
  scrollRef: React.RefObject<HTMLDivElement>,
  screenWidth: number,
  scrollYProgress: MotionValue<number>
}

const ExperiencieRow = ({dir='left', scrollRef, screenWidth, scrollYProgress}:Props) => {

  const { current:knowledge } = useRef(
    [
      {
        title: 'React',
        icon: <FatCap color='black' size='1rem' />,
      }
    ]
  )

  const arr = useMemo(() => {
    return Array((Math.ceil(screenWidth / 100))+5).fill(knowledge[0])
  }, [screenWidth])

  const x = useSpring(0, { stiffness: 600, damping: 200 })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalElementWidh = (scrollRef.current?.scrollWidth || 0) - screenWidth
    if(totalElementWidh){
      if(dir === 'right'){
        x.set((latest*totalElementWidh)*-1)
      }
      else{
        x.set((totalElementWidh * -1)*(latest-1)*-1)
      }
    }
  })

  return (
    <motion.div 
        ref={scrollRef}
        style={{display:'flex',x, gap:'1rem'}}
      >
        {arr.map((item,index)=>(
          <div 
            key={index} 
            style={{
              display:'flex',
              backgroundColor:'gray',
              padding:'.5rem 1rem',
              borderRadius:'5rem'
            }} 
          >
            {item.icon}
            <p>{item.title}</p>
            <p></p>
          </div>
        ))  
        }
      </motion.div>
  )
}

export default ExperiencieRow