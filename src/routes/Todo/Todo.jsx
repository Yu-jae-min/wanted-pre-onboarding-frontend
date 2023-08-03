import { useEffect, useMemo } from "react";
import { useState } from "react";
import "./index.css";
import Title from "../../components/Title/Title";
import TodoItem from "./TodoItem/TodoItem";
import { useCheckLogin } from "../../hooks/useLoginCheck";
import { usePageMove } from "../../hooks/usePageMove";
import { routes } from "../index";
import { createTodoAPI, getTodosAPI } from "../../api/todo";

const Todo = () => {
  const { isLogin } = useCheckLogin();
  const { goToPage } = usePageMove();
  const [todosData, setTodosData] = useState([]);

  const getTodosData = async () => {
    await getTodosAPI()
      .then(({ data }) => setTodosData(data))
      .catch((error) => console.error(error));
  };

  const RedirectNonLoggedInUsers = () => {
    alert("로그인이 필요합니다.");
    goToPage(routes.signIn);
  };

  useEffect(
    function loginCheckHandler() {
      if (isLogin) {
        getTodosData();
        return;
      }

      RedirectNonLoggedInUsers();
    },
    [isLogin]
  );

  const todoList = useMemo(() => {
    return todosData.map(({ id, isCompleted, todo }) => {
      return (
        <TodoItem
          key={id}
          id={id}
          isCompleted={isCompleted}
          todo={todo}
          getTodosData={getTodosData}
        />
      );
    });
  }, [todosData]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const {
      todo: { value },
    } = event.currentTarget;

    if (!value) {
      return alert("내용을 입력해주세요.");
    }

    await createTodoAPI(value);
    getTodosData();
  };

  return (
    <div className="todoWrap">
      <Title
        mainTitle="원티드 프리온보딩 프론트엔드 - 선발 과제"
        subTitle="투두 리스트"
      />

      <form className="addTodoWrap" onSubmit={onSubmit}>
        <input
          className="addInput"
          type="text"
          name="todo"
          data-testid="new-todo-input"
        />
        <button
          className="addButton"
          type="submit"
          data-testid="new-todo-add-button"
        >
          추가
        </button>
      </form>

      <ul className="todoListWrap">{todoList}</ul>
    </div>
  );
};

export default Todo;
