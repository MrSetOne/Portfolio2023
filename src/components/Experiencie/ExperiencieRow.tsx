import { useSpring, type MotionValue, useMotionValueEvent, motion } from 'framer-motion'
import React, { useMemo, useRef } from 'react'
import FatCap from '../icons/FatCap'
import ExperienceIcons from '../icons/ExperienceIcons/ExperienceIcons'

interface Props {
  dir?: 'left' | 'right',
  scrollRef: React.RefObject<HTMLDivElement>,
  screenWidth: number,
  scrollYProgress: MotionValue<number>
  knowledge: {
    title: string;
    color: string;
  }[]
}

const ExperiencieRow = ({dir='left', scrollRef, screenWidth, scrollYProgress, knowledge}:Props) => {

  const { current:unsortedArray } = useRef(knowledge.sort(()=>Math.random()-0.5))

  const cutedArray = useMemo(() => {
    const itemsLength = Math.ceil( screenWidth / 100)
    const items = unsortedArray.slice(0,itemsLength)
    return items
  }, [screenWidth, unsortedArray])

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
        {cutedArray.map((item,index)=>(
          <div 
            key={index} 
            style={{
              opacity:0.3,
              fontSize:'1.5rem',
              display:'flex',
              backgroundColor:`${item.color}`,
              padding:'.5rem 1rem',
              borderRadius:'5rem',
              color:'white',
              gap:'.7rem',
            }} 
          >
            <ExperienceIcons icon={item.title} />
            <p>{item.title}</p>
          </div>
        ))  
        }
      </motion.div>
  )
}

export default ExperiencieRow