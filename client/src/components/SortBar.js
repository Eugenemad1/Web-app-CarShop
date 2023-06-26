import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../index'
// import { ListGroup } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import { carsByStatus } from '../http/carAPI';

const SortBar = observer(() => {

    const {car} = useContext(Context)
    let [selectedType, setSelectedType] = useState(null)
    let [selectedBrand, setSelectedBrand] = useState(null)
    let [selectedStatus, setSelectedStatus] = useState(null)

    useEffect(() => {
        if (selectedStatus != null) {
            console.log(selectedStatus)
            carsByStatus('Продан').then(data => {
                console.log(data)
                //car.setCars(data)
            })
        }
    }, [selectedStatus])
    
    // useEffect(() => {
    //     carsByStatus(st).then(data => {
    //         console.log(data)
    //         car.setCars(data)
    //     })
    // })



    const handleSelectType = (type) => {
        setSelectedType(type);
    }

    const handleSelectBrand = (brand) => {
        setSelectedBrand(brand);
    }

    const handleSelectStatus = (status) => {
        //console.log(status)
        setSelectedStatus(status)
    }

    // car.cars.map(item =>
    //     console.log(item.status))

    return (
        <div className="d-flex flex-column mb-2">
            <Dropdown>
                <h6 className="me-2 font-weight-bold">Тип</h6>
                <Dropdown.Toggle className='mt-2 mb-3'>{selectedType ? selectedType.name : "Выберите тип"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {car.types.map(type =>
                        <Dropdown.Item
                            style={{cursor: 'pointer'}}
                            key={type.id}
                            active={type.id === car.selectedType.id}
                            onClick={() => {
                                car.setSelectedType(type);
                                handleSelectType(type);
                            }}
                            // onClick={() => handleSelect(type)}
                        >
                            {type.name}
                        </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <h6 className="me-2 font-weight-bold">Производитель</h6>
                <Dropdown.Toggle className='mt-2'>{selectedBrand ? selectedBrand.name : "Выберите бренд"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {car.brands.map(brand =>
                        <Dropdown.Item
                            style={{cursor: 'pointer'}}
                            key={brand.id}
                            active={brand.id === car.selectedBrand.id}
                            onClick={() => {
                                car.setSelectedBrand(brand); 
                                handleSelectBrand(brand);
                            }}
                            // onClick={() => handleSelect(type)}
                        >
                            {brand.name}
                        </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
            </Dropdown>
            {/* <Dropdown>
                <h6 className="me-2 font-weight-bold mt-3">Статус</h6>
                <Dropdown.Toggle className='mt-2'>{selectedStatus ? selectedStatus : "Выберите статус автомобиля"}</Dropdown.Toggle>
                    <Dropdown.Menu> 
                        {/* {car.cars.map(item =>
                        <Dropdown.Item
                            key={item.id}
                            active={item.id === car.selectedStatus}
                            onClick={() => {
                                car.setSelectedStatus(item.status);
                                handleSelectStatus(item.status);
                            }}
                        >
                            {item.status}
                        </Dropdown.Item>
                        )} 
                        <Dropdown.Item
                            active={selectedStatus === 'Продано'}
                            onClick={() => {
                                car.setSelectedStatus('Продан')
                                handleSelectStatus('Продан')
                            }}
                        >
                            Продано
                        </Dropdown.Item>
                        <Dropdown.Item
                            active={selectedStatus === 'В наличии'}
                            onClick={() => {
                                car.setSelectedStatus('В наличии')
                                handleSelectStatus('В наличии')
                            }}
                        >
                            В наличии
                        </Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
            <Button
                className='mt-4'
                variant='secondary'
            >
                Принять
            </Button> */}
        </div>        
    )
})

export default SortBar