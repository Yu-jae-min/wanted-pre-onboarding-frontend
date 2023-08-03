import { useMemo } from "react";
import "./authForm.css";
import { useLoginValidation } from "../../hooks/useLoginValidation";
import { signUpAPI, signInAPI } from "../../api/auth";
import { PLACE_HOLDER } from "../../constants/constants";

const AuthForm = ({ type }) => {
  const { checkForm, disabled } = useLoginValidation();

  const onSubmit = (event) => {
    event.preventDefault();

    const {
      email: { value: id },
      password: { value: pw },
    } = event.currentTarget;

    if (type === "signIn") {
      return signInAPI({ email: id, password: pw });
    }

    return signUpAPI({ email: id, password: pw });
  };

  const bottomButton = useMemo(() => {
    if (type === "signIn") {
      return (
        <button data-testid="signin-button" type="submit" disabled={!disabled}>
          로그인
        </button>
      );
    }

    return (
      <button data-testid="signup-button" type="submit" disabled={!disabled}>
        회원가입
      </button>
    );
  }, [type, disabled]);

  return (
    <form className="formWrap" onSubmit={onSubmit}>
      <input
        data-testid="email-input"
        placeholder={PLACE_HOLDER.emailInput}
        type="text"
        name="email"
        onChange={checkForm}
        required
      />
      <input
        data-testid="password-input"
        placeholder={PLACE_HOLDER.passwordInput}
        type="password"
        name="password"
        onChange={checkForm}
        required
      />
      {bottomButton}
    </form>
  );
};

export default AuthForm;
