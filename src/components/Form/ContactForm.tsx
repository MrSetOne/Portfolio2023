import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import './ContactForm.scss'
import FormInput from './FormInput'
import FormTextArea from './FormTextArea'
import { sendForm, send } from '@emailjs/browser'

interface inputState {
  isValid: boolean
  value: string
}

const ContactForm = () => {
  const { current: inputInitialState} = useRef<inputState>({
    isValid: false,
    value: '',
  })

  const serviceID = import.meta.env.PUBLIC_REACT_APP_SERVICE_ID || "";
  const templateID = import.meta.env.PUBLIC_REACT_APP_YOUR_TEMPLATE_ID || "";
  const publicKey = import.meta.env.PUBLIC_REACT_APP_PUBLIC_KEY || "";
  
  const [name, setName] = useState<inputState>(inputInitialState)
  const [email, setEmail] = useState<inputState>(inputInitialState)
  const [message, setMessage] = useState<inputState>(inputInitialState)
  const [alertVisible, setAlertVisible] = useState(false)

  const canSubmit = useMemo(()=>{
    return name.isValid && email.isValid && message.isValid
  },[name, email, message])


  const handleSubmit = useCallback(async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!canSubmit) {
      setAlertVisible(true)
      return
    }

    console.log({serviceID, templateID, target:e.target, publicKey});

    const data = {
      name: name.value,
      email: email.value,
      message: message.value
    }

    await send( serviceID, templateID, data, publicKey);
    


  },[name, email, message, canSubmit])
  
  return (
    <form onSubmit={handleSubmit} className='form__container'>
      <FormInput setState={setName}  placeholder='Nombre' type='text' state={name} alertVisible={alertVisible} />
      <FormInput setState={setEmail}  placeholder='Email' type='email' state={email} alertVisible={alertVisible} />
      <FormTextArea alertVisible={alertVisible} setState={setMessage} state={message} />
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