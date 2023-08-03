import "./index.css";
import Title from "../../components/Title/Title";
import { useLoginValidation } from "../../hooks/useLoginValidation";
import { signInAPI } from "../../api/api";

const SignIn = () => {
  const { checkForm, disabled } = useLoginValidation();

  const onSubmit = (event) => {
    event.preventDefault();

    const {
      email: { value: id },
      password: { value: pw },
    } = event.currentTarget;

    signInAPI({ email: id, password: pw });
  };

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
