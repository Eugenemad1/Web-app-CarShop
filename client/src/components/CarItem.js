import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import { Context } from '../index'
import { useContext } from "react";
import CarStore from "../store/CarStore";
import { useNavigate } from "react-router-dom";
import { CARPAGE_ROUTE } from "../utils/consts";

const CarItem = observer(({car}) => {

    const navigate = useNavigate()

    const [brandName, setBrandName] = useState('')
    const {car:carStore} = useContext(Context);

    useEffect(() => {
        //console.log(carStore.getBrandNameById(car.brandId))
        //console.log(car.brandId)
        setBrandName(carStore.getBrandNameById(car.brandId))
    }, [])
    
    //console.log(car.brandId)
    //const brandName = carStore.getBrandNameById(car.brandId);
    // console.log(carStore)
    //console.log(car)
    //console.log(brandName)
    //console.log(car.brandId)
    //console.log(navigate)
    //console.log(CARPAGE_ROUTE + '/' + car.id)

    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(CARPAGE_ROUTE + '/' + car.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={'http://localhost:5000/' + car.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{car.name}</div>
                </div>
                <div> 
                    {brandName}              
                </div>          
            </Card>
        </Col>
    )
})

export default CarItem