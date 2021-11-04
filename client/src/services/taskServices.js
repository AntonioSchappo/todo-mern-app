import axios from 'axios';
const apiUrl = 'http://localhost:3000/api/tasks';

const getTasks = () => {
    return axios.get(apiUrl);
}

const createTask = (task) => {
    return axios.post(apiUrl, task);
}

const updateTask = (id, task) => {
    return axios.put(`${apiUrl}/${id}`, task);
};

const removeTask = (id) => {
    return axios.delete(`${apiUrl}/${id}`);
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    removeTask,
}
