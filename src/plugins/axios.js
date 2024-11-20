import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://todo-list-api.test/api',
  headers: {
    Accept: "application/json",
  },
});

export default instance;
