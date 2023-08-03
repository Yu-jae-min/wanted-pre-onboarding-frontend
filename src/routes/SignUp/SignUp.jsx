import "./index.css";
import Title from "../../components/common/Title";
import { useLoginValidation } from "../../hooks/useLoginValidation";
import { getSignUpAPI } from "../../api/api";

const SignUp = () => {
  const { checkForm, disabled } = useLoginValidation();

  const onSubmit = (event) => {
    event.preventDefault();

    const {
      email: { value: id },
      password: { value: pw },
    } = event.currentTarget;

    getSignUpAPI({ email: id, password: pw });
  };

  return (
    <div className="signUpWrap">
      <Title
        mainTitle="원티드 프리온보딩 프론트엔드 - 선발 과제"
        subTitle="회원가입"
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
        <button data-testid="signup-button" type="submit" disabled={!disabled}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;
