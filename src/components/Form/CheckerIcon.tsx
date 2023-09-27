import React, { useEffect, useMemo } from 'react'
import {AnimatePresence, motion} from 'framer-motion'

const Check = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3rem"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        stroke='white'
        strokeWidth='.5'
        fillRule="evenodd"
        d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-11C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm4.8 7.6a1 1 0 10-1.6-1.2l-5.308 7.078-2.185-2.185a1 1 0 00-1.414 1.414l3 3A1 1 0 0010.8 16.6l6-8z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

const Error = () => {
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3rem"
      fill="white"
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        stroke='white'
        strokeWidth='.5'
        fillRule="evenodd"
        d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-11C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 5a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1zm1.25 10.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

interface Props {
  isValid: boolean
  alertVisible: boolean
}

const CheckerIcon = ({isValid:parentIsValid, alertVisible}:Props) => {
  
  const variants = {
    container:{
      valid:{
        backgroundColor:'transparent',
        rotate:360,
      },
      invalid:{
        backgroundColor:'rgb(220 106 106)',
        rotate:0,
      },
      invisible:{
        opacity:0,
        rotate:0,
      }
    },
  }

  const variantActive = useMemo(()=>{
    if(!alertVisible) return 'invisible'
    return parentIsValid ? 'valid' : 'invalid'
  },[alertVisible, parentIsValid])

  return (
    <motion.div 
      variants={variants.container}
      animate={variantActive}
      style={{
        padding:'.2rem', 
        position:'absolute',
        right:'0',
        transform:'translateY(-50%)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'50%',
      }} 
    >
        {parentIsValid ? <Check/> : <Error/>}
    </motion.div>
  )
}

export default CheckerIcon