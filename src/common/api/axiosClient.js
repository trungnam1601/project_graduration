import axios from 'axios';

// const BASE_URL = 'http://contabo.foxcode.site:8087';
// const BASE_URL = 'http://localhost:8087';
const BASE_URL = 'http://nammt.io.vn:8087';

const axiosClient = axios.create({
    baseURL: BASE_URL,
});

axiosClient.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
        if (token) {
            request.headers['AccessToken'] = token;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    },
);
// axiosClient.interceptors.request.use(async (config) => {
//     // Handle token here ...
//     return config;
// });

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    },
);
export default axiosClient;
