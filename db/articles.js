//jshint esversion:6

let articlesList = [];

function getAllArticles() {
  return articlesList;
}

/*
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
        productsList.splice([i],1);
    }
  }
}
*/

module.exports = {
  getAllArticles : getAllArticles,
  //add : add,
  //getProductById : getProductById,
  //deleteProduct : deleteProduct
};
