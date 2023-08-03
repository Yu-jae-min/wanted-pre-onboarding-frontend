import { useCallback, useMemo } from "react";
import { usePageMove } from "./usePageMove";
import { routes } from "../routes";
import { ACCESS_TOKEN } from "../models/models";

const useCheckLogin = () => {
  const { goToPage } = usePageMove();
  const token = localStorage.getItem(ACCESS_TOKEN);

  const isLogin = useMemo(() => {
    return !!token;
  }, [token]);

  const logOut = useCallback(() => {
    localStorage.removeItem(ACCESS_TOKEN);
    goToPage(routes.home);
  }, [goToPage]);

  return { isLogin, logOut };
};

export { useCheckLogin };
