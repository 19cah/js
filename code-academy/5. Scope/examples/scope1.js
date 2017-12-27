var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';

function myApartment(){
  var mailBoxNumber = 'Box 3';
	var  laundryRoom = 'In-unit';
  
  console.log('Mail box: ' + mailBoxNumber + ', Laundry:' + laundryRoom);
}
console.log('Laundry ' + laundryRoom + ', Mail: ' + mailRoom);

console.log(myApartment());

/* Output
Laundry Basement, Mail: Room 1A
Mail box: Box 3, Laundry:In-unit
*/
