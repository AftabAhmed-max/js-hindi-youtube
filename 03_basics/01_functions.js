// function name() {
//     console.log("A");
//     console.log("F");
//     console.log("T");
//     console.log("A");
//     console.log("B");
// }
// name();

// function number(number1,number2) {
//     console.log(number1 + number2);
// }
// number(3,4);

// function number(num1,num2) { 
//     return num1 + num2;
// }
// let fr = number(5,6);
// console.log(fr);

// function login(username) {
//     if(username === null || username === undefined) {
//         return "please enter a correct Name";
//     }
//     return `${username} just logged in `
// }
// console.log(login());


// using rest operator when you dont know the number of arguements you are going to pass it is same as spread operator
// function calculate(...num1) {
//     return num1;
// }
// console.log(calculate(200,300,400));


// taking an object inside a function 

// let user = {
//     name : "Aftab",
//     price : 199,
// }

// function obj1(anyobj) {
//     console.log(`name is ${anyobj.name} and price is ${anyobj.price}`);
// }

// obj1(user) // here if we change the value of any key of the object user the output will be undefined

// taking an array inside a function 

let myArray = [100,300,500,700,900];

function returnArray(newArray) {
    return newArray[1];    
}

console.log(returnArray(myArray));





