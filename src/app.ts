import bodyParser from 'body-parser';
import express from 'express';
import os from 'os'



const app = express()
const productCategoryRoutes = require('./infra/routes/product-category')

app.use(bodyParser.urlencoded({extended: false}))
app.use(productCategoryRoutes)

app.get('/', (req, res) => {
    const message = `<h1>Version2: Welcome to Necomm Ecommerce ${os.hostname()}!<\h1>`
    console.log(message)
    res.send(message)
})

app.listen(5000)
