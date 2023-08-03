import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home/Home";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Todo from "./Todo/Todo";
import NotFound from "./NotFound/NotFound";

export const routes = {
  home: "/",
  signUp: "/signup",
  signIn: "/signin",
  todo: "/todo",
};

const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.signUp} element={<SignUp />} />
      <Route path={routes.signIn} element={<SignIn />} />
      <Route path={routes.todo} element={<Todo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
