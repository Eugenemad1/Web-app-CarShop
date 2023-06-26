import { $authHost } from "./index";

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchCars = async (typeId, brandId, page, limit) => {
    const {data} = await $authHost.get('api/item', {params: {
        typeId, brandId, page, limit
    }})
    return data
}

export const fetchBrands = async () => {
    const {data} = await $authHost.get('api/brand')
    return data
}

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $authHost.get('api/type')
    return data
}

export const createModel = async (model) => {
    const {data} = await $authHost.post('api/model', model)
    return data
}

export const fetchModels = async () => {
    const {data} = await $authHost.get('api/model')
    return data
}

export const createCar = async (car) => {
    const {data} = await $authHost.post('api/item', car)
    return data
}

export const fetchOneCar = async (id) => {
    const {data} = await $authHost.get('api/item/'+id)
    //console.log(data)
    return data
}

export const deleteCar = async (id, name) => {
    const {data} = await $authHost.delete('api/item', id, name)
    return data
}

export const changeStatus = async (id, status) => {
    const { data } = await $authHost.put('api/item', id, status)
    return data
}

export const carsByStatus = async (status) => {
    const {data}  = await $authHost.post('api/item/status', {params: {status}})
    return data
}

export const createZakaz = async (date_of_order, name, customerId, brandId, modelId, typeId) => {
    const {data} = await $authHost.post('api/item/order', date_of_order, name, customerId, brandId, modelId, typeId)
    return data
}   

export const fetchZakazi = async () => {
    const {data} = await $authHost.get('api/item/order/get')
    return data
}