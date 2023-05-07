const express = require('express')
const config = require('./config/dev')
console.log(config.DB_URL)
const productRoutes = require('./routes/products')

const app = express()


app.use('/api/v1/products', productRoutes)

const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('I am running!')
})

