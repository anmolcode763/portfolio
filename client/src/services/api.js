import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
});

export const getProjects = () => API.get('/projects');
export const postContact = (data) => API.post('/contact', data);

export default API;