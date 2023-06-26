import {makeAutoObservable} from "mobx";

export default class CarStore {
    constructor() {
        this._zakazi = []
        this._types = []
        this._brands = []
        this._models = []
        this._cars = []
        this._selectedZakaz = {}
        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedModel = {}
        this._selectedStatus = {}
        this._page=1
        this._totalCount = 0
        this._limit = 5
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setModels(models) {
        this._models = models
    }
    setCars(cars) {
        this._cars = cars
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    setStatus(status) {
        this._status = status
    }
    setZakazi(zakazi) {
        this._zakazi = zakazi
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setSelectedModel(model) {
        this._selectedModel = model
    }
    setSelectedStatus(status) {
        this._selectedStatus = status
    }
    setSelectedZakaz(zakaz) {
        this._selectedZakaz = zakaz
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get models() {
        return this._models
    }
    get cars() {
        return this._cars
    }
    get zakazi() {
        return this._zakazi
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get selectedModel() {
        return this._selectedModel
    }
    get selecteStatus() {
        return this._selectedStatus
    }
    get selectedZakaz() {
        return this._selectedZakaz
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
    get status() {
        return this._status
    }
    getModelById(id) {
        return this._models.find(model => model.id === id)
    }
    getBrandById(id) {
        return this._brands.find(brand => brand.id === id)
    }
    getBrandNameById = (id) => {
        const brandName = this.brands.find(brand => brand.id === Number(id))
        //console.log(typeof id)
        //console.log(this.brands)
        //console.log(brandName)
        return brandName ? brandName.name : 'Unknown brand'
        //return this.brands.name
    }
    getModelNameById = (id) => {
        const modelName = this.models.find(model => model.id === Number(id))
        return modelName ? modelName.name : 'Unknown model'
    }
    getBrandIdByName = (name) => {
        const brandId = this.brands.find(brand => brand.name === (name))
        return brandId ? brandId : "das"
    }
    getTypeIdByName = (name) => {
        const typeId = this.types.find(type => type.name === (name))
        return typeId ? typeId : "das"
    }
}
