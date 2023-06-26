import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SortBar from "../components/SortBar";
import CarItem from "../components/CarItem";
import CarList from "../components/CarList"
import { Context } from "../index";
import { fetchTypes, fetchBrands, fetchCars } from "../http/carAPI";
import Pages from "../components/Pages";
import {observer} from 'mobx-react-lite'

const Cars = observer(() => {
    const {car} = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => car.setTypes(data))
        fetchBrands().then(data => car.setBrands(data))
        fetchCars(null, null, 1, 8).then(data => {
            car.setCars(data.rows)
            car.setTotalCount(data.count)
            //console.log(data)
        })
    }, [])

    console.log(car)

    
    useEffect(() => {
        fetchCars(car.selectedType.id, car.selectedBrand.id, car.page, 8).then(data => {
            car.setCars(data.rows)
            car.setTotalCount(data.count)
        })
    }, [car.page, car.selectedType, car.selectedBrand,])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <SortBar />
                    {/* <Button
                        variant="outline"
                        onClick={click}
                    >
                        JOPA 

                    </Button> */}
                </Col>
                <Col md={9}>
                    <CarList />   
                    <Pages />             
                </Col>
            </Row>
        </Container>
    )
})

export default Cars