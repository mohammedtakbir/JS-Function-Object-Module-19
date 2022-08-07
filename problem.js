// ? problem 1
/* function foo(){
    console.log('foo');
    function bar(){
        console.log('bar')
    }
    bar();
}
foo(); */
// foo()

/* function bar(){
    console.log('bar');
}   
foo(); */

// ? problem 2
/* function make_avg(num1, num2, num3){
    var sum = num1 + num2 + num3;
    var average = sum / 3;
    return average;
}
var integerOne = 10;
var integerTwo = 20;
var integerThree = 30;
var averageValue = make_avg(integerOne, integerTwo, integerThree);
console.log(averageValue); */

// ? problem 3
/* var marks = [25, 10, 30, 40, 60];
var sum = 0;
function makeArray_avg(arrayElement) {
    for (var i = 0; i < arrayElement.length; i++) {
        sum += arrayElement[i];
    }
    var average = sum / arrayElement.length;
    return average;
}
var arryAverage = makeArray_avg(marks);
console.log(arryAverage); */















/* const array = [1, 2, 3, 4];
var sum = 0;
for (let i = 0; i < array.length; i++) {
    // sum += array[i];
    sum = sum + array[i]
}
console.log(sum); */


// ? problem 4
function odd_even(number){
    if(number % 2 === 0){
        return true;
    }
    else if(number % 2 > 0){
        return false;
    }
}
var process = odd_even(1399);
console.log(process);



//  ? problem 5

/* var signal = 'green';
if(signal === 'red'){
    console.log("don't cross the road");
}
else if(signal === 'yellow'){
    console.log("you should stop");
}
else if(signal == 'green'){
    console.log("you can cross the road");
}
 */
// ? problem 5 with switch case
/* var signal = 'yellow';
switch(signal){
    case 'red':
        console.log("don't cross the road");
        break;
    case 'yellow':
        console.log("you should stop");
        break;
    case 'green':
        console.log("you can cross the road");
        break;
} */