import { axiosInstance } from "./axiosInstance";
import {
  ROUTES,
  ERROR_MASSAGE,
  API_URL,
  SUCCESS_MASSAGE,
  ACCESS_TOKEN,
} from "../constants/constants";

export const signUpAPI = async ({ email, password }) => {
  return axiosInstance
    .post(API_URL.signUp, { email, password })
    .then(() => {
      alert(SUCCESS_MASSAGE.signUp);
      window.location.href = ROUTES.signIn;
    })
    .catch((err) => {
      if (err.response.data.message) {
        return alert(err.response.data.message);
      }
      alert(ERROR_MASSAGE.signUp);
    });
};

export const signInAPI = async ({ email, password }) => {
  return axiosInstance
    .post(API_URL.signIn, { email, password })
    .then(({ data }) => {
      const { access_token } = data;
      localStorage.setItem(ACCESS_TOKEN, access_token);
      alert(SUCCESS_MASSAGE.signIn);
      window.location.href = ROUTES.todo;
    })
    .catch(() => alert(ERROR_MASSAGE.signIn));
};
