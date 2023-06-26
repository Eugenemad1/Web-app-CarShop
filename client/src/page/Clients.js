import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { fetchCustomers } from "../http/customerAPI";
import { Link } from "react-router-dom";

const Clients = observer(() => {
  // Предположим, что у вас есть массив с данными клиентов
  const {customer} = useContext(Context)

//   const clients = [
//     { id: 1, name: "John Doe", email: "john@example.com" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com" },
//     { id: 3, name: "Bob Johnson", email: "bob@example.com" },
//   ];
  useEffect(() => {
    fetchCustomers().then(data => customer.setCustomers(data))
  }, [])

  return (
    <Container>
      <h2 className="mt-4">Список клиентов</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Дата рождения</th>
            <th>Номер телефона</th>
            <th>Купленный автомобиль</th>
          </tr>
        </thead>
        <tbody>
            {customer.customers.map((client) => (
            <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.surname}</td>
                <td>{new Date(client.date_of_birth).toLocaleDateString()}</td>
                <td>{client.phone_number}</td>
                <td>
                {client.item_bought_id ? (
                  <Link to={`/car/${client.item_bought_id}`}>
                    {client.item_bought_id}
                  </Link>
                ) : (
                  ""
                )}
                </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
});

export default Clients;