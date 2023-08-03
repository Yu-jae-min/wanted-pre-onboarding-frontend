import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home/Home";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Todo from "./Todo/Todo";
import NotFound from "./NotFound/NotFound";

export const routes = {
  HOME: "/",
  SignUp: "/signup",
  SignIn: "/signin",
  Todo: "/todo",
};

const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.SignUp} element={<SignUp />} />
      <Route path={routes.SignIn} element={<SignIn />} />
      <Route path={routes.Todo} element={<Todo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
