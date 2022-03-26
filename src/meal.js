function nameMenuItem(food) {
  return `Delicious ${food}`
};

function createMenuItem(name, price, type) {
   var menuItem = {
     name: name,
     price: price,
     type: type,
   }
    return menuItem;
};


function addIngredients(newIngredient, ingredients) {
  if (ingredients.includes(newIngredient)) {
    return ingredients
  } else {
    return ingredients.push(newIngredient)
  }
};

function formatPrice(initialPrice) {
  return `$${initialPrice}`

};

function decreasePrice(initialPrice) {
  var product = (initialPrice * .9)
  return product;
};

function createRecipe(title, ingredients, menuItemType){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
return recipe
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
