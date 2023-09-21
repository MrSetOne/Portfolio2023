import React, {useMemo, useState, useCallback} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInterval } from 'usehooks-ts'
import './HeroTitles.scss'

const HeroTitles = () => {

  const [step, setStep] = useState(0)

  const changeStep = useCallback(
    () => {
      if (step < 2) {
        setStep(step+1)
      } else {
        setStep(0)
      }
    },
    [step],
  )

  useInterval(changeStep, 3000)

  const titles = useMemo(()=>{  
    return [
      {
        title: 'Frontend Developer',
      },
      {
        title: 'UI/UX Designer',
      },
      {
        title: 'BackEnd Developer',
      }
    ]
  },[step])

  return (
    <div style={{display:'flex', width:'100%', justifyContent:'flex-end', position:'relative'}}>
      {/* {titles.map((item)=>{
        return(
          <motion.span animate={{opacity:item.opacity, display:item.display, x:motion.x}}>
            {item.title}
          </motion.span>
        )
      })} */}
      <AnimatePresence>
        {step === 0 && (
          <motion.span
            className="hero__work"
            key="Frontend Developer"
            style={{position:'absolute', right:'0'}}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            >
            Frontend Developer
          </motion.span>
        )}
        {step === 1 && (
          <motion.span
          className="hero__work"
          key="UI/UX Designer"
          style={{position:'absolute', right:'0'}}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          
          >
            UI/UX Designer
          </motion.span>
        )}
        {step === 2 && (
          <motion.span
          className="hero__work"
          style={{position:'absolute', right:'0'}}
          key="BackEnd Developer"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            BackEnd Developer
          </motion.span>
        )}
      </AnimatePresence>
    </div>
    // hero__work
  )
}

export default HeroTitles