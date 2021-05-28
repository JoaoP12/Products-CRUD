const firebase = require('../database');
const Product = require('../models/Product'); 

const firestore = firebase.firestore();

class ProductsController {
    async create (req, res) {
        try {
            const productInfo = req.body;
            await firestore.collection('products').doc().set(productInfo);
            res.status(201).send("Product created successfully");
            
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getAllProducts (req, res) {
        try {
            const products = await firestore.collection('products').get();
            const productsList = [];
            if (products.empty) {
                res.status(404).send('There are no products yet');
            } else {
                products.forEach(prod => {
                    const product = new Product(
                        prod.id,
                        prod.data().title,
                        prod.data().description,
                        prod.data().price,
                        prod.data().stock,
                        prod.data().imgLink
                    );
                    productsList.push(product);
                });
                res.send(productsList);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getOneProduct(req, res) {
        try {
            const product_id = req.params.id;
            const product = await firestore.collection('products').doc(product_id);
            const data = await product.get();
            if (!data.exists) {
                res.status(404).send('Product not found!');
            } else {
                res.send(data.data());
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async deleteProduct (req, res) {
        try {
            const product_id = req.params.id;
            const product = await firestore.collection('products').doc(product_id);
            const data = await product.get();

            if (!data.exists) {
                res.status(404).send('Product not found!');
            } else {
                await product.delete();
                res.status(200).send("Product deleted successfully!");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async updateProduct (req, res) {
        try {
            const product_id = req.params.id;
            const data = req.body;
            const product = await firestore.collection('products').doc(product_id);
            await product.update(data);
            res.status(200).send("Product updated successfully");
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

module.exports = ProductsController;