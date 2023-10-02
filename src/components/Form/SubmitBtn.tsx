import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import './SubmitBtn.scss'

const Spinner = () => {
  return(
      <div className='Spinner'>
        <motion.div 
          className='Spinner__gavel'
          animate={{
            width:['.5rem','1rem','.5rem'],
            height:['.5rem','1rem','.5rem'],
          }}
          transition={{
            duration: .5,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay:.5,
          }}
        />
        <motion.div 
          className='Spinner__wave'
          animate={{
            width:['.5rem','1.5rem','.5rem'],
            height:['.5rem','1.5rem','.5rem'],
            opacity:[1,0,0],
          }}
          transition={{
            duration: .5,
            repeat: Infinity,
            delay: 0.5,
            ease: 'easeInOut',
            repeatDelay:.5,
          }}
        />
      </div>
  )
}


interface Props {
  cansubmit: boolean
  isLoading: boolean
}

const SubmitBtn = ({ cansubmit, isLoading }:Props) => {

  const ref = useRef<HTMLButtonElement>(null)
  const width = ref.current?.offsetWidth || 'auto'

  const variants = {
    avalible: {
      opacity: 1,
      cursor: 'pointer',
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    hidden: {
      opacity: .5,
      cursor: 'not-allowed',
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <motion.button 
      ref={ref}
      style={{width}}
      disabled={!cansubmit || isLoading}
      className='SubmitBtn' 
      type='submit'
      variants={variants}
      animate={cansubmit ? 'avalible' : 'hidden'}
    >
      {!isLoading?"Enviar":<Spinner/>}
    </motion.button>
  )
}

export default SubmitBtn