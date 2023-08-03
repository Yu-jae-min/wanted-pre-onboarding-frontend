import { axiosInstance } from "./axiosInstance";
import { routes } from "../routes";

const SIGN_UP_API_URL = "/auth/signup";
const SIGN_IN_API_URL = "/auth/signin";

export const signUpAPI = async ({ email, password }) => {
  return axiosInstance
    .post(SIGN_UP_API_URL, { email, password })
    .then(() => {
      window.location.href = routes.signIn;
    })
    .catch((error) => {
      console.error(error);
      alert("에러가 발생했습니다. 가입 계정 정보를 확인해주세요.");
    });
};

export const signInAPI = async ({ email, password }) => {
  return axiosInstance
    .post(SIGN_IN_API_URL, { email, password })
    .then(({ data: { access_token } }) => {
      localStorage.setItem("access_token", access_token);
      window.location.href = routes.todo;
    })
    .catch((error) => {
      console.error(error);
      alert("에러가 발생했습니다. 로그인 계정 정보를 확인해주세요.");
    });
};
