import axios from "axios";

const API_URL = "http://localhost:8082/users";

export const register = (user) => {
    return axios.post(`${API_URL}/createUser`, user); };

export const login = (user) => {
    const { email, password } = user;
    return axios.post(`${API_URL}/login`, user); 
};