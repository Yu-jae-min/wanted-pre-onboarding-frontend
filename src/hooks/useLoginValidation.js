import { useState, useMemo } from "react";

const useLoginValidation = () => {
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  const checkForm = (event) => {
    const { name, value } = event.currentTarget;

    const idValid = value.includes("@");
    const pwValid = value.length >= 8;
    const isValid = name === "email" ? idValid : pwValid;

    setValidation({ ...validation, [name]: isValid });
  };

  const disabled = useMemo(() => {
    const { email, password } = validation;

    return email && password;
  }, [validation]);

  return { checkForm, disabled };
};

export { useLoginValidation };
