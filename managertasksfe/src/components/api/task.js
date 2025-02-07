import axios from "axios";

const API_URL = "http://localhost:8082/tasks"; 

export const getAllTask = () => {
  return axios.get(`${API_URL}/getAllTask`);
};

export const createOrUpdateTask = (task) => {
  return axios.post(`${API_URL}/createOrUpdateTask`, task);
};


export const deleteTask = (taskUuid) => {
  return axios.delete(`${API_URL}/${taskUuid}`);
};


export const getTaskById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const getTasks = (userId) => {
  return axios.get(`${API_URL}/getTasks/${userId}`); }
// export const getHello = () =>{
//   return axios.get(`${API_URL}/tests`);
// }