import { axiosInstance } from "./axiosInstance";
import { API_URL } from "../constants/constants";

export const getTodosAPI = async () => {
  return axiosInstance.get(API_URL.todo);
};

export const createTodoAPI = async (todo) => {
  return axiosInstance.post(API_URL.todo, { todo });
};

export const updateTodoAPI = async (id, todo, isCompleted) => {
  return axiosInstance.put(`${API_URL.todo}/${id}`, { todo, isCompleted });
};

export const deleteTodoAPI = async (id) => {
  return axiosInstance.delete(`${API_URL.todo}/${id}`);
};
