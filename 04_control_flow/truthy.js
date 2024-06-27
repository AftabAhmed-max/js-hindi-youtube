let userEmail = "aftab@gmail.com"

if (userEmail) { 
    console.log("got use remail");
} else {
    console.log("dont have user email");
}

// 1. Falsy Values 
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// 2. Truthy Values 
// "0" , 'false' , " " , [] , {} , function(){} 

// to check if an array is empty
let myArray = [];
if (myArray.length === 0) {
    console.log("Array is empty");
} 

// to check if an object is empty
let obj = {};
if (Object.keys(obj).length === 0) {
    console.log("object is Empty");
}