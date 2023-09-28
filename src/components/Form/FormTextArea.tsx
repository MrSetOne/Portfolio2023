import React, { useState } from 'react'
import './FormTextArea.scss'
import type { inputState } from './ContactForm'

interface Props {
  setState: React.Dispatch<React.SetStateAction<inputState>>
  state: inputState
  alertVisible: boolean
}

const FormTextArea = ({ alertVisible, setState, state }:Props) => {
  
  const [length, setLength] = useState<number>(0)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('holi');
    const value = e.target.value
    const isValid = value !== ''
    setState((prev) => ({...prev, isValid, value }))
    setLength(value.length)
  }

  return (
    <div className='FormTextArea'>
      <textarea onChange={handleChange} placeholder='Mensaje' rows={10}/>
      <span>{length}</span>
    </div>
  )
}

export default FormTextArea