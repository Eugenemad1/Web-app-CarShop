import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import {Row, Form} from "react-bootstrap"
import CarItem from "./CarItem";

const CarList = observer(() => {
    const {car} = useContext(Context)


    return (
        <Row className="d-flex">
            {car.cars.map(car => 
                <CarItem key={car.id} car={car}></CarItem>
            )}
        </Row>
    )
})

export default CarList