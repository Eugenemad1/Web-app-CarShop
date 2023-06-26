import { makeAutoObservable } from "mobx";

export default class CustomerStore {
    constructor() {
        this._customers = []
        this._selectedCustomer = {}
        makeAutoObservable(this)
    }

    setCustomers(customers) {
        this._customers = customers
    }
    
    setSelectedCustomer(customer) {
        this._selectedCustomer = customer
    }

    get customers() {
        return this._customers
    }
}