/*jshint esversion:6*/

let productsList = [];

function getAllProducts () {
  return productsList;
}

function add(obj) {
  productsList.push(obj);
}

function getProductById(id) {
  for (var i = 0; i < productsList.length; i++) {
    if(productsList[i].id === id) {
      return productsList[i];
    }
  }
  return null;
}

module.exports = {
  getAllProducts: getAllProducts,
  add : add,
  getProductById : getProductById
};
