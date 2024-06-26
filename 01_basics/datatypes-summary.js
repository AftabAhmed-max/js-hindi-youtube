//JS is a dynamically type language that means you dont have to define the data type of the variable before using it

// the way data is stored in the memory and accessed on that basis it is divided into 2 types primitive and Non primitive or Reference type

// primitive Type (7 types) - call by value means whenevr it is copied the copy is given and not the reference

/* 1.String 2.Number 3.Boolean 4.Null 5.Undefined 6.Symbol(unique) 7.BigInt(big or sci val)*/

const name = "Aftab"; // string
const score = 100; // number
const scoreValue = 100.3; //number (float) 
const isLOggedIn = true; //boolean
const otsideTemp = null; // null
let userEmail; // undefined
//symbol
const id = Symbol('123'); 
const anotherId = Symbol('123'); //id and anotherId even if the value is same its comparison wont be same
//BigInt
const bigNumber = 78888484515484n

console.log(id);
console.log(anotherId);

// Non Primitive (Reference type) 

/* array , Objects and Functions */

const heros = ["man","women","both"];//Arrays

let myObj = {
    name : "Aftab",
    age : 24,
} //Object

const myfunc = function() {
    console.log('Hello World')
}

/*********************************** Memory ************************************/

// 2 types of memory Stack and Heap

// 1. in primitive datatype STACK memory is used ()
// here whatever we copy that is the copy and changes with not effect the original value


// 2. in Non primitive Data Type HEAP memory is used
//here whatever we copy or anything it gives the reference of the original value so whatever values we will change will reflect in the original value too

//STACK memory (here as name2 has the copy of name1 , name 1 value is not changing on making chanegs in name2)

// let name1 = "aftabahmed";
// console.log(name1);

// let name2 = name1;
// name2 = "ahmedjauhar";
// console.log(name2);

//HEAP memory (here as product2 has the reference of product1 , therefore any changes in product2 will reflect directly in product1)

// let product1 = {
//     name : "Aftab",
//     age : 23,
// }
// console.log(product1);

// let product2 = product1;
// product2.name = "AHMEDALI";
// console.log(product2);

