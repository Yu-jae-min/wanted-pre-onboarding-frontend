import axios from "axios";
import { routes } from "../routes";

const PROTOCOL = "https";
const BASE_URL = "www.pre-onboarding-selection-task.shop";
const END_POINT = `${PROTOCOL}://${BASE_URL}`;

const SIGN_UP_API = "auth/signup";

export const getSignUpAPI = ({ email, password }) => {
  return axios
    .post(`${END_POINT}/${SIGN_UP_API}`, {
      email,
      password,
      headers: { "Content-Type": "application/json" },
    })
    .then((data) => {
      window.location.href = routes.SignIn;
    })
    .catch((error) => {
      if (error.response) {
        return alert(error.response.data.message);
      }

      return alert("에러가 발생했습니다. 다시 시도해주세요.");
    });
};
