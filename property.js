
var shoppingCart ={
    books: 3,
    sunglass: 1,
    keyboard: 2,
    mouse: 5,
    pen: 20
}
// * when you know the specific property name, use dot notation to get property value
// console.log(shoppingCart.books);
// console.log(shoppingCart['keyboard']);

// ? to set a new value in properties
// console.log(shoppingCart.pen = 100);
// console.log(shoppingCart);

// * how to get keys/proprties from an object
/* var properties = Object.keys(shoppingCart);
console.log(properties); */

// ? how to get values from an object
/* var propertiesValues = Object.values(shoppingCart);
console.log(propertiesValues); */


// console.log(shoppingCart.mouse);
// console.log(shoppingCart['pen']);

// ! property name jodi kono variable er moddhe thake
/* var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyValue); */

// * there are 3 ways to get value from an object
/* var propertyName2 = 'books';

console.log(shoppingCart.books);
console.log(shoppingCart['books']);
console.log(shoppingCart[propertyName2]); */

// * there are 3 ways to set value from an object
/* var propertyName3 = 'books';
console.log(shoppingCart);
shoppingCart.books = 10;
console.log(shoppingCart);
shoppingCart['books'] = 20;
console.log(shoppingCart);
shoppingCart[propertyName3] = 30;
console.log(shoppingCart); */


var nums = [4, 5, 7, 6, 8, 2, 4, 1, 15];
console.log(nums[6]);