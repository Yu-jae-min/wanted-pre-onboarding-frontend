import { Link } from "react-router-dom";
import Title from "../../components/common/Title";
import "./index.css";

const Home = () => {
  return (
    <div className="homeWrap">
      <Title
        mainTitle="원티드 프리온보딩 프론트엔드 - 선발 과제"
        subTitle="유재민"
      />
      <div className="btnWrap">
        <Link to="/signup">회원가입 페이지로 이동하기</Link>
      </div>
    </div>
  );
};

export default Home;
