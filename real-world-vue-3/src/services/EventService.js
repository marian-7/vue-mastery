import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const getEvents = () => apiClient.get('/events');

const getEventById = (id) => apiClient.get(`/events/${id}`);

export default {
  getEvents,
  getEventById,
};
