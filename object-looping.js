var shoppingCart ={
    books: 3,
    sunglass: 1,
    keyboard: 2,
    mouse: 5,
    pen: 20,
    shoes: 2
}
var propertise = Object.keys(shoppingCart);
console.log(propertise);
for(var i=0; i<propertise.length; i++){
    var propertyName = propertise[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

/* var propertyValue = Object.values(shoppingCart);
console.log(propertyValue);
var i=0;
while(i<propertyValue.length){
    var element2 = propertyValue[i];
    console.log(element2);
    i++;
} */

// * for...in loop
for(var propertyName in shoppingCart){
    var propertyValues = shoppingCart[propertyName];
    console.log(propertyName, propertyValues);
}