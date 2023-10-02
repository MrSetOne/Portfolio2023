import React from 'react'
import { motion } from 'framer-motion'
import './HeroArrow.scss'
import { useWindowSize } from 'usehooks-ts'


const HeroArrow = () => {


  return (


    
    
    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Capa 1"
        viewBox="0 0 27 1008.21"
        style={{position:'absolute', top:'1rem', left:'1rem', zIndex:556, height:'60vh'}}
      >
        <circle cx="13.5" cy="13.5" r="13" fill="#717171"></circle>
        <motion.path
          fill="none"
          stroke="#717171"
          strokeMiterlimit="10"
          initial={{d:`M13.5 0.5L13.5 13.5`, opacity:0}}
          animate={{d:'M13.5 1007.5L13.5 13.5', opacity:1}}
          transition={{duration:1}}
          style={{strokeWidth:3}}
        />
        <motion.path
          fill="none"
          stroke="#717171"
          strokeMiterlimit="10"
          initial={{d:`M1.5 5.16L13.84 7.5 26.34 5`, opacity:0}}
          animate={{d:'M1.5 995.16L13.84 1007.5 26.34 995', opacity:1}}
          transition={{duration:1}}
          style={{strokeWidth:3}}
        />
      </svg>







// V1

    // <div className='HeroArrow' >
    //   <div className='HeroArrow__dot'/>
    //   <div
    //     className='HeroArrow__line'
    //   >
    //     <motion.div 
    //       initial={{height:0}}  
    //       animate={{height:'85vh'}}
    //       transition={{duration:1}}
    //     />
    //     <motion.svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="1.5rem"
    //       height="1.5rem"
    //       className="icon"
    //       viewBox="0 0 1024 1024"
    //       fill='#717171'
    //       initial={{opacity:0}}
    //       animate={{opacity:1}}
    //       transition={{duration:.7}}
    //     >
    //       <path d="M903.232 256L960 306.432 512 768 64 306.432 120.768 256 512 659.072z"></path>
    //     </motion.svg>
    //   </div>
    // </div>

// V0

    // <svg 
    //   style={{height:'100vh', zIndex:4}}
    //   xmlns="http://www.w3.org/2000/svg" 
    //   width="80" 
    //   fill="none" 
    //   viewBox="0 0 14 100"
    // >
    //   <motion.path
    //     stroke="#717171"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     initial={{d:'M7 0v12m0 0l5-5m-5 5l-5-5'}}
    //     animate={{d:'M7 0v89m0 0l5-5m-5 5l-5-5'}}
    //   ></motion.path>
    // </svg>
  )
}

export default HeroArrow