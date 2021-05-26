const express = require('express');
const ProductsController = require('./controllers/ProductsController');

const router = express.Router();
const productsController = new ProductsController();

router.get("/product/get-all", productsController.getAllProducts);

router.post("/product/create", productsController.create);
router.get("/product/:id", productsController.getOneProduct);
router.delete("/product/:id", productsController.deleteProduct);
router.put("/product/:id", productsController.updateProduct);


module.exports = {
    routes: router
}