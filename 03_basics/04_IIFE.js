// Immediately Invoked Function Expressions (IIFE)

// 1. used to save the function from the pollution of the global scope variable
// 2. used to execute the function immediately

//syntax basic function  (this is "named IIFE" as we have given name to the function)
(function greet() {
    console.log("Good Morning");
})();

//syntax arrow function (this is unnamed IIFE as theres no name given to the function)
( () => {
    console.log("Database Connected Successfully");
})();

//syntax passing arguement
( (name) => {
    console.log(`${name} Database Connected Successfully`);
})("Django");

