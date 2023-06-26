import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal"
import { Button, Form } from "react-bootstrap"
import { changeStatus } from "../../http/carAPI";
import { Context } from "../../index";


const ChangeStatus = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const [index, setIndex] = useState('')
    const {car1} = useContext(Context)
    // console.log(car1)
    
    const handleChangeStatus = () => {
        console.log(index, value)
        changeStatus({id: index, status: value}).then(data => {
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
                    placeholder={"Введите изменённый статус"}
                />
                <Form.Control
                    className="mt-3"
                    value={index}
                    onChange={e => setIndex(e.target.value)}
                    placeholder={"Введите индекс автомобиля"}
                    type="number"
                    // defaultValue={car1.id}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={handleChangeStatus}>Изменить</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ChangeStatus;