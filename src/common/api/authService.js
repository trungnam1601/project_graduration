import axiosClient from './axiosClient';

const authService = {
    register: (dataRegister) => {
        const url = '/api/v1/public/auth/register';
        return axiosClient.post(url, dataRegister);
    },
    login: (username, password) => {
        const url = '/api/v1/public/auth/login';
        return axiosClient.post(url, { username, password });
    },
};

export default authService;
