// jshint esversion:6

const PG_PASS = process.env.PG_PASS;
const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_products_express',
  user: 'postgres',
  password: PG_PASS
});

function _getAllProducts () {
  return productsList;
}

function _add(obj) {
  productsList.push(obj);
}

function _getProductById(id) {
  for (var i = 0; i < productsList.length; i++) {
    if(productsList[i].id === id) {
      return productsList[i];
    }
  }
  return null;
}

function _deleteProduct(productIdToDelete) {
  for(var i = 0; i < productsList.length; i++) {
    if (productsList[i].id === productIdToDelete){
        productsList.splice([i],1);
    }
  }
}

module.exports = {
  getAllProducts : _getAllProducts,
  add : _add,
  getProductById : _getProductById,
  deleteProduct : _deleteProduct
};


db.one('SELECT 1 + 1 as answer')
.then( result => {
  console.log('result', result);
})
.catch( err => console.error(err));

db.any('SELECT * FROM users')
.then( users => {
  console.log(users);
})
.catch( err => console.error(err));

db.any('SELECT * FROM comments LIMIT 10')
.then( comments => {
  console.log(comments);
})
.catch( err => console.error(err));