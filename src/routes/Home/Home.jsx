import { useMemo } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Title from "../../components/Title/Title";
import { useCheckLogin } from "../../hooks/useLoginCheck";
import { ROUTES, TITLE_TEXT } from "../../constants/constants";

const Home = () => {
  const { isLogin, logOut } = useCheckLogin();

  const loginButton = useMemo(() => {
    if (isLogin) {
      return (
        <button type="button" onClick={logOut}>
          로그아웃
        </button>
      );
    }

    return <Link to={ROUTES.signIn}>로그인</Link>;
  }, [isLogin, logOut]);

  const signUpButton = useMemo(() => {
    if (isLogin) return <></>;

    return (
      <li>
        <Link to={ROUTES.signUp}>회원가입</Link>
      </li>
    );
  }, [isLogin]);

  return (
    <div className="homeWrap">
      <Title
        mainTitle={TITLE_TEXT.mainTitle}
        subTitle={TITLE_TEXT.subTitle.home}
      />
      <ul className="btnWrap">
        {signUpButton}
        <li>{loginButton}</li>
        <li>
          <Link to={ROUTES.todo}>투두 리스트</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
