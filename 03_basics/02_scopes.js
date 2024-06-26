let a = 10 ; // this is global scope and it will be available everywhere

function example() {
    let b = 20 ; // this is block scope and it will be available on inside this function
    // console.log(a); // this will give the result 10 
}

//console.log(b); this will give an error saying b is undefined



// how does scope work for function inside a function 


// function one() {
//     let name = "Aftab"; //here this variable is accessible by the child function
//     function two() {
//         let surname =  "Ahmed" // however this function is not accessible by the parent function
//         console.log(name);
//     }
//     // console.log(surname); this will give an error saying surname undefined
//     two() // this will print the value of variable name 
// }
// one()

// scope in if else 

// if (true) {
//     let name = "Aftab";
//     if (name === "Aftab") {
//         console.log(name);
//         let sname = "Ahmed"
//     }
//     // console.log(sname);
// }



aftab() // in this type of defining a function you can call a function before initializarting it
function aftab() {
    console.log("hello");
}


// defining a func like variable variable called expression


let exmp = function() {
    console.log("hello world");
}
exmp(); // here you cant call function before initializing it because it will give an error because there variable type included in this





