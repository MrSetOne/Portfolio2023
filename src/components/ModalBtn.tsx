import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'


interface Props {
  children: React.ReactNode
}

const ModalBtn = ({ children }:Props) => {

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
  
  const prueba = <Modal open={open} imperativeClose={imperativeClose}/>
  
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
          border:'none', 
          backgroundColor:'transparent'
        }} 
      >
        {children}
      </button>
      {open && createPortal(prueba, document.getElementById('modalPortal') as HTMLElement)}
    </>
  )
}

export default ModalBtn