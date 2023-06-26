import React, { useContext, useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import {Button} from "react-bootstrap"
import {NavLink, useNavigate, useLocation} from "react-router-dom"
import {log_in} from "../http/userAPI"
import { observer } from "mobx-react-lite";
import {Context} from "../index";
import { LOGIN_ROUTE, MAIN_ROUTE, CARS_ROUTE } from "../utils/consts";


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () => {
        try {
            if (login === 'eug') {
                let data
                if (isLogin) {
                    data = await log_in(login, password)
                    console.log(data)
                    user.setRole('ADMIN')
                    user.setUser(data)
                    user.setIsAuth(true)
                }
            }
            else {
                let data
                if (isLogin) {
                    data = await log_in(login, password)
                    console.log(data)
                    user.setRole('Manager')
                    user.setUser(data)
                    user.setIsAuth(true)
                }   
            }
            //user.setRole('Manager')
            navigate(CARS_ROUTE)
        } catch (e) {

            alert(e.response.data.message)
        }

    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight-54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш login..."
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Button 
                        className="mt-3"
                        variant={"outline-success"}
                        onClick={click}
                    >
                        Войти
                    </Button>
                </Form>
            </Card>
            
        </Container>
    )
})

export default Auth