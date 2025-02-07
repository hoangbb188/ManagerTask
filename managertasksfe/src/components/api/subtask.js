import axios from "axios";

const API_URL = "http://localhost:8083/subtasks";

export const createOrUpdateSubTask = (subTask) => {
    return axios.post(`${API_URL}/createOrUpdateSubTask`, subTask);
}

export const getSubTaskByTaskUuid = (taskUuid) => {
    return axios.get(`${API_URL}/getSubTaskByTaskUuid/${taskUuid}`);
}

export const deleteSubTaskBySubUuid = (subUuid) => {
    return axios.delete(`${API_URL}/${subUuid}`);
}
