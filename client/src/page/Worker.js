import { observer } from "mobx-react-lite";
import React, {useEffect} from "react";
import {Container, Row, Col, ProgressBar} from 'react-bootstrap'
import {Bar} from 'react-chartjs-2'
import Chart from 'chart.js/auto'



const Worker = observer(() => {
    const brand = [
        { label: "LADA", value: 10 },
        { label: "Tesla", value: 3 },
        { label: "BMW", value: 10 },
        { label: "SKODA", value: 30 },
        { label: "Opel", value: 30 },
      ];

      const model = [
        { label: "Granta", value: 10 },
        { label: "Model 3", value: 1 },
        { label: "Model Y", value: 2 },
        { label: "X5", value: 10 },
        { label: "Octavia", value: 30 },
        { label: "Astra", value: 20 },
        { label: "Corsa", value: 10 },
      ];
    
      const money = [
        { label: "LADA", value: 10000000 },
        { label: "Tesla", value: 12000000 },
        { label: "BMW", value: 80000000 },
        { label: "SKODA", value:  90000000},
        { label: "Opel", value: 100000000 },
      ]

      const chartData = {
        labels: ["LADA", "Tesla", "BMW", "SKODA", "Opel"],
        datasets: [
            {
                label: "Заработано",
                data: [10000000, 12000000, 80000000, 90000000, 100000000],
                backgroundColor: "rgba(33, 43, 87, 0.5)",
            },
        ],
        };

      const chartOptions = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      return (
        <Container>
            <Row>
            <Col className="mt-4">
                <h2 style={{fontSize: "36px"}}>Статистика</h2>
                <small style={{fontSize: "24px"}}>Статистика по брендам</small>
            </Col>
            </Row>
            {brand.map((item, index) => (
            <Row key={index}>
                <Col xs={4} className="mt-1">
                    <strong>{item.label}</strong>
                </Col>
                <Col xs={8} className="mt-1">
                    <ProgressBar now={item.value} max={50} label={`${item.value}`} />
                </Col>
            </Row>
            ))}
            <Row>
                <Col className="mt-4">
                    <small style={{fontSize: "24px"}}>Статистика по моделям</small>
                </Col>
            </Row>
            {model.map((item, index) => (
            <Row key={index}>
                <Col xs={4} className="mt-1">
                    <strong>{item.label}</strong>
                </Col>
                <Col xs={8} className="mt-1">
                    <ProgressBar now={item.value} max={50} label={`${item.value}`} />
                </Col>
            </Row>
            ))}
            <Row>
                <Col className="mt-4">
                    <small style={{fontSize: "24px"}}>Статистика продаж в денежном эквиваленте</small>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="mt-4">
                    <Bar data={chartData} options={chartOptions} />
                </Col>
            </Row>
        </Container>
    );
})

export default Worker