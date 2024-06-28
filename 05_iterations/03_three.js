// For of Loops 
// let arr = [1,2,3,4,5,6];
// let arr2 = "Hello , Good Morning ,Level Sabhke niklenge";
// for (const num of arr2) {
//     console.log(num);
// }

// Maps (yeh unique values leta hai yahan 2 same values ek baar enter nahi kar sakte) 

let map = new Map()
map.set("IN", "India")
map.set("US", "United States Of America")
map.set("UK", "United Kingdom")

for (const [key,value] of map) {
    console.log(key,value);
}
// here it will print whole content of map together and if you dont want that then  inside the For of loop while declaring const put the name after const in [] and also give a const for value with anyname eg:- normal (const key of map) edited :- (const [key,value] of map)  

// For of loop on Object

let myObj = {
    name : "Aftab",
    age : 23,
}

for (const [key,value] of myObj) {
    console.log(key,value);
} // this will give an error saying myObj is not Iterable