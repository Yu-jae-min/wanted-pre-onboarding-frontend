import { useEffect } from "react";
import { usePageMove } from "../../hooks/usePageMove";
import { routes } from "../index";

const NotFound = () => {
  const { goToPage } = usePageMove();

  useEffect(() => {
    goToPage(routes.home);
  }, [goToPage]);

  return <div>잘못 된 접근입니다.</div>;
};

export default NotFound;
