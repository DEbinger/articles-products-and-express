/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const products = require('../db/products');

let productId = 1;

router.get('/', (req, res) => {
  products.getAllProducts()
  .then(results => {
    res.render('index',
      {productList: results});
  })
  .catch(error => console.error(error));
});

router.get('/:id', (req, res) => {
  res.render('product', products.getProductById(req.params.id));
});

router.post('/', (req, res) => {
  products.add(req.body)
   .then(results => {
    res.redirect(303, '/products');
  })
  .catch(error => console.error(error));
});

// router.put('/:id', (req, res) => {
//   let newProduct = req.body;
//   let productChange = products.getProductById(parseInt(req.params.id));

//     if(newProduct.hasOwnProperty('name')){
//       productChange.name = newProduct.name;
//     }
//     if(newProduct.hasOwnProperty('price')){
//       productChange.price = newProduct.price;
//     }
//     if(newProduct.hasOwnProperty('inventory')){
//       productChange.inventory = newProduct.inventory;
//     }

//   res.redirect(303, '/products/'+ req.params.id);
// });

// router.delete('/:id', (req, res) => {
//   products.deleteProduct(parseInt(req.params.id));

//     res.redirect(303, '/products');
// });

// router.get('/new', (req, res) => {
//   res.render('new');
// });

// router.get('/:id/edit', (req, res) => {
//   res.render('edit', products.getProduct(req.params.id));

// });

module.exports = router;