import axios from "axios";

// Base URL of your backend API
const API_URL = "http://localhost:8888"; // Update this with your backend URL

// Create an Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to get users
export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

// Function to create a new user
export const createUser = async (user: { name: string; email: string }) => {
  const response = await api.post("/users", user);
  return response.data;
};
