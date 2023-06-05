import axiosClient from './axiosClient';

export const movieCategory = {
    upcoming: 'up-coming',
    now_showing: 'playing',
};

export const category = {
    movie: 'movie',
};

const publicService = {
    getMoviesList: (type, page, size) => {
        const url = `/api/v1/public/films/${type}`;
        return axiosClient.get(url, {
            params: {
                page: page,
                size: size,
            },
        });
    },
    getDetail: (id) => {
        const url = '/api/v1/public/films/' + id;
        return axiosClient.get(url);
    },
    //user infor
    getInforUser: () => {
        const url = '/api/v1/user/info';
        return axiosClient.get(url);
    },
    updateInforUser: (id, data) => {
        const url = '/api/v1/user/info/' + id;
        return axiosClient.put(url, data);
    },
    //Transaction history
    getHistoryTransaction: (page, size) => {
        const url = '/api/v1/member/seats';
        return axiosClient.get(url, {
            params: {
                page: page,
                size: size,
            },
        });
    },
    createOrderSeat: (dataOrder) => {
        const url = '/api/v1/member/seats/order';
        return axiosClient.post(url, dataOrder);
    },

    //schedule
    getSchedule: (data, page, size) => {
        const url = '/api/v1/public/film-schedules/by-date';
        return axiosClient.post(url, data, {
            params: {
                page: page,
                size: size,
            },
        });
    },
    getDetailSchedule: (id) => {
        const url = '/api/v1/public/film-schedules/' + id;
        return axiosClient.get(url);
    },
};

export default publicService;
