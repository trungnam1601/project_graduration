import config from '../config/config';
// pages
import Home from './../pages/Home/Home';

import Catalog from './../pages/Catalog/Catalog';
import Detail from '../pages/Detail/Detail';
import DoubleSiderForm from '../pages/DoubleSiderForm/DoubleSiderForm';
import Ticket from '../pages/Ticket/Ticket';
import ShowTimes from '../pages/ShowTimes/ShowTimes';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.catalog, component: Catalog },
    { path: config.routes.search, component: Catalog },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.login, component: DoubleSiderForm },
    { path: config.routes.ticket, component: Ticket },
    { path: config.routes.showtimes, component: ShowTimes },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
