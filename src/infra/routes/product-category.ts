import express from 'express';

const router = express.Router()


router.get('/add-product_category', (req, res) => {

    res.send(
        '<h1>A book for Heabord</h1>'
    )
})


module.exports = router