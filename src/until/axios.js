import axios from 'axios'
import qs from 'qs';
import store from '../store'
import Config from "../config";

const http = axios.create({
    timeout: 5000,
    baseURL : 'http://blog.ma/api'
})


http.interceptors.request.use(

    config => {
        config.data = qs.stringify(config.data);
        config.headers = {
            'Content-Type' : 'application/json'
        };
        console.log(store.state.token);
        var token = sessionStorage.getItem(Config.tokenKey);
            config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    err => {
      return Promise.reject(err);
    }
);
export default http;