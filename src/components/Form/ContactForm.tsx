import React, { useState, useRef, useEffect, useCallback } from 'react'
import './ContactForm.scss'
import FormInput from './FormInput'

const EmailInput = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(e.target.value)
  }




  return (
    <div>
      <input onChange={handleChange} type="text" placeholder='Email' />
    </div>
  )
}

export type inputState = {
  isValid: boolean
  value: string
}

const ContactForm = () => {
  const { current: inputInitialState} = useRef<inputState>({
    isValid: false,
    value: '',
  })
  
  const [name, setName] = useState<inputState>(inputInitialState)
  const [email, setEmail] = useState<inputState>(inputInitialState)
  const [message, setMessage] = useState<inputState>(inputInitialState)
  const [alertVisible, setAlertVisible] = useState(false)

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setAlertVisible(true)
  },[name, email, message])
  
  return (
    <form onSubmit={handleSubmit} className='form__container'>
      <FormInput setState={setName}  placeholder='Nombre' type='text' state={name} alertVisible={alertVisible} />
      <FormInput setState={setEmail}  placeholder='Email' type='email' state={email} alertVisible={alertVisible} />
      <textarea placeholder='Mensaje' cols={30} rows={10}/>
      <div>
        <button>
          Descargar CV
        </button>
        <button type='submit'>
          Enviar
        </button>
      </div>
    </form>
  )
}

export default ContactForm