import React, { useState } from "react";
import Modal from "react-bootstrap/Modal"
import { Button, Form } from "react-bootstrap"
import { createCustomer } from "../../http/customerAPI";

const CreateType = ({show, onHide}) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [date, setDate] = useState('')
    const [phone, setPhone] = useState('')
    const [index, setIndex] = useState('')

    const addCustomer = () => {
        createCustomer({name:name, surname: surname, date_of_birth: date, phone_number: phone, item_bought_id: index}).then(data => {
            setName('')
            setSurname('')
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
                <Form.Control
                    className="mt-3"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder={"Введите имя клиента"}
                />
                <Form.Control
                    className="mt-3 mb-2"
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                    placeholder={"Введите фамилию клиента"}
                />
                <Form.Label
                    className="ms-1"
                >
                    Дата рождения:
                </Form.Label>
                <Form.Control                 
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    type="date"
                />
                <Form.Control
                    className="mt-3"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder={"Введите номер телефона клиента"}
                />
                <Form.Control
                    className="mt-3"
                    value={index}
                    onChange={e => setIndex(e.target.value)}
                    placeholder={"Введите id автомобиля"}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={addCustomer}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateType;