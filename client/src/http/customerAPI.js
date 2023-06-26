import { $authHost, $host } from "./index";

export const createCustomer = async (name, surname, date_of_birth, phone_number, item_bought_id) => {
    const {data} = await $authHost.post('api/customer', name, surname, date_of_birth, phone_number, item_bought_id)
    return data
}

export const fetchCustomers = async () => {
    const {data} = await $authHost.get('api/customer')
    return data
}