import React from 'react'
import "./Modal.scss"
import { motion } from 'framer-motion'

interface Props {
  children?: React.ReactNode
  open?: boolean
  imperativeClose?: () => void
}

const Modal = ({children, imperativeClose}:Props) => {
  return (
    <motion.div 
      className='Modal'
      initial={{bottom:'-80vh'}}
      animate={{bottom:0}}
    >
      <div className='Modal__head'>
        <div onClick={imperativeClose}/>
      </div>
      <div className='Modal__content'>
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
      </div>
    </motion.div>
  )
}

export default Modal