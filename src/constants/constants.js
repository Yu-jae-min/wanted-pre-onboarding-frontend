export const ROUTES = {
  home: "/",
  signUp: "/signup",
  signIn: "/signin",
  todo: "/todo",
};

export const API_URL = {
  signUp: "/auth/signup",
  signIn: "/auth/signin",
  todo: "/todos",
};

export const ACCESS_TOKEN = "access_token";

export const ERROR_MASSAGE = {
  signUp: "에러가 발생했습니다. 가입 계정 정보를 확인해주세요.",
  signIn: "에러가 발생했습니다. 로그인 계정 정보를 확인해주세요.",
  notInput: "내용을 입력해주세요.",
  notLogin: "로그인이 필요합니다.",
  alreadyLogin: "이미 로그인 하셨습니다.",
  notFount: "잘못 된 접근입니다.",
};

export const SUCCESS_MASSAGE = {
  signUp: "회원가입에 성공하였습니다.",
  signIn: "로그인에 성공하였습니다.",
  logOut: "로그아웃 되었습니다.",
};

export const TITLE_TEXT = {
  mainTitle: "원티드 프리온보딩 프론트엔드 - 선발 과제",
  subTitle: {
    home: "유재민",
    signUp: "회원가입",
    signIn: "로그인",
    todo: "투두 리스트",
  },
};

export const PLACE_HOLDER = {
  emailInput: "이메일을 입력해주세요.",
  passwordInput: "비밀번호를 입력해주세요.",
};
