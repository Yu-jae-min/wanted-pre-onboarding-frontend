import axios from "axios";
import { routes } from "../routes";

const PROTOCOL = "https";
const BASE_URL = "www.pre-onboarding-selection-task.shop";
const END_POINT = `${PROTOCOL}://${BASE_URL}`;

const SIGN_UP_API_URL = "auth/signup";
const SIGN_IN_API_URL = "auth/signin";

export const signUpAPI = ({ email, password }) => {
  return axios
    .post(`${END_POINT}/${SIGN_UP_API_URL}`, {
      email,
      password,
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
      window.location.href = routes.SignIn;
    })
    .catch((error) => {
      if (error.response) {
        return alert(error.response.data.message);
      }

      alert("에러가 발생했습니다. 다시 시도해주세요.");
    });
};

export const signInAPI = ({ email, password }) => {
  return axios
    .post(`${END_POINT}/${SIGN_IN_API_URL}`, {
      email,
      password,
      headers: { "Content-Type": "application/json" },
    })
    .then(({ data: { access_token } }) => {
      localStorage.setItem("access_token", access_token);
      window.location.href = routes.Todo;
    })
    .catch((error) => {
      if (error.response) {
        return alert(error.response.data.message);
      }

      alert("에러가 발생했습니다. 다시 시도해주세요.");
    });
};
