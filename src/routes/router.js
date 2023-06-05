import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import FilmCategory from '../pages/AdminPage/pages/FilmCategory/FilmCategory';
import RoomManager from '../pages/AdminPage/pages/RoomManager/RoomManager';
import BillManager from '../pages/AdminPage/pages/BillManager/BilManager';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return <>{children}</>;
};

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.catalog, component: Catalog },
    // { path: config.routes.search, component: Catalog },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.login, component: Login },
    { path: config.routes.ticket, component: Ticket },
    { path: config.routes.showtimes, component: ShowTimes },
    { path: config.routes.register, component: Register },
    // { path: config.routes.bookingOnline, component: BookingOnline },
];

const privateRoutes = [
    //admin
    { path: config.routes.admin, component: AdminPage, layout: AdminLayout, protected: ProtectedRoute },
    { path: config.routes.user, component: UserManager, layout: AdminLayout, protected: ProtectedRoute },
    { path: config.routes.film, component: FilmManager, layout: AdminLayout, protected: ProtectedRoute },
    { path: config.routes.schedule, component: FilmSchedule, layout: AdminLayout, protected: ProtectedRoute },
    { path: config.routes.filmCategory, component: FilmCategory, layout: AdminLayout, protected: ProtectedRoute },
    { path: config.routes.room, component: RoomManager, layout: AdminLayout, protected: ProtectedRoute },
    { path: config.routes.bill, component: BillManager, layout: AdminLayout, protected: ProtectedRoute },
    { path: config.routes.member, component: Members, protected: ProtectedRoute },
    { path: config.routes.bookingOnline, component: BookingOnline, protected: ProtectedRoute },
    { path: config.routes.paymentInfor, component: PaymentInfor, protected: ProtectedRoute },
];

export { publicRoutes, privateRoutes };
