import React, { useState } from "react";
import Modal from "react-bootstrap/Modal"
import { Button, Form } from "react-bootstrap"
import { createModel } from "../../http/carAPI";

const CreateModel = ({show, onHide}) => {

    const [value, setValue] = useState('')
    
    const addType = () => {
        createModel({name:value}).then(data => {
            setValue('')
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
                Добавить новую модель автомобиля
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={"Введите название модели"}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={addType}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateModel;