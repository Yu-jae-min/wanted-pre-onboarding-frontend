import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import "./index.css";
import { routes } from "../index";
import { useCheckLogin } from "../../hooks/useLoginCheck";
import { useMemo } from "react";

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

    return <Link to={routes.signIn}>로그인</Link>;
  }, [isLogin, logOut]);

  const signUpButton = useMemo(() => {
    if (isLogin) return <></>;

    return (
      <li>
        <Link to={routes.signUp}>회원가입</Link>
      </li>
    );
  }, [isLogin]);

  return (
    <div className="homeWrap">
      <Title
        mainTitle="원티드 프리온보딩 프론트엔드 - 선발 과제"
        subTitle="유재민"
      />
      <ul className="btnWrap">
        {signUpButton}
        <li>{loginButton}</li>
        <li>
          <Link to={routes.todo}>투두 리스트</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
