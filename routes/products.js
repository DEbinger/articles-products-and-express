/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const products = require('../db/products');

let productId = 0;

router.get('/', (req, res) => {

  res.render('index', {
    productList : products.getAllProducts()
  });
});

router.get('/:id', (req, res) => {
  res.render('product', products.getProductById(parseInt(req.params.id)));
});

router.post('/', (req, res) => {
  let newProduct = {};
  if (req.body.hasOwnProperty('name') && req.body.hasOwnProperty('price') && req.body.hasOwnProperty('inventory')){
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.inventory = req.body.inventory;
    newProduct.id = productId;
    products.add(newProduct);
    productId++;
    }
  res.redirect('/products');
});

router.put('/:id', (req, res) => {
  let newProduct = req.body;
  let productChange = products.getProductById(parseInt(req.params.id));

    if(newProduct.hasOwnProperty('name')){
      productChange.name = newProduct.name;
    }
    if(newProduct.hasOwnProperty('price')){
      productChange.price = newProduct.price;
    }
    if(newProduct.hasOwnProperty('inventory')){
      productChange.inventory = newProduct.inventory;
    }

  res.redirect(303, '/products/'+ req.params.id);
});

router.delete('/:id', (req, res) => {
  products.deleteProduct(parseInt(req.params.id));

    res.redirect(303, '/products');
});

module.exports = router;