import API from "./api";

export const registerUser = (data) => {
  return API.post("/users/register", data);
};

export const loginUser=(data)=>{
    return API.post("/users/login",data)
}