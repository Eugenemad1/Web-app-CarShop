import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal"
import { Button, Dropdown, Form, Row, Col } from "react-bootstrap"
import { Context } from "../../index";
import { fetchTypes, fetchBrands, fetchModels, createCar } from "../../http/carAPI";
import { observer } from "mobx-react-lite";

const CreateCar = observer(({show, onHide}) => {

    const {car} = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => car.setTypes(data))
        fetchBrands().then(data => car.setBrands(data))
        fetchModels().then(data => car.setModels(data))
    }, [])

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [status, setStatus] = useState('')

    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFIle = e => {
        setFile(e.target.files[0])
    }

    const addCar = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('status', status)
        formData.append('img', file)
        formData.append('brandId', car.selectedBrand.id)
        formData.append('modelId', car.selectedModel.id)
        formData.append('typeId', car.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createCar(formData).then(data => onHide())
    }

    const [selectedType, setSelectedType] = useState(null)
    const [selectedBrand, setSelectedBrand] = useState(null)
    const [selectedModel, setSelectedModel] = useState(null)

    const handleSelectType = (type) => {
        setSelectedType(type);
    }
    const handleSelectBrand = (brand) => {
        setSelectedBrand(brand);
    }
    const handleSelectModel = (model) => {
        setSelectedModel(model);
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
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{selectedType ? selectedType.name : "Выберите тип"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {car.types.map(type =>
                            <Dropdown.Item 
                                key={type.id}
                                onClick={() => {
                                    handleSelectType(type)
                                    car.setSelectedType(type)
                                }}
                            >
                                {type.name}
                            </Dropdown.Item>    
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{selectedBrand ? selectedBrand.name : "Выберите бренд"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {car.brands.map(brand =>
                            <Dropdown.Item 
                                key={brand.id}
                                onClick={() => {
                                    handleSelectBrand(brand)
                                    car.setSelectedBrand(brand)
                                }}
                            >
                                {brand.name}
                            </Dropdown.Item>    
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{selectedModel ? selectedModel.name : "Выберите модель"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {car.models.map(model =>
                            <Dropdown.Item 
                                key={model.id}
                                onClick={() => {
                                    handleSelectModel(model)
                                    car.setSelectedModel(model)
                                }}
                            >
                                {model.name}
                            </Dropdown.Item>    
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className="mt-3"
                    placeholder="Введите название автомобиля"
                    value={name}
                    onChange={e=> setName(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите статус автомобиля"
                    value={status}
                    onChange={e=> setStatus(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введите стоимость автомобиля"
                    type="number"
                    value={price}
                    onChange={e=> setPrice(Number(e.target.value))}
                />
                <Form.Control
                    className="mt-3"
                    type="file"
                    onChange={selectFIle}
                />
                <hr/>
                <Button
                    variant="outline-dark"
                    onClick={addInfo}
                >                    
                    Добавить новую характеристику</Button>
                {info.map(i => 
                    <Row className="mt-4" key={i.number}>
                        <Col md={4}>
                            <Form.Control 
                                value={i.title}
                                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                placeholder="Введите название характеристики"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control 
                                value={i.description}
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                placeholder="Введите описание характеристики"
                            />
                        </Col>
                        <Col md={4}>
                            <Button 
                                variant="outline-danger"
                                onClick={() => removeInfo(i.number)}
                            >
                                Удалить</Button>
                        </Col>
                    </Row>
                    )}
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={addCar}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    )
})

export default CreateCar;