import { useEffect } from "react";
import "./index.css";
import Title from "../../components/Title/Title";
import { useLoginValidation } from "../../hooks/useLoginValidation";
import { signInAPI } from "../../api/auth";
import { useCheckLogin } from "../../hooks/useLoginCheck";
import { usePageMove } from "../../hooks/usePageMove";
import { routes } from "../index";

const SignIn = () => {
  const { checkForm, disabled } = useLoginValidation();
  const { isLogin } = useCheckLogin();
  const { goToPage } = usePageMove();

  const onSubmit = (event) => {
    event.preventDefault();

    const {
      email: { value: id },
      password: { value: pw },
    } = event.currentTarget;

    signInAPI({ email: id, password: pw });
  };

  useEffect(
    function loginUserRedirect() {
      if (isLogin) {
        alert("이미 로그인 하셨습니다.");
        goToPage(routes.todo);
      }
    },
    [isLogin, goToPage]
  );

  return (
    <div className="signUpWrap">
      <Title
        mainTitle="원티드 프리온보딩 프론트엔드 - 선발 과제"
        subTitle="로그인"
      />
      <form className="formWrap" onSubmit={onSubmit}>
        <input
          data-testid="email-input"
          placeholder="이메일을 입력해주세요."
          type="text"
          name="email"
          onChange={checkForm}
          required
        />
        <input
          data-testid="password-input"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          type="password"
          onChange={checkForm}
          required
        />
        <button data-testid="signin-button" type="submit" disabled={!disabled}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignIn;
