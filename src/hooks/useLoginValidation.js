import { useState, useMemo } from "react";

const useLoginValidation = () => {
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  const checkForm = (event) => {
    const { name, value } = event.currentTarget;

    const emailCheck = value.includes("@");
    const passwordCheck = value.length >= 8;
    const conditions = name === "email" ? emailCheck : passwordCheck;

    if (conditions) setValidation({ ...validation, [name]: true });
  };

  const disabled = useMemo(() => {
    const { email, password } = validation;

    return email && password;
  }, [validation]);

  return { checkForm, disabled };
};

export { useLoginValidation };
