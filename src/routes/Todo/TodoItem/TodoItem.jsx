import { useMemo, useState } from "react";
import "./todoItem.css";
import { updateTodoAPI, deleteTodoAPI } from "../../../api/todo";

const TodoItem = (props) => {
  const { id, isCompleted, todo, getTodosData } = props;
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(todo);
  const [currentChecked, setCurrentChecked] = useState(isCompleted);

  const changeEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const updateCurrentTodo = (event) => {
    const { value } = event.currentTarget;

    setCurrentTodo(value);
  };

  const updateCheckBox = async (event) => {
    const { checked } = event.currentTarget;

    setCurrentChecked(checked);
    await updateTodoAPI(id, currentTodo, checked);
    getTodosData();
  };

  const updateTodo = async () => {
    await updateTodoAPI(id, currentTodo, currentChecked);
    getTodosData();
    changeEditMode();
  };

  const updateCancel = () => {
    setCurrentTodo(todo);
    changeEditMode();
  };

  const deleteHandler = async () => {
    await deleteTodoAPI(id);
    getTodosData();
  };

  const todoButtons = useMemo(() => {
    if (!isEditMode) {
      return (
        <>
          <button data-testid="modify-button" onClick={changeEditMode}>
            수정
          </button>
          <button data-testid="delete-button" onClick={deleteHandler}>
            삭제
          </button>
        </>
      );
    }

    return (
      <>
        <button data-testid="submit-button" onClick={updateTodo}>
          제출
        </button>
        <button data-testid="cancel-button" onClick={updateCancel}>
          취소
        </button>
      </>
    );
  }, [isEditMode, currentTodo]);

  const todoTitle = useMemo(() => {
    if (!isEditMode) {
      return <span>{currentTodo}</span>;
    }

    return (
      <input
        data-testid="modify-input"
        value={currentTodo}
        onChange={updateCurrentTodo}
      />
    );
  }, [isEditMode, currentTodo]);

  return (
    <li className="todoItem">
      <label>
        <input
          className="checkbox"
          type="checkbox"
          checked={currentChecked}
          onClick={updateCheckBox}
        />
        {todoTitle}
      </label>
      <div className="buttonWrap">{todoButtons}</div>
    </li>
  );
};

export default TodoItem;
