
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order)
  }
};

function refundOrder(orderNum, deliveryOrders)  {
for (var i = 0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].orderNumber === orderNum){
    deliveryOrders.splice(i, 1);
  }
}
};

function listItems (deliveryOrders) {
  var meals = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    meals.push(deliveryOrders[i].item);
    }
  return meals.join(", ");
};

function searchOrder(deliveryOrders, item) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
      return true
    }
  }
      return false
};






module.exports = {
   takeOrder,
   refundOrder,
   listItems,
   searchOrder
}
