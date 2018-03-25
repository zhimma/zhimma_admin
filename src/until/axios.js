import axios from 'axios'
import qs from 'qs';
import { Message } from 'element-ui';
import store from '../store'

const http = axios.create({
    timeout: 5000,
    baseURL : 'http://blog.ma/api'
})


http.interceptors.request.use(
    config => {
        config.data = qs.stringify(config.data);
        config.headers = {
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
      return Promise.reject(err);
    }
);
export default http;