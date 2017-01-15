/*jshint esversion:6*/

let productsList = [];

function getAllProducts () {
  return productsList;
}

function add(obj) {
  productsList.push(obj);
}


module.exports = {
  getAllProducts: getAllProducts,
  add : add
};
