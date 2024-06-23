let score = "33abc";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber); 
console.log(valueInNumber);

//for playing number js will give datatype as number only but if you include some alphabets with number it ma sometime still give the datatype as number only where the value of the variable can be NaN

// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

let isLoggedIn = 1;
console.log(isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// "" => false;
// "aftab" => true;

