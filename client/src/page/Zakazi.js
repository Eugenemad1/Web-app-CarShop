import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateZakaz from '../components/modals/CreateZakaz'
import Table from "react-bootstrap/Table";
import { fetchZakazi } from "../http/carAPI";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const Zakazi = observer(() => {

    const {car} = useContext(Context)

    useEffect(() => {
        fetchZakazi().then(data => {
            console.log(data)
            car.setZakazi(data)
            })
    }, [])

    console.log(car.zakazi)
    return (
        <Container className="d-flex flex-column mt-4">
            <h2>Список заявок</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Дата заказа</th>
                    <th>Имя</th>
                    <th>Клиент</th>
                    <th>Бренд</th>
                    <th>Модель</th>
                    <th>Тип</th>
                </tr>
            </thead>
            <tbody>
                {car.zakazi.map((zakaz) => (
                <tr key={zakaz.id}>
                    <td>{zakaz.id}</td>
                    <td>{new Date(zakaz.date_of_order).toLocaleDateString()}</td>
                    <td>{zakaz.name}</td>
                    <td>{zakaz.customerId}</td>
                    <td>{zakaz.brandId}</td>
                    <td>{zakaz.modelId}</td>
                    <td>{zakaz.typeId}</td>
                </tr>
                ))}
            </tbody>
            </Table>
        </Container>
    )
})

export default Zakazi