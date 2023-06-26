import React, { useContext, useEffect, useState } from "react";
import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import {useParams} from 'react-router-dom'
import { fetchOneCar, fetchTypes, fetchBrands, fetchModels } from "../http/carAPI";
//import {getBrandNameById, getModelNameById} from '../store/CarStore'
import CarStore from '../store/CarStore'
import ChangeStatus from "../components/modals/ChangeStatus";

const CarPage = observer(() => {

    const {car} = useContext(Context)
    const [car1, setCar] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneCar(id).then(data => setCar(data))
        fetchModels().then(data => car.setModels(data))
        fetchBrands().then(data => car.setBrands(data))
    }, [])

    const [brandName, setBrandName] = useState('')
    const [modelName, setModelName] = useState('')
    const [status, setStatus] = useState('')
    useEffect(() => {
        setBrandName(car.getBrandNameById(car1.brandId))
        setModelName(car.getModelNameById(car1.modelId))
    })

    const [changeStatusVisible, setChangeStatusVisible] = useState(false)

    return (
        <Container className="mt-3">
            <Row>              
                <Col md={4}>
                    <Image width={300} height={300} src={!!car1.img ? ('http://localhost:5000/' + car1.img) : ''}/>            
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>{car1.name}</h2>
                        <h2>Название бренда: {brandName}</h2>
                        <h2>Название модели: {modelName}</h2>
                        <h2>Статус: {car1.status}</h2>
                        <h2>Индекс: {car1.id}</h2>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize:32, border: '5px solid lightgray'}}
                    >
                        <h3>Цена: {car1.price} ₽</h3>
                        <Button 
                            variant={"outline-dark"}
                            onClick={() => setChangeStatusVisible(true)}
                        >
                            Изменить статус</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {car1.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 == 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
            <ChangeStatus show={changeStatusVisible} onHide={() => setChangeStatusVisible(false)}/>
        </Container>
    )
})

export default CarPage