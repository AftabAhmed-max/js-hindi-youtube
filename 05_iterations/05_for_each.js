// for Each loop

// basic syntax forEach Loop
// let coding = ["js","java","python","html","css"];
// coding.forEach( function (item) {
//     console.log(item);
// }); 

// arrow function in forEach Loop
// let coding = ["js","java","python","html","css"];
// coding.forEach( (item) => {
//     console.log(item);
// });

// direct printing a function in forEach Loop
// let coding = ["js","java","python","html","css"];
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

//forEach Loop have access of 3 things inside an array single item, index and the whole array
// syntax for the same

// let coding = ["js","java","python","html","css"];
// coding.forEach( (item,index,array) => {
//     console.log(item,index,array);
// })

// this is an ideal situation in real time projects as from database this is the proper way of getting an object inside an array and to work on that we use forEach Loop
let coding = [
    {
        name : "JavaScript",
        abbr : "JS",
    },
    {
        name : "Python",
        abbr : "PY",
    },
    {
        name : "Hypertext Markup Language",
        abbr : "HTML",
    },
    {
        name : "Cascading Style Sheet",
        abbr : "CSS",
    },
];

coding.forEach( (item) => {
    console.log(coding.name);
})





