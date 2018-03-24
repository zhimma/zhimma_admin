import axios from 'axios'
import store from '../store'

const service = axios.create({
    timeout: 5000
})

axios.defaults.baseURL = 'https://blog.zhimma.com';

service.interceptors.request.use(
    config => {
        if (store.state.user.token) {
            config.headers.Authorization = `token ${store.state.user.token}`;
        }
        return config;
    },
    err => {
      return Promise.reject(err);
    }
);
export default service;