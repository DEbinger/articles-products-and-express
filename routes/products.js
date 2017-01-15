/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const products = require('../db/products');

let productId = 0;

router.get('/', (req, res) => {

  res.render('index', {
    productList : products.getAllProducts()
    //console.log()
  });
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

module.exports = router;