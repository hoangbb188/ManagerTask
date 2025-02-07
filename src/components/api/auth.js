import axios from "axios";

const API_URL = "http://localhost:8082/users";

export const register = async (user) => {
    try {
        const response = await axios.post(`${API_URL}/createUser`, user);
        return response;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            throw new Error(error.response.data);
        } else {
            throw error;
        }
    }
};

export const login = (user) => {
    const { email, password } = user;
    return axios.post(`${API_URL}/login`, user);
};
