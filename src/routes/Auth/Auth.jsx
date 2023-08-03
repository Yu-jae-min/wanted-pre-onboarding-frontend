import { useEffect, useMemo } from "react";
import Title from "../../components/Title/Title";
import AuthForm from "./AuthForm/AuthForm";
import { useCheckLogin } from "../../hooks/useLoginCheck";
import { usePageMove } from "../../hooks/usePageMove";
import { ROUTES, TITLE_TEXT, ERROR_MASSAGE } from "../../constants/constants";

const Auth = ({ type }) => {
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

  const subTitle = useMemo(() => {
    if (type === "signIn") {
      return TITLE_TEXT.subTitle.signIn;
    }

    return TITLE_TEXT.subTitle.signUp;
  }, [type]);

  return (
    <div className="signInWrap">
      <Title mainTitle={TITLE_TEXT.mainTitle} subTitle={subTitle} />
      <AuthForm type={type} />
    </div>
  );
};

export default Auth;
