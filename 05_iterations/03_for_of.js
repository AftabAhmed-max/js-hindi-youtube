// For of Loops 

// For of loop on array
// let arr = [1,2,3,4,5];
// for (const item of arr) {
//     console.log(item);
// }

//for of loop on string
// let string = "Aftab Ahmed"
// for (const item of string) {
//     console.log(item);
// }

// Maps ((it is key:value pair inside string , separated by ,) and it takes unique data i.e you cant enter 2 same keys of same name)

//declaring a map and setting values in map 
let name = new Map();
name.set("IN", "India");
name.set("CAN", "Canada");
name.set("RUS", "Russia");
name.set("IND", "India");
// console.log(name);

//setting for of loop on map 
// for (const key of name) {
//     console.log(key);
// } // this will give all the values in individual arrays

for (const [key,value] of name) {
    console.log(key,value);
} // this will give all the values without any array

//IMPORATNT (we cannot apply for of loop on objects it can be applied on Object it will give error that #object is not iterable) 
 
