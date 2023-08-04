# wanted-pre-onboarding-frontend

원티드 프리온보딩 프론트엔드 선발 과제입니다.

<br />

## 👬 **지원자 성명**

- 유재민

<br>

## 📅 **개발 기간**

- 2023년 08월 03일 ~ 2023년 08월 04일

<br />

## 🔧 **기술스택**

- react, react-router-dom, axios

<br />

## 🎉 **배포 주소 및 데모 영상**

- 배포 주소 : [https://wanted-pob-frontend-yujaemin.netlify.app/](https://wanted-pob-frontend-yujaemin.netlify.app/)

- 데모 영상 : [https://youtu.be/wEQyzf4zCIc](https://youtu.be/wEQyzf4zCIc)

<br />

## 💻 **설치 및 실행 방법**

1. repository 클론

```
git clone https://github.com/Yu-jae-min/wanted-pre-onboarding-frontend.git
```

2. dependencies 설치

```
npm install
```

3. 실행

```
npm start
```

<br />

## 📘 **구현 목록**

- [x] 회원가입 및 로그인

  - [x] UI 구현

  - [x] validation 적용

    - [x] email validation : `@`를 포함

    - [x] password validation : 8자 이상

    - [x] validation 통과하지 못하는 경우 button disabled

  - [x] 예외 처리

    - [x] 회원 가입 시 가입 완료 및 이미 있는 계정인 경우, 로그인 시 로그인 완료 및 비밀 번호가 틀린 경우 alert message 노출

    - [x] 회원 가입 완료 시 sing in 페이지로 이동

    - [x] 로그인 완료 시 todo 페이지로 이동

    - [x] 로그인 완료 시 JWT 로컬 스토리지 저장

    - [x] 로그인 한 상태로 로그인 및 회원가입 페이지 접근 시 todo 페이지로 redirect

- [x] 투두 리스트

  - [x] UI 구현

  - [x] 투두 리스트 노출 및 완료 여부 표시

  - [x] 투두 리스트 추가 기능 구현

  - [x] 투두 리스트 수정 기능 구현

    - [x] 수정 버튼 클릭 시 수정 모드 활성화 및 투두 내용이 input에 입력

    - [x] 수정 모드에서 투두 내용 변경 후 제출 버튼 클릭 시 투두 내용 업데이트

    - [x] 수정 모드에서 취소 버튼 클릭 시 기존 투두 내용 유지

  - [x] 투두 리스트 삭제 기능 구현

  - [x] 예외 처리

    - [x] 로그인 하지 않은 상태로 투두 페이지 접근 시 sign in 페이지로 redirect

<br>
