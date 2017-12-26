/*
*		(c) codeacademy.com
*   Carlos Abraham  www.19cah.com
*		@19cah
*/

var count;
var orderCount = 0;

function takeOrder(topping, crustType){
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);

  orderCount = orderCount + 1;
}

function getSubTotal(itemCount){
  return itemCount * 7.5;
}

function getTax(){
  return getSubTotal(orderCount) * 0.06;
}

function getTotal(){
   return getSubTotal(orderCount) + getTax();
  }

takeOrder('bacon','thin crust');
takeOrder('pineapple','cheese crust');
takeOrder('ham','bold crust');
takeOrder('bacon','thin crust');
takeOrder('pineapple','cheese crust');
takeOrder('ham','bold crust');


console.log('Sub Total: $' + getSubTotal(orderCount));

console.log('Total: $' +  getTotal());


/* Output
Order: thin crust pizza topped with bacon
Order: cheese crust pizza topped with pineapple
Order: bold crust pizza topped with ham
Order: thin crust pizza topped with bacon
Order: cheese crust pizza topped with pineapple
Order: bold crust pizza topped with ham
Sub Total: $45
Total: $47.7
*/
