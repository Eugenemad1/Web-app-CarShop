import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateCar from "../components/modals/CreateCar";
import CreateModel from "../components/modals/CreateModel";
import CreateUser from "../components/modals/CreateUser";
import CreateCustomer from '../components/modals/CreateCustomer'
import CreateZakaz from '../components/modals/CreateZakaz'
import { Context } from "../index";
import { fetchCustomers } from "../http/customerAPI";

const Admin = () => {

    // useEffect(() => {
    //     fetchCustomers().then(data => customer.setCustomers(data))
    // }, [])

    const {user} = useContext(Context)

    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [modelVisible, setModelVisible] = useState(false)
    const [carVisible, setCarVisible] = useState(false)
    const [userVisible, setUserVisible] = useState(false)
    const [customerVisible, setCustomerVisible] = useState(false)
    const [orderVisible, setOrderVisible] = useState(false)

    const isAdmin = user.role === 'ADMIN'
    // console.log(user.role)
    return (
        <Container className="d-flex flex-column">
            <h2 className="mt-4 align-items-center">Панель управления</h2>
            {isAdmin ? (
                <>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setCarVisible(true)}
            >
                Добавить автомобиль
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setModelVisible(true)}
            >
                Добавить модель
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setUserVisible(true)}
            >
                Создать аккаунт
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setCustomerVisible(true)}
            >
                Добавить клиента
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setOrderVisible(true)}
            >
                Создать заявку
            </Button>
            </>
            ) : (
                <>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setCarVisible(true)}
            >
                Добавить автомобиль
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setModelVisible(true)}
            >
                Добавить модель
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setCustomerVisible(true)}
            >
                Добавить клиента
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setOrderVisible(true)}
            >
                Создать заявку
            </Button>
            </>
            )}
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateCar show={carVisible} onHide={() => setCarVisible(false)}/>
            <CreateModel show={modelVisible} onHide={() => setModelVisible(false)}/>
            <CreateUser show={userVisible} onHide={() => setUserVisible(false)}/>
            <CreateCustomer show={customerVisible} onHide={() => setCustomerVisible(false)}/>
            <CreateZakaz show={orderVisible} onHide={() => setOrderVisible(false)} />
         </Container>
    )
}

export default Admin