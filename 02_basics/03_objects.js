// Object.create => this is called constructor method and singleton is made in this

// object literals

// let user = {
//     name : "Aftab",
//     "full names" : "Aftab Ahmed",
//     age : 22,
//     location : "Mumbai",
//     email : "aftabahmed@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday","Wednesday"],
// }

// console.log(user.email); // this is accesing the objects value using the dot notation
// console.log(user["email"]); // this is accesing the objects value using the square notation
// console.log(user["full names"]); // this is the main difference between using dot and sqaure notation eg:- if inside an object theres a key value pair which contains hyphen or space then it cannot be accessed using dot notation you have to compulsarily use square notation to access them and also both of the should be saved as a string inside the object too

// how to define a symbol and include in the object and print its value in right syntax
let sym = Symbol("Ali");
let user2 = {
    names : "Aftab",
    [sym] : "AliAhmed",
    age : 22,
    location : "Mumbai",
    email : "aftabahmed@gmail.com",
    isLoggedIn : false,
    greetings : function() {
        console.log("Hello i am learning JS");
    }    
}
// console.log(user2[sym]);

// user2.email = "aftabahmed@hotmail.com" // changing values of akey in object
// Object.freeze(user2); // freezing an object so that its original value cant be changed
// user2.email = "chala ja";
// console.log(user2);

// TAKING A FUNCTION INSIDE OBJECTS.
// user2.greetings = function() {
//     console.log("Hello i am learning JS");
// }

console.log(user2.greetings());










