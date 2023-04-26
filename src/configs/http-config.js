import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: process.env.BACKEND_LOCAL_URL,
});
AxiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

AxiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
export default AxiosInstance;
