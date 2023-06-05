const routes = {
    home: '/',
    catalog: '/movies/:type',
    search: '/movie/search/:keyword',
    ticket: '/ticket',
    detail: '/movie/:id',
    login: '/login',
    register: '/register',
    showtimes: '/lich-chieu',
    bookingOnline: '/dat-ve/:id',
    admin: '/admin',
    user: '/admin/user',
    film: '/admin/film',
    schedule: '/admin/schedule',
    member: '/thanh-vien',
    paymentInfor: '/thong-tin-thanh-toan/:id',
    filmCategory: '/admin/category',
    room: '/admin/room',
    bill: '/admin/hoa-don',
};

export default routes;
