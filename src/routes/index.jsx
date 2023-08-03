import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Todo from "./Todo/Todo";
import NotFound from "./NotFound/NotFound";
import { ROUTES } from "../constants/constants";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.signUp} element={<Auth type={"signUp"} />} />
      <Route path={ROUTES.signIn} element={<Auth type={"signIn"} />} />
      <Route path={ROUTES.todo} element={<Todo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
