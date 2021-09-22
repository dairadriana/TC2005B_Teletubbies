const PORT = 8080
const express = require('express')
const cors = require('cors')
//const URL = "Driver=tedious;Server=tcp:webclass.database.windows.net,1433;Database=web;Uid=webclass;Pwd={Teletubbies1};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;"
const {Sequelize} = require('sequelize')
const s = new Sequelize({
    dialect: 'mssql',
    host: 'webclass.database.windows.net',
    username: 'webclass',
    password: 'Teletubbies1',
    database: 'web',
})

s.query('select getdate()').then(res => {
    console.log(res)
})

const app = express()
app.use(cors())
app.use(express.json())





app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`))