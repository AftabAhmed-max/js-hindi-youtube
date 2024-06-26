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
function calculate(...num1) {
    return num1;
}
console.log(calculate(200,300,400));


