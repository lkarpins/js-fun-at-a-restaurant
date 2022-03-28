
function createRestaurant(restName) {
  var restObject = {
    name:restName,
    menus:{
      breakfast:[],
      lunch: [],
      dinner: []
    }
  }
  return restObject
};

function addMenuItem(restObject, menuItem) {
  if (restObject.menus[menuItem.type].includes(menuItem)){
    return restObject.menus[menuItem.type]
  } else {
    restObject.menus[menuItem.type].push(menuItem)
  }
};

function removeMenuItem(restObject, menuItem, type) {

};



















module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
