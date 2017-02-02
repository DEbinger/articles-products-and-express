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

function _add(reqBody) {
  return db.none(`INSERT INTO products (name, price, inventory) VALUES ('${reqBody.name}', ${reqBody.price}, ${reqBody.inventory})`);
}

function _getProductById(products) {
  return db.one(`SELECT * FROM products WHERE id = ${products}`);
}

function _deleteProduct(productsId) {
  return db.none(`DELETE FROM "products" WHERE id =  ${productsId}`);
}

module.exports = {
  getAllProducts : _getAllProducts,
  add: _add,
  getProductById : _getProductById,
  deleteProduct : _deleteProduct
};