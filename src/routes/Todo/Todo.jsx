import { useEffect, useMemo, useState } from "react";
import "./index.css";
import Title from "../../components/Title";
import TodoItem from "./TodoItem/TodoItem";
import { useCheckLogin } from "../../hooks/useLoginCheck";
import { usePageMove } from "../../hooks/usePageMove";
import { createTodoAPI, getTodosAPI } from "../../api/todo";
import { ROUTES, TITLE_TEXT, ERROR_MASSAGE } from "../../constants/constants";

const Todo = () => {
  const { isLogin } = useCheckLogin();
  const { goToPage } = usePageMove();
  const [todosData, setTodosData] = useState([]);
  const [addTodo, setAddTodo] = useState("");

  const getTodos = async () => {
    await getTodosAPI()
      .then(({ data }) => setTodosData(data))
      .catch((error) => console.error(error));
  };

  const redirectNonLoggedInUsers = () => {
    alert(ERROR_MASSAGE.notLogin);
    goToPage(ROUTES.signIn);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!addTodo) {
      return alert(ERROR_MASSAGE.notInput);
    }

    await createTodoAPI(addTodo);
    await getTodos();
    setAddTodo("");
  };

  const onChange = (event) => {
    const { value } = event.currentTarget;
    setAddTodo(value);
  };

  useEffect(
    function loginCheckHandler() {
      if (isLogin) {
        getTodos();
        return;
      }

      redirectNonLoggedInUsers();
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
          refetch={getTodos}
        />
      );
    });
  }, [todosData]);

  return (
    <div className="todoWrap">
      <Title
        mainTitle={TITLE_TEXT.mainTitle}
        subTitle={TITLE_TEXT.subTitle.todo}
      />
      <form className="addTodoWrap" onSubmit={onSubmit}>
        <input
          className="addInput"
          type="text"
          name="todo"
          value={addTodo}
          onChange={onChange}
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
