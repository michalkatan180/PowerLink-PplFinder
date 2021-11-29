import axios from 'axios';

export const addTaskToDB = (task) => {
    return axios.post(`http://localhost:5000/tasks/addTask`, task)
}

export const getAllTasks = (task) => {
    return axios.get(`http://localhost:5000/tasks/`)
}

export const deleteTask = (_id) => {
    return axios.delete(`http://localhost:5000/tasks/${_id}`)
}