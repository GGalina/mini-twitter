import axios from 'axios';

axios.defaults.baseURL = 'https://64c9051ab2980cec85c1c1f2.mockapi.io';

export const getUsersApi = (page = 1) => {
    return axios.get(`/users?page=${page}&limit=3`);
};

export const updateUserApi = async (id, updatedData) => {
    await axios.put(`/users/${id}`, updatedData);
    return axios.get(`/users/${id}`);
};
