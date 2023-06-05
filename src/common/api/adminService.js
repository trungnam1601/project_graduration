import axiosClient from './axiosClient';

const adminService = {
    //movie manager
    createMovies: (movies) => {
        const url = '/api/v1/admin/films';
        return axiosClient.post(url, movies);
    },
    createImage: (file) => {
        const url = '/api/v1/admin/images';
        return axiosClient.post(url, file);
    },
    deleteMovies: (id) => {
        const url = '/api/v1/admin/films/' + id;
        return axiosClient.delete(url);
    },
    updateMovies: (id, movies) => {
        const url = '/api/v1/admin/films/' + id;
        return axiosClient.put(url, movies);
    },
    //movie category
    getMoviesCategory: (page, size) => {
        const url = '/api/v1/admin/film-categories';
        return axiosClient.get(url, {
            params: {
                page: page,
                size: size,
            },
        });
    },
    createMoviesCategory: (category) => {
        const url = '/api/v1/admin/film-categories';
        return axiosClient.post(url, category);
    },
    deleteMoviesCategory: (id) => {
        const url = '/api/v1/admin/film-categories/' + id;
        return axiosClient.delete(url);
    },
    updateCategory: (id, category) => {
        const url = '/api/v1/admin/film-categories/' + id;
        return axiosClient.put(url, category);
    },

    //room manager
    getCinemaRoom: (page, size) => {
        const url = '/api/v1/admin/rooms';
        return axiosClient.get(url, {
            params: {
                page: page,
                size: size,
            },
        });
    },
    createCinemaRoom: (roomName) => {
        const url = '/api/v1/admin/rooms';
        return axiosClient.post(url, roomName);
    },
    deleteCinemaRoom: (id) => {
        const url = '/api/v1/admin/rooms/' + id;
        return axiosClient.delete(url);
    },
    updateCinemaRoom: (id, roomName) => {
        const url = '/api/v1/admin/rooms/' + id;
        return axiosClient.put(url, roomName);
    },
    //schedule
    getScheduleByRoom: (id, page, size) => {
        const url = '/api/v1/admin/film-schedules/by-room/' + id;
        return axiosClient.get(url, {
            params: {
                page: page,
                size: size,
            },
        });
    },
    createSchedule: (data) => {
        const url = '/api/v1/admin/film-schedules';
        return axiosClient.post(url, data);
    },
    deleteSchedule: (id) => {
        const url = '/api/v1/admin/film-schedules/' + id;
        return axiosClient.delete(url);
    },
    updateSchedule: (id, schedule) => {
        const url = '/api/v1/admin/film-schedules/' + id;
        return axiosClient.put(url, schedule);
    },
    //bill
    fillterBill: (data, page, size) => {
        const url = '/api/v1/admin/seats/filter';
        return axiosClient.post(url, data, {
            params: {
                page: page,
                size: size,
            },
        });
    },
    //user
    fillterUser: (data, page, size) => {
        const url = '/api/v1/admin/users/filter';
        return axiosClient.post(url, data, {
            params: {
                page: page,
                size: size,
            },
        });
    },
};

export default adminService;
