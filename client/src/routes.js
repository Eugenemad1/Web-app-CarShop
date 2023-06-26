import Admin from "./page/Admin";
import Main from './page/Main'
import Cars from './page/Cars'
import CarPage from './page/CarPage'
import Auth from './page/Auth'
import { ADMIN_ROUTE, CARPAGE_ROUTE, CARS_ROUTE, LOGIN_ROUTE, CLIENTS_ROUTE, MAIN_ROUTE, WORKER_ROUTE, ZAKAZI_ROUTE } from "./utils/consts";
import Clients from "./page/Clients";
import Worker from "./page/Worker"
import Zakazi from "./page/Zakazi";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CARS_ROUTE,
        Component: Cars
    },
    {
        path: CARPAGE_ROUTE + '/:id',
        Component: CarPage
    },
    {
        path: CLIENTS_ROUTE,
        Component: Clients
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: WORKER_ROUTE,
        Component: Worker
    },
    {
        path: ZAKAZI_ROUTE,
        Component: Zakazi
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
]

