import axios from "axios";
const API_URL1 = "http://localhost:8083/tasks";
const API_URL2 = "http://localhost:8083/subtasks";

export const getSubTaskbyUuids = (user) => {
    return axios.post(`${API_URL}/createUser`,user)
}

export const createOrUpdateSubTask = (user) => {
    return axios.post(`${API_URL}/createUser`,user)
}