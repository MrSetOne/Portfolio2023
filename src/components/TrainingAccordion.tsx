import React, { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from '../hooks/useWindowsSize'
import './TrainingAccordion.scss'

const Accordion = () => {
  const [open, setOpen] = useState(false)
  const firstDot = useRef<HTMLInputElement>(null)
  const lastDot = useRef<HTMLInputElement>(null)

  const { width } = useWindowSize()

  const variants = {
    open: { 
      height: 'auto',
      WebkitMaskImage:'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)', 
      maskImage:'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)'
    },
    closed: { 
      height: 368,
      WebkitMaskImage:'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)', 
      maskImage:'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
    }
  }

  const isSmallScreen = useMemo(() => width < 700, [width])

  const AccordionClosed = useMemo(() => {
    if(!isSmallScreen) return true
    return open
  }, [isSmallScreen, open])

  const lineHeight = useMemo(() => {
    if(!lastDot.current || !firstDot.current) return 0;
    return lastDot.current.getBoundingClientRect().top - firstDot.current.getBoundingClientRect().top
  }, [width])
  
  return (
    <>
      <motion.div
        variants={variants}
        animate={!AccordionClosed ? 'closed' : 'open'}
        style={{ overflow: 'hidden', position:'relative'  }}
        >
          <div id="line" style={{height:lineHeight}}/>
          <ul className="training__list">
            <li className="training__item" >
              <div className="trainingItem__header">
                <div ref={firstDot} className="dotItem" />
                <span>
                  2023
                </span>
                <h3>DevTalles - Flutter Móvil: De cero a experto (En curso)</h3>
              </div>
              <p className="trainingItem__description" >Formación de 50 horas practicas sobre el uso del lenguaje Dart y el framework Flutter para el desarrollo de aplicaciones para IOS y Android.</p>
            </li>
            <li className="training__item" >
              <div className="trainingItem__header">
                <div className="dotItem" />
                <span>
                  2022
                </span>
                <h3>The Bridge - Full Stack Development</h3>
              </div>
              <p className="trainingItem__description" >Formación de 480 horas de entrenamiento práctico de desarrollo web Full Stack (Frontend y Backend). Uso de frameworks y librerías como NodeJs y React, despliegue en entornos Cloud y bases de datos, tanto relacionales como no relacionales.</p>
            </li>
            <li className="training__item" >
              <div className="trainingItem__header">
                <div className="dotItem" />
                <span>
                  2021    
                </span>
                <h3>Udemy - Introducción al desarrollo Web</h3>
              </div>
              <p className="trainingItem__description"  >Curso de 70h sobre las bases del desarrollo web, donde aprendí principalmente HTML, CSS, Sass y JavaScript.</p>
            </li>
            <li className="training__item" >
              <div className="trainingItem__header">
                <div ref={lastDot} className="dotItem" />
                <span>
                  2014
                </span>
                <h3>IES Paco Moyá - Bachillerato de artes</h3>
              </div>
            </li>
          </ul>
      </motion.div>
      <button onClick={() => setOpen(!open)} className='TrainingAccordion__Btn'>
        <div/>
        <span>{open?'Ocultar':'Ver más'}</span>
        <div/>
      </button>
    </>
  )
}

export default Accordion