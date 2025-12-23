import API from "./api";

// -------------------- Auth --------------------
export const registerUser = (data) => API.post("/users/register", data);
export const loginUser = (data) => API.post("/users/login", data);
export const testUser = () => API.get("/users/test");

// -------------------- CRUD --------------------
export const getAllUsers = () => API.get("/users/getAllUsers");
export const getUserById = (id) => API.get(`/users/getUserById/${id}`);
export const updateUser = (id, data) =>API.put(`/users/updateUser/${id}`, data);
export const deleteUser = (id) => API.delete(`/users/deleteUserById/${id}`);
