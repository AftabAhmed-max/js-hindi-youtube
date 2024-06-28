// Map Operation
let myNum = [1,2,3,4,5,6,7,8,9,10];
// let newNum = myNum.map( (num) => {
//     return num + 10
// })
// console.log(newNum);

// Chaining : we can apply 2 maps togther we can also apply filter after map and like that other functions also we can apply
let newNum = myNum
    .map( (num) => num * 10)
    .map( (num) => num + 1)
    .filter( (num) => num > 40);
console.log(newNum);


