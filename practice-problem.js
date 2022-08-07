// * practice challenge 1
/* function multiTable(number){
    let multiply = 1;
    for(let i=1; i<=10; i++){
        multiply = number * i;
        console.log(multiply);
    }
    return multiply;
}
let table = multiTable(13);
console.log('13 ghorer namta:', table);
 */
// * practice challenge 2.1
/* function regularCaseToLowerCase(regular){
    return regular.toLowerCase();
}
let myGoal = 'I WANT TO BE A WEB DEVELOPER';
let translated = regularCaseToLowerCase(myGoal)
console.log(translated); */

// * practice challenge 2.2
/* function lowrecaseToUppercase(text){
    return text.toUpperCase();
}
let myGoal='i want to be an awesome web developer';
let translated = lowrecaseToUppercase(myGoal);
console.log(translated); */

// * practice challenge 3
/* function fullName(fname, lname){
    let fullName = fname + ' ' + lname;
    return fullName;
}
let fname='mohammed';
let lname='takbir';
let myFullName = fullName(fname, lname);
console.log(myFullName); */

// * practice challenge 4.1
/* function square(input){
    let output = Math.pow(input,3);
    return output;
}
let squareOutput = square(5);
console.log(squareOutput);
 */
// * practice challenge 4.2
/* function square2(input){
    let output = input ** 2;
    return output;
}
let squareOutput2 = square2(5);
console.log(squareOutput2); */




// * practice challenge 5
/* const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],
   
    crust: 'deep dish',
   
    serves: 2
   
   }

   console.log(pizza.toppings[2]); */

// ? problem 1






// ? problem 2
/* function make_avg(num1, num2, num3){
    let total = num1 + num2 + num3;
    let average = total / make_avg.length;
    return average;
}
let num1=10;
let num2=20;
let num3=30;
let averageNumber = make_avg(num1, num2, num3);
console.log(averageNumber); */

// ? problem 3
/* let averageArray=[20, 10, 45, 67, 19];

function makeArrayAvarege(arrayElement){
    let sum=0;
    for(let i=0; i<arrayElement.length; i++){
        sum = sum + arrayElement[i];
    }
    console.log(sum)
    let average = sum / arrayElement.length;
    return average;
}
let totalAverageOfArray = makeArrayAvarege(averageArray);
console.log(totalAverageOfArray);
*/

// ? problem 4.1
/* function odd_even(number){
    if(number % 2 === 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
let findOddEven = odd_even(12990);
console.log(findOddEven); */

// ? problem 4.2
/* function odd_even(number){
    if(number % 2 !== 0){
        return 'Odd'
    }
    else{
        return 'Even'
    }
}
let findOddEven = odd_even(14);
console.log(findOddEven); */

// ? problem 4.3
/* function odd_even(number){
    if(number % 2 !== 0){
        console.log('print Odd number')
    }
    else{
        console.log('print Even number');
    }
}
odd_even(15);
 */

// ? problem 5
function trafficSignal(signal){
    if(signal === 'red'){
        return 'you may in danger';
    }
    else if(signal === 'yellow'){
        return 'you should stop';
    }
    else{
        return 'you can go';
    }
}
let signal1 = 'red';
let signal2 = 'yellow';
let signal3 = 'green';
let signals = trafficSignal(signal3);
console.log(signals);







