import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal"
import { Button, Form, Dropdown } from "react-bootstrap"
import { registration } from "../../http/userAPI";

const CreateUser = ({show, onHide}) => {
    const [selectedRole, setSelecterRole] = useState(null)

    const handleRoleSelect = (role) => {
        setSelecterRole(role);
    }
    
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const addWorker = () => {
        registration(login, email, role, password)
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
                Добавить нового работника
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    className="mt-3"
                    placeholder={"Введите логин"}
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder={"Введите пароль"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder={"Введите электронную почту"}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder={"Введите роль"}
                    value={role}
                    onChange={e => setRole(e.target.value)}
                />
                {/* <Dropdown className="mt-3 mb-2">
                    <Dropdown.Toggle>{selectedRole || "Выберите роль"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => handleRoleSelect('ADMIN')}
                        >
                            ADMIN
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => handleRoleSelect('Manager')}
                        >
                            Manager
                        </Dropdown.Item>            
                    </Dropdown.Menu>
                </Dropdown> */}
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={addWorker}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateUser;