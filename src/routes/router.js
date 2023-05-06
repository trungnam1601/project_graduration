import config from '../config/config';
//layout
import AdminLayout from '../layouts/AdminLayout/AdminLayout';

// pages
import Home from './../pages/Home/Home';
import Catalog from './../pages/Catalog/Catalog';
import Detail from '../pages/Detail/Detail';
import Ticket from '../pages/Ticket/Ticket';
import ShowTimes from '../pages/ShowTimes/ShowTimes';
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import BookingOnline from '../pages/BookingOnline/BookingOnline';
//
import AdminPage from './../pages/AdminPage/AdminPage';
import UserManager from './../pages/AdminPage/pages/UserManager/UserManager';
import FilmManager from './../pages/AdminPage/pages/FilmManager/FilmManager';
import FilmSchedule from './../pages/AdminPage/pages/FilmSchedule/FilmSchedule';
import Members from '../pages/Members/Member';
import PaymentInfor from '../pages/PaymentInfor/PaymentInfor';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.catalog, component: Catalog },
    { path: config.routes.search, component: Catalog },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.login, component: Login },
    { path: config.routes.ticket, component: Ticket },
    { path: config.routes.showtimes, component: ShowTimes },
    { path: config.routes.register, component: Register },
    { path: config.routes.bookingOnline, component: BookingOnline },
    { path: config.routes.member, component: Members },
    { path: config.routes.paymentInfor, component: PaymentInfor },

    //admin
    { path: config.routes.admin, component: AdminPage, layout: AdminLayout },
    { path: config.routes.user, component: UserManager, layout: AdminLayout },
    { path: config.routes.film, component: FilmManager, layout: AdminLayout },
    { path: config.routes.schedule, component: FilmSchedule, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
