import React, { useEffect, useState } from 'react'
import "./Modal.scss"
import { motion, motionValue, useTransform } from 'framer-motion'

interface Props {
  children?: React.ReactNode
  open: boolean
  imperativeClose: () => void
}

const Modal = ({children, imperativeClose}:Props) => {

  const y = motionValue(0)

  const [closing, setClosing] = useState(false)

  const variants = {
    open:{
      bottom:0,
      opacity:1
    },
    close:{
      bottom:'-80vh',
      opacity:0
    }
  }

  const closeCard = () => {
    setClosing(true)
    setTimeout(() => {
      return imperativeClose()
    }, 100);
  }

  useEffect(() => y.onChange(latest => {
    console.log(latest)
    if(latest >= 100) return closeCard()
  }), [])

  return (
    <motion.div 
      className='Modal'
      initial={{bottom:'-80vh', opacity:0}}
      variants={variants}
      animate={closing ? 'close' : 'open'}
    >
      <motion.div drag='y' dragConstraints={{top:0, bottom:0}} onClick={closeCard} style={{y}} className='Modal__head'>
        <motion.div />
      </motion.div>
      <motion.div className='Modal__bg' style={{y}}/>
      <motion.div className='Modal__content' style={{y}}>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
        <h2>Pruebita Sexy</h2>
      </motion.div>
    </motion.div>
  )
}

export default Modal