import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://todo-list-api.test/api',
});

export default instance;
