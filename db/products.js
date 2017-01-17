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

function deleteProduct(productIdToDelete) {
  for(var i = 0; i < productsList.length; i++) {
    if (productsList[i].id === productIdToDelete){
    productsList.splice(productsList.indexOf(
      productsList[i]),1);
    }
  }
}

module.exports = {
  getAllProducts: getAllProducts,
  add : add,
  getProductById : getProductById,
  deleteProduct : deleteProduct
};
