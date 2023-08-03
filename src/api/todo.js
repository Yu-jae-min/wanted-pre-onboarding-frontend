import { axiosInstance } from "./axiosInstance";

const TODO_API_URL = "/todos";

export const getTodosAPI = async () => {
  return axiosInstance.get(TODO_API_URL);
};

export const createTodoAPI = async (todo) => {
  return axiosInstance.post(TODO_API_URL, { todo });
};

export const updateTodoAPI = async (id, todo, isCompleted) => {
  return axiosInstance.put(`${TODO_API_URL}/${id}`, { todo, isCompleted });
};

export const deleteTodoAPI = async (id) => {
  return axiosInstance.delete(`${TODO_API_URL}/${id}`);
};
