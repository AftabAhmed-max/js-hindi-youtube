// let user1 = new Object() --- definig object using constructor (which makes it a singleton object)

// let user1 = {};

// user1.name = "Aftab";
// user1.email = "aftabahmed@gmail.com";
// user1.age = 16;

// console.log(user1);

// let user2 = {
//     email : "aftabahmed@gmail.com",
//     name : {
//         username : {
//             firstName : "Aftab",
//             lastName : "Ahmed",
//         }
//     }
// }

// console.log(user2.name.username.firstName);


// ADDING 2 OR MORE OBJECTS USING ASSIGN 

// let obj1 = {
//     1 : "A",
//     2 : "B",
// };

// let obj2 = {
//     3 : "C",
//     4 : "D",
// };

// let obj3 = {
//     5 : "E",
//     6 : "F",
// };

// // let obj4 = Object.assign({},obj1,obj2,obj3); // using assign
// let obj5 = {...obj1, ...obj2, ...obj3}; //using spread operator
// console.log(obj5);

// many objects inside array how to access it using indexing
// let user = [
//     {
//         name : "Aftab",
//         age : 11,
//     },
//     {
//         name : "Ahmed",
//         age : 12,
//     },
//     {
//         name : "Ali",
//         age : 13,
//     },
//     {
//         name : "Jauhar",
//         age : 14,
//     },
// ]

// console.log(user[0].name);


// ACCESSING THE KEYS AND VALUES DIFFERENTLY 
let user1 = {
    name : "Aftab",
    age : 18 ,
    email : "AftabAhmed@gmail.com",
}

// here the interesting thing is that the output is given out in an array
// console.log(Object.keys(user1)); // for keys 
// console.log(Object.values(user1)); // for values

// here the output will be array and key:value pair will be inside individual array
// console.log(Object.entries(user1));

// to check if the key is availble in the object 
console.log(user1.hasOwnProperty('names'));



