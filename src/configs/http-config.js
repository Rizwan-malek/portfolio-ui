import axios from 'axios';


const AxiosInstance = axios.create({
    baseURL: process.env.REACT_BACKEND_LOCAL_URL,
});
AxiosInstance.interceptors.request.use(function (config) {
    console.log('process.env.BACKEND_LOCAL_URL ==> ', process.env.REACT_BACKEND_LOCAL_URL);
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
