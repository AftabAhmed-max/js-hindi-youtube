// let name = ["Aftab","Ahmed","Gauhar"];

// let name2 = ["sanket","chirag","omkar"];

// // name.push(name2); // this will take name2 array as a single data and add to the name array but we can use concat instead fo this.
// // console.log(name);

// let name3 = name.concat(name2); //way to concatenate 2 arrays but always take in a different variable because concat function gives a third array
// console.log(name3);

// //theres is a nother way to do it using spread operator it does the same work as concatenate

// let name4 = [...name, ...name2];
// console.log(name4);


// let array1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// let array2 = array1.flat(Infinity); //agar koi aisi situation ho jahan array ke andar array and uske andar bhi ek array hai to saare arrays ko ek array mei output dikhane ke liye flat use kar sakte and uske bracket mei dept bhi de sakte hai 1 2 ya 3 and agar saare hi arrays ko laana hai to infinity dedo
// console.log(array2);

// console.log(Array.isArray("AFTABAHMED")); // to check if its array or not 
// console.log(Array.from("AFTABAHMED")); // to convert anything into array 
// console.log(Array.from({name : "aftab"})); // object ko convert karte waqt specify karna hota hai ke keys ka array banana hai ya values ka agar specify nahi kiya toh emoty array de dega

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //yrh ek naya array return karta hai from set of elements cahahe 3 4 varaible ho ya array ho anything

