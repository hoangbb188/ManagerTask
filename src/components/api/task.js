import axios from "axios";
const API_URL = "http://localhost:8082/tasks";

export const createOrUpdateTask = (user) => {
    return axios.post(`${API_URL}/createUser`,user)
}
export const getTaskbyUser = (user) => {
    const { email, password} = user;
    return axios.post(`${API_URL}/login`,user);
  };
  