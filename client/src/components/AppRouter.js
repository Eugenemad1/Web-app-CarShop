import React, { useContext } from 'react';
import {Routes,Route, Navigate} from "react-router-dom";
import {authRoutes,publicRoutes} from "../routes";
import {MAIN_ROUTE, CARPAGE_ROUTE} from "../utils/consts";
import { Context } from '../index';
import CarPage from '../page/CarPage';


const AppRouter = () => {
    const {user} = useContext(Context)
    const {car} = useContext(Context)
    // const isAuth = true
    // console.log(car)
    // car.cars.map(car => 
    //     console.log(car.cars.img)
    // )
    return(
           <Routes>
                {user.isAuth && authRoutes.map(({path, Component}) =>
                     <Route key = {path}  path={path} element={<Component/>} exact/>
                )}
                {publicRoutes.map(({path , Component}) =>
                   <Route key = {path} path = {path} element={<Component/>} exact/>
                )}
                <Route path='*' element={<Navigate to={MAIN_ROUTE}/>} />
            </Routes>
    );
};

export default AppRouter;