import { useCallback, useMemo } from "react";
import { usePageMove } from "./usePageMove";
import { ROUTES, ACCESS_TOKEN, SUCCESS_MASSAGE } from "../constants/constants";

const useCheckLogin = () => {
  const { goToPage } = usePageMove();
  const token = localStorage.getItem(ACCESS_TOKEN);

  const isLogin = useMemo(() => {
    return !!token;
  }, [token]);

  const logOut = useCallback(() => {
    localStorage.removeItem(ACCESS_TOKEN);
    alert(SUCCESS_MASSAGE.logOut);
    goToPage(ROUTES.home);
  }, [goToPage]);

  return { isLogin, logOut };
};

export { useCheckLogin };
