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

router.get('/:id', (req, res) => {
/*  console.log('hello');*/
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
    console.log('hello');
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

/*router.put('/:id', (req, res) => {
  console.log('hello put');
  let newProduct = req.body;
  let productToChange = products.getProduct(parseInt(req.params.id));
  console.log(productToChange);

  if(newProduct.hasOwnProperty('name')){
    productToChange.name = newProduct.name;
  }
  if(newProduct.hasOwnProperty('price')){
    productToChange.price = newProduct.price;
  }
  if(newProduct.hasOwnProperty('inventory')){
    productToChange.inventory = newProduct.inventory;
  }

  res.redirect(303, '/products/'+ req.params.id);

});*/
module.exports = router;