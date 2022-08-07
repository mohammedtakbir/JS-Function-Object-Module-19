// ? declare the function
/* function mileToKilometer(mile){
    let kiloMeter = mile * 1.6043;
    return kiloMeter;
}
let kilo = 20;
 */
// ? Call the Function
/* let kiloMeter = mileToKilometer(kilo);
console.log(kiloMeter); */

// ? use multiple perameter
/* function sum(a, b, c, d, e){
    let totalSum = a+b+c+d+e;
    return totalSum;
}
let totalSum = sum(10, 20, 30, 40, 50);
console.log(totalSum); */

// ? return average number 
/* function getAverage(assignment1, assignment2, assignment3){
    let totalAssigmnetsMarks = assignment1 + assignment2 + assignment3;
    let average = totalAssigmnetsMarks / getAverage.length;
    return average;
}
let assignment1Mark = 60;
let assignment2Mark = 57;
let assignment3Mark = 60;
let averageAssignmentMarks = getAverage(assignment1Mark, assignment2Mark, assignment3Mark);
console.log(averageAssignmentMarks); */

// * object
/* let mobile ={
    brand: 'Samsung',
    model: 'J5 2015',
    color: 'white',
    storage: '8GB',
    camera: '13MP'
}
console.log(mobile); */
// * 3 ways to get value from an object
/* console.log(mobile.brand);
console.log(mobile['camera']);
let propertyName = 'storage';
console.log(mobile[propertyName]); */

// * 3 ways to set value from an object
/* mobile.brand = 'Apple';
console.log(mobile);
mobile['camera'] = '48MP';
console.log(mobile);
let propertyName = 'color';
mobile[propertyName] = 'Black';
console.log(mobile); */

// * how to get all properties/keys from an object

/* let mobile ={
    brand: 'Samsung',
    model: 'J5 2015',
    color: 'white',
    storage: '8GB',
    camera: '13MP'
}
let mobileKeysArray = Object.keys(mobile);
console.log(mobileKeysArray); */

// * how to get all values from an object
/* let mobile ={
    brand: 'Samsung',
    model: 'J5 2015',
    color: 'white',
    storage: '8GB',
    camera: '13MP'
}
let mobileValuesArray = Object.values(mobile);
console.log(mobileValuesArray); */


let mobile ={
    brand: 'Samsung',
    model: 'J5 2015',
    color: 'white',
    storage: '8GB',
    camera: '13MP'
}
let propertyName = Object.keys(mobile);
console.log(propertyName);

// * [ 'brand', 'model', 'color', 'storage', 'camera' ]
for(let i=0; i<propertyName.length; i++){
    let element = propertyName[i];
    let propertyValue = mobile[element];
    console.log(element, propertyValue);
}