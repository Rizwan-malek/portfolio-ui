import axios from 'axios';
import RToast from '../components/RToast';

const AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_LOCAL_URL,
});
AxiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
AxiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // if (error.response.data.status === 403)
    //     RToast({
    //         type: "ERROR",
    //         message: error.response.data.message
    //     });
    return Promise.reject(error);
});
export default AxiosInstance;
