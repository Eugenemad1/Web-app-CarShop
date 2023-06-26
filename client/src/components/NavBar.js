import React, {useContext} from "react";
import { Context } from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import { CARS_ROUTE, CLIENTS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, WORKER_ROUTE, ADMIN_ROUTE, ZAKAZI_ROUTE } from "../utils/consts";
import {Button} from "react-bootstrap"
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    //user.setIsAuth(false)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(LOGIN_ROUTE)
    }
    //console.log(user.isAuth)
    // console.log(user)
    //console.log(user)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <NavLink style={{color:'white'}} to={MAIN_ROUTE}>AutoShop</NavLink> 
                {user.isAuth ?
                <Nav className="ml-auto" style={{color:'white'}}>
                    <Button
                        variant={"outline-light"}
                        onClick={() => navigate(ZAKAZI_ROUTE)}
                    >
                        Заявки на автомобиль
                    </Button>
                    <Button 
                        variant={"outline-light"} 
                        className="ms-1"
                        onClick={() => navigate(CLIENTS_ROUTE)}
                    >
                        Клиенты
                    </Button>
                    <Button 
                        variant={"outline-light"}
                        className="ms-1"
                        onClick={() => navigate(CARS_ROUTE)}
                    >
                        Автомобили
                    </Button>
                    <Button 
                        variant={"outline-light"}
                        className="ms-1"
                        onClick={() => navigate(WORKER_ROUTE)}
                    >
                        Статистика
                    </Button>
                    <Button 
                        variant={"outline-light"}
                        className="ms-1"
                        onClick={() => navigate(ADMIN_ROUTE)}
                    >
                        Панель управления
                    </Button>
                    <Button 
                        variant={"outline-light"} 
                        className="ms-5"
                        onClick={() => logOut()}
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color:'white'}}>
                    <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
                }
            </Container>
        </Navbar>

      

    )
})

export default NavBar;