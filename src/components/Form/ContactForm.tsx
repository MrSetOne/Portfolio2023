import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import "./ContactForm.scss";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { sendForm, send } from "@emailjs/browser";
import SubmitBtn from "./SubmitBtn";
import { motion } from "framer-motion";
import Check from "./Check";
import CV from "../../assets/Michael_Lara.pdf";

interface inputState {
  isValid: boolean;
  value: string;
}

const ContactForm = () => {
  const { current: inputInitialState } = useRef<inputState>({
    isValid: false,
    value: "",
  });

  const serviceID = import.meta.env.PUBLIC_REACT_APP_SERVICE_ID || "";
  const templateID = import.meta.env.PUBLIC_REACT_APP_YOUR_TEMPLATE_ID || "";
  const publicKey = import.meta.env.PUBLIC_REACT_APP_PUBLIC_KEY || "";

  const [name, setName] = useState<inputState>(inputInitialState);
  const [email, setEmail] = useState<inputState>(inputInitialState);
  const [message, setMessage] = useState<inputState>(inputInitialState);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const canSubmit = useMemo(() => {
    return name.isValid && email.isValid && message.isValid;
  }, [name, email, message]);

  const downloadCV = useCallback(async () => {
    await fetch(CV)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Michael_Lara.pdf";
        a.click();
      });
  }, []);

  const handleSubmit = useCallback(
    async (e: any) => {
      try {
        e.preventDefault();
        if (e.nativeEvent.submitter.classList.contains("form__btns--cv")) {
          downloadCV();
          return;
        }
        setIsSending(true);
        if (!canSubmit) {
          setAlertVisible(true);
          return;
        }
        const data = {
          name: name.value,
          email: email.value,
          message: message.value,
        };
        await send(serviceID, templateID, data, publicKey);
        setIsSubmited(true);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsSending(false);
        }, 2000);
      }
    },
    [name, email, message, canSubmit]
  );

  return (
    <div className="form__container">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 1 }}
        animate={{ opacity: isSubmited ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <FormInput
          setState={setName}
          placeholder="Nombre"
          type="text"
          state={name}
          alertVisible={alertVisible}
        />
        <FormInput
          setState={setEmail}
          placeholder="Email"
          type="email"
          state={email}
          alertVisible={alertVisible}
        />
        <FormTextArea
          alertVisible={alertVisible}
          setState={setMessage}
          state={message}
        />
        <div className="form__btns">
          <motion.button
            className="form__btns--cv"
            whileHover={{
              backgroundColor: "#fca311",
              color: "#fff",
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Descargar CV
          </motion.button>
          <SubmitBtn cansubmit={canSubmit} isLoading={isSending} />
        </div>
      </motion.form>
      {isSubmited && (
        <motion.div
          className="form__end"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <Check animate color="#fca311" width={"20%"} />
          <motion.h3
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.5,
            }}
          >
            ¡Mensaje enviado!
          </motion.h3>
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 0.5,
            }}
          >
            Te contestaré con la mayor brevedad posible 😊
          </motion.p>
          <motion.button
            onClick={downloadCV}
            className="form__btns--cv"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.7,
                duration: 0.5,
              },
            }}
            whileHover={{
              backgroundColor: "#fca311",
              color: "#fff",
              scale: 1.05,
              boxShadow: "0px 0px 10px 0px #fca311",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Descargar CV
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
