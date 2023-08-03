import { useEffect } from "react";
import Title from "../../components/Title/Title";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useCheckLogin } from "../../hooks/useLoginCheck";
import { usePageMove } from "../../hooks/usePageMove";
import { ROUTES, TITLE_TEXT, ERROR_MASSAGE } from "../../constants/constants";

const SignUp = () => {
  const { isLogin } = useCheckLogin();
  const { goToPage } = usePageMove();

  useEffect(
    function loginUserRedirect() {
      if (!isLogin) return;

      alert(ERROR_MASSAGE.alreadyLogin);
      goToPage(ROUTES.todo);
    },
    [isLogin, goToPage]
  );

  return (
    <div className="signUpWrap">
      <Title
        mainTitle={TITLE_TEXT.mainTitle}
        subTitle={TITLE_TEXT.subTitle.signUp}
      />
      <AuthForm type={"signUp"} />
    </div>
  );
};

export default SignUp;
