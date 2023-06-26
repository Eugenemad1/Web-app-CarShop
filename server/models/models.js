const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Worker = sequelize.define('worker', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: 'ADMIN'},
    rating: {type: DataTypes.DOUBLE, defaultValue: 0},
})

const Customer = sequelize.define('customer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    date_of_birth: {type: DataTypes.DATE, allowNull: false},
    phone_number: {type: DataTypes.STRING, unique: true, allowNull: false},
    item_bought_id: {type: DataTypes.INTEGER, unique: true},
})

const WorkerCustomer = sequelize.define('worker_customer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    rate: {type: DataTypes.DOUBLE},
})

const Receipt = sequelize.define('receipt', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    price: {type: DataTypes.INTEGER, allowNull: false},
    date_of_sale: {type: DataTypes.DATE, allowNull: false},
    count: {type: DataTypes.INTEGER, allowNull: false},
})

const Item = sequelize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: "В наличии"},
})

const ItemReceipt = sequelize.define('item_receipt', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const ItemInfo = sequelize.define('item_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    date_of_order: {type: DataTypes.DATE, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const Model = sequelize.define('model', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
})

const BrandModelType = sequelize.define('brand_model_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

Worker.hasMany(Rating)
Rating.belongsTo(Worker)

Worker.hasMany(WorkerCustomer)
WorkerCustomer.belongsTo(Worker)

Customer.hasOne(WorkerCustomer)
WorkerCustomer.belongsTo(Customer)

Customer.hasMany(Rating)
Rating.belongsTo(Customer)

Customer.hasMany(Order)
Order.belongsTo(Customer)

Item.hasOne(ItemReceipt)
ItemReceipt.belongsTo(Item)

Item.hasMany(ItemInfo, {as: 'info'})
ItemInfo.belongsTo(Item)

Receipt.hasMany(ItemReceipt)
ItemReceipt.belongsTo(Receipt)

Brand.hasMany(Order)
Order.belongsTo(Brand)

Brand.hasMany(Item)
Item.belongsTo(Brand)

Brand.hasMany(BrandModelType)
BrandModelType.belongsTo(Brand)

Model.hasMany(Item)
Item.belongsTo(Model)

Model.hasMany(Order)
Order.belongsTo(Model)

Model.hasOne(BrandModelType)
BrandModelType.belongsTo(Model)

Type.hasMany(BrandModelType)
BrandModelType.belongsTo(Type)

Type.hasMany(Order)
Order.belongsTo(Type)

Type.hasMany(BrandModelType)
BrandModelType.belongsTo(Type)

Type.hasMany(Item)
Item.belongsTo(Type)

module.exports = {
    Worker,
    Customer,
    WorkerCustomer,
    Rating,
    Receipt,
    Item,
    ItemReceipt,
    ItemInfo,
    Order,
    Brand,
    Model,
    Type
}