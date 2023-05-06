const express = require('express');
const router = express.Router();
const Product = require('../models/products_template.js');

// const {
//     getAllProducts,
//     getProductById,
// } = require("../controller/productControllers");

//@desc     GET all products from db
//@route    GET /api/products
//@access   public
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
});

//@desc     GET a product by id from db
//@route    GET /api/products/:id
//@access   public
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
});

module.exports = router;