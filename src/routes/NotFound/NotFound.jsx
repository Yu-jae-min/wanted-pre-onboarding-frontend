import { useEffect } from "react";
import { usePageMove } from "../../hooks/usePageMove";
import { ROUTES, ERROR_MASSAGE } from "../../constants/constants";

const NotFound = () => {
  const { goToPage } = usePageMove();

  useEffect(() => {
    goToPage(ROUTES.home);
  }, [goToPage]);

  return <div>{ERROR_MASSAGE.notFount}</div>;
};

export default NotFound;
