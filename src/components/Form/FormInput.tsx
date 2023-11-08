import React, { useEffect, useMemo } from "react";
import type { inputState } from "./ContactForm";
import "./FormInput.scss";
import CheckerIcon from "./CheckerIcon";

interface Props {
  setState: React.Dispatch<React.SetStateAction<inputState>>;
  state: inputState;
  placeholder: string;
  type: "text" | "email";
  alertVisible: boolean;
}

const FormInput = ({
  placeholder,
  setState,
  type,
  state,
  alertVisible,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidText = value !== "";
    const isValidEmail = emailRegex.test(value);
    const isValid = type === "text" ? isValidText : isValidEmail;

    setState((prev) => ({ ...prev, isValid, value }));
  };

  return (
    <div className="FormInput">
      <input onChange={handleChange} type="text" placeholder={placeholder} />
      <CheckerIcon isValid={state.isValid} alertVisible={alertVisible} />
    </div>
  );
};

export default FormInput;
