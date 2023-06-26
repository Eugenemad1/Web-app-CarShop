import React, { useState } from "react";
import Modal from "react-bootstrap/Modal"
import { Button, Form } from "react-bootstrap"
import { createBrand } from "../../http/carAPI";

const CreateBrand = ({show, onHide}) => {

    const [value, setValue] = useState('')
    
    const addType = () => {
        createBrand({name:value}).then(data => {
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
                Добавить новый бренд автомобиля
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={"Введите название бренда"}
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

export default CreateBrand;