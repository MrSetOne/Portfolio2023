import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'
import CCrowmie from './Cards/CCrowmie'

type Cards = 'Crowmie' | 'Cantastik'

interface Props {
  children: React.ReactNode
  target: Cards
}

const ModalBtn = ({ children, target }:Props) => {

  const [open, setOpen] = useState(false)

  
  const imperativeClose = () => {
    setOpen(false)
    document.body.style.overflow = 'auto';
    const modalExternalBg = document.getElementsByClassName('modalExternalBg')[0] as HTMLElement
    modalExternalBg.classList.remove('modalExternalBg--active')
    setTimeout(() => {
      modalExternalBg.remove()
    }, 300);
  }
  
  const toRender = useMemo(() => {
    const getContent = (target:Cards) => {
      switch(target){
        case 'Crowmie':
          return <CCrowmie/>
        case 'Cantastik':
          return <div>Cantastik</div>
        default:
          return <div>default</div>
      }
    }
    
    const content = getContent(target) 
    
    
    return (
      <Modal open={open} imperativeClose={imperativeClose} >
        {content}
      </Modal>)
    }
  , [target])
  
  useEffect(() => {
    if(open){
      document.body.style.overflow = 'hidden';
      document.body.appendChild(document.createElement('div')).className = 'modalExternalBg'
      const modalExternalBg = document.getElementsByClassName('modalExternalBg')[0] as HTMLElement
      modalExternalBg.style.height = document.body.clientHeight + 'px'
      modalExternalBg.classList.add('modalExternalBg--active')
      modalExternalBg.addEventListener('click', () => {
        setOpen(false)
        document.body.style.overflow = 'auto';
        modalExternalBg.classList.remove('modalExternalBg--active')
        setTimeout(() => {
          modalExternalBg.remove()
        }, 300);
      })
    }
  }, [open])
  

  return (
    <>
      <button 
        onClick={()=>setOpen(true)}
        style={{
          cursor:'pointer',
          border:'none', 
          backgroundColor:'transparent'
        }} 
      >
        {children}
      </button>
      {open && createPortal(toRender, document.getElementById('modalPortal') as HTMLElement)}
    </>
  )
}

export default ModalBtn