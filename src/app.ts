import bodyParser from 'body-parser';
import express from 'express';


const app = express()
const productCategoryRoutes = require('./infra/routes/product-category')

app.use(bodyParser.urlencoded({extended: false}))
app.use(productCategoryRoutes)

app.get('/', (req, res) => {

    res.send('<h1>Welcome to Necomm Ecommerce!</h1>')
})

app.listen(5000)
