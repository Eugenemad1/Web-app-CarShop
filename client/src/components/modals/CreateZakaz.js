import React, { useState } from "react";
import Modal from "react-bootstrap/Modal"
import { Button, Form } from "react-bootstrap"
import { createZakaz } from "../../http/carAPI";

const CreateType = ({show, onHide}) => {

    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [customerId, setCustomerId] = useState('')
    const [brandId, setBrandId] = useState('')
    const [modelId, setModelId] = useState('')
    const [typeId, setTypeId] = useState('')


    const createType = () => {
        createZakaz({date_of_order: date, name:name, customerId:customerId, brandId:brandId, modelId:modelId, typeId: typeId}).then(data => {
            setDate('')
            onHide()
        })
    }
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить новый тип автомобиля
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Label
                    className="ms-1"
                >
                    Дата заказа:
                </Form.Label>
                <Form.Control
                    className="mt-2"
                    value={date}
                    type="date"
                    onChange={e => setDate(e.target.value)}
                />
                <Form.Control
                    className="mt-2"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder={"Введите название автомобиля"}
                />
                <Form.Control
                    className="mt-2"
                    value={customerId}
                    onChange={e => setCustomerId(e.target.value)}
                    placeholder={"Введите id клиента"}
                />
                <Form.Control
                    className="mt-2"
                    value={brandId}
                    onChange={e => setBrandId(e.target.value)}
                    placeholder={"Введите id бренда"}
                />
                <Form.Control
                    className="mt-2"
                    value={modelId}
                    onChange={e => setModelId(e.target.value)}
                    placeholder={"Введите id модели"}
                />
                <Form.Control
                    className="mt-2"
                    value={typeId}
                    onChange={e => setTypeId(e.target.value)}
                    placeholder={"Введите id типа"}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={createType}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateType;