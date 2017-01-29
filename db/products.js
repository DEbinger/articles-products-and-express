/*jshint esversion:6*/
const PG_PASS = process.env.PG_PASS;
const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_products_express',
  user: 'postgres',
  password: PG_PASS
});

function _getAllProducts() {
  return db.query('SELECT * FROM products');
}

function _getProductById(products) {
  return db.one(`SELECT * FROM products WHERE products_id = ${products.id}`);
}

function _add(reqBody) {
  return db.none(`INSERT INTO products (name, price, inventory) VALUES ('${reqBody.name}', ${reqBody.price}, ${reqBody.inventory})`);
}

// function _getProductById(id) {
//   for (var i = 0; i < productsList.length; i++) {
//     if(productsList[i].id === id) {
//       return productsList[i];
//     }
//   }
//   return null;
// }

// function _deleteProduct(productIdToDelete) {
//   for(var i = 0; i < productsList.length; i++) {
//     if (productsList[i].id === productIdToDelete){
//         productsList.splice([i],1);
//     }
//   }
// }

module.exports = {
  getAllProducts : _getAllProducts,
  getProductById : _getProductById,
  add: _add
  // deleteProduct : _deleteProduct
};