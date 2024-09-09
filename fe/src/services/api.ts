import axios from "axios";

const API_URL = "http://localhost:8888"; // URL of your backend API

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const createUser = async (user: { name: string; email: string }) => {
  const response = await api.post("/users", user);
  return response.data;
};
