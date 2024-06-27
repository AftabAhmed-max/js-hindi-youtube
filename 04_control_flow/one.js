// comparison operators 
// < , > , <= , >= , == (checks only value) , === (checks both value and type) , != (value) , !== (value and type)


// If Else statements

// let temperature = 45;
// if(temperature < 40) {
//     console.log("temp is less than 40");
// } else {
//     console.log("temp is more than 40");
// }

// scope inside IF ELse statements

// let score = 50;
// if( score > 20) {
//     let var1 = "hello world";
//     console.log(var1);
// }
// console.log(var1) // this will give an error saying var1 is not defined as we have defined var inside the scopr of if statement

// implicit scope 
// let balance = 1000 ;
// if (balance < 10000) console.log("Balanced");

//Nested If Else 
// let balance = 1000 ;
// if (balance < 500) {
//     console.log("balance is less than 500");
// } else if (balance < 700) {
//     console.log("balance is less than 700");
// } else if (balance < 900) {
//     console.log("balance is less than 900");
// } else {
//     console.log("balance is less than 1200");
// }

// LOgical Operators && and || operators

let loggedIn = false;
let debitcard = true;
let COD = false;

if (loggedIn && debitcard || COD) {
    console.log("Dedo course");
} else {
    console.log("bahar nikal");
}

